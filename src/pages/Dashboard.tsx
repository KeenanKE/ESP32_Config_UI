import React, { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../supabase'

export default function Dashboard(){
  const [devices, setDevices] = useState<any[]>([])

  useEffect(()=>{
    async function load(){
      if (!isSupabaseConfigured) {
        console.warn('Supabase not configured; skipping device load')
        setDevices([])
        return
      }
      const sb = supabase as any
      const { data } = await sb.from('devices').select('*')
      setDevices(data || [])
    }
    load()
  }, [])

  return (
    <div className="page">
      <h2>Your Devices</h2>
      <ul>
        {devices.map(d=> <li key={d.id}>{d.ssid} - {d.status || 'unknown'}</li>)}
      </ul>
    </div>
  )
}
