import { useEffect, useRef } from 'react';

/**
 * Custom React hook to make an element magnetically attract to the mouse cursor on hover.
 * Uses GSAP for high-performance, spring-like translation.
 */
export default function useMagnetic(strength = 0.25) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.gsap) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance between cursor and center of element
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Calculate distance
      const distance = Math.hypot(dx, dy);
      const hoverRadius = 80; // Proximity trigger in pixels

      if (distance < hoverRadius) {
        // Attract element
        window.gsap.to(el, {
          x: dx * strength,
          y: dy * strength,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      } else {
        // Return to normal
        window.gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    };

    const handleMouseLeave = () => {
      window.gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1.1, 0.4)',
        overwrite: 'auto',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (el) {
        el.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [strength]);

  return ref;
}
