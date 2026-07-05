import './Footer.css';

const MINI_GALLERY = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100',
  'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=100',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100',
  'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=100',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100',
  'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=100',
];

export default function Footer() {
  const handleScrollClick = (e, id) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(id);
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      {/* ── Top Strip ── */}
      <div className="footer__strip">
        <div className="container footer__strip-inner">
          <span className="footer__strip-time">
            Brewing Daily: 08:30 AM – 10:30 PM
          </span>
          <div className="footer__socials">
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="container">
        <div className="footer__main">
          {/* Column 1: Brand */}
          <div className="footer__col">
            <div className="footer__brand">
              <span className="footer__logo">Nilgiri</span>
              <span className="footer__tagline">Cafe &amp; Slow Bar</span>
            </div>
            <p className="footer__desc">
              Sourcing shade-grown volcanic estate beans and single-origin tea leaves to cultivate a quiet, sensory dining refuge.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Explore</h4>
            <ul className="footer__links">
              <li><a href="#about" onClick={(e) => handleScrollClick(e, '#about')}>Our Heritage</a></li>
              <li><a href="#story" onClick={(e) => handleScrollClick(e, '#story')}>The Story</a></li>
              <li><a href="#restaurant" onClick={(e) => handleScrollClick(e, '#restaurant')}>The Slow Bar</a></li>
              <li><a href="#banquet" onClick={(e) => handleScrollClick(e, '#banquet')}>Tasting Lounge</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollClick(e, '#contact')}>Reserve Seat</a></li>
            </ul>
          </div>

          {/* Column 3: Menus */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Catalogs</h4>
            <ul className="footer__links">
              <li>
                <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/sample.pdf" download="Nilgiri_Slow_Bar_Menu.pdf">
                  Brewing Menu
                </a>
              </li>
              <li>
                <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/sample.pdf" download="Nilgiri_Pastry_Menu.pdf">
                  Artisanal Pastries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Gallery */}
          <div className="footer__col">
            <h4 className="footer__col-title">Visuals</h4>
            <div className="footer__mini-gallery">
              {MINI_GALLERY.map((src, i) => (
                <div key={i} className="footer__mini-img">
                  <img src={src} alt="Gallery thumbnail" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer__bottom">
          <div className="footer__bottom-divider" />
          <p className="footer__copyright">
            &copy; 2026 Nilgiri Cafe &amp; Slow Bar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
