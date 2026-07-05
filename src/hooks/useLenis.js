import { useEffect } from 'react';

/**
 * Custom hook to initialize and manage Lenis smooth scrolling
 * and synchronize it with the GSAP ticker / ScrollTrigger.
 */
export default function useLenis() {
  useEffect(() => {
    if (!window.Lenis) {
      console.warn('Lenis CDN is not loaded. Smooth scrolling disabled.');
      return;
    }

    const lenis = new window.Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    // Sync Lenis scroll updates with GSAP ScrollTrigger
    if (window.ScrollTrigger) {
      lenis.on('scroll', window.ScrollTrigger.update);
    }

    // Bind GSAP ticker to Lenis requestAnimationFrame
    let tickerCallback;
    if (window.gsap) {
      tickerCallback = (time) => {
        lenis.raf(time * 1000);
      };
      window.gsap.ticker.add(tickerCallback);
      window.gsap.ticker.lagSmoothing(0);
    }

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      window.lenis = null;
      if (window.gsap && tickerCallback) {
        window.gsap.ticker.remove(tickerCallback);
      }
    };
  }, []);
}
