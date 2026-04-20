import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <main>
      <section className="hero site-header">
        <div className="container hero-card">
          <div>
            <h1 style={{color:'white',marginBottom:8}}>mentalAidPal — Student Mental Health & Support</h1>
            <p style={{color:'white',opacity:0.95}}>A free support platform for university students in Zambia. Access legal aid, victim support, confidential reporting, counselling and community groups tailored to your campus.</p>
            <div style={{marginTop:16}}>
              <Link to="/register" className="cta">Get Started — Register</Link>
              <Link to="/login" style={{marginLeft:12, color:'white', textDecoration:'underline'}}>Login</Link>
            </div>
          </div>
          <aside>
            <div className="card">
              <h4>Quick facts</h4>
              <ul className="muted">
                <li>Completely free for students</li>
                <li>Secure confidential reporting</li>
                <li>Chancellors manage counselling schedules</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="container" style={{paddingTop:28}}>
        <div className="card">
          <h2>Our Services</h2>
          <div className="grid-3" style={{marginTop:12}}>
            <div className="feature">
              <h4>Legal Aid</h4>
              <p className="muted">Report legal matters and get support coordinating with university legal advisors and local services.</p>
            </div>
            <div className="feature">
              <h4>Victim Support</h4>
              <p className="muted">Confidential reporting, access to victim assistance and emergency referrals when needed.</p>
            </div>
            <div className="feature">
              <h4>Therapy & Counselling</h4>
              <p className="muted">Book private counselling sessions, join group therapy and view the counselling calendar for your university.</p>
            </div>
          </div>
        </div>

        <div className="two-col">
          <div>
            <div className="card">
              <h3>How It Works</h3>
              <ol>
                <li>Register with your university details and profile.</li>
                <li>Choose support options (legal, victim, counselling) and join community groups.</li>
                <li>Chancellors and admins schedule events and counselling sessions; students join groups and book slots.</li>
              </ol>
            </div>

            <div className="card">
              <h3>Community & Events</h3>
              <p className="muted">Join university-specific groups to find peer support, events, workshops and discussion circles organised by campus chancellors and student leaders.</p>
              <div style={{marginTop:10}}><Link to="/dashboard" className="badge">Explore groups</Link></div>
            </div>
          </div>

          <aside>
            <div className="card">
              <h4>For Chancellors</h4>
              <p className="muted">Register as a chancellor to post notices, schedule counselling sessions, view statistics and manage student support across your university.</p>
            </div>

            <div className="card" style={{marginTop:12}}>
              <h4>For Admins</h4>
              <p className="muted">Admins can review and manage all registered chancellors and student data, and moderate reports.</p>
            </div>
          </aside>
        </div>

        <div className="card" style={{marginTop:18}}>
          <h3>Frequently Asked Questions</h3>
          <details style={{marginTop:8}}>
            <summary>Is the service free?</summary>
            <p className="muted">Yes — mentalAidPal is free for students in participating Zambian universities.</p>
          </details>
          <details style={{marginTop:8}}>
            <summary>Is reporting confidential?</summary>
            <p className="muted">Yes — students may report anonymously where available; sensitive reports are handled with privacy in mind.</p>
          </details>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} mentalAidPal — Empowering students across Zambia
        </div>
      </footer>
    </main>
  )
}
