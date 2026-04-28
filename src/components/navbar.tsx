'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

type NavChild = { href: string; label: string }
type NavLink =
  | { href: string; label: string; children?: undefined }
  | { href?: undefined; label: string; children: NavChild[] }

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  {
    label: 'Work',
    children: [
      { href: '/projects', label: 'Projects' },
      { href: '/map', label: 'Project Map' },
    ],
  },
  { href: '/ventures', label: 'Ventures' },
  {
    label: 'Connect',
    children: [
      { href: '/insights', label: 'Insights' },
      { href: '/resources', label: 'Resources' },
      { href: '/media', label: 'Media' },
      { href: '/testimonials', label: 'Testimonials' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const isGroupActive = (children: NavChild[]) => children.some(c => pathname === c.href || pathname.startsWith(c.href + '/'))

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: scrolled ? 'var(--bg-card)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1 }}>
              Alalade Ayomide
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-green)', marginTop: '2px' }}>
              Town Planner & Urban Strategist
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav ref={dropdownRef} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
            {navLinks.map((link) => {
              if ('children' in link && link.children) {
                const active = isGroupActive(link.children)
                return (
                  <div key={link.label} style={{ position: 'relative' }}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', gap: '4px',
                        fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 500,
                        letterSpacing: '0.06em', textTransform: 'uppercase',
                        color: active ? 'var(--accent-green)' : 'var(--text-secondary)',
                        padding: 0, transition: 'color 0.2s',
                        borderBottom: active ? '1.5px solid var(--accent-green)' : '1.5px solid transparent',
                        paddingBottom: '2px',
                      }}
                    >
                      {link.label} <ChevronDown size={12} style={{ transform: openDropdown === link.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                    </button>
                    {openDropdown === link.label && (
                      <div style={{
                        position: 'absolute', top: 'calc(100% + 12px)', left: '50%', transform: 'translateX(-50%)',
                        backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
                        boxShadow: '0 8px 32px var(--shadow-strong)', minWidth: '160px', zIndex: 100,
                      }}>
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            style={{
                              display: 'block', padding: '0.6rem 1.25rem',
                              fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 500,
                              letterSpacing: '0.04em', textTransform: 'uppercase',
                              color: pathname === child.href ? 'var(--accent-green)' : 'var(--text-secondary)',
                              textDecoration: 'none', transition: 'background 0.15s',
                              backgroundColor: pathname === child.href ? 'var(--bg-subtle)' : 'transparent',
                              borderBottom: '1px solid var(--border-light)',
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link key={link.href} href={link.href} style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 500,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: pathname === link.href ? 'var(--accent-green)' : 'var(--text-secondary)',
                  textDecoration: 'none', transition: 'color 0.2s',
                  borderBottom: pathname === link.href ? '1.5px solid var(--accent-green)' : '1.5px solid transparent',
                  paddingBottom: '2px',
                }}>
                  {link.label}
                </Link>
              )
            })}

            {mounted && (
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} style={{
                background: 'var(--bg-subtle)', border: '1px solid var(--border)', borderRadius: '100px',
                padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px',
                cursor: 'pointer', color: 'var(--text-secondary)', transition: 'all 0.2s',
              }}>
                {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
                <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.05em' }}>
                  {theme === 'dark' ? 'Light' : 'Dark'}
                </span>
              </button>
            )}
          </nav>

          {/* Mobile controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="show-mobile">
            {mounted && (
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', padding: '4px' }}>
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', padding: '4px' }}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)', padding: '1.5rem 2rem', maxHeight: '80vh', overflowY: 'auto' }}>
          {navLinks.map((link) => {
            if ('children' in link && link.children) {
              return (
                <div key={link.label}>
                  <div style={{ padding: '0.5rem 0', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', borderBottom: '1px solid var(--border-light)', marginTop: '0.5rem' }}>
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setMenuOpen(false)} style={{
                      display: 'block', padding: '0.6rem 0.75rem',
                      fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500,
                      color: pathname === child.href ? 'var(--accent-green)' : 'var(--text-secondary)',
                      textDecoration: 'none', borderBottom: '1px solid var(--border-light)',
                    }}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )
            }
            return (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
                display: 'block', padding: '0.75rem 0',
                fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                color: pathname === link.href ? 'var(--accent-green)' : 'var(--text-secondary)',
                textDecoration: 'none', borderBottom: '1px solid var(--border-light)',
              }}>
                {link.label}
              </Link>
            )
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 900px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 899px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </header>
  )
}
