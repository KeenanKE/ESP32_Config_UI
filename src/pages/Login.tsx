import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

export default function LoginPage(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()

  async function signIn(){
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) {
      alert(error.message)
    } else {
      nav('/wifi')
    }
  }

  async function signUp(){
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    setLoading(false)
    if (error) alert(error.message)
    else alert('Check your email to confirm')
  }

  return (
    <div className="page">
      <h2>Sign in / Sign up</h2>
      <input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <div>
        <button onClick={signIn} disabled={loading}>Sign in</button>
        <button onClick={signUp} disabled={loading}>Sign up</button>
      </div>
    </div>
  )
}
