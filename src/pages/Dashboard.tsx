import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase'

export default function Dashboard(){
  const [devices, setDevices] = useState<any[]>([])

  useEffect(()=>{
    async function load(){
      const { data } = await supabase.from('devices').select('*')
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
