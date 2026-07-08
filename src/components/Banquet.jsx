import { useEffect, useRef } from 'react';
import './Banquet.css';

export default function Banquet() {
  const canvasRef = useRef(null);

  const handleScrollClick = (e, id) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(id);
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create 30 warm golden embers
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      speedY: -(Math.random() * 0.4 + 0.15),
      speedX: Math.random() * 0.2 - 0.1,
      alpha: Math.random() * 0.6 + 0.2,
      fadeSpeed: Math.random() * 0.004 + 0.002,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        ctx.fillStyle = `rgba(200, 169, 110, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Update coordinates
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha -= p.fadeSpeed;

        // Reset if offscreen or faded out
        if (p.y < 0 || p.alpha <= 0) {
          p.x = Math.random() * width;
          p.y = height + 10;
          p.alpha = Math.random() * 0.6 + 0.2;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="banquet" className="banquet">
      <div className="banquet__bg" />
      <canvas ref={canvasRef} className="banquet__canvas" />
      
      <div className="container" data-reveal="fade">
        <div className="banquet__content-grid">
          
          {/* Left Column — Big Serif Display Header */}
          <div className="banquet__content-left" data-reveal="left">
            <span className="section-label" style={{ color: 'var(--color-gold)' }}>The Lounge</span>
            <h2 className="banquet__display-heading">A quiet sanctuary for sensory devotion.</h2>
          </div>
          
          {/* Right Column — Editorial Text & CTA */}
          <div className="banquet__content-right" data-reveal="right">
            <p className="banquet__description">
              A dedicated space curated for quiet concentration and deep sensory study. Enjoy custom coffee flights, explore our organic leaf archives, or book a private masterclass in coffee roasting, matcha whisking, or olfactory flavor profiling.
            </p>
            
            <a
              href="#contact"
              className="banquet__cta"
              onClick={(e) => handleScrollClick(e, '#contact')}
            >
              Book a Workshop Slot
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
