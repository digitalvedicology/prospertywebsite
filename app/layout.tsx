import type { Metadata, Viewport } from 'next'
import { siteConfig } from '@/app/config/site'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.prospertyrealestate.com'),
  title: {
    default: 'Prosperty Real Estate Chennai | Property Advisors & Consultants',
    template: '%s | Prosperty Real Estate Chennai',
  },
  description:
    'Prosperty Real Estate Advisors – research-based property buying, selling and investment advisory services across Chennai. 15+ years of trusted expertise.',
  keywords: [
    'real estate advisors Chennai',
    'property consultants',
    'real estate services',
    'property buying Chennai',
    'property selling Chennai',
    'NRI real estate',
    'property management',
  ],
  authors: [{ name: 'Prosperty Real Estate' }],
  creator: 'Prosperty Real Estate',
  publisher: 'Prosperty Real Estate',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.prospertyrealestate.com',
    siteName: siteConfig.name,
    title: 'Prosperty Real Estate Chennai | Property Advisors & Consultants',
    description: siteConfig.tagline,
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Prosperty Real Estate',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prosperty Real Estate Chennai',
    description: siteConfig.tagline,
    images: ['/og-default.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  colorScheme: 'light',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: siteConfig.name,
  description: siteConfig.tagline,
  url: siteConfig.url,
  telephone: siteConfig.phone[0],
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'AP 676, H Block, 15th Street',
    addressLocality: 'Annanagar',
    addressRegion: 'Chennai',
    postalCode: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  sameAs: [
    // TODO: add social links
  ],
  areaServed: [
    'Chennai',
    'Tamil Nadu',
    'India',
  ],
  knowsAbout: [
    'Residential Real Estate',
    'Commercial Real Estate',
    'Real Estate Investment',
    'Property Management',
    'NRI Services',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
