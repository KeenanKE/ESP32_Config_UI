import { createClient, SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL || ''
const key = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

let supabase: SupabaseClient | null = null
let isSupabaseConfigured = false

if (url && key) {
	supabase = createClient(url, key)
	isSupabaseConfigured = true
} else {
	// Fail-friendly stub: log a clear warning and provide a minimal stub to avoid
	// the app throwing during import in development. Real calls should guard
	// on `isSupabaseConfigured`.
	// NOTE: Do not call production APIs when not configured.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	supabase = ({} as any) as SupabaseClient
	// eslint-disable-next-line no-console
	console.warn('[supabase] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY missing. Supabase client not configured.')
}

export { isSupabaseConfigured }
export { supabase }
