import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Residential Real Estate Services by Prosperty in Chennai',
  description: 'Experience Prosperty\'s Comprehensive Residential Real Estate Solutions in Chennai. Expert buying, selling, leasing, and market insights.',
}

export default function ResidentialServicesPage() {
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
                <span>Residential Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Residential Real Estate Services by Prosperty in Chennai
              </h1>
            </div>
          </div>
        </section>

        {/* Find Your Perfect Home */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Find Your Perfect Home with Prosperty in Chennai
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Your home is more than just a property; it's where memories are made, dreams are nurtured, and your future unfolds. At Prosperty, we understand the significance of finding the perfect residential property that aligns with your lifestyle, aspirations, and budget.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  With our comprehensive residential real estate services in Chennai, we seamlessly blend market expertise with personalized attention, ensuring your journey to homeownership is smooth, informed, and successful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Residential Services */}
        <section className="w-full py-12 md:py-20 bg-[#faf8f4]">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-12 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Residential Real Estate Services by Prosperty Real Estate Advisors Chennai
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">1.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Personalized Property Selection</h3>
                  </div>
                  <p className="text-gray-600 ml-10">We understand that every client has unique preferences and requirements. Our team curates personalized property selections tailored to your lifestyle, budget, and investment goals.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">2.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Residential Buying Guidance</h3>
                  </div>
                  <p className="text-gray-600 ml-10">From initial discussions to handover, we guide you through every step of the residential buying process with expert advice and transparent communication.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">3.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Property Selling</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Maximize your property's value through our vast network and proven marketing strategies, ensuring optimal returns and a smooth transaction.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">4.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Leasing Services</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Whether you're a landlord or tenant, we provide leasing solutions with thorough tenant verification and comprehensive market insights for fair terms.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">5.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Documentation Assistance</h3>
                  </div>
                  <p className="text-gray-600 ml-10">We handle all legal formalities and documentation requirements with precision, ensuring compliance and protecting your interests throughout the transaction.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">6.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Market Insights</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Make informed decisions backed by genuine market data covering local property valuations, emerging residential areas, and neighborhood dynamics.</p>
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
                Why Prosperty Is Chennai's Top Choice for Residential Real Estate Services
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#faf8f4] p-8 rounded-lg text-center">
                  <div className="text-4xl text-[#ff8528] mb-4">✓</div>
                  <h3 className="text-lg font-bold text-[#053384] mb-3">Expert Guidance</h3>
                  <p className="text-gray-600">Our seasoned advisors bring years of residential market expertise and insider knowledge to every transaction.</p>
                </div>
                <div className="bg-[#faf8f4] p-8 rounded-lg text-center">
                  <div className="text-4xl text-[#ff8528] mb-4">✓</div>
                  <h3 className="text-lg font-bold text-[#053384] mb-3">Transparent Process</h3>
                  <p className="text-gray-600">We believe in clear communication and transparency at every stage of your residential journey.</p>
                </div>
                <div className="bg-[#faf8f4] p-8 rounded-lg text-center">
                  <div className="text-4xl text-[#ff8528] mb-4">✓</div>
                  <h3 className="text-lg font-bold text-[#053384] mb-3">Tailored Solutions</h3>
                  <p className="text-gray-600">Every client is unique. We personalize our services to match your specific needs and aspirations.</p>
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
                Take the Next Step Towards Your Dream Home with Prosperty
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Connect with our residential real estate experts today and discover your perfect property.
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
