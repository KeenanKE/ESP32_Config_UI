import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase, isSupabaseConfigured } from '../supabase'

export default function WifiSetup(){
  const [ssid, setSsid] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  async function submit(){
    if (!isSupabaseConfigured) {
      alert('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env')
      return
    }

    // Demo-only provisioning flow: do NOT store Wi-Fi passwords in plaintext for production.
    // Here we store a short hint and enqueue a provisioning request (status='pending').
    const hint = password ? `****${password.slice(-4)}` : ''
  // We checked isSupabaseConfigured above so assert non-null here for TS
  const sb = supabase as any
  const user = await sb.auth.getUser()
  await sb.from('devices').insert([{ ssid, password_hint: hint, status: 'pending', owner: user.data?.user?.id }])
    nav('/dashboard')
  }

  return (
    <div className="page">
      <h2>Configure WiFi for your device</h2>
      <input placeholder="SSID" value={ssid} onChange={e=>setSsid(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <div>
        <button onClick={submit}>Send to device</button>
      </div>
    </div>
  )
}
