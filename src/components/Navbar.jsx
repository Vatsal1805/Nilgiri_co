import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Restaurant', href: '#restaurant' },
  { label: 'Banquet', href: '#banquet' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Detect scroll past 50px */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Navbar ── */}
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">

          {/* Logo — left */}
          <a href="#home" className="navbar__logo" onClick={(e) => handleLinkClick(e, '#home')}>
            <span className="navbar__logo-name">Nilgiri</span>
            <span className="navbar__logo-sub">Restaurant &amp; Banquet</span>
          </a>

          {/* Desktop nav links — center */}
          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="navbar__link"
                onClick={(e) => handleLinkClick(e, href)}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA — right */}
          <a
            href="#contact"
            className="navbar__cta"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Book Now
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
          </button>
        </div>
      </header>

      {/* ── Full-screen mobile menu overlay ── */}
      <div className={`mobile-overlay${menuOpen ? ' mobile-overlay--open' : ''}`} aria-hidden={!menuOpen}>
        {/* Close (X) button */}
        <button
          className="mobile-overlay__close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <nav className="mobile-overlay__nav" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="mobile-overlay__link"
              onClick={(e) => handleLinkClick(e, href)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-overlay__cta"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Book Now
          </a>
        </nav>
      </div>
    </>
  );
}
