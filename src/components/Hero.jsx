import './Hero.css';

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__overlay" />

      <div className="hero__content">
        <span className="hero__label">Welcome to Nilgiri</span>

        <h1 className="hero__heading">
          A Dining Experience<br />Like No Other
        </h1>

        <div className="hero__divider" />

        <p className="hero__subtext">
          Restaurant &amp; Banquet · Ahmedabad, Gujarat
        </p>

        <div className="hero__buttons">
          <a
            href="#contact"
            className="hero__btn hero__btn--solid"
            onClick={(e) => scrollTo(e, '#contact')}
          >
            Book a Table
          </a>
          <a
            href="#banquet"
            className="hero__btn hero__btn--outline"
            onClick={(e) => scrollTo(e, '#banquet')}
          >
            Explore Banquet
          </a>
        </div>
      </div>

      {/* Scroll-down chevron */}
      <div className="hero__scroll">
        <svg
          className="hero__chevron"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C8A96E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
