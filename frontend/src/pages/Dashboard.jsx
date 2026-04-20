import React from 'react'
import Sidebar from '../components/Sidebar'
import NoticeBoard from '../components/NoticeBoard'
import SupportForms from '../components/SupportForms'

export default function Dashboard(){
  const session = JSON.parse(localStorage.getItem('session')||'{}')
  return (
    <div className="app-layout">
      <Sidebar role={session.role || 'student'} />
      <div style={{flex:1}}>
        <div className="card">
          <h2>Welcome {session.name || 'Student'}</h2>
          <p>Your university: {session.university || 'Not set'}</p>
        </div>
        <NoticeBoard />
        <SupportForms type="legal" />
        <SupportForms type="victim" />
        <div className="card">
          <h3>Community Groups</h3>
          <p>Join or create a community group for your university to share support and events.</p>
          <button className="badge">Join University Group</button>
        </div>
      </div>
    </div>
  )
}
