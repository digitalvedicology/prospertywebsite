'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Why should I choose Prosperty for my real estate needs?',
    answer:
      "Prosperty brings 15+ years of trusted expertise in Chennai's real estate market. We combine research-based insights with personalized service, offering comprehensive advisory across Residential, Commercial, and Industrial segments. Our track record speaks for itself with numerous satisfied clients and successful transactions.",
  },
  {
    question: 'Do you provide NRI real estate services?',
    answer:
      'Yes, Prosperty specializes in NRI Real Estate Services. We handle property transactions for Non-Resident Indians with complete legal support, documentation, regulatory compliance, and hassle-free processes. Our dedicated team ensures smooth acquisitions and investments for NRIs seeking properties in India.',
  },
  {
    question: 'What does real estate investment advisory involve?',
    answer:
      'Our Real Estate Investment Advisory services help you maximize returns through strategic property selection, market analysis, investment timing, portfolio diversification, and risk assessment. We provide data-driven recommendations tailored to your financial goals and investment profile.',
  },
  {
    question: 'How is property valuation conducted at Prosperty?',
    answer:
      'Our Real Estate Valuation & Advisory services employ comprehensive market analysis, comparative property studies, location assessment, and trend evaluation. We provide accurate valuations for purchase decisions, refinancing, taxation, and investment planning based on current market data and professional expertise.',
  },
  {
    question: 'What legal and documentation support does Prosperty provide?',
    answer:
      'Our Real Estate Legal & Documentation services handle title verification, document preparation, regulatory compliance, registration procedures, and legal risk assessment. We ensure all transactions are legally sound and properly documented to protect your interests throughout the entire process.',
  },
  {
    question: 'How does real estate taxation impact my investments?',
    answer:
      'Real estate taxation involves capital gains, TDS (Tax Deducted at Source), rental income taxation, and deduction planning. Our Real Estate Taxation services help optimize your returns through proper tax structuring, compliance management, and strategic planning to minimize tax burden while maximizing investment value.',
  },
  {
    question: "What makes Prosperty's research services unique?",
    answer:
      "Our Real Estate Research Services provide cutting-edge market intelligence, micro-market reports, absorption data, and pricing trends. We deliver data-driven insights that empower clients to make informed decisions, identify opportunities, and stay ahead in Chennai's competitive real estate landscape.",
  },
  {
    question: "How can I get started with Prosperty's services?",
    answer:
      "Contact us today for a free consultation. Our team will understand your specific real estate needs, goals, and budget. We'll provide tailored recommendations and a customized service plan. Reach out via phone at +91 9500013446 or email at crm@prospertyrealestate.com to begin your journey with Prosperty.",
  },
]

export default function FAQ() {
  const [activeFAQ, setActiveFAQ] = useState(null)

  return (
    <section className="py-8 md:py-10 bg-white w-full" id="faq">
      <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)' }}>
        <div className="text-center mb-12">
          <h2
            className="font-bold mb-6 fade-in"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.8rem,3.5vw,3rem)',
              fontWeight: 700,
              letterSpacing: '-1px',
              lineHeight: 1.25,
              color: '#053384',
            }}
          >
            FAQ&apos;s - Prosperty <span className="gold-text">Real Estate Chennai</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ fontSize: '13px', lineHeight: 1.9, color: '#666' }}>
            Find answers to common questions about our real estate services and consultancy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`faq-item bg-white rounded-2xl border-2 border-gray-100 overflow-hidden transition-all duration-300${
                activeFAQ === index ? ' active' : ''
              }`}
            >
              <button
                type="button"
                className="faq-header w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 text-left">{faq.question}</h3>
                <span className="faq-icon text-lg flex-shrink-0 ml-4">+</span>
              </button>
              <div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
                <p className="px-8 pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
