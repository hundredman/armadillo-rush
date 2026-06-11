/**
 * Scoreboard — local leaderboard backed by localStorage.
 *
 * ScoreEntry shape:
 *   {
 *     id:         string   — run id (client-generated)
 *     name:       string   — player nickname (max 16 chars)
 *     score:      number
 *     heightM:    number   — peak altitude in metres
 *     distanceM:  number   — horizontal distance in metres
 *     moonClear:  boolean  — true if run reached the moon
 *     date:       string   — ISO timestamp
 *   }
 */

// ── Local storage ─────────────────────────────────────────────────────────────

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

// Higher score first; ties broken by earlier registration date so ranking is
// deterministic and stable regardless of array order.
function byRank(a, b) {
  return (b.score - a.score) || (new Date(a.date ?? 0) - new Date(b.date ?? 0))
}

function saveLocal(entries) {
  try {
    const trimmed = [...entries]
      .sort(byRank)
      .slice(0, MAX_LOCAL_ENTRIES)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed))
    return trimmed
  } catch {
    return entries
  }
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Submit a completed run score to localStorage.
 * @returns {ScoreEntry & { rank: number }}
 */
export async function submitScore(name, score, heightM, distanceM, moonClear = false) {
  const id    = makeId()
  const cname = clampName(name)

  const localEntry = {
    id, name: cname, score, heightM, distanceM, moonClear,
    date: new Date().toISOString(),
  }
  const updated = saveLocal([...loadLocal(), localEntry])
  const localRank = updated.findIndex(e => e.id === id) + 1

  return { ...localEntry, rank: localRank }
}

/**
 * Fetch the local leaderboard.
 * @param {number} limit — max entries to return (default 15)
 * @returns {Array<ScoreEntry & { rank: number }>}
 */
export async function fetchLeaderboard(limit = 15) {
  return loadLocal()
    .sort(byRank)
    .slice(0, limit)
    .map((e, i) => ({ ...e, rank: i + 1 }))
}

/**
 * Synchronous read of the #1 leaderboard entry (or null if empty).  Used by the
 * title-screen best-record badge so it shows EXACTLY the same name + score as the
 * leaderboard's top row — one data source, no mixing across runs.
 */
export function getTopEntry() {
  const all = loadLocal().sort(byRank)
  return all.length ? { ...all[0], rank: 1 } : null
}

/** Dev/test helper: wipe all stored leaderboard entries. */
export function clearLeaderboard() {
  try { localStorage.removeItem(STORAGE_KEY) } catch { /* ignore */ }
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
