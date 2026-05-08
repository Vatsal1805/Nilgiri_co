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
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* ── Top Strip ── */}
      <div className="footer__strip">
        <div className="container footer__strip-inner">
          <span className="footer__strip-time">
            Mon–Sun: 11:00 AM–3:30 PM &amp; 6:30 PM–11:00 PM
          </span>
          <div className="footer__socials">
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Pinterest">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 8"></path><path d="M3 8a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 16"></path><line x1="12" y1="12" x2="12" y2="12"></line></svg>
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
              <span className="footer__tagline">Restaurant &amp; Banquet</span>
            </div>
            <p className="footer__desc">
              Experience the finest dining and most elegant banquet facilities in Ahmedabad. We bring your celebrations to life.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Pages</h4>
            <ul className="footer__links">
              <li><a href="#about" onClick={(e) => scrollTo(e, '#about')}>About Us</a></li>
              <li><a href="#restaurant" onClick={(e) => scrollTo(e, '#restaurant')}>Restaurant</a></li>
              <li><a href="#banquet" onClick={(e) => scrollTo(e, '#banquet')}>Banquet</a></li>
              <li><a href="#gallery" onClick={(e) => scrollTo(e, '#gallery')}>Gallery</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Menus */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Menus</h4>
            <ul className="footer__links">
              <li>
                <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/sample.pdf" download="Nilgiri_Food_Menu.pdf">
                  Download Food Menu
                </a>
              </li>
              <li>
                <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/sample.pdf" download="Nilgiri_Party_Menu.pdf">
                  Download Party Menu
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Gallery */}
          <div className="footer__col">
            <h4 className="footer__col-title">Gallery</h4>
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
            &copy; 2025 Nilgiri Restaurant &amp; Banquet. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
