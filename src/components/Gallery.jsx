import './Gallery.css';

const IMAGES = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
  'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
  'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600',
  'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800',
  'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800'
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery" data-reveal="fade">
      <div className="container">
        {/* ── Top Section ── */}
        <div className="gallery__header" data-reveal="scale">
          <span className="section-label">Moments Captured</span>
          <h2 className="gallery__heading">Atmosphere &amp; Plating</h2>
        </div>

        {/* ── Image Grid ── */}
        <div className="gallery__grid">
          {IMAGES.map((src, i) => (
            <div key={i} className="gallery__item" data-reveal="scale">
              <img src={src} alt={`Gallery visual ${i + 1}`} className="gallery__image" loading="lazy" />
              <div className="gallery__overlay">
                <svg className="gallery__overlay-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
