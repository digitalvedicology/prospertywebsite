import type { Metadata } from 'next'
import Link from 'next/link'
import { getByPath, getAllTags } from '@/app/lib/content'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/app/components/Breadcrumb'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const content = getByPath(`/tag/${slug}/`)

  if (!content) {
    return { title: 'Tag Not Found' }
  }

  return {
    title: `${slug} - Blog Tag | Prosperty Real Estate`,
    description: `Posts tagged with ${slug} from Prosperty Real Estate.`,
    robots: {
      index: false, // Do not index archive pages
      follow: true,
    },
    alternates: {
      canonical: `https://www.propertyrealestate.com/tag/${slug}/`,
    },
  }
}

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({ slug: tag.slug }))
}

export const dynamicParams = false

export default async function TagPage({ params }: Props) {
  const { slug } = await params
  const content = getByPath(`/tag/${slug}/`)

  if (!content) {
    notFound()
  }

  const allTags = getAllTags()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cream">
      {/* Hero */}
      <section className="bg-gradient-to-r from-ink to-blue-900 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Blog', href: '/blog/' },
              { label: `Tag: ${slug}` },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Tag: {slug}
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Posts tagged with &quot;{slug}&quot;
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Tag Filter */}
        <div className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">
            View Other Tags
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog/"
              className="px-4 py-2 border-2 border-gold text-gold rounded-full text-sm font-semibold hover:bg-gold hover:text-white transition-colors"
            >
              All Posts
            </Link>
            {allTags.slice(0, 5).map((tag) => (
              <Link
                key={tag.slug}
                href={tag.path}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  tag.slug === slug
                    ? 'bg-gold text-white'
                    : 'border-2 border-gold text-gold hover:bg-gold hover:text-white'
                }`}
              >
                {tag.slug}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">
            Archive page for tag: <strong>{slug}</strong>
          </p>
          <p className="text-sm text-gray-500">
            This page contains archived posts and is not indexed by search engines.
          </p>
        </div>
      </div>
    </div>
  )
}
