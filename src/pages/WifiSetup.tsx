import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

export default function WifiSetup(){
  const [ssid, setSsid] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  async function submit(){
    // For now store the wifi info in a user_metadata field in Supabase profile (demo only)
    const user = supabase.auth.getUser()
    await supabase.from('devices').insert([{ ssid, password, owner: (await user).data?.user?.id }])
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
