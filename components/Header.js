export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home">
        <img
          src="/indexassets/logo.png"
          alt="Prosperty Logo"
          className="brand-logo"
          style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
        />
      </a>

      <nav className="nav">
        <a href="#home" className="nav-item">
          HOME
        </a>
        <a href="/about" className="nav-item">
          ABOUT US
        </a>
        <a href="/team" className="nav-item">
          OUR TEAM
        </a>

        <div className="nav-item nav-dropdown">
          <a href="#services">
            REAL ESTATE SERVICES <span className="dropdown-arrow">▼</span>
          </a>
          <div className="dropdown-menu">
            <a href="/services/residential">Residential Real Estate Services</a>
            <a href="/services/commercial">Commercial Real Estate Services</a>
            <a href="/services/investment-advisory">Real Estate Investment Advisory Services</a>
            <a href="/services/valuation">Real Estate Valuation & Advisory</a>
            <a href="/services/legal-documentation">Real Estate Legal And Documentation</a>
            <a href="/services/land-services">Land Real Estate Services</a>
            <a href="/services/taxation">Real Estate Taxation</a>
          </div>
        </div>

        <div className="nav-item nav-dropdown">
          <a href="#research">
            REAL ESTATE RESEARCH <span className="dropdown-arrow">▼</span>
          </a>
          <div className="dropdown-menu">
            <a href="#research/general">Real Estate Research Services</a>
            <a href="#research/residential">Residential Real Estate Research</a>
            <a href="#research/office">Commercial Office Space Research</a>
            <a href="#research/retail">Independent Commercial Retail Building Research</a>
            <a href="#research/commercial">Independent Commercial Office Building Research</a>
          </div>
        </div>

        <div className="nav-item nav-dropdown">
          <a href="#nri">
            NRI REAL ESTATE SERVICES <span className="dropdown-arrow">▼</span>
          </a>
          <div className="dropdown-menu">
            <a href="#nri/general">NRI Real Estate Services</a>
            <a href="#nri/residential">Residential Real Estate Services for NRIs</a>
            <a href="#nri/commercial">Commercial Real Estate Services for NRIs</a>
            <a href="#nri/land">Land And Agricultural Services for NRIs</a>
            <a href="#nri/legal">Documentation & Legal Due Diligence</a>
            <a href="#nri/repatriation">Repatriation Services for NRIs</a>
          </div>
        </div>

        <a href="#blog" className="nav-item">
          OUR BLOG
        </a>
        <a href="#contact" className="nav-item">
          CONTACT
        </a>
      </nav>
    </header>
  )
}
