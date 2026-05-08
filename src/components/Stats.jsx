import { useEffect, useRef } from 'react';
import './Stats.css';

const STATS = [
  { value: '14+', label: 'Years of Legacy' },
  { value: '50K+', label: 'Happy Guests' },
  { value: '200+', label: 'Events Hosted' },
  { value: '35+', label: 'Signature Dishes' },
];

export default function Stats() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" aria-label="Key statistics">
      <div className="stats__overlay" />
      <div className="stats__inner container reveal" ref={ref}>
        {STATS.map(({ value, label }) => (
          <div key={label} className="stats__item">
            <span className="stats__value">{value}</span>
            <span className="stats__label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
