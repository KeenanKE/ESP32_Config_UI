import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login'
import WifiSetupPage from './pages/WifiSetup'
import DashboardPage from './pages/Dashboard'
import './styles.css'
import ErrorBoundary from './components/ErrorBoundary'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/wifi" element={<WifiSetupPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

// Simple mount sanity text so we can see whether React starts mounting at all.
try{
  const rootEl = document.getElementById('root')
  if (rootEl) {
    rootEl.innerHTML = '<div id="__app_debug">[app] mounting...</div>'
  }
}catch(e){
  // ignore
}

console.log('[app] boot')

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)
