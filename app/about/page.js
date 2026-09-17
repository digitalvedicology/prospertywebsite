import Header from '@/components/Header'
import Footer from '@/components/Footer'

const services = [
  { title: 'Residential & Commercial Services', desc: 'We transform complex transactions into seamless experiences.' },
  { title: 'Real Estate Investment Advisory', desc: 'Navigate investments with insights backed by robust research.' },
  { title: 'Land Services', desc: 'Every plot, every acre, optimized and strategized for your benefit.' },
  { title: 'Valuation & Advisory', desc: 'Unveil the true worth of assets with our exhaustive market analyses.' },
  { title: 'Legal & Documentation', desc: 'Safeguarding your assets, ensuring compliance at every step.' },
  { title: 'Taxation Assistance', desc: 'Simplifying the complex web of real estate taxation.' },
  { title: 'Research Services', desc: 'Equip yourself with insights for Chennai\'s dynamic property market.' },
  { title: 'NRI Real Estate Services', desc: 'Bridging continents to bring global clientele closer to Indian real estate.' }
]

const pledges = [
  { title: 'Trustworthiness', desc: 'We value your trust, cherishing and nurturing it with every interaction.' },
  { title: 'Transparency', desc: 'Clear, concise, and candid – we believe in open dialogue.' },
  { title: 'Expertise', desc: 'With a seasoned team, expect nothing but the best.' },
  { title: 'Client-Centric Approach', desc: 'We don\'t just hear; we listen, internalize, and act.' },
  { title: 'Comprehensive Solutions', desc: 'Covering the spectrum of real estate needs with unmatched proficiency.' },
  { title: 'Timely Delivery', desc: 'We respect time – yours and ours.' },
  { title: 'Continuous Support', desc: 'Our commitment extends beyond transactions. We are your lifelong real estate ally.' }
]

export const metadata = {
  title: 'About Us – PROSPERTY',
  description: 'Learn about Prosperty Real Estate Advisors, our 20+ years of expertise, team of specialists, and commitment to real estate excellence in Chennai.',
}

export default function AboutPage() {
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
                <span>About Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                About Us
              </h1>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }} className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-[#fff5eb] text-[#ff8528] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  About Prosperty
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Crafting Real Estate Legacies
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  Enter the realm of Prosperty, where real estate becomes an art honed by time and expertise. Our blend includes seasoned real estate specialists, strategic investment bankers, and diligent chartered accountants. Additionally, we boast adept attorneys and proficient private wealth managers.
                </p>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  Each one of us is deeply embedded in every facet of real estate – be it transaction advisory, intricate financial nuances, the labyrinth of taxation, or the precision of laws.
                </p>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Bound by a fervour for real estate, we wear our collective experience of over two decades as our badge of honour. At Prosperty, your dreams intertwine with our legacy, shaped by experience, anchored by trust, and driven by an unwavering commitment to excellence.
                </p>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                  alt="Prosperty Real Estate Team"
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-20 bg-[#faf8f4]">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Our Real Estate Specialisation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                A Symphony of Services: Real estate, to us, is a vast symphony – and we've mastered every note. We root our specialization in years of hands-on experience and continuously evolve our expertise.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {services.map((service, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg border border-[#e8e1d6] hover:shadow-lg transition">
                    <div className="flex gap-3">
                      <span className="text-[#ff8528] font-bold text-xl flex-shrink-0">•</span>
                      <div>
                        <h3 className="text-lg font-bold text-[#053384] mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-8 rounded-lg border-l-4 border-[#ff8528]">
                <p className="text-gray-700 italic leading-relaxed">
                  With each service, we don't just aim to deliver; we aim to excel. Each solution is tailored, crafted with precision, and driven by our profound passion for real estate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Our Promise to You
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                Where Commitments Resonate: Real estate can be daunting. But with Prosperty by your side, every challenge turns into an opportunity. Our promise is a reflection of our core values.
              </p>

              <h3 className="text-2xl font-bold text-[#053384] mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Our Pledge to You:
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {pledges.map((pledge, idx) => (
                  <div key={idx} className="bg-[#faf8f4] p-6 rounded-lg border border-[#e8e1d6]">
                    <div className="flex gap-3">
                      <span className="text-[#ff8528] font-bold text-xl flex-shrink-0">✓</span>
                      <div>
                        <h4 className="text-lg font-bold text-[#053384] mb-2">{pledge.title}</h4>
                        <p className="text-gray-600">{pledge.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-white p-8 rounded-lg border-l-4 border-[#ff8528]">
                <p className="text-gray-700 italic leading-relaxed">
                  In essence, our promises are not mere words. They are the pillars we stand on, crafting an experience of unwavering excellence. With Prosperty, you aren't just choosing a service – you're embracing a partner who's with you, every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
