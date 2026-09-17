import Header from '@/components/Header'
import Footer from '@/components/Footer'

const teamMembers = [
  {
    name: 'Ms. Bina Aditya',
    title: 'A Pillar of Expertise in Real Estate',
    bio: 'Guiding PROSPERTY with over 15 years of unmatched expertise in the real estate industry, Ms. Bina Aditya is the dynamic force behind our real estate operations. She leads a robust team of advisors and consultants, with an uncanny ability to spot and harness novel opportunities in the Indian real estate landscape. Central to Bina\'s leadership philosophy is an unwavering commitment to customer service, a principle she instils throughout our organization.',
    details: [
      'Began her career in the hospitality domain with the esteemed Taj Group of Hotels.',
      'Co-piloted a thriving garment manufacturing and export business, bridging premier buyers including Gap, Banana Republic, and Polo Ralph Lauren with renowned manufacturers.',
      'Over two decades of experience in the apparel and real estate industry.',
      'Partner & head of client management at Prosperty, overseeing operations and client relationships.'
    ]
  },
  {
    name: 'Mr. Praveen Saanker',
    title: 'Crafting Financial Legacies',
    bio: 'As a renowned Family Office Advisor, Mr Praveen Saanker has forged a legacy of guiding Ultra High Net Worth clients globally. His multifaceted expertise spans Finance, Real Estate Portfolio Management, Asset Reconstruction, Wealth Management, Investment Banking, REITs, and Psychology. A proud alumnus of the University of Canterbury with a Doctorate in Psychology.',
    details: [
      'Primary focus on steering family business magnates and upcoming leaders.',
      'Offers expertise on family constitutions, assets, and investment trajectories.',
      'Senior Vice President of Wealth Management and Premier Banking at HSBC Bank.',
      'Founding Director of Strategic Solutions for ASK Group\'s Family Office Practice.',
      'Global tenure in Private Banking and Family Wealth Advisory.',
      'Specialization in Estate Planning and Risk Management.'
    ]
  },
  {
    name: 'Ms. P. Anitha',
    title: 'Chartered Accountant: A Luminary in Real Estate Taxation',
    bio: 'As the driving force behind "ANITHA & CO", Ms. P. Anitha, a distinguished Chartered Accountant, has solidified her position as a leading authority in Accounting, Auditing, and Tax Advisory Services. With unparalleled expertise in real estate taxation garnered over more than twenty years, she exemplifies unmatched proficiency in the field.',
    details: [
      'Over 20 years of specialized expertise in real estate taxation.',
      'Leads a team of adept Chartered Accountants offering client-centric services.',
      'Expertise in Corporate and Tax consultancy.',
      'Proficient in registering diverse entities: Firms, Companies, Trusts, Societies, Co-operative Societies.',
      'Serves Construction, Real Estate, Manufacturing, Mining, Healthcare, IT, Education, and more.',
      'Specializes in tax audit services related to property and real estate law.'
    ]
  },
  {
    name: 'A&N Care Solicitors',
    title: 'A Legacy of Excellence in Real Estate Law',
    bio: 'Founded by the esteemed trio S. Nirmal Aditya, Arun Saravanan, and Narasimha Varman L, A&N Care Solicitors have carved a niche for themselves in delivering precise and efficient legal solutions to a diverse clientele. Their team comprises seasoned independent attorneys and legal counsels with over 15 years of unparalleled mastery in real estate law.',
    details: [
      '15+ years of expertise in real estate law and legal solutions.',
      'Team enriched with seasoned independent attorneys and respected legal counsels.',
      'Successfully represented banks, real estate entities, startups, and corporations.',
      'Expertise spanning intricate legal terrains and real estate transactions.',
      'Commitment to pro bono legal services and Public Interest litigation.',
      'Trusted advisors for individuals, corporates, and public sector entities.'
    ]
  }
]

export const metadata = {
  title: 'Our Team — Prosperty Real Estate Advisors',
  description: 'Meet the expert team at Prosperty Real Estate Advisors. Discover the professionals reshaping real estate in Chennai with 15+ years of combined expertise.',
}

export default function TeamPage() {
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
                <span>Our Team</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Our Team
              </h1>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="w-full py-12 md:py-20 bg-white">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }} className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#053384] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  The Prosperty Team: Where Expertise Meets Excellence
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                    Welcome to the Prosperty Team, the cornerstone of our success and dedication to bringing transformative real estate experiences to our clients. Each member of our distinguished team embodies a unique blend of passion, expertise, and commitment, ensuring that you receive unparalleled service every step of the way.
                  </p>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                    From seasoned real estate veterans to astute financial strategists, our ensemble is meticulously curated to cater to every nuance of your property journey. As you delve deeper into our team's profiles, you'll discover the depth of knowledge, experience, and innovation that drives Prosperty forward.
                  </p>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We invite you to meet the minds that are redefining real estate, one property at a time.
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                  alt="Prosperty Team"
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="w-full py-12 md:py-20 bg-[#faf8f4]">
          <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%' }}>
              <div className="space-y-12">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-[#e8e1d6]">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#053384] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {member.name}
                    </h3>
                    <h4 className="text-lg font-semibold text-[#ff8528] mb-6">{member.title}</h4>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {member.details.map((detail, detailIdx) => (
                        <div key={detailIdx} className="flex gap-3">
                          <span className="text-[#ff8528] font-bold text-lg flex-shrink-0 mt-1">•</span>
                          <p className="text-gray-600">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Closing Statement */}
              <div className="mt-12 bg-white p-8 rounded-lg border-l-4 border-[#ff8528]">
                <p className="text-gray-700 italic leading-relaxed text-lg">
                  The Prosperty Team represents more than just individual expertise – it's a collective commitment to transforming your real estate aspirations into reality. With decades of combined experience across real estate, finance, law, and wealth management, we stand ready to guide you through every step of your property journey.
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
