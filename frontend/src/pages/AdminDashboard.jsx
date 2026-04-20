import React from 'react'
import Sidebar from '../components/Sidebar'

export default function AdminDashboard(){
  return (
    <div className="app-layout">
      <Sidebar role="admin" />
      <div style={{flex:1}}>
        <div className="card">
          <h2>Admin Panel</h2>
          <p>Manage and review chancellors and students (demo).</p>
        </div>
        <div className="card">
          <h3>Registered Users</h3>
          <pre>{localStorage.getItem('user') || 'No users in demo'}</pre>
        </div>
      </div>
    </div>
  )
}
