import { useState, useEffect } from 'react';
import logoImg from '../assets/logo 2.png';
import useMagnetic from '../hooks/useMagnetic';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Heritage', href: '#about' },
  { label: 'Ritual', href: '#story' },
  { label: 'Slow Bar', href: '#restaurant' },
  { label: 'Lounge', href: '#banquet' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ctaRef = useMagnetic(0.22);

  /* Detect scroll past 50px */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (window.lenis) {
      if (menuOpen) window.lenis.stop();
      else window.lenis.start();
    } else {
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    }
    return () => {
      if (window.lenis) window.lenis.start();
      else document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (window.lenis) {
      window.lenis.scrollTo(href, { offset: -30 });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* ── Navbar ── */}
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">

          {/* Logo — left */}
          <a href="#home" className="navbar__logo" onClick={(e) => handleLinkClick(e, '#home')}>
            <img src={logoImg} alt="Nilgiri Logo" className="navbar__logo-image" />
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
            ref={ctaRef}
            href="#contact"
            className="navbar__cta"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Book Seat
          </a>

          {/* Hamburger — mobile only */}
          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
          </button>
        </div>
      </header>

      {/* ── Full-screen mobile menu overlay ── */}
      <div className={`mobile-overlay${menuOpen ? ' mobile-overlay--open' : ''}`} aria-hidden={!menuOpen}>
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
            Book Seat
          </a>
        </nav>
      </div>
    </>
  );
}
