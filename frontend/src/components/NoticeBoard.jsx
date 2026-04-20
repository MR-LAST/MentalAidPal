import React from 'react'

export default function NoticeBoard({notices=[]}){
  return (
    <div className="card">
      <h3>Notice Board</h3>
      {notices.length===0 ? (
        <div>No notices yet.</div>
      ) : (
        <ul>
          {notices.map((n,idx)=>(<li key={idx}>{n}</li>))}
        </ul>
      )}
    </div>
  )
}
