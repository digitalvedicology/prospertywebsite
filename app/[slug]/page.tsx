import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBySlug, getAllServiceSlugs, getAllPostSlugs, getServices } from '@/app/lib/content'
import { generateArticleSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/app/lib/schemas'
import Markdown from '@/app/components/Markdown'
import Breadcrumb from '@/app/components/Breadcrumb'
import RelatedPosts from '@/app/components/RelatedPosts'
import CallToAction from '@/app/components/CallToAction'
import { Post, Service } from '@/app/lib/types'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const content = getBySlug(slug)

  if (!content) {
    return {
      title: 'Not Found',
    }
  }

  const baseUrl = 'https://www.prospertyrealestate.com'

  return {
    title: content.seo_title || content.heading,
    description:
      content.meta_description ||
      `${content.heading} | Prosperty Real Estate Advisors, Chennai`,
    openGraph: {
      title: content.seo_title || content.heading,
      description: content.meta_description || content.heading,
      url: `${baseUrl}/${slug}/`,
      type: content.type === 'post' ? 'article' : 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${slug}/`,
    },
  }
}

export async function generateStaticParams() {
  const serviceSlugs = getAllServiceSlugs()
  const postSlugs = getAllPostSlugs()

  return [
    ...serviceSlugs.map((slug) => ({ slug })),
    ...postSlugs.map((slug) => ({ slug })),
  ]
}

export const dynamicParams = false

export default async function Page({ params }: Props) {
  const { slug } = await params
  const content = getBySlug(slug)

  if (!content) {
    notFound()
  }

  const baseUrl = 'https://www.prospertyrealestate.com'
  const breadcrumbs = [
    { label: content.type === 'post' ? 'Blog' : 'Services', href: content.type === 'post' ? '/blog/' : '/real-estate-services/' },
    { label: content.heading },
  ]

  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: 'Home', url: baseUrl },
    ...breadcrumbs.map((item) => ({
      label: item.label,
      url: item.href ? `${baseUrl}${item.href}` : `${baseUrl}/${slug}/`,
    })),
  ])

  const jsonLd =
    content.type === 'post'
      ? generateArticleSchema(content as Post, baseUrl)
      : generateServiceSchema(content as Service, baseUrl)

  const allServices = getServices()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />

      <div className="bg-gradient-to-b from-cream to-white min-h-screen">
        {/* Hero Header */}
        <section className="bg-gradient-to-r from-ink to-blue-900 text-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <Breadcrumb items={breadcrumbs} />
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              {content.heading}
            </h1>
            {content.type === 'post' && (content as Post).published && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6 text-gray-300">
                <time dateTime={(content as Post).published!}>
                  {new Date((content as Post).published!).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                {content.categories.length > 0 && (
                  <div className="flex gap-2">
                    {content.categories.map((cat) => (
                      <Link
                        key={cat}
                        href={`/category/${cat}/`}
                        className="bg-gold/20 px-3 py-1 rounded-full text-sm hover:bg-gold/30 transition-colors"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
          {/* TODO: Add featured image here */}
          <div className="aspect-video bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg mb-12 overflow-hidden flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80"
              alt={content.heading}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <Markdown content={content.content_markdown} />
          </div>

          {/* Service Sidebar (for service pages) */}
          {content.type === 'service' && (
            <aside className="mt-16 pt-12 border-t border-gray-300">
              <h3 className="text-2xl font-serif font-bold text-ink mb-6">
                Other Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allServices
                  .filter((s) => s.slug !== slug)
                  .slice(0, 4)
                  .map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}/`}
                      className="p-4 border border-gray-200 rounded-lg hover:border-gold hover:bg-cream transition-all"
                    >
                      <h4 className="font-serif font-bold text-ink hover:text-gold transition-colors">
                        {service.heading}
                      </h4>
                    </Link>
                  ))}
              </div>
            </aside>
          )}

          {/* Related Posts (for blog posts) */}
          {content.type === 'post' && <RelatedPosts post={content as Post} limit={3} />}
        </article>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20">
          <CallToAction />
        </section>
      </div>
    </>
  )
}
