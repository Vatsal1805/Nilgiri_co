import './Banquet.css';

const AMENITIES = [
  'Acoustic Quiet Study Zones',
  'Estate Leaf & Bean Library',
  'Precision Temperature Pour-Over Bar',
  'Slow-Drip Cold Brew Towers',
  'Traditional Basalt Matcha Stone Mills',
  'Siphon Bar Tasting Stations',
  'Ergonomic Slow-Work Desks',
  'Private Sensory Tasting Alcoves'
];

const EVENTS = [
  'Sensory Coffee Cupping Sessions',
  'Traditional Matcha Whisking Classes',
  'Single-Origin Tea Pairings',
  'Artisanal Coffee Roasting Workshops',
  'Private Intellectual Salons',
  'Silent Creative Co-Working Hours',
  'Olfactory Flavour Profiling Labs',
  'Artisanal Pastry & Brew Pairings'
];

export default function Banquet() {
  const handleScrollClick = (e, id) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(id);
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="banquet" className="banquet" data-reveal="fade">
      <div className="container">
        {/* ── Top Section ── */}
        <div className="banquet__header" data-reveal="fade">
          <span className="section-label" style={{ color: 'var(--color-gold)' }}>The Lounge</span>
          <h2 className="banquet__heading">Tasting Lounge &amp; Coffee Lab</h2>
          <p className="banquet__subtext">
            A sanctuary designed for sensory exploration and quiet concentration. Enjoy rare micro-lots, explore tea archives, or attend workshops in a room curated for focus.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="banquet__cards">
          {/* Card 1 — Amenities */}
          <div className="banquet__card" data-reveal="left">
            <h3 className="banquet__card-title">Bespoke Features</h3>
            <div className="banquet__card-divider" />
            <ul className="banquet__list">
              {AMENITIES.map((item) => (
                <li key={item} className="banquet__list-item">
                  <svg className="banquet__list-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="banquet__list-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 — Events */}
          <div className="banquet__card" data-reveal="right">
            <h3 className="banquet__card-title">Signature Arrangements</h3>
            <div className="banquet__card-divider" />
            <ul className="banquet__list">
              {EVENTS.map((item) => (
                <li key={item} className="banquet__list-item">
                  <svg className="banquet__list-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" fill="var(--color-gold)" />
                  </svg>
                  <span className="banquet__list-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── CTA Button ── */}
        <div className="banquet__cta-wrap" data-reveal="scale">
          <a
            href="#contact"
            className="banquet__cta"
            onClick={(e) => handleScrollClick(e, '#contact')}
          >
            Book a Workshop Slot
          </a>
        </div>
      </div>
    </section>
  );
}
