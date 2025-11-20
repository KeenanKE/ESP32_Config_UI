ESP32 Config UI

Small React + Vite TypeScript app to provision and manage ESP32 devices.

Quick start

1. Install dependencies
   - Open a terminal in `ESP32_Config_UI` and run:
     npm install

2. Create .env from the example
   - cp .env.example .env (fill in your Supabase values)

3. Run dev server
   - npm run dev

Notes

- This project uses Vite + React + Supabase for auth. It is a scaffold with the following pages:
  - / (Login)
  - /wifi (WiFi setup)
  - /dashboard (Device dashboard)

- The UI currently stores device WiFi entries in a `devices` table in Supabase (demo-only). You should replace this with a secure provisioning flow before production (e.g., device-to-cloud pairing, ephemeral keys, or captive portal).

- Do not commit real credentials. Use the `.env.example` as a template.
