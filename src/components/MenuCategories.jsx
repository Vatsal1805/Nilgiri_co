import coffeeImg from '../assets/coffee&drinks/nilgiri-espresso.webp';
import brewImg from '../assets/coffee&drinks/nilgiri-pour-over.webp';
import bakeryImg from '../assets/food/food-1.webp';
import kitchenImg from '../assets/food/food-4.webp';
import './MenuCategories.css';

export default function MenuCategories() {
  return (
    <section id="menu-categories" className="categories">
      <div className="container">
        
        {/* ── Section Header ── */}
        <div className="categories__header" data-reveal="fade">
          <span className="section-label">The Menu</span>
          <h2 className="categories__heading">What We Serve</h2>
          <p className="categories__subtext">
            A meticulous selection of single-origin coffee extractions, slow-brewed tea infusions, and artisanal house-made food.
          </p>
        </div>

        {/* ── Four Column Categories ── */}
        <div className="categories__grid">
          
          {/* Coffee Card */}
          <div className="categories__card" data-reveal="scale">
            <div className="categories__img-wrap">
              <img src={coffeeImg} alt="Specialty Coffee" className="categories__img" />
              <div className="categories__overlay" />
              <div className="categories__card-content">
                <span className="categories__card-num">01</span>
                <h3 className="categories__card-title">Specialty Coffee</h3>
                <p className="categories__card-items">Espresso · Cappuccino · Latte · Mocha</p>
              </div>
            </div>
          </div>

          {/* Slow Brews & Teas Card */}
          <div className="categories__card" data-reveal="scale">
            <div className="categories__img-wrap">
              <img src={brewImg} alt="Slow Brews & Teas" className="categories__img" />
              <div className="categories__overlay" />
              <div className="categories__card-content">
                <span className="categories__card-num">02</span>
                <h3 className="categories__card-title">Brews &amp; Teas</h3>
                <p className="categories__card-items">Pour-Over V60 · Glass Siphon · Matcha · Black Tea</p>
              </div>
            </div>
          </div>

          {/* Bakery Card */}
          <div className="categories__card" data-reveal="scale">
            <div className="categories__img-wrap">
              <img src={bakeryImg} alt="Bespoke Bakery" className="categories__img" />
              <div className="categories__overlay" />
              <div className="categories__card-content">
                <span className="categories__card-num">03</span>
                <h3 className="categories__card-title">Bespoke Bakery</h3>
                <p className="categories__card-items">Croissants · Pain au Chocolat · Tarts · Tea Cakes</p>
              </div>
            </div>
          </div>

          {/* Kitchen Card */}
          <div className="categories__card" data-reveal="scale">
            <div className="categories__img-wrap">
              <img src={kitchenImg} alt="Craft Kitchen" className="categories__img" />
              <div className="categories__overlay" />
              <div className="categories__card-content">
                <span className="categories__card-num">04</span>
                <h3 className="categories__card-title">Craft Kitchen</h3>
                <p className="categories__card-items">Bruschetta · Paninis · Flatbreads · Italian Plates</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
