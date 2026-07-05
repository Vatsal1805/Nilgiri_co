import { useEffect } from 'react';

/**
 * Custom hook to initialize a high-performance IntersectionObserver
 * that triggers CSS scroll-reveal transitions on elements with [data-reveal].
 */
export default function useScrollReveal() {
  useEffect(() => {
    const revealNodes = document.querySelectorAll('[data-reveal]');
    if (revealNodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px', // triggers slightly before entering viewport fully
      }
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
    };
  }, []);
}
