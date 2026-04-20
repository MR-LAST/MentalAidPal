import React from 'react'
import Sidebar from '../components/Sidebar'

export default function ChancellorDashboard(){
  const session = JSON.parse(localStorage.getItem('session')||'{}')
  return (
    <div className="app-layout">
      <Sidebar role={session.role || 'chancellor'} />
      <div style={{flex:1}}>
        <div className="card">
          <h2>Chancellor Panel - {session.university || ''}</h2>
          <p>Use this panel to post notices, schedule counselling, and view student statistics.</p>
        </div>
        <div className="card">
          <h3>Student statistics (demo)</h3>
          <ul>
            <li>Legal issues reported: 0</li>
            <li>Victim reports: 0</li>
            <li>Therapy sessions scheduled: 0</li>
          </ul>
        </div>
        <div className="card">
          <h3>Notice Board - Post Notice</h3>
          <textarea rows={4} className="input" placeholder="Type a notice (demo)" />
          <div style={{marginTop:8}}><button className="badge">Post</button></div>
        </div>
      </div>
    </div>
  )
}
