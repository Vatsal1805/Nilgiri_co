import { useState, useEffect } from 'react';
import './Testimonials.css';

const REVIEWS = [
  {
    text: "Nilgiri Restaurant and Banquet in Odhav — awesome infrastructure, beautiful ambience and excellent quality of food and service.",
    author: "Imdadhusain Malekpura",
  },
  {
    text: "Best banquet restaurant for the area. Excellent food and outstanding service throughout our event.",
    author: "Chirag Prajapati",
  },
  {
    text: "Wonderful restaurant, outstanding food, and a perfect place for party arrangements. All staff cooperative and hygienic.",
    author: "Ahemadabbas Matha",
  },
  {
    text: "We hosted our baby shower here. The staff was fantastic, food quality was excellent, and the event was a huge success.",
    author: "Patel Maulik",
  },
  {
    text: "Nice restaurant with a unique banquet atmosphere. Good behaviour from all staff throughout.",
    author: "Sanjay Baria",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Handle responsive items per view
  useEffect(() => {
    const updateView = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - itemsPerView);

  const nextSlide = () => setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]); // re-bind if maxIndex changes

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        {/* ── Header ── */}
        <div className="testimonials__header">
          <span className="testimonials__label">Happy Customers</span>
          <h2 className="testimonials__heading">What Our Guests Say</h2>
        </div>

        {/* ── Slider Wrapper ── */}
        <div className="testimonials__slider-wrap">
          {/* Left Arrow */}
          <button className="testimonials__arrow testimonials__arrow--left" onClick={prevSlide} aria-label="Previous review">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Track Container */}
          <div className="testimonials__track-container">
            <div
              className="testimonials__track"
              style={{
                transform: `translateX(calc(-${activeIndex * (100 / itemsPerView)}% - ${activeIndex * (24 / itemsPerView)}px))`
              }}
            >
              {REVIEWS.map((review, i) => (
                <div key={i} className="testimonials__card">
                  <div className="testimonials__stars">★★★★★</div>
                  <p className="testimonials__text">"{review.text}"</p>
                  <div className="testimonials__card-divider" />
                  <span className="testimonials__author">{review.author}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button className="testimonials__arrow testimonials__arrow--right" onClick={nextSlide} aria-label="Next review">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* ── Dots ── */}
        <div className="testimonials__dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
