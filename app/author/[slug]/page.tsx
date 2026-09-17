import type { Metadata } from 'next'
import Link from 'next/link'
import { getByPath, getAllAuthors } from '@/app/lib/content'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/app/components/Breadcrumb'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const content = getByPath(`/author/${slug}/`)

  if (!content) {
    return { title: 'Author Not Found' }
  }

  return {
    title: `Articles by ${slug} | Prosperty Real Estate`,
    description: `Real estate articles written by ${slug} at Prosperty.`,
    robots: {
      index: false, // Do not index archive pages
      follow: true,
    },
    alternates: {
      canonical: `https://www.propertyrealestate.com/author/${slug}/`,
    },
  }
}

export async function generateStaticParams() {
  const authors = getAllAuthors()
  return authors.map((author) => ({ slug: author.slug }))
}

export const dynamicParams = false

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params
  const content = getByPath(`/author/${slug}/`)

  if (!content) {
    notFound()
  }

  const allAuthors = getAllAuthors()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cream">
      {/* Hero */}
      <section className="bg-gradient-to-r from-ink to-blue-900 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Blog', href: '/blog/' },
              { label: `Author: ${slug}` },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            {slug}
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Articles by {slug}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Author Filter */}
        <div className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">
            View Other Authors
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog/"
              className="px-4 py-2 border-2 border-gold text-gold rounded-full text-sm font-semibold hover:bg-gold hover:text-white transition-colors"
            >
              All Posts
            </Link>
            {allAuthors.map((author) => (
              <Link
                key={author.slug}
                href={author.path}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  author.slug === slug
                    ? 'bg-gold text-white'
                    : 'border-2 border-gold text-gold hover:bg-gold hover:text-white'
                }`}
              >
                {author.slug}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">
            Archive page for author: <strong>{slug}</strong>
          </p>
          <p className="text-sm text-gray-500">
            This page contains archived posts and is not indexed by search engines.
          </p>
        </div>
      </div>
    </div>
  )
}
