import { useEffect, useRef } from 'react';
import './About.css';
import aboutMainImg from '../assets/ambiance/ambiance-4.png';
import aboutSecImg from '../assets/coffee&drinks/nilgiri-pour-over.png';

export default function About() {
  const imageMainRef = useRef(null);
  const imageSecRef = useRef(null);

  const handleScrollClick = (e, id) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(id);
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // GSAP Scroll Parallax on Wrappers
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.to(imageMainRef.current, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

      window.gsap.to(imageSecRef.current, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }
  }, []);

  return (
    <section id="about" className="about">
      <div className="about__inner">

        {/* ── Left column — Images with reveal & parallax effects ── */}
        <div className="about__images" data-reveal="left">
          <div ref={imageMainRef} className="about__img-wrapper main-wrapper">
            <img
              src={aboutMainImg}
              alt="Nilgiri café ambiance and heritage space"
              className="about__img-main"
              loading="lazy"
            />
          </div>
          <div ref={imageSecRef} className="about__img-wrapper secondary-wrapper">
            <img
              src={aboutSecImg}
              alt="Artisan pour-over brewing at Nilgiri Slow Bar"
              className="about__img-secondary"
              loading="lazy"
            />
          </div>
          <div className="about__badge" data-reveal="scale">
            <span className="about__badge-number">08</span>
            <span className="about__badge-text">Single Origins</span>
          </div>
        </div>

        {/* ── Right column — Text with reveal effects ── */}
        <div className="about__text" data-reveal="right">
          <span className="about__label">Our Heritage</span>

          <h2 className="about__heading">
            More than a cup.<br />An olfactory retreat.
          </h2>

          <svg className="svg-underline" viewBox="0 0 120 8" preserveAspectRatio="none">
            <path className="svg-underline__path" d="M0 4 Q 30 1, 60 4 T 120 4" fill="none" />
          </svg>

          <p className="about__paragraph">
            Nilgiri Cafe &amp; Slow Bar is Ahmedabad&apos;s sanctuary for quiet concentration, coffee micro-lot roasting, and slow tea brewing. We curate mindful tasting moments where high-altitude estate crops meet precise temperature extractions.
          </p>

          <p className="about__paragraph">
            Whether you are sitting down for a pour-over at the slow bar, exploring our rare estate leaf library, or attending a sensory cupping workshop, we invite you to slow down and dwell in a room created for focus.
          </p>

          <a
            href="#contact"
            className="about__cta"
            onClick={(e) => handleScrollClick(e, '#contact')}
          >
            Book a Spot
          </a>
        </div>
      </div>
    </section>
  );
}
