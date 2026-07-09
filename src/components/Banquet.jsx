import { useEffect, useRef, useState } from 'react';
import './Banquet.css';

import food1 from '../assets/food/Pistachio Croissant.webp';
import food2 from '../assets/food/Pain au Chocolat.webp';
import food3 from '../assets/food/Valrhona Chocolate Tart.webp';
import food4 from '../assets/food/Nilgiri Tea Cake.webp';
import food5 from '../assets/food/Avocado & Basil Bruschetta.webp';
import food6 from '../assets/food/Wild Mushroom Panini.webp';
import food7 from '../assets/food/Artisanal Pesto Gnocchi.webp';
import food8 from '../assets/food/Cherry Tomato Caprese.webp';

const BAKERY_ITEMS = [
  { name: 'Pistachio Croissant', desc: 'Flaky double-baked pastry filled with house-made green pistachio frangipane.', img: food1 },
  { name: 'Pain au Chocolat', desc: 'Classic French rolled pastry with two layers of premium dark chocolate.', img: food2 },
  { name: 'Nilgiri Tea Cake', desc: 'Warm vanilla cake infused with high-altitude black tea leaves and cardamom.', img: food4 },
  { name: 'Valrhona Chocolate Tart', desc: 'Crisp chocolate sable pastry crust with rich, smooth dark chocolate ganache.', img: food3 }
];

const KITCHEN_ITEMS = [
  { name: 'Avocado & Basil Bruschetta', desc: 'Crushed avocado, cherry tomatoes, and fresh garden basil on grilled sourdough.', img: food5 },
  { name: 'Wild Mushroom Panini', desc: 'Sautéed forest mushrooms, melted provolone cheese, and truffle oil in warm ciabatta.', img: food6 },
  { name: 'Cherry Tomato Caprese', desc: 'Fresh buffalo mozzarella, vine-ripe heirloom tomatoes, pesto, and aged balsamic.', img: food8 },
  { name: 'Artisanal Pesto Gnocchi', desc: 'Soft potato gnocchi tossed in fresh basil pesto, pine nuts, and aged parmesan.', img: food7 }
];

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

  const [activeTab, setActiveTab] = useState('bakery');

  return (
    <section id="banquet" className="banquet">
      <div className="banquet__bg" />
      <canvas ref={canvasRef} className="banquet__canvas" />
      
      <div className="container" data-reveal="fade">
        
        {/* ── Top Header block ── */}
        <div className="banquet__header">
          <span className="section-label" style={{ color: 'var(--color-gold)' }}>The Lounge</span>
          <h2 className="banquet__display-heading">Lounge &amp; Craft Kitchen</h2>
          <p className="banquet__description">
            A quiet sanctuary for sensory devotion. Beyond our precision brewing, our lounge hosts daily baked pastries, seasonal desserts, and fresh, gourmet Italian plates prepared with care.
          </p>
          <a
            href="#contact"
            className="banquet__cta"
            onClick={(e) => handleScrollClick(e, '#contact')}
          >
            Book a Table
          </a>
        </div>

        {/* ── Mobile Tab Toggles ── */}
        <div className="banquet__tabs">
          <button
            className={`banquet__tab ${activeTab === 'bakery' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('bakery')}
          >
            Bakery &amp; Desserts
          </button>
          <button
            className={`banquet__tab ${activeTab === 'savory' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('savory')}
          >
            Gourmet Savory
          </button>
        </div>
        
        {/* ── Bottom Grid block — Culinary Menu Showcase ── */}
        <div className="banquet__menu-grid" data-reveal="scale">
          
          {/* Bakery Card */}
          <div className={`banquet__menu-card ${activeTab === 'bakery' ? '' : 'is-hidden-mobile'}`}>
            <h3 className="banquet__menu-title">Artisanal Bakery &amp; Desserts</h3>
            <div className="banquet__menu-list">
              {BAKERY_ITEMS.map((item, idx) => (
                <div key={idx} className="banquet__menu-item">
                  <img src={item.img} alt={item.name} className="banquet__menu-item-img" />
                  <div className="banquet__menu-item-info">
                    <div className="banquet__menu-item-header">
                      <span className="banquet__menu-item-name">{item.name}</span>
                      <span className="banquet__menu-item-line" />
                    </div>
                    <p className="banquet__menu-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Savory Card */}
          <div className={`banquet__menu-card ${activeTab === 'savory' ? '' : 'is-hidden-mobile'}`}>
            <h3 className="banquet__menu-title">Gourmet Savory &amp; Italian</h3>
            <div className="banquet__menu-list">
              {KITCHEN_ITEMS.map((item, idx) => (
                <div key={idx} className="banquet__menu-item">
                  <img src={item.img} alt={item.name} className="banquet__menu-item-img" />
                  <div className="banquet__menu-item-info">
                    <div className="banquet__menu-item-header">
                      <span className="banquet__menu-item-name">{item.name}</span>
                      <span className="banquet__menu-item-line" />
                    </div>
                    <p className="banquet__menu-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
          
      </div>
    </section>
  );
}
