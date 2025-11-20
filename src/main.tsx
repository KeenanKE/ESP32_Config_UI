import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login'
import WifiSetupPage from './pages/WifiSetup'
import DashboardPage from './pages/Dashboard'
import './styles.css'

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

createRoot(document.getElementById('root')!).render(<App />)
