-- Таблица прогресса для «Хроник Галактики». Выполнить один раз в Supabase: SQL Editor → New query → Run.
create table if not exists public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  w          jsonb not null default '[]'::jsonb,   -- отмеченные серии, фильмы, книги
  theme      text,                                 -- выбранная планета
  updated_at timestamptz not null default now()
);

-- Каждый пользователь видит и меняет только свою строку.
alter table public.progress enable row level security;

drop policy if exists "own progress: read"   on public.progress;
drop policy if exists "own progress: insert" on public.progress;
drop policy if exists "own progress: update" on public.progress;

create policy "own progress: read"   on public.progress for select using (auth.uid() = user_id);
create policy "own progress: insert" on public.progress for insert with check (auth.uid() = user_id);
create policy "own progress: update" on public.progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Живое обновление между устройствами.
alter publication supabase_realtime add table public.progress;
