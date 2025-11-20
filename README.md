ESP32 Config UI

Small React + Vite TypeScript app to provision and manage ESP32 devices.

Quick start

1. Install dependencies
   - Open a terminal in `ESP32_Config_UI` and run:
     npm install

2. Create .env from the example
    - Copy `.env.example` to `.env` and fill in your Supabase values
       - On Windows (PowerShell):
          Copy-Item .env.example .env
       - On macOS / Linux:
          cp .env.example .env

3. Run dev server
   - npm run dev

Notes

- This project uses Vite + React + Supabase for auth. It is a scaffold with the following pages:
  - / (Login)
  - /wifi (WiFi setup)
  - /dashboard (Device dashboard)

- The UI currently stores device WiFi entries in a `devices` table in Supabase (demo-only). You should replace this with a secure provisioning flow before production (e.g., device-to-cloud pairing, ephemeral keys, or captive portal).

Applying the database schema

This repository includes `sql/create_devices_table.sql` which creates a `devices` table and recommended Row Level Security (RLS) policies. Run that SQL in the Supabase SQL editor to create the table.

Security notes (IMPORTANT)

- Do NOT store Wi-Fi passwords in plaintext in production. Use an Edge Function or server-side process to accept credentials, encrypt them, or provide a short-lived provisioning token that the device uses. The demo `WifiSetup` page stores only a password hint and a `pending` status; implement a secure provisioning flow before production.
- Keep `.env` out of git and rotate any keys that were previously committed.

- Do not commit real credentials. Use the `.env.example` as a template.
