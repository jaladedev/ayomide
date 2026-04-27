'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'var(--bg-card)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1,
              }}>
                Alalade Ayomide
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent-green)',
                marginTop: '2px',
              }}>
                Town Planner & Urban Strategist
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden-mobile">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: pathname === href ? 'var(--accent-green)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  borderBottom: pathname === href ? '1.5px solid var(--accent-green)' : '1.5px solid transparent',
                  paddingBottom: '2px',
                }}
              >
                {label}
              </Link>
            ))}

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border)',
                  borderRadius: '100px',
                  padding: '6px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s',
                }}
              >
                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.05em' }}>
                  {theme === 'dark' ? 'Light' : 'Dark'}
                </span>
              </button>
            )}
          </nav>

          {/* Mobile menu button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  padding: '4px',
                }}
                className="show-mobile"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                padding: '4px',
              }}
              className="show-mobile"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderTop: '1px solid var(--border)',
          padding: '1.5rem 2rem',
        }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: pathname === href ? 'var(--accent-green)' : 'var(--text-secondary)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border-light)',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
