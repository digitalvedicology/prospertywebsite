export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-charcoal text-white py-12 md:py-16 w-full">
      <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)' }}>
        <div className="mb-16 pb-12 border-b border-gray-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="footer-logo-wrapper">
              <img src="/indexassets/logo.png" alt="Prosperty Logo" className="h-16 w-auto object-contain" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">PROSPERTY</h2>
              <p className="text-gray-500 text-xs tracking-widest">Real Estate Advisory</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
            15+ years of trusted expertise in Chennai&apos;s dynamic real estate market. We deliver research-based
            solutions for residential, commercial, and investment advisory needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in navigating Chennai&apos;s dynamic real estate landscape with expertise and
              innovation.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xl">
              <li><a href="#home" className="text-gray-400 transition">Home</a></li>
              <li><a href="#services" className="text-gray-400 transition">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 transition">Projects</a></li>
              <li><a href="#about" className="text-gray-400 transition">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-xl">
              <li><a href="#services" className="text-gray-400 transition">Residential</a></li>
              <li><a href="#services" className="text-gray-400 transition">Commercial</a></li>
              <li><a href="#services" className="text-gray-400 transition">Investment Advisory</a></li>
              <li><a href="#services" className="text-gray-400 transition">NRI Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-400 text-sm leading-relaxed">
                  AP 676. H Block, 15th Street, Annanagar, Chennai, Tamilnadu, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--gold)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.058.3.1.605.1.92v1.82a24.896 24.896 0 015.572 2.062 24.9 24.9 0 015.572-2.062v-1.82c0-.315.042-.62.1-.92l-1.548-.773a1 1 0 01-.54-1.06l.74-4.435A1 1 0 0116.847 3h2.153a1 1 0 011 1v14a2 2 0 01-2 2H4a2 2 0 01-2-2V3z" />
                </svg>
                <a href="tel:+919500013446" className="text-gray-400 text-sm transition">
                  +91 9500013446
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--gold)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:crm@propertyrealestate.com" className="text-gray-400 text-sm transition">
                  crm@propertyrealestate.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">&copy; 2024 Prosperty Real Estate. All rights reserved.</p>
              <p className="text-gray-600 text-xs mt-2">
                Research-based Property Advisory | Chennai&apos;s Most Trusted Real Estate Partner
              </p>
            </div>

            <div className="flex items-center gap-6">
              {[
                ['LinkedIn', 'in'],
                ['Facebook', 'f'],
                ['Twitter', '𝕏'],
                ['Instagram', '📷'],
              ].map(([title, label]) => (
                <a
                  key={title}
                  href="#"
                  title={title}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition transform hover:scale-110"
                >
                  <span className="text-white text-lg">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
