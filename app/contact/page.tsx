import type { Metadata } from 'next'
import Link from 'next/link'
import { getServices } from '@/app/lib/content'
import { siteConfig } from '@/app/config/site'
import Breadcrumb from '@/app/components/Breadcrumb'
import ContactForm from '@/app/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Prosperty Real Estate | Get Expert Consultation',
  description:
    'Contact Prosperty Real Estate advisors in Chennai, Dubai, or Singapore. Call +91 9500013446 or fill our inquiry form for personalized property consultation.',
  alternates: {
    canonical: 'https://www.prospertyrealestate.com/contact/',
  },
}

export default function ContactPage() {
  const services = getServices()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cream">
      {/* Hero */}
      <section className="bg-gradient-to-r from-ink to-blue-900 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Breadcrumb items={[{ label: 'Contact' }]} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl">
            Connect with our real estate experts. We're here to answer your questions and help you find the perfect property solution.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-ink mb-8">
              Contact Information
            </h2>

            {/* Main Office */}
            <div className="mb-8">
              <h3 className="font-serif font-bold text-ink mb-2">India</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                {siteConfig.address}
              </p>
              <div className="space-y-1 text-sm">
                <a
                  href={`tel:${siteConfig.phone[0].replace(/\s+/g, '')}`}
                  className="block text-gold hover:text-ink transition-colors font-semibold"
                >
                  {siteConfig.phone[0]}
                </a>
                <a
                  href={`tel:${siteConfig.phone[1].replace(/\s+/g, '')}`}
                  className="block text-gold hover:text-ink transition-colors font-semibold"
                >
                  {siteConfig.phone[1]} {/* TODO: confirm secondary number */}
                </a>
              </div>
            </div>

            {/* Other Offices */}
            {siteConfig.offices.slice(1).map((office) => (
              <div key={office.name} className="mb-8">
                <h3 className="font-serif font-bold text-ink mb-2">{office.name}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {office.address}
                </p>
              </div>
            ))}

            {/* Email */}
            <div className="bg-gold/10 p-4 rounded-lg">
              <p className="text-sm font-semibold text-ink mb-2">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-gold hover:text-ink transition-colors font-semibold break-all"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm services={services} />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="bg-gradient-to-r from-ink to-blue-900 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-serif font-bold mb-6">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.offices.map((office) => (
              <div key={office.name} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="font-serif font-bold text-lg mb-2">{office.name}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
