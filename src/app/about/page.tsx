import { Award, BookOpen, Users, Calendar } from 'lucide-react'

const timeline = [
  { year: '2024', role: 'Principal Consultant', org: 'Ayomide Alalade & Associates', desc: 'Leading multidisciplinary planning and EIA consultancy.' },
  { year: '2021', role: 'Senior Urban Planner', org: 'Federal Ministry of Works & Housing', desc: 'Managed national spatial development frameworks and urban renewal programs.' },
  { year: '2018', role: 'Urban Planner', org: 'Lagos State Physical Planning Authority', desc: 'Development control, layout approvals, and zoning advisory.' },
  { year: '2015', role: 'Junior Planner', org: 'Tayo Consulting Ltd', desc: 'EIA studies and site analysis for private developers.' },
]

const certs = [
  'Member, Nigerian Institute of Town Planners (MNITP)',
  'Registered Town Planner, TOPREC',
  'Certificate in GIS & Remote Sensing, ESRI',
  'Environmental Impact Assessment Practitioner',
]

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>The Planner</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: 'var(--text-primary)', maxWidth: '700px', lineHeight: 1.1 }}>
            Bridging Urban Vision with Investable Outcomes
          </h1>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ width: '100%', aspectRatio: '4/3', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
                <div style={{ position: 'relative', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', color: 'var(--border)' }}>AA</div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Photo</div>
                </div>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
                <div className="section-label" style={{ marginBottom: '0.75rem' }}>Affiliations</div>
                {certs.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-green)', borderRadius: '50%', marginTop: '6px', flexShrink: 0 }} />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Alalade Ayomide is a registered town planner with over 12 years of experience delivering spatial planning solutions, environmental impact assessments, and land investment strategies across Nigeria.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                His work spans government consultancy, private development, and investment innovation — including pioneering fractional land investment platforms that democratize access to Nigerian real estate. He holds a strong belief that sustainable cities and profitable developments are not opposing goals.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
                {[
                  { icon: <Award size={18} />, label: 'MNITP Certified', sub: 'Since 2014' },
                  { icon: <BookOpen size={18} />, label: 'B.Sc. Urban Planning', sub: 'UNILAG' },
                  { icon: <Users size={18} />, label: 'Gov. & Private Clients', sub: 'Nationwide' },
                  { icon: <Calendar size={18} />, label: '12+ Years Active', sub: 'Practice' },
                ].map((item, i) => (
                  <div key={i} style={{ padding: '1.25rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--accent-green)', marginTop: '2px' }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="section-label" style={{ marginBottom: '1.5rem' }}>Career Timeline</div>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '40px', top: 0, bottom: 0, width: '1px', backgroundColor: 'var(--border)' }} />
                {timeline.map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', position: 'relative' }}>
                    <div style={{ minWidth: '56px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-green)', paddingTop: '2px', textAlign: 'right' }}>{t.year}</div>
                    <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: 'var(--accent-green)', border: '2px solid var(--bg-primary)', marginTop: '4px', flexShrink: 0, zIndex: 1, position: 'relative' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>{t.role}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--accent-earth)', marginBottom: '4px' }}>{t.org}</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
