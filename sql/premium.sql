-- Premium / subscriptions setup. Run in the Supabase SQL editor.
-- The subscriptions table is written ONLY by the Stripe webhook (service key);
-- clients can read their own row but never write it (so nobody can self-grant premium).

create table if not exists subscriptions (
  user_id                uuid primary key references auth.users(id) on delete cascade,
  stripe_customer_id     text,
  stripe_subscription_id text,                       -- null for lifetime (one-time) purchases
  tier                   text check (tier in ('monthly','yearly','lifetime')),
  status                 text,                        -- active | canceled | past_due | incomplete | ...
  current_period_end     timestamptz,                -- null for lifetime
  updated_at             timestamptz default now()
);

create index if not exists subscriptions_stripe_customer_idx on subscriptions (stripe_customer_id);

alter table subscriptions enable row level security;

-- Users may read their own subscription (to show status in /settings).
drop policy if exists "read own subscription" on subscriptions;
create policy "read own subscription" on subscriptions
  for select using (auth.uid() = user_id);

-- No insert/update/delete policies on purpose: only the service role (Stripe
-- webhook) writes this table, and the service role bypasses RLS.

-- Premium routine limit: premium users get multiple gameplan generates per day,
-- so the routine table needs a daily generate COUNT (it previously only stored a
-- date for the 1/day free cap). Written server-side by /api/generate-routine.
alter table routine add column if not exists daily_generate_count integer default 0;

-- VOD playlists (premium feature). items is an ordered array of
-- { video_id, title, player, map_id, agent_id } snapshots.
create table if not exists playlists (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  title      text default 'Untitled playlist',
  items      jsonb default '[]'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table playlists enable row level security;
drop policy if exists "own playlists" on playlists;
create policy "own playlists" on playlists for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Server-side hard cap on My VODs uploads for non-premium users (backstop for the
-- client-side check). Run this at GO-LIVE: once it exists it caps non-premium
-- users at 10 regardless of the PREMIUM_ENABLED app flag, so don't create it
-- during a PREMIUM_ENABLED=false staging window.
create or replace function enforce_user_vod_cap()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  vod_count integer;
  is_prem   boolean;
begin
  select exists (
    select 1 from subscriptions s
    where s.user_id = new.user_id
      and (s.tier = 'lifetime'
        or (s.tier in ('monthly','yearly') and s.status = 'active'
            and (s.current_period_end is null or s.current_period_end > now())))
  ) into is_prem;

  if is_prem then
    return new;
  end if;

  select count(*) into vod_count from user_vods where user_id = new.user_id;
  if vod_count >= 10 then
    raise exception 'VOD upload limit reached (10) for free accounts. Upgrade to Premium for unlimited uploads.';
  end if;

  return new;
end;
$$;

drop trigger if exists user_vods_cap on user_vods;
create trigger user_vods_cap before insert on user_vods
  for each row execute function enforce_user_vod_cap();
