import { NavigationConfig } from '@/app/lib/types'

export const navigationConfig: NavigationConfig = {
  main: [
    {
      label: 'HOME',
      href: '/',
    },
    {
      label: 'ABOUT US',
      href: '/about/',
    },
    {
      label: 'OUR TEAM',
      href: '/prosperty-team/',
    },
    {
      label: 'REAL ESTATE SERVICES',
      href: '#', // Parent has no page
      children: [
        {
          label: 'Residential Real Estate Services',
          href: '/residential-real-estate-services-by-prosperty-in-chennai/',
        },
        {
          label: 'Commercial Real Estate Services',
          href: '/commercial-real-estate-services-prosperty-advisors-chennai/',
        },
        {
          label: 'Real Estate Investment Advisory Services',
          href: '/real-estate-investment-advisory-services/',
        },
        {
          label: 'Real Estate Valuation & Advisory',
          href: '/real-estate-valuation-advisory-by-prosperty-chennai/',
        },
        {
          label: 'Real Estate Legal And Documentation',
          href: '/real-estate-legal-and-documentation-services-by-prosperty/',
        },
        {
          label: 'Land Real Estate Services',
          href: '/land-real-estate-services-by-prosperty/',
        },
        {
          label: 'Real Estate Taxation',
          href: '/real-estate-taxation-with-prosperty-assistance/',
        },
      ],
    },
    {
      label: 'REAL ESTATE RESEARCH',
      href: '/real-estate-research-services-with-prosperty/',
      children: [
        {
          label: 'Real Estate Research Services',
          href: '/real-estate-research-services-by-prosperty/',
        },
        {
          label: 'Residential Real Estate Research',
          href: '/residential-real-estate-research-services-by-prosperty/',
        },
        {
          label: 'Commercial Office Space Research',
          href: '/commercial-office-space-research-comprehensive-insights-by-prosperty/',
        },
        {
          label: 'Independent Commercial Retail Building Research',
          href: '/independent-commercial-retail-building-research-by-prosperty/',
        },
        {
          label: 'Independent Commercial Office Building Research',
          href: '/real-estate-research-for-independent-commercial-office-buildings/',
        },
      ],
    },
    {
      label: 'NRI REAL ESTATE SERVICES',
      href: '/nri-real-estate-services-by-prosperty-chennai/',
      children: [
        {
          label: 'NRI Real Estate Services',
          href: '/nri-real-estate-services-by-prosperty/',
        },
        {
          label: 'Residential Real Estate Services for NRIs',
          href: '/residential-real-estate-services-for-nris-by-prosperty/',
        },
        {
          label: 'Commercial Real Estate Services for NRIs',
          href: '/commercial-real-estate-services-for-nris-prosperty-guide/',
        },
        {
          label: 'Land And Agricultural Services for NRIs',
          href: '/land-and-agricultural-services-for-nris-prosperty-guide/',
        },
        {
          label: 'Documentation & Legal Due Diligence',
          href: '/documentation-legal-due-diligence-services-for-nris/',
        },
        {
          label: 'Repatriation Services for NRIs',
          href: '/repatriation-services-for-nris/',
        },
      ],
    },
    {
      label: 'OUR BLOG',
      href: '/blog/',
    },
    {
      label: 'CONTACT',
      href: '/contact/',
    },
  ],

  footer: [
    {
      label: 'About',
      href: '#',
      children: [
        {
          label: 'Our Story',
          href: '/about/',
        },
        {
          label: 'Our Team',
          href: '/prosperty-team/',
        },
        {
          label: 'Services',
          href: '/real-estate-services/',
        },
      ],
    },
    {
      label: 'Services',
      href: '#',
      children: [
        {
          label: 'Residential Services',
          href: '/residential-real-estate-services-by-prosperty-in-chennai/',
        },
        {
          label: 'Commercial Services',
          href: '/commercial-real-estate-services-prosperty-advisors-chennai/',
        },
        {
          label: 'NRI Services',
          href: '/nri-real-estate-services-by-prosperty-chennai/',
        },
        {
          label: 'Property Management',
          href: '/property-management-in-chennai/',
        },
      ],
    },
    {
      label: 'Resources',
      href: '#',
      children: [
        {
          label: 'Blog',
          href: '/blog/',
        },
        {
          label: 'Research',
          href: '/real-estate-research-services-with-prosperty/',
        },
        {
          label: 'Contact',
          href: '/contact/',
        },
      ],
    },
    {
      label: 'Legal',
      href: '#',
      children: [
        {
          label: 'Terms & Conditions',
          href: '/terms-and-conditions/',
        },
        {
          label: 'Privacy Policy',
          href: '/privacy-policy/',
        },
      ],
    },
  ],
}
