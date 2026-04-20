import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="site-header">
      <div className="container topbar">
        <div className="brand">
          <div className="logo">M</div>
          <div>
            <div style={{fontSize:18}}>mentalAidPal</div>
            <div style={{fontSize:12,color:'rgba(255,255,255,0.9)'}}>Free for students</div>
          </div>
        </div>
        <nav className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
    </header>
  )
}
