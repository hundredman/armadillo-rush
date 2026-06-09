-- Armadillo Rush — Supabase leaderboard setup
-- Run this once in the Supabase SQL editor for your project.

-- 1. Scores table
create table if not exists public.scores (
  id          text        primary key,
  name        text        not null default 'Anonymous',
  score       integer     not null default 0,
  height_m    integer     not null default 0,
  distance_m  integer     not null default 0,
  moon_clear  boolean     not null default false,
  created_at  timestamptz not null default now()
);

-- 2. Index for fast leaderboard reads
create index if not exists scores_score_desc on public.scores (score desc);

-- 3. Row Level Security — enable it
alter table public.scores enable row level security;

-- 4. Policy: anyone can read (anon key is safe for SELECT)
create policy "public read"
  on public.scores
  for select
  to anon
  using (true);

-- 5. Policy: anyone can insert (anon key submits scores)
--    Score and name are clamped client-side; add server-side guards here if needed.
create policy "public insert"
  on public.scores
  for insert
  to anon
  with check (
    length(name) <= 16
    and score >= 0
    and score <= 10000000
  );

-- 6. Nobody can update or delete rows via the anon key
--    (omitting update/delete policies means those operations are denied)
