import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar({role='student'}){
  return (
    <aside className="card sidebar">
      <div style={{fontWeight:700,marginBottom:8}}>Menu</div>
      <Link className="navlink" to="/dashboard">Dashboard</Link>
      <Link className="navlink" to="#profile">Edit Profile</Link>
      <Link className="navlink" to="#notice">Notice Board</Link>
      <Link className="navlink" to="#legal">Legal Aid</Link>
      <Link className="navlink" to="#victim">Victim Support</Link>
      <Link className="navlink" to="#report">Report Crime/Bullying</Link>
      <Link className="navlink" to="#community">Join Community Group</Link>
      {role==='chancellor' && <Link className="navlink" to="#events">Manage Events</Link>}
      {role==='admin' && <Link className="navlink" to="#manage">Admin Panel</Link>}
    </aside>
  )
}
