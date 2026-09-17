import { Post, Service, Page } from '@/app/lib/types'

export function generateBreadcrumbSchema(items: { label: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.url,
    })),
  }
}

export function generateArticleSchema(post: Post, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.heading,
    description: post.heading,
    author: {
      '@type': 'Organization',
      name: 'Prosperty Real Estate',
    },
    datePublished: post.published,
    dateModified: post.modified || post.published,
    image: `${siteUrl}/og-default.jpg`,
    url: `${siteUrl}/${post.slug}/`,
    keywords: post.categories?.join(', ') || '',
  }
}

export function generateServiceSchema(service: Service, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.heading,
    description: service.heading,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Prosperty Real Estate',
      url: siteUrl,
    },
    url: `${siteUrl}/${service.slug}/`,
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateOrganizationSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Prosperty Real Estate',
    image: `${siteUrl}/og-default.jpg`,
    description: 'Real Estate Advisors, Consultants & Portfolio Managers in Chennai',
    url: siteUrl,
    telephone: '+91 9500013446',
    email: 'crm@prospertyrealestate.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'AP 676, H Block, 15th Street',
      addressLocality: 'Annanagar',
      addressRegion: 'Chennai',
      postalCode: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    sameAs: [
      // TODO: add social profiles
    ],
  }
}
