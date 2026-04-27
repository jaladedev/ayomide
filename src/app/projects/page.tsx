'use client'

import { useState } from 'react'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'

const categories = ['All', 'Urban Development', 'EIA', 'Residential Layout', 'Tourism Planning', 'Feasibility']

const projects = [
  { title: 'Lekki Coastal Master Plan', location: 'Lagos, Nigeria', category: 'Urban Development', year: '2023', impact: '1,200 ha of coordinated land use framework', color: '#2D5016' },
  { title: 'Ibadan Industrial Corridor EIA', location: 'Oyo State, Nigeria', category: 'EIA', year: '2023', impact: 'NESREA approval secured for 3 industrial units', color: '#8B5E3C' },
  { title: 'Abuja Peri-Urban Housing Scheme', location: 'FCT, Nigeria', category: 'Residential Layout', year: '2022', impact: '850 plots serviced layout designed', color: '#4A7C28' },
  { title: 'Ogun Waterfront Tourism Plan', location: 'Ogun State, Nigeria', category: 'Tourism Planning', year: '2022', impact: 'Master plan for ₦2.4B tourism development', color: '#5E3C8B' },
  { title: 'Owerri Industrial Park Feasibility', location: 'Imo State, Nigeria', category: 'Feasibility', year: '2021', impact: '400-acre industrial estate viability confirmed', color: '#3C6B8B' },
  { title: 'Port Harcourt Urban Renewal', location: 'Rivers State, Nigeria', category: 'Urban Development', year: '2021', impact: '3 blighted districts slated for regeneration', color: '#6B4A2D' },
  { title: 'Kuje Layout EIA Study', location: 'FCT, Nigeria', category: 'EIA', year: '2020', impact: 'Full environmental clearance for 600-plot estate', color: '#2D5016' },
  { title: 'Ilorin Residential Estate Plan', location: 'Kwara State, Nigeria', category: 'Residential Layout', year: '2020', impact: '320-plot estate with green corridors', color: '#8B5E3C' },
]

export default function ProjectsPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Portfolio</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: 'var(--text-primary)', maxWidth: '640px', lineHeight: 1.1 }}>
            Projects That Shape Places and Returns
          </h1>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  backgroundColor: active === cat ? 'var(--accent-green)' : 'var(--bg-card)',
                  color: active === cat ? '#FAF8F5' : 'var(--text-secondary)',
                  border: active === cat ? '1px solid var(--accent-green)' : '1px solid var(--border)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {filtered.map((p, i) => (
              <div key={i} className="card" style={{ overflow: 'hidden' }}>
                <div style={{ height: '200px', backgroundColor: p.color, position: 'relative', overflow: 'hidden' }}>
                  <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${p.color} 0%, rgba(0,0,0,0.3) 100%)` }} />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', right: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)', padding: '4px 10px', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-body)' }}>
                      {p.category}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: '#FAF8F5', fontWeight: 500, lineHeight: 1.3 }}>{p.title}</div>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      <MapPin size={12} /> {p.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      <Calendar size={12} /> {p.year}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-green)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <ArrowRight size={12} /> {p.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
