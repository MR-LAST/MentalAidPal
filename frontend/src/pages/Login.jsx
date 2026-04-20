import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [role,setRole] = useState('student')
  const [university,setUniversity] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const nav = useNavigate()

  function submit(e){
    e.preventDefault()
    // very simple demo auth: read from localStorage set during register
    const stored = JSON.parse(localStorage.getItem('user')||'null')
    if(stored && stored.university && stored.fullName){
      // ensure university selection
      localStorage.setItem('session', JSON.stringify({role,university:stored.university || university, name:stored.fullName || 'User'}))
      if(role==='chancellor') nav('/chancellor')
      else if(role==='admin') nav('/admin')
      else nav('/dashboard')
    }else{
      alert('No local registration found. Please register first (demo).')
      nav('/register')
    }
  }
  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div style={{marginBottom:8}}>
          <label><input type="radio" checked={role==='student'} onChange={()=>setRole('student')} /> Student</label>
          <label style={{marginLeft:8}}><input type="radio" checked={role==='chancellor'} onChange={()=>setRole('chancellor')} /> Chancellor</label>
          <label style={{marginLeft:8}}><input type="radio" checked={role==='admin'} onChange={()=>setRole('admin')} /> Admin</label>
        </div>
        {role==='chancellor' ? (
          <div>
            <input placeholder="University" className="input" value={university} onChange={e=>setUniversity(e.target.value)} />
            <input placeholder="Username" className="input" value={username} onChange={e=>setUsername(e.target.value)} />
            <input placeholder="Password" type="password" className="input" value={password} onChange={e=>setPassword(e.target.value)} />
          </div>
        ) : (
          <div>
            <select className="input" value={university} onChange={e=>setUniversity(e.target.value)}>
              <option value="">Select university</option>
              <option>University of Zambia</option>
              <option>Copperbelt University</option>
              <option>Mulungushi University</option>
            </select>
            <input placeholder="Username or NRC" className="input" value={username} onChange={e=>setUsername(e.target.value)} />
            <input placeholder="Password" type="password" className="input" value={password} onChange={e=>setPassword(e.target.value)} />
          </div>
        )}
        <div style={{marginTop:8}}>
          <button className="badge">Login</button>
        </div>
      </form>
    </div>
  )
}
