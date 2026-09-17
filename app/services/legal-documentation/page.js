import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Real Estate Legal And Documentation Services by Prosperty',
  description: 'Navigating Property Legalities with Expertise. Title verification, registration, compliance, and dispute resolution.',
}

export default function LegalDocumentationPage() {
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
                <span>Legal & Documentation</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Real Estate Legal And Documentation Services by Prosperty
              </h1>
              <p className="text-base md:text-lg mt-6 opacity-85">Navigating Property Legalities with Expertise</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-12 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Our Legal Services
              </h2>

              <div className="space-y-6">
                <div className="bg-[#faf8f4] p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">1.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Title Verifications</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Ensuring the property boasts a clear, dispute-free title with complete ownership verification.</p>
                </div>

                <div className="bg-[#faf8f4] p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">2.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Property Registration</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Handling residential and commercial property registration aligned with local and national guidelines.</p>
                </div>

                <div className="bg-[#faf8f4] p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">3.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Legal Compliance</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Navigating Indian property laws specific to Chennai's market with expert legal guidance.</p>
                </div>

                <div className="bg-[#faf8f4] p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">4.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Customized Documentation</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Preparing sale agreements and lease documents tailored to individual situations and requirements.</p>
                </div>

                <div className="bg-[#faf8f4] p-6 rounded-lg border border-[#e8e1d6]">
                  <div className="flex gap-4 mb-4">
                    <span className="text-[#ff8528] font-bold text-2xl flex-shrink-0">5.</span>
                    <h3 className="text-lg font-bold text-[#053384]">Dispute Resolution</h3>
                  </div>
                  <p className="text-gray-600 ml-10">Offering legal support for property disputes in Chennai with professional counsel and representation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="w-full py-12 md:py-20 bg-[#faf8f4]">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-12 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Why Choose Prosperty for Legal Services?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg text-center">
                  <div className="text-4xl text-[#ff8528] mb-4">✓</div>
                  <h3 className="text-lg font-bold text-[#053384] mb-3">Expertise</h3>
                  <p className="text-gray-600">Expertise in residential and commercial property laws with proven track record.</p>
                </div>
                <div className="bg-white p-8 rounded-lg text-center">
                  <div className="text-4xl text-[#ff8528] mb-4">✓</div>
                  <h3 className="text-lg font-bold text-[#053384] mb-3">Transparency</h3>
                  <p className="text-gray-600">Transparency throughout all procedures and documentation processes.</p>
                </div>
                <div className="bg-white p-8 rounded-lg text-center">
                  <div className="text-4xl text-[#ff8528] mb-4">✓</div>
                  <h3 className="text-lg font-bold text-[#053384] mb-3">Customized Solutions</h3>
                  <p className="text-gray-600">Customized solutions for unique client needs and specific situations.</p>
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
                Connect With Prosperty's Real Estate Lawyers Now!
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Get professional legal guidance for your real estate transactions.
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
