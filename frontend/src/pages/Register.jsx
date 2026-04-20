import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const universities = ['University of Zambia','Mulungushi University','Copperbelt University','Zambia Catholic University']

export default function Register(){
  const [role,setRole] = useState('student')
  const [form,setForm] = useState({fullName:'',university:'',biography:'',terminalIllness:'',stigma:'',disability:'',age:'',nrc:'',schoolId:'',year:''})
  const nav = useNavigate()
  function update(e){
    const {name,value} = e.target
    setForm(f=>({...f,[name]:value}))
  }
  function submit(e){
    e.preventDefault()
    // store locally for demo
    const payload = {role, ...form}
    localStorage.setItem('user', JSON.stringify(payload))
    alert('Registered locally. Proceed to login.')
    nav('/login')
  }
  return (
    <div className="card">
      <h2>Register</h2>
      <div style={{marginBottom:8}}>
        <label><input type="radio" checked={role==='student'} onChange={()=>setRole('student')} /> Student</label>
        <label style={{marginLeft:8}}><input type="radio" checked={role==='chancellor'} onChange={()=>setRole('chancellor')} /> Chancellor</label>
      </div>
      <form onSubmit={submit}>
        {role==='chancellor' ? (
          <div>
            <input name="fullName" placeholder="Full name" className="input" value={form.fullName} onChange={update} />
            <input name="university" placeholder="University" className="input" value={form.university} onChange={update} />
            <input name="regNumber" placeholder="Registration number" className="input" onChange={update} />
            <input name="yearsExperience" placeholder="Years of experience" className="input" onChange={update} />
            <input name="homeAddress" placeholder="Home address" className="input" onChange={update} />
            <div style={{marginTop:8}}><small>Please upload a recommendation letter to your university when asked (not stored in this demo).</small></div>
          </div>
        ) : (
          <div>
            <input name="fullName" placeholder="Full name" className="input" value={form.fullName} onChange={update} />
            <select name="university" value={form.university} onChange={update} className="input">
              <option value="">Select university</option>
              {universities.map(u=> <option key={u}>{u}</option>)}
            </select>
            <textarea name="biography" placeholder="Short biography" className="input" value={form.biography} onChange={update} />
            <input name="terminalIllness" placeholder="Any terminal illnesses (optional)" className="input" value={form.terminalIllness} onChange={update} />
            <input name="stigma" placeholder="Any stigma being faced" className="input" value={form.stigma} onChange={update} />
            <input name="disability" placeholder="Any disability" className="input" value={form.disability} onChange={update} />
            <div className="form-row">
              <input name="age" placeholder="Age" className="input" value={form.age} onChange={update} />
              <input name="nrc" placeholder="NRC number" className="input" value={form.nrc} onChange={update} />
            </div>
            <div className="form-row">
              <input name="schoolId" placeholder="School ID" className="input" value={form.schoolId} onChange={update} />
              <input name="year" placeholder="Year of study" className="input" value={form.year} onChange={update} />
            </div>
          </div>
        )}
        <div style={{marginTop:8}}>
          <button className="badge">Register</button>
        </div>
      </form>
    </div>
  )
}
