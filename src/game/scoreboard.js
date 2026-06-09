/**
 * Scoreboard — local-first leaderboard with a backend-ready interface.
 *
 * Storage:
 *   All scores are saved to localStorage under the key 'armadillo-rush-scores'.
 *   The shape is an array of ScoreEntry objects sorted descending by score.
 *
 * Backend extension point:
 *   Replace or augment the _syncRemote() stub with a real fetch() call.
 *   The public API (submitScore / fetchLeaderboard) is already async so callers
 *   need no changes when a backend is added.
 *
 * ScoreEntry shape:
 *   {
 *     id:         string   — nanoid-style unique run id
 *     name:       string   — player-chosen nickname (max 16 chars)
 *     score:      number
 *     heightM:    number   — peak altitude in metres
 *     distanceM:  number   — horizontal distance in metres
 *     moonClear:  boolean  — true if the run reached the moon
 *     date:       string   — ISO date string
 *   }
 */

const STORAGE_KEY = 'armadillo-rush-scores'
const MAX_LOCAL_ENTRIES = 100
const MAX_NAME_LEN = 16

// ── Helpers ──────────────────────────────────────────────────────────────────

function makeId() {
  // Simple collision-resistant id without a dependency
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

function clampName(name) {
  return String(name ?? 'Anonymous').trim().slice(0, MAX_NAME_LEN) || 'Anonymous'
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
    // keep only the top MAX_LOCAL_ENTRIES by score
    const trimmed = [...entries]
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_LOCAL_ENTRIES)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed))
    return trimmed
  } catch {
    return entries
  }
}

// ── Backend stub ─────────────────────────────────────────────────────────────
// Replace this with a real API call when a backend exists.
// It receives the new ScoreEntry and should return the server-side leaderboard
// (array of ScoreEntry) or null on failure.

async function _syncRemote(_entry) {
  // TODO: replace with fetch('/api/scores', { method: 'POST', body: JSON.stringify(_entry) })
  return null
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Submit a completed run score.
 * Saves locally immediately; also attempts remote sync (fire-and-forget).
 *
 * @param {string} name       — player nickname
 * @param {number} score
 * @param {number} heightM    — peak altitude metres
 * @param {number} distanceM  — horizontal distance metres
 * @param {boolean} moonClear — true if moon was reached
 * @returns {ScoreEntry}      — the saved entry (with rank populated)
 */
export async function submitScore(name, score, heightM, distanceM, moonClear = false) {
  const entry = {
    id:        makeId(),
    name:      clampName(name),
    score,
    heightM,
    distanceM,
    moonClear,
    date:      new Date().toISOString(),
  }

  const existing = loadLocal()
  const updated  = saveLocal([...existing, entry])

  // Attempt remote sync — ignore failure, game must always continue
  _syncRemote(entry).catch(() => {})

  // Attach rank to the returned entry
  const rank = updated.findIndex(e => e.id === entry.id) + 1
  return { ...entry, rank }
}

/**
 * Fetch the leaderboard.
 * Returns local data immediately; in a real implementation this would first
 * try the remote API and fall back to local.
 *
 * @param {number} limit — max entries to return (default 10)
 * @returns {Array<ScoreEntry & { rank: number }>}
 */
export async function fetchLeaderboard(limit = 10) {
  // TODO: try remote first, fall back to local
  // const remote = await fetch('/api/scores?limit=' + limit).then(r => r.json()).catch(() => null)
  // if (remote) return remote

  const entries = loadLocal()
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  return entries.map((e, i) => ({ ...e, rank: i + 1 }))
}

/**
 * Get the stored player name from the last session (if any).
 */
export function getSavedPlayerName() {
  try {
    return localStorage.getItem('armadillo-rush-player-name') ?? ''
  } catch {
    return ''
  }
}

/**
 * Persist the player name so it pre-fills on the next session.
 */
export function savePlayerName(name) {
  try {
    localStorage.setItem('armadillo-rush-player-name', clampName(name))
  } catch {}
}

/**
 * Return the player's personal best score entry (or null).
 */
export function getPersonalBest(name) {
  const clamped = clampName(name)
  const entries = loadLocal().filter(e => e.name === clamped)
  if (entries.length === 0) return null
  return entries.sort((a, b) => b.score - a.score)[0]
}
