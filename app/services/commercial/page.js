import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Commercial Real Estate Services | Prosperty Advisors Chennai',
  description: 'Crafting Commercial Success: Real Estate Services Tailored for Modern Businesses. Office spaces, retail outlets, warehouse solutions.',
}

export default function CommercialServicesPage() {
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
                <span>Commercial Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Commercial Real Estate Services : Prosperty Advisors Chennai
              </h1>
              <p className="text-lg md:text-xl opacity-90 mt-4">Crafting Commercial Success: Real Estate Services Tailored for Modern Businesses</p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Comprehensive Commercial Real Estate Services in Chennai by Prosperty Advisors
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  In the dynamic world of commercial real estate, the right location and strategic guidance can make all the difference. Whether you're expanding your business footprint, seeking optimal retail locations, or building your industrial logistics network, Prosperty brings unmatched expertise and market intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Services */}
        <section className="w-full py-12 md:py-20 bg-[#faf8f4]">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-12 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Our Commercial Services
              </h2>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg border border-[#e8e1d6]">
                  <h3 className="text-2xl font-bold text-[#053384] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    1. Office Spaces
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Buying Prime Office Locations</h4>
                      <p className="text-gray-600">Discover office spaces that reflect your brand stature and facilitate business growth.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Selling Through Our Network</h4>
                      <p className="text-gray-600">Leverage our extensive network to achieve optimal returns on your property investment.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Leasing Options</h4>
                      <p className="text-gray-600">Flexible leasing solutions for businesses of all sizes with market-aligned terms.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg border border-[#e8e1d6]">
                  <h3 className="text-2xl font-bold text-[#053384] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    2. Retail Outlets
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Acquiring Retail Spaces</h4>
                      <p className="text-gray-600">Identify retail spaces in high-traffic areas perfect for customer engagement and sales growth.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Selling With Market Insights</h4>
                      <p className="text-gray-600">Use our market intelligence to maximize value and attract qualified buyers.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Leasing in Prime Marketplaces</h4>
                      <p className="text-gray-600">Access premium retail spaces in bustling marketplaces with strong footfall.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg border border-[#e8e1d6]">
                  <h3 className="text-2xl font-bold text-[#053384] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    3. Warehouse & Industrial Zones
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Strategic Location Identification</h4>
                      <p className="text-gray-600">Find strategic locations optimized for storage, production, and industrial operations.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Selling to Qualified Investors</h4>
                      <p className="text-gray-600">Connect with serious investors and achieve competitive pricing through our network.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#053384] mb-2">Logistics Optimization</h4>
                      <p className="text-gray-600">Comprehensive leasing and advisory services for supply chain efficiency.</p>
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
                Contact Prosperty Advisors Chennai Today!
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Let our expertise guide your decisions, ensuring every step is a stride towards success.
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
