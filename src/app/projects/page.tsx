import type { Metadata } from 'next'
import { ProjectsClient } from './projects-client'

export const metadata: Metadata = {
  title: 'Projects | Alalade Ayomide — Urban Planner Nigeria',
  description: 'Portfolio of urban planning, EIA, residential layout, and tourism planning projects across Nigeria — Oyo, Abuja, Ogun, Imo, Rivers, and more.',
  keywords: ['urban planning projects Nigeria', 'EIA projects', 'master plan portfolio', 'residential layout Nigeria'],
}

export default function ProjectsPage() {
  return <ProjectsClient />
}
