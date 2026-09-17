const leftItems = [
  {
    order: 1,
    num: '01',
    title: 'Real Estate Advisory',
    text: 'Our team at Prosperty guides you through every step of your real estate journey, ensuring you make the right property decisions.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5z" />
      </>
    ),
  },
  {
    order: 3,
    num: '03',
    title: 'Rental Assistance',
    text: 'We match your property with the right tenant or find you the perfect property to rent.',
    icon: (
      <>
        <circle cx="8" cy="15" r="4" />
        <path d="M10.9 12.1 20 3" />
        <path d="m16.5 6.5 3 3" />
        <path d="m14 9 2 2" />
      </>
    ),
  },
  {
    order: 5,
    num: '05',
    title: 'Property Research',
    text: 'Prosperty Real Estate Consultants dive deep into market analytics, offering insights that pave the way for informed decisions.',
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M8 17v-5" />
        <path d="M12.5 17V8" />
        <path d="M17 17v-7" />
      </>
    ),
  },
]

const rightItems = [
  {
    order: 2,
    num: '02',
    title: 'Property Purchase and Sales Support',
    text: 'From identifying potential properties to managing the intricate sales process, our experts take the hassle out of transactions.',
    icon: (
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9v11.5h13V9" />
        <path d="M10 20.5v-6h4v6" />
      </>
    ),
  },
  {
    order: 4,
    num: '04',
    title: 'Legal and Financial Advisory',
    text: 'Navigate the complexities of real estate legalities and financial aspects with our specialized consultants.',
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="M8 21h8" />
        <path d="M4 7h16" />
        <path d="M6 7 3 14a3 3 0 0 0 6 0z" />
        <path d="M18 7l-3 7a3 3 0 0 0 6 0z" />
      </>
    ),
  },
  {
    order: 6,
    num: '06',
    title: 'Property Tax Advisory',
    text: 'Simplify your property tax obligations with our expert guidance and support.',
    icon: (
      <>
        <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z" />
        <path d="M14 3v5h5" />
        <path d="m9 16.5 6-6" />
        <circle cx="9.5" cy="11" r="1" />
        <circle cx="14.5" cy="16" r="1" />
      </>
    ),
  },
]

function ServiceItem({ item, side }) {
  const num = <span className="cs-num">{item.num}</span>
  const icon = (
    <span className="cs-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{item.icon}</svg>
    </span>
  )

  return (
    <div className={`cs-item cs-${side}`} style={{ '--o': item.order }}>
      <div className="cs-item-head">
        {side === 'left' ? num : icon}
        <h3>{item.title}</h3>
        {side === 'left' ? icon : num}
      </div>
      <p>{item.text}</p>
    </div>
  )
}

export default function ComprehensiveServices() {
  return (
    <section className="cs-section w-full">
      <div className="w-full" style={{ padding: '0 clamp(24px,5vw,72px)' }}>
        <div className="cs-head">
          <h2 className="cs-title">Comprehensive Real Estate Services by Prosperty</h2>
          <div className="cs-divider" aria-hidden="true">
            <span></span>
            <svg viewBox="0 0 24 24">
              <path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 6.9L12 17.3 5.8 21l1.6-6.9L2 9.3l7.1-.7z" />
            </svg>
            <span></span>
          </div>
        </div>

        <div className="cs-grid">
          <div className="cs-col">
            {leftItems.map((item) => (
              <ServiceItem key={item.num} item={item} side="left" />
            ))}
          </div>

          <div className="cs-media">
            <div className="cs-frame">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=900&h=1200&auto=format&fit=crop"
                alt="Elegant modern home interior"
                loading="lazy"
              />
            </div>
            <div className="cs-badge">
              <strong>15+</strong>
              <span>
                Years of trusted
                <br />
                expertise in Chennai
              </span>
            </div>
          </div>

          <div className="cs-col">
            {rightItems.map((item) => (
              <ServiceItem key={item.num} item={item} side="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
