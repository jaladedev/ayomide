import type { Metadata } from 'next'
import { MapClient } from './map-client'

export const metadata: Metadata = {
  title: 'Project Map | Alalade Ayomide — Spatial Planning Portfolio',
  description: 'Interactive map of planning projects, EIA studies, and urban interventions across Nigeria. Explore work by location and project type.',
  keywords: ['Nigeria planning map', 'GIS planning', 'urban projects map Nigeria'],
}

export default function MapPage() {
  return <MapClient />
}
