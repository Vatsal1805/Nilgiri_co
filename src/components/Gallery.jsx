import './Gallery.css';
import img1 from '../assets/ambiance/ambiance-3.png';
import img2 from '../assets/food/food-1.png';
import img3 from '../assets/ambiance/ambiance-5.png';
import img4 from '../assets/food/food-3.png';
import img5 from '../assets/ambiance/ambiance-6.png';
import img6 from '../assets/food/food-5.png';
import img7 from '../assets/ambiance/ambiance-7.png';

const IMAGES = [img1, img2, img3, img4, img5, img6, img7];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container" data-reveal="fade">
        {/* ── Top Section ── */}
        <div className="gallery__header" data-reveal="scale">
          <span className="section-label">Moments Captured</span>
          <h2 className="gallery__heading">Space &amp; Craft</h2>
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
