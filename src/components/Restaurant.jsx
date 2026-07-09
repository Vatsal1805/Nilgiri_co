import './Restaurant.css';
import slowBarImg from '../assets/coffee&drinks/nilgiri-filter-coffee.webp';

export default function Restaurant() {
  return (
    <section id="restaurant" className="restaurant">
      <div className="restaurant__inner">

        {/* ── Left column — Text ── */}
        <div className="restaurant__text" data-reveal="left">
          <span className="restaurant__label">The Bar</span>

          <h2 className="restaurant__heading">The Slow Bar</h2>

          <div className="restaurant__divider" />

          <p className="restaurant__paragraph">
            A precision brewing experience. Our slow bar hosts small-batch hand pour-overs, glass siphons, and slow-drip cold brew columns. Sit down and converse with our artisans as they articulate the unique flavor profiles of our high-altitude estate coffee and single-origin teas.
          </p>

          {/* Opening Hours card */}
          <div className="restaurant__hours-card" data-reveal="scale">
            <span className="restaurant__hours-title">Brew Hours</span>

            <div className="restaurant__hours-row">
              <svg className="restaurant__hours-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="restaurant__hours-time">Morning &amp; Lunch: 08:30 AM – 4:30 PM</span>
            </div>

            <div className="restaurant__hours-row">
              <svg className="restaurant__hours-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="restaurant__hours-time">Sunset Slow Bar: 5:30 PM – 10:30 PM</span>
            </div>
          </div>

          {/* Download Menu CTA */}
          <a
            href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/sample.pdf"
            download="Nilgiri_Slow_Bar_Menu.pdf"
            className="restaurant__cta"
          >
            Download Brew Catalog
          </a>
        </div>

        {/* ── Right column — Image ── */}
        <div className="restaurant__image-wrap" data-reveal="right">
          <img
            src={slowBarImg}
            alt="Filter coffee brewing at Nilgiri Slow Bar"
            className="restaurant__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
