import './About.css';

export default function About() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="about">
      <div className="about__inner">

        {/* ── Left column — Images ── */}
        <div className="about__images">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
            alt="Elegant dining at Nilgiri"
            className="about__img-main"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600"
            alt="Nilgiri restaurant interior"
            className="about__img-secondary"
            loading="lazy"
          />
          <div className="about__badge">
            <span className="about__badge-number">12+</span>
            <span className="about__badge-text">Years of Excellence</span>
          </div>
        </div>

        {/* ── Right column — Text ── */}
        <div className="about__text">
          <span className="about__label">Our Story</span>

          <h2 className="about__heading">
            More Than a Meal —<br />An Experience
          </h2>

          <div className="about__divider" />

          <p className="about__paragraph">
            Nilgiri Restaurant &amp; Banquet has been Ahmedabad's top choice for special
            occasions and everyday dining. We bring together exceptional food, elegant
            ambience, and heartfelt hospitality under one roof.
          </p>

          <p className="about__paragraph">
            Whether you're joining us for a quiet lunch or hosting a grand celebration
            for 1000 guests, our team is dedicated to making every moment unforgettable.
          </p>

          <a
            href="#contact"
            className="about__cta"
            onClick={(e) => scrollTo(e, '#contact')}
          >
            Book a Table
          </a>
        </div>
      </div>
    </section>
  );
}
