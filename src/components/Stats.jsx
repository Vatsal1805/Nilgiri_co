import './Stats.css';

const STATS = [
  { value: '12+', label: 'Years of Legacy' },
  { value: '50K+', label: 'Happy Guests' },
  { value: '200+', label: 'Events Hosted' },
  { value: '45+', label: 'Signature Dishes' },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Key statistics">
      <div className="stats__inner container" data-reveal="fade">
        {STATS.map(({ value, label }) => (
          <div key={label} className="stats__item" data-reveal="scale">
            <span className="stats__value">{value}</span>
            <span className="stats__label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
