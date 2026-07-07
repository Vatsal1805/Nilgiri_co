import { useEffect, useRef } from 'react';
import useCanvasParticles from '../hooks/useCanvasParticles';
import useMagnetic from '../hooks/useMagnetic';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  // Bind the ambient glow particles via hook
  useCanvasParticles(canvasRef);

  // Magnetic button refs
  const exploreRef = useMagnetic(0.22);
  const loungeRef = useMagnetic(0.22);

  const handleScrollClick = (e, id) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(id);
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // GSAP Entrance Stagger (visual components)
    if (window.gsap) {
      const tl = window.gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });
      
      tl.fromTo('.hero__label', { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, 0.4)
        .fromTo('.hero__char', 
          { opacity: 0, y: 30, rotateX: -45, transformOrigin: '50% 50% -10px' }, 
          { opacity: 1, y: 0, rotateX: 0, stagger: 0.025, duration: 0.8, ease: 'back.out(1.2)' }, 
          0.6
        )
        .fromTo('.hero__divider', { scaleX: 0 }, { scaleX: 1, duration: 1 }, 1.1)
        .fromTo('.hero__subtext', { opacity: 0, y: 10 }, { opacity: 0.85, y: 0 }, 1.3)
        .fromTo('.hero__btn', { opacity: 0, y: 15 }, { opacity: 1, y: 0, stagger: 0.15 }, 1.5)
        .fromTo('.hero__scroll', { opacity: 0 }, { opacity: 1, duration: 1.2 }, 1.9);
    }
  }, []);

  const splitText = (text) => {
    return text.split(' ').map((word, wordIdx) => (
      <span key={wordIdx} className="hero__word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
        {word.split('').map((char, charIdx) => (
          <span key={charIdx} className="hero__char" style={{ display: 'inline-block' }}>
            {char}
          </span>
        ))}
        {wordIdx < text.split(' ').length - 1 && '\u00A0'}
      </span>
    ));
  };

  return (
    <section id="home" className="hero">
      {/* Drifting Steam Canvas Overlay via custom hook */}
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__overlay" />

      <div className="hero__content">
        <span className="hero__label">Welcome to Nilgiri Cafe</span>

        <h1 className="hero__heading">
          <span className="hero__heading-line">{splitText("Sourced from the Clouds")}</span>
          <span className="hero__heading-line">{splitText("Brewed for Quiet")}</span>
        </h1>

        <div className="hero__divider" />

        <p className="hero__subtext">
          Single-Origin Cloud-Forest Coffee &amp; Artisanal Estates Tea · Ahmedabad, India
        </p>

        <div className="hero__buttons">
          <a
            ref={exploreRef}
            href="#restaurant"
            className="hero__btn hero__btn--solid"
            onClick={(e) => handleScrollClick(e, '#restaurant')}
          >
            Explore Slow Bar
          </a>
          <a
            ref={loungeRef}
            href="#banquet"
            className="hero__btn hero__btn--outline"
            onClick={(e) => handleScrollClick(e, '#banquet')}
          >
            Tasting Lounge
          </a>
        </div>
      </div>

      {/* Scroll-down chevron */}
      <div className="hero__scroll" onClick={(e) => handleScrollClick(e, '#about')}>
        <svg
          className="hero__chevron"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C8A96E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
