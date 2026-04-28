import Link from 'next/link'
import { MapPin, Mail, Phone, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '4rem 2rem 2rem',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
            }}>
              Alalade Ayomide
            </div>
            <div style={{
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-green)',
              marginBottom: '1rem',
            }}>
              MNITP · Town Planner
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: '260px',
            }}>
              Planning sustainable cities and designing profitable developments across Nigeria and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>Navigation</div>
            {[
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/projects', label: 'Projects' },
              { href: '/insights', label: 'Insights' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  marginBottom: '0.6rem',
                  transition: 'color 0.2s',
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>Services</div>
            {[
              'Physical Planning & Layout',
              'Environmental Impact Assessment',
              'Feasibility Studies',
              'Development Control Advisory',
              'Real Estate Investment Strategy',
            ].map((s) => (
              <div key={s} style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                marginBottom: '0.6rem',
              }}>
                {s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                <MapPin size={14} color="var(--accent-green)" />
                Ibadan, Oyo State, Nigeria
              </div>
              <a href="mailto:alaladeayomide01@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>
                <Mail size={14} color="var(--accent-green)" />
                alaladeayomide01@gmail.com
              </a>
              <a href="tel:+2348000000000" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>
                <Phone size={14} color="var(--accent-green)" />
                +234 806 843 1346
              </a>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                  <Linkedin size={18} />
                </a>
                <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Alalade Ayomide. All rights reserved.
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Member · Nigerian Institute of Town Planners
          </div>
        </div>
      </div>
    </footer>
  )
}
