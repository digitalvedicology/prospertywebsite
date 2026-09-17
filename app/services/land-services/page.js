import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Land Real Estate Services by Prosperty',
  description: 'Unraveling the Complexities of Land Transactions. Identification, acquisition, leasing, development, and investment advisory.',
}

export default function LandServicesPage() {
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
                <span>Land Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Land Real Estate Services by Prosperty
              </h1>
              <p className="text-base md:text-lg mt-6 opacity-85">Unraveling the Complexities of Land Transactions</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Land: A Prized Possession Symbolizing Wealth and Growth
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Land represents one of the most valuable long-term investments. Yet, the landscape of land transactions can often seem complex. At Prosperty, we partner with industry-leading experts to help you make informed land decisions while mitigating risks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="w-full py-12 md:py-20 bg-[#faf8f4]">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-12 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Premier Land Real Estate Services by Prosperty
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">1.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Land Identification & Acquisition</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Assistance finding suitable parcels for residential, commercial, or agricultural purposes that match your requirements.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">2.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Sales & Marketing of Land Assets</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Leveraging our network to attract buyers and maximize asset returns on your land investment.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">3.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Land Leasing Solutions</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Drafting lease agreements and managing legal requirements for structured land leasing arrangements.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">4.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Land Utilization & Development Consultation</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Guidance on maximizing land potential through strategic development and optimization.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">5.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Documentation & Compliance</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Ensuring regulatory adherence and proper paperwork with comprehensive compliance support.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">6.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Land Investment Advisory</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Market analysis and investment insights to identify emerging land opportunities and guide portfolio decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-12 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Why Prosperty for Land Services?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#faf8f4] p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-[#053384] mb-4">Specialized Expertise</h3>
                  <p className="text-gray-600">Deep knowledge of land transactions, agricultural holdings, and urban development potential across Chennai.</p>
                </div>
                <div className="bg-[#faf8f4] p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-[#053384] mb-4">End-to-End Solutions</h3>
                  <p className="text-gray-600">From identification through compliance and utilization – we handle every aspect of your land journey.</p>
                </div>
                <div className="bg-[#faf8f4] p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-[#053384] mb-4">Strategic Partnerships</h3>
                  <p className="text-gray-600">Access to a network of landowners, developers, and investors with exclusive opportunities.</p>
                </div>
                <div className="bg-[#faf8f4] p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-[#053384] mb-4">Value Maximization</h3>
                  <p className="text-gray-600">Strategies ensuring optimal returns whether holding, leasing, developing, or selling land assets.</p>
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
                Connect with Prosperty Now!
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Discover land opportunities and expert guidance tailored to your goals.
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
