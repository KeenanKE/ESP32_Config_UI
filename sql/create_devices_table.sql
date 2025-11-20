-- SQL to create a `devices` table for provisioning demos and recommended RLS policies.
-- NOTE: This is intended for development/testing. Do NOT store Wi-Fi passwords in plaintext in production.

-- Enable pgcrypto for gen_random_uuid() and encryption helpers
create extension if not exists "pgcrypto";

-- Devices table
create table if not exists devices (
  id uuid primary key default gen_random_uuid(),
  owner uuid references auth.users(id), -- links to Supabase auth user id
  device_name text,
  ssid text,
  password_encrypted bytea,   -- encrypted password (recommended) - prefer not to store plaintext
  password_hint text,         -- optional hint (e.g. last 4 characters) for UX only
  status text default 'new',
  created_at timestamptz default now()
);

-- Example helper: insert an encrypted password server-side using service_role key or Edge Function
-- SELECT gen_random_uuid(); -- example
-- To encrypt: select pgp_sym_encrypt('plain-pass', 'your-passphrase');

-- Row Level Security
alter table devices enable row level security;

create policy "allow_select_own" on devices
  for select
  using (owner = auth.uid());

create policy "allow_insert_own" on devices
  for insert
  with check (owner = auth.uid());

create policy "allow_update_own" on devices
  for update
  using (owner = auth.uid())
  with check (owner = auth.uid());

create policy "allow_delete_own" on devices
  for delete
  using (owner = auth.uid());

-- Optional: prevent clients from inserting the password_encrypted directly by creating a trigger
-- that requires server-side insertion/encryption. For demo, RLS + using Edge Functions is recommended.

-- Index for performance
create index if not exists idx_devices_owner on devices(owner);
