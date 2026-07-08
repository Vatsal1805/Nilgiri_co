import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Story from './components/Story';
import Restaurant from './components/Restaurant';
import Banquet from './components/Banquet';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import useLenis from './hooks/useLenis';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useLenis();
  useScrollReveal();

  useEffect(() => {
    let ctx;
    if (window.gsap && window.ScrollTrigger) {
      ctx = window.gsap.context(() => {
        window.gsap.to('.global-parallax-bg', {
          yPercent: -15, // Moves slower than scroll speed
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          }
        });
      });
    }
    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="global-parallax-bg" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Story />
        <Restaurant />
        <Banquet />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
