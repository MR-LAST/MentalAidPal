import React, {useState} from 'react'

export default function SupportForms({type='legal'}){
  const [form,setForm] = useState({title:'',details:'',university:'',anonymous:false})
  function update(e){
    const {name,value,type,checked} = e.target
    setForm(f=>({...f,[name]: type==='checkbox'?checked:value}))
  }
  async function submit(e){
    e.preventDefault()
    // placeholder: send to backend API when available
    console.log('submit',type,form)
    alert('Report submitted (local demo).')
    setForm({title:'',details:'',university:'',anonymous:false})
  }
  return (
    <div className="card">
      <h3>{type==='legal'?'Legal Aid':'Victim Support / Report'}</h3>
      <form onSubmit={submit}>
        <div className="form-row">
          <input name="title" placeholder="Short title" value={form.title} onChange={update} className="input" />
          <select name="university" value={form.university} onChange={update} className="input">
            <option value="">Select university</option>
            <option>University of Zambia</option>
            <option>Mulungushi University</option>
            <option>Copperbelt University</option>
            <option>UNZA</option>
          </select>
        </div>
        <div style={{marginTop:8}}>
          <textarea name="details" placeholder="Describe the issue" value={form.details} onChange={update} rows={6} className="input" />
        </div>
        <div style={{marginTop:8,display:'flex',gap:8,alignItems:'center'}}>
          <label><input type="checkbox" name="anonymous" checked={form.anonymous} onChange={update} /> Submit anonymously</label>
          <button style={{marginLeft:'auto'}} className="badge">Submit</button>
        </div>
      </form>
    </div>
  )
}
