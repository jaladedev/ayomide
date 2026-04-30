'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

type Variant = 'default' | 'spinner' | 'skeleton'

export function PageLoader({ variant = 'default' }: { variant?: Variant }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [pathname, searchParams])

  if (!loading) return null

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      backgroundColor: 'var(--bg-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Map grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(45,80,22,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(45,80,22,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '36px 36px',
        animation: 'gridFade 2s ease-in-out infinite alternate',
      }} />

      {variant === 'default' && <DefaultLoader />}
      {variant === 'spinner' && <SpinnerLoader />}
      {variant === 'skeleton' && <SkeletonLoader />}

      <style>{`
        @keyframes gridFade { from { opacity: 0.4; } to { opacity: 1; } }
        @keyframes monoPulse { 0%,100% { transform:scale(1); opacity:1; } 50% { transform:scale(0.96); opacity:0.85; } }
        @keyframes labelFade { from { opacity:0.5; } to { opacity:1; } }
        @keyframes barSlide {
          0% { transform: scaleX(0) translateX(0); }
          50% { transform: scaleX(0.7) translateX(0); }
          100% { transform: scaleX(0) translateX(200px); }
        }
        @keyframes dotPop { 0%,100% { background:rgba(45,80,22,0.2); transform:scale(1); } 50% { background:#2D5016; transform:scale(1.4); } }
        @keyframes spin { to { transform:rotate(360deg); } }
        @keyframes shimmer { to { background-position: -200% 0; } }
        @keyframes compassSpin { to { transform:rotate(360deg); } }
      `}</style>
    </div>
  )
}

function DefaultLoader() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
      {/* Monogram */}
      <div style={{
        width: '72px', height: '72px', backgroundColor: 'var(--accent-green)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.5rem',
        animation: 'monoPulse 1.6s ease-in-out infinite',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 600, color: '#FAF8F5', lineHeight: 1 }}>AA</span>
      </div>

      {/* Label */}
      <div style={{
        fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'var(--accent-green)', marginBottom: '1.75rem',
        animation: 'labelFade 1.6s ease-in-out infinite alternate',
      }}>
        Loading
      </div>

      {/* Progress bar */}
      <div style={{ width: '200px', height: '2px', backgroundColor: 'rgba(45,80,22,0.15)', overflow: 'hidden' }}>
        <div style={{
          height: '100%', backgroundColor: 'var(--accent-green)',
          animation: 'barSlide 1.8s cubic-bezier(0.4,0,0.2,1) infinite',
          transformOrigin: 'left',
        }} />
      </div>

      {/* Dots */}
      <Dots />
    </div>
  )
}

function SpinnerLoader() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
      <div style={{
        width: '52px', height: '52px',
        border: '2px solid rgba(45,80,22,0.15)',
        borderTopColor: 'var(--accent-green)',
        borderRadius: '50%',
        animation: 'spin 0.9s linear infinite',
        marginBottom: '1.5rem',
      }} />
      <div style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-green)', marginBottom: '0.75rem', animation: 'labelFade 1.6s ease-in-out infinite alternate' }}>
        Loading
      </div>
      <Dots />
    </div>
  )
}

function SkeletonLoader() {
  const skel = (w = '100%', h = 14) => (
    <div style={{
      height: `${h}px`, width: w,
      background: 'linear-gradient(90deg, rgba(45,80,22,0.08) 25%, rgba(45,80,22,0.18) 50%, rgba(45,80,22,0.08) 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.4s ease-in-out infinite',
    }} />
  )
  return (
    <div style={{ width: '260px', display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}>
      {skel('60%', 24)}
      {skel('80%', 18)}
      {skel('40%')}
      <div style={{ height: '8px' }} />
      <div style={{ display: 'flex', gap: '10px' }}>
        {skel('100%', 80)}
        {skel('100%', 80)}
        {skel('100%', 80)}
      </div>
      {skel('80%')}
      {skel('60%')}
    </div>
  )
}


function Dots() {
  return (
    <div style={{ display: 'flex', gap: '6px', marginTop: '1.25rem' }}>
      {[0, 200, 400].map((delay) => (
        <div key={delay} style={{
          width: '5px', height: '5px', borderRadius: '50%',
          animation: `dotPop 1.2s ease-in-out ${delay}ms infinite`,
        }} />
      ))}
    </div>
  )
}