/**
 * Scoreboard — shared online leaderboard backed by Supabase.
 *
 * Setup (one-time):
 *   1. Create a free Supabase project at https://supabase.com
 *   2. Run the SQL in scripts/supabase-setup.sql in the Supabase SQL editor
 *   3. Copy your project URL and anon key into .env.local:
 *        VITE_SUPABASE_URL=https://xxxx.supabase.co
 *        VITE_SUPABASE_ANON_KEY=eyJ...
 *   4. For the deployed build set the same variables in your hosting
 *      environment (GitHub Actions secrets → Vite env → bundled at build time)
 *
 * Dev fallback:
 *   If the env vars are absent the module falls back to localStorage so
 *   development works without a Supabase project.
 *
 * ScoreEntry shape (matches the `scores` table):
 *   {
 *     id:         string   — run id (client-generated)
 *     name:       string   — player nickname (max 16 chars)
 *     score:      number
 *     height_m:   number   — peak altitude in metres
 *     distance_m: number   — horizontal distance in metres
 *     moon_clear: boolean  — true if run reached the moon
 *     created_at: string   — ISO timestamp (set by Supabase)
 *   }
 */

import { createClient } from '@supabase/supabase-js'

// ── Supabase client (null when env vars are not set) ─────────────────────────

const SUPABASE_URL  = import.meta.env.VITE_SUPABASE_URL  ?? ''
const SUPABASE_KEY  = import.meta.env.VITE_SUPABASE_ANON_KEY ?? ''
const supabase = SUPABASE_URL && SUPABASE_KEY
  ? createClient(SUPABASE_URL, SUPABASE_KEY)
  : null

// ── Local storage fallback ────────────────────────────────────────────────────

const STORAGE_KEY       = 'armadillo-rush-scores'
const MAX_LOCAL_ENTRIES = 100
const MAX_NAME_LEN      = 16

function clampName(name) {
  return String(name ?? 'Anonymous').trim().slice(0, MAX_NAME_LEN) || 'Anonymous'
}

function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

function loadLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveLocal(entries) {
  try {
    const trimmed = [...entries]
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_LOCAL_ENTRIES)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed))
    return trimmed
  } catch {
    return entries
  }
}

// Convert a Supabase row to the internal ScoreEntry shape used by the UI.
function rowToEntry(row) {
  return {
    id:        row.id,
    name:      row.name,
    score:     row.score,
    heightM:   row.height_m,
    distanceM: row.distance_m,
    moonClear: row.moon_clear,
    date:      row.created_at,
  }
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Submit a completed run score.
 *
 * Online:  inserts into Supabase `scores` table.
 * Offline: saves to localStorage only.
 *
 * Always saves locally as a backup regardless of online status.
 *
 * @returns {ScoreEntry & { rank: number }}
 */
export async function submitScore(name, score, heightM, distanceM, moonClear = false) {
  const id    = makeId()
  const cname = clampName(name)

  // Always persist locally first — gameplay must continue even if network fails
  const localEntry = {
    id, name: cname, score, heightM, distanceM, moonClear,
    date: new Date().toISOString(),
  }
  const updated = saveLocal([...loadLocal(), localEntry])
  const localRank = updated.findIndex(e => e.id === id) + 1

  if (supabase) {
    try {
      const { error } = await supabase.from('scores').insert({
        id,
        name:       cname,
        score,
        height_m:   heightM,
        distance_m: distanceM,
        moon_clear: moonClear,
      })
      if (error) console.warn('[scoreboard] Supabase insert error:', error.message)
    } catch (err) {
      console.warn('[scoreboard] Supabase unreachable:', err.message)
    }
  }

  return { ...localEntry, rank: localRank }
}

/**
 * Fetch the leaderboard.
 *
 * Online:  reads top entries from Supabase, ordered by score descending.
 * Offline: returns local entries.
 *
 * @param {number} limit — max entries to return (default 15)
 * @returns {Array<ScoreEntry & { rank: number }>}
 */
export async function fetchLeaderboard(limit = 15) {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('scores')
        .select('id, name, score, height_m, distance_m, moon_clear, created_at')
        .order('score', { ascending: false })
        .limit(limit)

      if (error) {
        console.warn('[scoreboard] Supabase fetch error:', error.message)
      } else if (data) {
        return data.map((row, i) => ({ ...rowToEntry(row), rank: i + 1 }))
      }
    } catch (err) {
      console.warn('[scoreboard] Supabase unreachable:', err.message)
    }
  }

  // Fallback: local scores
  return loadLocal()
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((e, i) => ({ ...e, rank: i + 1 }))
}

// ── Player name persistence ───────────────────────────────────────────────────

export function getSavedPlayerName() {
  try {
    return localStorage.getItem('armadillo-rush-player-name') ?? ''
  } catch {
    return ''
  }
}

export function savePlayerName(name) {
  try {
    localStorage.setItem('armadillo-rush-player-name', clampName(name))
  } catch {}
}

export function getPersonalBest(name) {
  const clamped = clampName(name)
  const entries = loadLocal().filter(e => e.name === clamped)
  if (entries.length === 0) return null
  return entries.sort((a, b) => b.score - a.score)[0]
}
