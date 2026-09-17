import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-gold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gold text-white font-bold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
