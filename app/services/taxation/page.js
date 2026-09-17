import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Real Estate Taxation with Prosperty Assistance',
  description: 'Expert Real Estate Taxation Assistance at Your Fingertips. Tax analysis, planning, capital gains, and compliance.',
}

export default function TaxationPage() {
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
                <span>Taxation</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Real Estate Taxation with Prosperty Assistance
              </h1>
              <p className="text-base md:text-lg mt-6 opacity-85">Expert Real Estate Taxation Assistance at Your Fingertips</p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Real Estate Taxation: Streamlined & Simplified with Prosperty
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Real estate taxation in India is complex, with multiple layers of compliance requirements, deduction opportunities, and optimization strategies. Prosperty is here to demystify this intricate realm, making it accessible and comprehensible for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Services */}
        <section className="w-full py-12 md:py-20 bg-[#faf8f4]">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-12 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Our Taxation Services
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">1.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Comprehensive Tax Analysis</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Deep examination of tax implications for your real estate transactions and holdings.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">2.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Tax Benefits Guidance</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Identifying opportunities to maximize financial returns and available tax advantages.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">3.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Efficient Tax Planning</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Strategic approaches to minimize liabilities while maintaining compliance with Indian tax laws.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">4.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Capital Gains Advisory</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Expert guidance on short-term and long-term capital gains during property sales.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">5.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Rental Income Taxation</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Specialized assistance for reporting rental income appropriately and managing deductions.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">6.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Tax Compliance & Filing</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Support for meeting deadlines and tax obligations with timely, accurate filing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-12 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Why Choose Prosperty for Real Estate Taxation?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-[#faf8f4] p-8 rounded-lg text-center">
                  <div className="text-4xl text-[#ff8528] mb-4">✓</div>
                  <h3 className="text-lg font-bold text-[#053384] mb-3">Specialized Expertise</h3>
                  <p className="text-gray-600">Chartered accountants with 20+ years specializing exclusively in real estate taxation.</p>
                </div>
                <div className="bg-[#faf8f4] p-8 rounded-lg text-center">
                  <div className="text-4xl text-[#ff8528] mb-4">✓</div>
                  <h3 className="text-lg font-bold text-[#053384] mb-3">Optimization Focus</h3>
                  <p className="text-gray-600">We identify legal tax advantages and strategies to minimize your tax liability.</p>
                </div>
                <div className="bg-[#faf8f4] p-8 rounded-lg text-center">
                  <div className="text-4xl text-[#ff8528] mb-4">✓</div>
                  <h3 className="text-lg font-bold text-[#053384] mb-3">Full Compliance</h3>
                  <p className="text-gray-600">Ensure timely, accurate filing and adherence to all regulatory requirements.</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg border-l-4 border-[#ff8528]">
                <p className="text-gray-700 italic leading-relaxed text-lg">
                  We are your partner in every step of the real estate taxation process, ensuring you navigate regulations with confidence and optimize your returns legally. With Prosperty by your side, you gain a financial partner who understands the intricacies of Indian real estate tax laws.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-20 bg-gradient-to-r from-[#053384] to-[#0a1f4d] text-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Ready to Navigate Real Estate Taxation with Ease?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Get in touch today and let our tax experts guide you through optimization and compliance.
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
