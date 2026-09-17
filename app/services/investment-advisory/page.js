import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Real Estate Investment Advisory Services | Prosperty',
  description: 'Your Strategic Partner in Profitable Real Estate Ventures. Data-driven insights, portfolio management, and risk assessment.',
}

export default function InvestmentAdvisoryPage() {
  return (
    <>
      <Header />

      <div className="w-full">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 bg-gradient-to-r from-[#053384] to-[#0a1f4d] text-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <div className="flex items-center gap-2 text-sm md:text-base mb-6">
                <a href="/" className="hover:opacity-80 transition">Home</a>
                <span>›</span>
                <a href="#services" className="hover:opacity-80 transition">Services</a>
                <span>›</span>
                <span>Investment Advisory</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Real Estate Investment Advisory Services
              </h1>
              <p className="text-base md:text-lg mt-6 opacity-85">Your Strategic Partner in Profitable Real Estate Ventures</p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Embarking on Your Real Estate Investment Journey
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Embarking on a real estate investment journey requires more than just capital – it necessitates guidance, extensive market knowledge, and strategic foresight. At Prosperty, our consortium of industry stalwarts – comprising industry veterans, financial experts, legal professionals, and market analysts – work in tandem to navigate this landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-20 bg-[#faf8f4]">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-12 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Real Estate Market Analysis & Portfolio Management
              </h2>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg border border-[#e8e1d6]">
                  <h3 className="text-2xl font-bold text-[#053384] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    1. Real Estate Market Analysis
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Data-Driven Insights</h4>
                      <p className="text-gray-600">Navigate the landscape with comprehensive market insights backed by data and rigorous analysis.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Predictive Analysis</h4>
                      <p className="text-gray-600">Gauge future market trends with predictive modeling, giving you a competitive advantage.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg border border-[#e8e1d6]">
                  <h3 className="text-2xl font-bold text-[#053384] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    2. Portfolio Management
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Strategic Planning</h4>
                      <p className="text-gray-600">Meticulous planning aligned with your financial goals and investment objectives.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Diversification</h4>
                      <p className="text-gray-600">Spread risk across varied real estate segments to build a resilient and profitable portfolio.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg border border-[#e8e1d6]">
                  <h3 className="text-2xl font-bold text-[#053384] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    3. Risk Assessment & Mitigation
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Informed Decisions</h4>
                      <p className="text-gray-600">Detailed risk assessments for calculated investment moves backed by thorough analysis.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Safety First</h4>
                      <p className="text-gray-600">Proactive strategies to navigate potential pitfalls and protect your capital.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-20 bg-gradient-to-r from-[#053384] to-[#0a1f4d] text-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Ready to Redefine Your Real Estate Investment Journey?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Dive in with Prosperty Advisors. Contact us today.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href="tel:+919500013446" className="bg-[#ff8528] hover:bg-[#ff9d4d] text-white font-bold py-3 px-8 rounded-lg transition">
                  Call: +91 9500013446
                </a>
                <a href="mailto:crm@propertyrealestate.com" className="bg-white text-[#053384] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
