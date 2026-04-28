import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Alalade Ayomide | Town Planner & Urban Strategist',
  description: 'Planning Sustainable Cities. Designing Profitable Developments.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning
    data-scroll-behavior="smooth"
    scroll-behavior="smooth">
      <body>
        <Providers>
          <Navbar />
          <main style={{ minHeight: '100vh' }}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
