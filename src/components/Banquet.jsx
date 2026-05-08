import './Banquet.css';

const AMENITIES = [
  'Air Conditioned Hall',
  'Audio-Visual Equipment',
  'Elevator (Lift)',
  'Stage',
  'Power Backup',
  'Ample Parking',
  'Sofa Seating',
  'Restaurant On-site'
];

const EVENTS = [
  'Wedding Reception',
  'Ring Ceremony',
  'Wedding Anniversary',
  'Birthday Celebration',
  'Kiddy Party',
  'Corporate Event',
  'Get Togethers',
  'Other Events'
];

export default function Banquet() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="banquet" className="banquet">
      <div className="container">
        {/* ── Top Section ── */}
        <div className="banquet__header">
          <span className="banquet__label">The Elegance</span>
          <h2 className="banquet__heading">Host Your Perfect Event at Nilgiri</h2>
          <p className="banquet__subtext">
            From intimate gatherings to grand celebrations, our banquet hall accommodates up to 1000 guests with world-class amenities and seamless event management.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="banquet__cards">
          {/* Card 1 — Amenities */}
          <div className="banquet__card banquet__card--light">
            <h3 className="banquet__card-title">Amenities</h3>
            <div className="banquet__card-divider" />
            <ul className="banquet__list">
              {AMENITIES.map((item) => (
                <li key={item} className="banquet__list-item">
                  <svg className="banquet__list-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="banquet__list-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 — Events */}
          <div className="banquet__card banquet__card--dark">
            <h3 className="banquet__card-title">We Arrange Functions Like</h3>
            <div className="banquet__card-divider" />
            <ul className="banquet__list">
              {EVENTS.map((item) => (
                <li key={item} className="banquet__list-item">
                  <svg className="banquet__list-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" fill="#C8A96E" />
                  </svg>
                  <span className="banquet__list-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── CTA Button ── */}
        <div className="banquet__cta-wrap">
          <a
            href="#contact"
            className="banquet__cta"
            onClick={(e) => scrollTo(e, '#contact')}
          >
            Book Our Banquet
          </a>
        </div>
      </div>
    </section>
  );
}
