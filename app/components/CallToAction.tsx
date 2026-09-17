import Link from 'next/link'

interface CallToActionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}

export default function CallToAction({
  title = 'Ready to Get Started?',
  description = 'Connect with our real estate experts to find the perfect property solution for your needs.',
  buttonText = 'Contact Us Today',
  buttonHref = '/contact/',
}: CallToActionProps) {
  return (
    <section className="bg-gradient-to-r from-gold to-orange-500 text-white rounded-lg p-8 md:p-12 mt-12 shadow-lg">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg mb-6 opacity-95">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 bg-white text-gold font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {buttonText} →
        </Link>
      </div>
    </section>
  )
}
