import Link from 'next/link'
import { ArrowRight, MapPin, FileText, Building2, TrendingUp, ChevronRight } from 'lucide-react'

const services = [
  { icon: <MapPin size={20} />, title: 'Urban & Regional Planning', desc: 'Master plans and spatial frameworks for sustainable growth.' },
  { icon: <FileText size={20} />, title: 'Environmental Impact Assessment', desc: 'Rigorous EIA studies meeting federal and state requirements.' },
  { icon: <Building2 size={20} />, title: 'Development Strategy', desc: 'Site analysis, feasibility, and development control advisory.' },
  { icon: <TrendingUp size={20} />, title: 'Land Investment Advisory', desc: 'Strategic guidance for real estate and land portfolio growth.' },
]

const projects = [
  {
    title: 'Lekki Coastal Master Plan',
    location: 'Lagos, Nigeria',
    category: 'Urban Development',
    year: '2023',
    color: '#2D5016',
  },
  {
    title: 'Ibadan Industrial Corridor EIA',
    location: 'Oyo State, Nigeria',
    category: 'EIA',
    year: '2023',
    color: '#8B5E3C',
  },
  {
    title: 'Abuja Peri-Urban Housing Scheme',
    location: 'FCT, Nigeria',
    category: 'Residential Layout',
    year: '2022',
    color: '#4A7C28',
  },
]

const stats = [
  { value: '50+', label: 'Projects Completed' },
  { value: '12+', label: 'Years Experience' },
  { value: '8', label: 'States Covered' },
  { value: '200+', label: 'Hectares Planned' },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--bg-primary)',
        paddingTop: '72px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background grid */}
        <div className="map-grid" style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
        }} />
        
        {/* Decorative circle */}
        <div style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '1px solid var(--border)',
          opacity: 0.5,
        }} />
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '1px solid var(--accent-sand)',
          opacity: 0.3,
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '720px' }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>
              Urban Planner · EIA Specialist · Real Estate Strategist
            </div>
            
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}>
              Planning <em>Sustainable</em> Cities.<br />
              Designing <span style={{ color: 'var(--accent-green)' }}>Profitable</span> Developments.
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '540px',
            }}>
              With over a decade of experience in urban planning and environmental consulting,
              I help governments, developers, and investors create spaces that work — for people and for returns.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
              <Link href="/projects" style={{
                backgroundColor: 'var(--accent-green)',
                color: '#FAF8F5',
                padding: '0.875rem 2rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
              }}>
                View Projects <ArrowRight size={16} />
              </Link>
              <Link href="/contact" style={{
                border: '1.5px solid var(--text-primary)',
                color: 'var(--text-primary)',
                padding: '0.875rem 2rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
              }}>
                Book Consultation
              </Link>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0',
              borderTop: '1px solid var(--border)',
              paddingTop: '2rem',
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                  paddingRight: '1.5rem',
                  paddingLeft: i > 0 ? '1.5rem' : '0',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.2rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                  }}>{s.value}</div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.25rem',
                    letterSpacing: '0.03em',
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '6rem 2rem',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>What I Do</div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 400,
                color: 'var(--text-primary)',
                margin: 0,
              }}>
                Core Services
              </h2>
            </div>
            <Link href="/services" style={{
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--accent-green)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}>
              All Services <ChevronRight size={14} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5px',
            backgroundColor: 'var(--border)',
          }}>
            {services.map((s, i) => (
              <div key={i} className="card" style={{
                padding: '2.5rem',
                backgroundColor: 'var(--bg-card)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-green)',
                  marginBottom: '1.5rem',
                }}>
                  {s.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>Portfolio</div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 400,
                color: 'var(--text-primary)',
                margin: 0,
              }}>
                Featured Projects
              </h2>
            </div>
            <Link href="/projects" style={{
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--accent-green)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}>
              View All <ChevronRight size={14} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {projects.map((p, i) => (
              <Link key={i} href="/projects" style={{ textDecoration: 'none' }}>
                <div className="card" style={{ overflow: 'hidden' }}>
                  {/* Color swatch instead of image */}
                  <div style={{
                    height: '180px',
                    backgroundColor: p.color,
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(8px)',
                      padding: '4px 10px',
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                    }}>
                      {p.category}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{p.year}</div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                    }}>{p.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      <MapPin size={12} />
                      {p.location}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        backgroundColor: 'var(--accent-green)',
        padding: '5rem 2rem',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-body)',
          }}>
            Ready to Build?
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            color: '#FAF8F5',
            marginBottom: '2rem',
            lineHeight: 1.2,
          }}>
            Let&apos;s Plan Your Next<br />Development Project
          </h2>
          <Link href="/contact" style={{
            backgroundColor: '#FAF8F5',
            color: 'var(--accent-green)',
            padding: '1rem 2.5rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            Schedule a Meeting <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
