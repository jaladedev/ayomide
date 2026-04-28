// ============================================================
// Central data store — swap with Supabase queries when ready
// ============================================================

export type Project = {
  slug: string
  title: string
  location: string
  state: string
  lat: number
  lng: number
  category: 'Residential Layout' | 'EIA' | 'Tourism Planning' | 'Urban Development'
  year: string
  color: string
  client: string
  overview: string
  problem: string
  approach: string
  outcome: string
  impact: string
  metrics: { label: string; value: string }[]
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'lekki-coastal-master-plan',
    title: 'Lekki Coastal Master Plan',
    location: 'Ibadan, Oyo State, Nigeria',
    state: 'Oyo',
    lat: 6.4698,
    lng: 3.5852,
    category: 'Urban Development',
    year: '2023',
    color: '#2D5016',
    client: 'Oyo State Government',
    overview: 'A comprehensive spatial development framework for 1,200 hectares of coastal land in the Lekki corridor, balancing high-density mixed-use growth with environmental resilience.',
    problem: 'Rapid unplanned development along the Lekki coastline was creating flood-risk settlements, infrastructure deficits, and loss of ecologically sensitive wetlands — all while squandering the economic potential of prime waterfront land.',
    approach: 'We conducted detailed land-use surveys, flood-risk mapping using GIS, stakeholder consultations with community groups and investors, and benchmarked international coastal planning models. The resulting framework defined five distinct land-use zones with clear development controls and infrastructure sequencing.',
    outcome: 'The master plan was adopted by Oyo State Physical Planning Authority and is now the reference document for all development applications in the study area. Three major developers have restructured their project briefs to align with the framework.',
    impact: '1,200 ha of coordinated land use; 3 developers restructured to framework',
    metrics: [
      { label: 'Area Covered', value: '1,200 ha' },
      { label: 'Zones Defined', value: '5' },
      { label: 'Stakeholder Groups', value: '18' },
      { label: 'Delivery Timeline', value: '9 months' },
    ],
    tags: ['Master Plan', 'Coastal', 'GIS', 'Land Use'],
  },
  {
    slug: 'ibadan-industrial-corridor-eia',
    title: 'Ibadan Industrial Corridor EIA',
    location: 'Oyo State, Nigeria',
    state: 'Oyo',
    lat: 7.3775,
    lng: 3.9470,
    category: 'EIA',
    year: '2023',
    color: '#8B5E3C',
    client: 'Oluyole Industrial Estate Consortium',
    overview: 'Full NESREA-compliant Environmental Impact Assessment for a proposed mixed industrial corridor covering three manufacturing facilities and associated infrastructure.',
    problem: 'The client needed regulatory clearance for three industrial units in a corridor with nearby residential settlements and a seasonal watercourse. Previous applications had failed due to inadequate environmental studies.',
    approach: 'Conducted comprehensive baseline surveys covering air quality, noise, hydrology, soil conditions, and socioeconomic profiles of affected communities. Developed a rigorous Environmental Management Plan with measurable mitigation commitments and community benefit obligations.',
    outcome: 'NESREA approval secured for all three industrial units within 6 months — 40% faster than the sector average. The EMP has since been cited by NESREA as a model for industrial corridor assessments.',
    impact: 'NESREA approval secured; 40% faster than sector average',
    metrics: [
      { label: 'Facilities Covered', value: '3' },
      { label: 'Approval Timeline', value: '6 months' },
      { label: 'Community Consultations', value: '12' },
      { label: 'Mitigation Measures', value: '34' },
    ],
    tags: ['EIA', 'NESREA', 'Industrial', 'Environmental Management'],
  },
  {
    slug: 'abuja-peri-urban-housing',
    title: 'Abuja Peri-Urban Housing Scheme',
    location: 'FCT, Nigeria',
    state: 'FCT',
    lat: 9.0765,
    lng: 7.3986,
    category: 'Residential Layout',
    year: '2022',
    color: '#4A7C28',
    client: 'Private Developer Consortium',
    overview: 'Design and regulatory approval of an 850-plot serviced residential layout on peri-urban land 18km from Abuja city centre, targeting middle-income homeowners.',
    problem: 'Soaring land prices within Abuja had pushed middle-income families to unserviced, illegally subdivided land. The client needed a bankable, AGIS-compliant layout that could attract mortgage financing.',
    approach: 'Site analysis identified optimal plot orientation for solar access and cross-ventilation. We designed a hierarchical road network, integrated green corridors as flood buffers, and negotiated phased infrastructure delivery with the FCT Administration.',
    outcome: '850 plots approved and survey plans issued. 94% of plots sold within 8 months of approval. The scheme is now in Phase 2 infrastructure delivery.',
    impact: '850 plots approved; 94% sold within 8 months',
    metrics: [
      { label: 'Total Plots', value: '850' },
      { label: 'Green Space', value: '18%' },
      { label: 'Sales Rate', value: '94% in 8 mo' },
      { label: 'Roads Designed', value: '12.4 km' },
    ],
    tags: ['Residential', 'Layout Design', 'FCT', 'AGIS'],
  },
  {
    slug: 'ogun-waterfront-tourism-plan',
    title: 'Ogun Waterfront Tourism Master Plan',
    location: 'Ogun State, Nigeria',
    state: 'Ogun',
    lat: 6.9980,
    lng: 3.4737,
    category: 'Tourism Planning',
    year: '2022',
    color: '#5E3C8B',
    client: 'Ogun State Tourism & Culture Ministry',
    overview: 'Spatial master plan for a 200-acre waterfront tourism development along the Ogun River, designed to attract domestic and diaspora tourism investment.',
    problem: 'The Ogun River corridor had significant untapped tourism potential but lacked a coherent development vision, deterring private investment and resulting in piecemeal, low-quality developments.',
    approach: 'Market research, comparative analysis of West African tourism destinations, environmental sensitivity mapping, and co-design workshops with tourism operators informed a phased master plan covering hospitality, eco-tourism, water sports, and cultural facilities.',
    outcome: 'The plan was presented at the 2022 Nigeria Tourism Summit and attracted ₦2.4B in expression-of-interest letters from private investors within 6 months.',
    impact: '₦2.4B investor interest attracted; adopted at Nigeria Tourism Summit',
    metrics: [
      { label: 'Site Area', value: '200 acres' },
      { label: 'Investor Interest', value: '₦2.4B' },
      { label: 'Proposed Beds', value: '1,200+' },
      { label: 'Jobs Created (proj.)', value: '3,400' },
    ],
    tags: ['Tourism', 'Waterfront', 'Master Plan', 'Investment'],
  },
  {
    slug: 'owerri-industrial-park-feasibility',
    title: 'Owerri Industrial Park Feasibility Study',
    location: 'Imo State, Nigeria',
    state: 'Imo',
    lat: 5.4836,
    lng: 7.0333,
    category: 'Urban Development',
    year: '2021',
    color: '#3C6B8B',
    client: 'Imo State Investment Agency',
    overview: 'Comprehensive feasibility and planning study for a proposed 400-acre industrial park on the outskirts of Owerri, targeting light manufacturing, agro-processing, and logistics.',
    problem: 'Imo State lacked a structured industrial estate with clear planning permissions, reliable infrastructure, and investment-grade documentation — deterring formal sector companies and limiting job creation.',
    approach: 'Demand assessment across 6 manufacturing subsectors, infrastructure gap analysis, financial modelling under three development scenarios, and a regulatory pathway mapped through Imo State Physical Planning Board.',
    outcome: 'State government approved the site for industrial use. A development brief is now in tender and first-phase infrastructure contracts were awarded in Q1 2022.',
    impact: 'Site approved; infrastructure contracts awarded Q1 2022',
    metrics: [
      { label: 'Site Area', value: '400 acres' },
      { label: 'Projected Jobs', value: '8,000+' },
      { label: 'Investment Value', value: '₦18B' },
      { label: 'Subsectors Assessed', value: '6' },
    ],
    tags: ['Industrial', 'Feasibility', 'Investment', 'Imo State'],
  },
  {
    slug: 'port-harcourt-urban-renewal',
    title: 'Port Harcourt Urban Renewal Framework',
    location: 'Rivers State, Nigeria',
    state: 'Rivers',
    lat: 4.8156,
    lng: 7.0498,
    category: 'Urban Development',
    year: '2021',
    color: '#6B4A2D',
    client: 'Rivers State Urban Renewal Agency',
    overview: 'Strategic urban renewal framework for three blighted inner-city districts in Port Harcourt, covering displacement mitigation, heritage conservation, and economic revitalisation.',
    problem: 'Three heritage districts had fallen into severe physical and economic decline — characterised by dilapidated buildings, poor sanitation, loss of commercial activity, and growing insecurity — while sitting on high-value urban land.',
    approach: 'Participatory mapping with 400+ residents, heritage asset survey, economic baseline study, and phased renewal strategies ranging from rehabilitation to selective redevelopment. Developed a community benefit framework to prevent displacement.',
    outcome: 'Framework adopted by the Rivers State Urban Renewal Agency. Phase 1 rehabilitation of 240 structures underway. Heritage conservation plan submitted to NCMM.',
    impact: 'Framework adopted; 240 structures in Phase 1 rehabilitation',
    metrics: [
      { label: 'Districts Covered', value: '3' },
      { label: 'Residents Engaged', value: '400+' },
      { label: 'Structures in Phase 1', value: '240' },
      { label: 'Heritage Assets Mapped', value: '62' },
    ],
    tags: ['Urban Renewal', 'Heritage', 'Community', 'Rivers State'],
  },
]

export type Testimonial = {
  name: string
  title: string
  org: string
  type: 'Client' | 'Institutional' | 'Developer'
  quote: string
  initials: string
  color: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Engr. Tunde Bakare',
    title: 'CEO',
    org: 'Bakare Properties Ltd',
    type: 'Developer',
    quote: 'Ayomide delivered an EIA study that got our project approved in record time. His knowledge of NESREA requirements is exceptional — he anticipated every regulatory concern before it became a problem.',
    initials: 'TB',
    color: '#2D5016',
  },
  {
    name: 'Alhaja Fatimah Suleiman',
    title: 'Director',
    org: 'Suleiman Real Estate Group',
    type: 'Client',
    quote: 'The feasibility study gave us the confidence to proceed with a ₦1.4B investment. Every projection was backed by solid data and planning intelligence. Thorough, accurate, and professional.',
    initials: 'FS',
    color: '#8B5E3C',
  },
  {
    name: 'Dr. Emmanuel Okafor',
    title: 'Former Commissioner',
    org: 'State Ministry of Physical Planning',
    type: 'Institutional',
    quote: 'His master plan work for our state was among the most technically sound and practically implementable we have reviewed. He understands both the regulatory framework and the political realities of implementation.',
    initials: 'EO',
    color: '#4A7C28',
  },
  {
    name: 'Adaeze Nwachukwu',
    title: 'Investment Director',
    org: 'Nwachukwu Family Office',
    type: 'Client',
    quote: 'We engaged Ayomide for a land investment advisory and came away with a strategy that has returned 38% in 18 months. His understanding of planning corridors and zoning trends is genuinely edge-giving.',
    initials: 'AN',
    color: '#3C6B8B',
  },
  {
    name: 'Olawale Adeleke',
    title: 'MD',
    org: 'Adeleke Construction & Development',
    type: 'Developer',
    quote: 'We have used multiple planning consultants over the years. Ayomide is in a different category — he connects planning strategy directly to development economics in a way few practitioners can.',
    initials: 'OA',
    color: '#5E3C8B',
  },
  {
    name: 'Prof. Chidinma Eze',
    title: 'President',
    org: 'Nigerian Institute of Town Planners',
    type: 'Institutional',
    quote: 'A committed professional who represents the new generation of Nigerian planners — technically rigorous, commercially fluent, and deeply committed to sustainable urban development.',
    initials: 'CE',
    color: '#6B4A2D',
  },
]

export type Resource = {
  id: string
  title: string
  description: string
  type: 'PDF' | 'Checklist' | 'Template' | 'Guide'
  pages: string
  requiresEmail: boolean
  fileSize: string
}

export const resources: Resource[] = [
  {
    id: 'eia-sample',
    title: 'Sample EIA Scope of Work',
    description: 'A full-format sample Environmental Impact Assessment Scope of Work document, structured to NESREA standards. Ideal for developers preparing briefs.',
    type: 'PDF',
    pages: '24 pages',
    requiresEmail: true,
    fileSize: '1.2 MB',
  },
  {
    id: 'planning-checklist',
    title: 'Development Approval Checklist (Oyo)',
    description: 'Step-by-step checklist for obtaining planning approval in Oyo State — from site survey to final permit. Updated for 2024 LASPPPA requirements.',
    type: 'Checklist',
    pages: '8 pages',
    requiresEmail: false,
    fileSize: '0.4 MB',
  },
  {
    id: 'land-investment-guide',
    title: 'Land Investment Due Diligence Guide',
    description: 'A practical guide for investors evaluating land in Nigeria — covering title verification, planning risk, infrastructure assessment, and value uplift potential.',
    type: 'Guide',
    pages: '18 pages',
    requiresEmail: true,
    fileSize: '0.9 MB',
  },
  {
    id: 'eia-terms-glossary',
    title: 'EIA & Planning Terms Glossary',
    description: 'Quick-reference glossary of 120+ terms used in Nigerian environmental impact assessments and planning documents. Useful for clients and junior practitioners.',
    type: 'PDF',
    pages: '12 pages',
    requiresEmail: false,
    fileSize: '0.3 MB',
  },
  {
    id: 'feasibility-template',
    title: 'Feasibility Study Outline Template',
    description: 'A structured template for preparing residential and commercial development feasibility studies, aligned with lender and DFI requirements.',
    type: 'Template',
    pages: '16 pages',
    requiresEmail: true,
    fileSize: '0.6 MB',
  },
  {
    id: 'subdivision-checklist',
    title: 'Land Subdivision Regulatory Checklist',
    description: 'Requirements for land subdivision approvals across Oyo, Abuja, and select state capitals — with typical timelines and cost estimates.',
    type: 'Checklist',
    pages: '6 pages',
    requiresEmail: false,
    fileSize: '0.2 MB',
  },
]

export type MediaItem = {
  id: string
  type: 'Event' | 'Speaking' | 'Training' | 'Feature'
  title: string
  subtitle: string
  date: string
  location: string
  description: string
  color: string
}

export const mediaItems: MediaItem[] = [
  {
    id: 'tourism-summit-2023',
    type: 'Speaking',
    title: 'Nigeria Tourism Investment Summit',
    subtitle: 'Keynote: "Planning for Tourism-Led Urban Growth"',
    date: 'November 2023',
    location: 'Transcorp Hilton, Abuja',
    description: 'Delivered the opening keynote on spatial planning frameworks that enable sustainable tourism investment, with case studies from the Ogun Waterfront project.',
    color: '#2D5016',
  },
  {
    id: 'nitp-conference-2023',
    type: 'Event',
    title: 'NITP Annual Conference 2023',
    subtitle: 'Panel: "Urban Planning in the Digital Age"',
    date: 'September 2023',
    location: 'Eko Hotels, Oyo',
    description: 'Panellist on GIS-driven planning practice and the integration of PropTech tools in development control. Moderated session on peri-urban growth management.',
    color: '#8B5E3C',
  },
  {
    id: 'real-estate-masterclass',
    type: 'Training',
    title: 'Real Estate Planning Masterclass',
    subtitle: '2-Day Intensive for Developers & Investors',
    date: 'July 2023',
    location: 'Oyo Business School',
    description: 'Trained 45 real estate professionals on understanding planning law, development approvals, EIA requirements, and land investment risk. 4.9/5 average satisfaction rating.',
    color: '#4A7C28',
  },
  {
    id: 'business-day-feature',
    type: 'Feature',
    title: 'BusinessDay: "The New Urban Planner"',
    subtitle: 'Feature Interview on PropTech & Planning Innovation',
    date: 'May 2023',
    location: 'BusinessDay Newspaper',
    description: 'Profiled as part of a feature series on Nigerian professionals bridging traditional practice with technology and investment innovation. Focus on reu.ng and fractional land ownership.',
    color: '#3C6B8B',
  },
  {
    id: 'urban-futures-forum',
    type: 'Speaking',
    title: 'Urban Futures West Africa Forum',
    subtitle: '"Planning for Climate-Resilient Cities"',
    date: 'March 2023',
    location: 'ECOWAS Secretariat, Abuja',
    description: 'Presented a paper on integrating climate risk assessment into Nigerian urban master plans, with reference to flood-resilient design in coastal Oyo.',
    color: '#5E3C8B',
  },
  {
    id: 'eia-workshop-2022',
    type: 'Training',
    title: 'EIA Practitioners Workshop',
    subtitle: 'Facilitator — NESREA Compliance Series',
    date: 'October 2022',
    location: 'Ibadan',
    description: 'Led a 3-day technical workshop for 60 environmental practitioners on updated NESREA EIA guidelines, baseline survey methodologies, and stakeholder engagement frameworks.',
    color: '#6B4A2D',
  },
]
