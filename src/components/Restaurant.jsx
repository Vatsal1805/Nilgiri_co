import './Restaurant.css';

export default function Restaurant() {
  return (
    <section id="restaurant" className="restaurant">
      <div className="restaurant__inner">

        {/* ── Left column — Text ── */}
        <div className="restaurant__text">
          <span className="restaurant__label">The Convivial</span>

          <h2 className="restaurant__heading">Our Luxury Restaurant</h2>

          <div className="restaurant__divider" />

          <p className="restaurant__paragraph">
            Elevating your dining experience beyond the plate. Our attentive staff and
            carefully curated menu ensure every visit is a journey — from delectable
            starters and aromatic biryanis to decadent desserts.
          </p>

          {/* Opening Hours card */}
          <div className="restaurant__hours-card">
            <span className="restaurant__hours-title">Opening Hours</span>

            <div className="restaurant__hours-row">
              <svg className="restaurant__hours-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="restaurant__hours-time">Mon – Sun: 11:00 AM – 3:30 PM</span>
            </div>

            <div className="restaurant__hours-row">
              <svg className="restaurant__hours-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="restaurant__hours-time">6:30 PM – 11:00 PM</span>
            </div>
          </div>

          {/* Download Menu CTA */}
          <a
            href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/sample.pdf"
            download="Nilgiri_Menu.pdf"
            className="restaurant__cta"
          >
            Download Menu
          </a>
        </div>

        {/* ── Right column — Image ── */}
        <div className="restaurant__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800"
            alt="Signature dish at Nilgiri Restaurant"
            className="restaurant__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
