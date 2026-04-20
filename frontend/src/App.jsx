import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ChancellorDashboard from './pages/ChancellorDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Navbar from './components/Navbar'

export default function App(){
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/chancellor" element={<ChancellorDashboard/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
        </Routes>
      </div>
    </div>
  )
}
