import { useEffect, useRef } from 'react';
import './Story.css';

import slide1 from '../assets/Slide 1.png';
import slide2 from '../assets/Slide 2.png';
import slide3 from '../assets/Slide 3.png';
import slide4 from '../assets/Slide 4.png';
import slide5 from '../assets/Slide 5.png';
import slide6 from '../assets/Slide 6.png';

const STORY_STEPS = [
  {
    num: '01',
    title: 'Cloud-Forest Sourcing',
    desc: 'Sourcing shade-grown Arabica cherries and organic tea leaves directly from mist-laden, high-altitude family estates in the Nilgiri hills.',
    img: slide1,
  },
  {
    num: '02',
    title: 'Raised Bed Drying',
    desc: 'Cherries are slow-dried on elevated raised beds under a constant canopy, allowing natural fermentation to clarify sweet fruit profiles.',
    img: slide2,
  },
  {
    num: '03',
    title: 'Micro-Lot Roasting',
    desc: 'Beans are roasted in small micro-lots with precise time-temperature curves, articulating origin-specific notes of jasmine and citrus.',
    img: slide3,
  },
  {
    num: '04',
    title: 'Basalt Stone Mill',
    desc: 'Organic tencha tea leaves are slow-ground on traditional basalt stone wheels at low friction to preserve dynamic amino acid levels.',
    img: slide4,
  },
  {
    num: '05',
    title: 'Siphon & Pour-Over',
    desc: 'Precision brewing using pressure-controlled glass siphons and porcelain cone drippers to draw a bright, clean, aromatic cup.',
    img: slide5,
  },
  {
    num: '06',
    title: 'The Slow Pour Ritual',
    desc: 'Serving in handcrafted stoneware, creating a quiet space where aroma, warmth, and hospitality unite in sensory harmony.',
    img: slide6,
  },
];

export default function Story() {
  const pinRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const pinSection = pinRef.current;
    const scrollWrapper = scrollWrapperRef.current;
    
    const calculateScroll = () => {
      const trackWidth = scrollWrapper.scrollWidth;
      const windowWidth = window.innerWidth;
      return trackWidth - windowWidth;
    };

    const ctx = window.gsap.context(() => {
      window.gsap.to(scrollWrapper, {
        x: () => -calculateScroll(),
        ease: 'none',
        scrollTrigger: {
          trigger: pinSection,
          pin: true,
          scrub: 0.5,
          start: 'top top',
          end: () => `+=${calculateScroll()}`,
          invalidateOnRefresh: true,
        },
      });
    }, pinSection);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={pinRef} id="story" className="story">
      <div className="story__sticky-intro">
        <span className="section-label">The Slow Craft</span>
        <h2 className="section-title">The Brewing Ritual</h2>
        <p className="story__intro-text">
          A sensory voyage across six acts. Scroll to follow our journey from cloud-forest harvests to precision glass siphons.
        </p>
        <div className="story__scroll-indicator">
          <span className="story__scroll-line" />
          <span className="story__scroll-label">Scroll to travel</span>
        </div>
      </div>
      
      <div ref={scrollWrapperRef} className="story__track">
        {STORY_STEPS.map((step, idx) => (
          <div key={idx} className="story__card">
            <div className="story__card-image-box">
              <img src={step.img} alt={step.title} className="story__card-image" loading="lazy" />
              <div className="story__card-num">{step.num}</div>
            </div>
            <div className="story__card-info">
              <h3 className="story__card-title">{step.title}</h3>
              <p className="story__card-desc">{step.desc}</p>
            </div>
          </div>
        ))}
        {/* Extra spacer to align final card beautifully at the end */}
        <div className="story__track-spacer" />
      </div>
    </section>
  );
}
