import Link from 'next/link'
import { siteConfig, externalLinks } from '@/app/config/site'
import { navigationConfig } from '@/app/config/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 border-t-2 border-gold">
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img
                src="/indexassets/logo.png"
                alt="Prosperty"
                className="h-10 w-auto"
              />
              <div>
                <div className="font-serif font-bold text-white text-lg">Prosperty</div>
                <div className="text-xs uppercase tracking-wider text-gold font-semibold">
                  Real Estate
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-gray-500">
              {siteConfig.address}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {navigationConfig.footer?.[0]?.children?.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-gold transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-gold">•</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-bold text-white text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {navigationConfig.footer?.[1]?.children?.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-gold transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-gold">•</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-serif font-bold text-white text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div>
                <a
                  href={`tel:${siteConfig.phone[0].replace(/\s+/g, '')}`}
                  className="text-gray-400 hover:text-gold transition-colors block"
                >
                  {siteConfig.phone[0]}
                </a>
                <a
                  href={`tel:${siteConfig.phone[1].replace(/\s+/g, '')}`}
                  className="text-gray-400 hover:text-gold transition-colors block"
                >
                  {siteConfig.phone[1]} {/* TODO: confirm secondary number */}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-400 hover:text-gold transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="pt-2 border-t border-gray-700 space-y-1">
                <Link
                  href="/terms-and-conditions/"
                  className="text-gray-400 hover:text-gold transition-colors block text-xs"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/privacy-policy/"
                  className="text-gray-400 hover:text-gold transition-colors block text-xs"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="max-w-7xl mx-auto border-t border-gray-700 pt-8 mb-8">
          <h3 className="font-serif font-bold text-white text-lg mb-6">Our Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.offices.map((office) => (
              <div key={office.name} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-gold text-sm mb-1">{office.name}</h4>
                <p className="text-xs text-gray-400">{office.location}</p>
                <p className="text-xs text-gray-500 mt-2">{office.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Websites */}
        <div className="max-w-7xl mx-auto border-t border-gray-700 pt-8 mb-8">
          <h3 className="font-serif font-bold text-white text-lg mb-4">Related Websites</h3>
          <div className="flex flex-wrap gap-4">
            {externalLinks.relatedWebsites.map((link) => (
              <a
                key={link.url}
                href={link.url}
                rel="noopener noreferrer"
                target="_blank"
                className="text-sm text-gray-400 hover:text-gold transition-colors"
                title={link.description}
              >
                {link.name} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto border-t border-gray-700 pt-8 text-center text-xs text-gray-500">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved. | Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
