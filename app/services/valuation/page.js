import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Real Estate Valuation & Advisory by Prosperty Chennai',
  description: 'Deciphering True Property Value for Informed Decisions. Comprehensive market analysis and purpose-driven valuations.',
}

export default function ValuationPage() {
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
                <span>Valuation & Advisory</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Real Estate Valuation & Advisory by Prosperty Chennai
              </h1>
              <p className="text-base md:text-lg mt-6 opacity-85">Deciphering True Property Value for Informed Decisions</p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Comprehensive Real Estate Valuation Services by Prosperty Chennai
              </h2>

              <div className="space-y-6 mb-12">
                <div className="bg-[#faf8f4] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#053384] mb-3">When Purchasing</h3>
                  <p className="text-gray-600">Know the genuine worth of your desired property to make confident investment decisions.</p>
                </div>
                <div className="bg-[#faf8f4] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#053384] mb-3">When Selling</h3>
                  <p className="text-gray-600">Market your property at its true market value with confidence and strategic pricing.</p>
                </div>
                <div className="bg-[#faf8f4] p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-[#053384] mb-3">When Renting/Leasing</h3>
                  <p className="text-gray-600">Ensure a competitive yet profitable pricing strategy that maximizes returns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valuation Approach */}
        <section className="w-full py-12 md:py-20 bg-[#faf8f4]">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-12 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                How Prosperty Chennai Elevates Valuation Services
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-lg border border-[#e8e1d6]">
                  <h3 className="text-xl font-bold text-[#053384] mb-4">Comprehensive Market Analysis</h3>
                  <p className="text-gray-600">Thorough analysis of current market trends, comparable property sales, transaction history, and neighborhood evolution.</p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-[#e8e1d6]">
                  <h3 className="text-xl font-bold text-[#053384] mb-4">Purpose-Driven Valuations</h3>
                  <p className="text-gray-600">Specialized valuations tailored for litigation, insurance claims, mortgage purposes, and refinancing needs.</p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-[#e8e1d6]">
                  <h3 className="text-xl font-bold text-[#053384] mb-4">Technology Integration</h3>
                  <p className="text-gray-600">Modern technology and data-backed assessments that ensure accuracy and transparency in every evaluation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Prosperty */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-12 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Why Choose Prosperty Chennai for Real Estate Valuation?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#faf8f4] p-8 rounded-lg text-center">
                  <div className="text-4xl text-[#ff8528] mb-4">✓</div>
                  <h3 className="text-lg font-bold text-[#053384] mb-3">Trust & Transparency</h3>
                  <p className="text-gray-600">Complete transparency combined with rigorous methodologies and extensive market knowledge.</p>
                </div>
                <div className="bg-[#faf8f4] p-8 rounded-lg text-center">
                  <div className="text-4xl text-[#ff8528] mb-4">✓</div>
                  <h3 className="text-lg font-bold text-[#053384] mb-3">Team Prosperty</h3>
                  <p className="text-gray-600">Expert team with deep understanding of Chennai's real estate dynamics and market variations.</p>
                </div>
                <div className="bg-[#faf8f4] p-8 rounded-lg text-center">
                  <div className="text-4xl text-[#ff8528] mb-4">✓</div>
                  <h3 className="text-lg font-bold text-[#053384] mb-3">Quick Turnaround</h3>
                  <p className="text-gray-600">Efficient processes ensure timely valuations without compromising on quality and accuracy.</p>
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
                Contact Us Today!
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Take the first step towards comprehensive and accurate property valuation.
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
