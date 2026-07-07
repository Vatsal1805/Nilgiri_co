import './Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-reveal="fade">
        {/* ── Header ── */}
        <div className="contact__header" data-reveal="scale">
          <span className="section-label">Connect</span>
          <h2 className="contact__heading">Reserve Your Experience</h2>
        </div>

        {/* ── Two Column Layout ── */}
        <div className="contact__content">
          {/* Map */}
          <div className="contact__map-wrap" data-reveal="left">
            <iframe
              title="Nilgiri Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.6745!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwNDAnMjguMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="420"
              style={{ border: 0, borderRadius: '4px' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>

          {/* Form */}
          <div className="contact__form-wrap" data-reveal="right">
            <form className="contact__form" onSubmit={handleSubmit}>
              <input type="text" className="contact__input" placeholder="Full Name" required />
              <input type="email" className="contact__input" placeholder="Email Address" required />
              <input type="tel" className="contact__input" placeholder="Phone Number" required />
              <select className="contact__input contact__select" required defaultValue="">
                <option value="" disabled>Select Event Type</option>
                <option value="Dining Reservation">Dining Reservation</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday">Birthday</option>
                <option value="Corporate">Corporate</option>
                <option value="Other">Other</option>
              </select>
              <textarea className="contact__input contact__textarea" placeholder="Message" rows="3" required></textarea>
              
              <button type="submit" className="contact__submit">Send Enquiry</button>
              <p className="contact__note">* We&apos;ll get back to you within 24 hours.</p>
            </form>
          </div>
        </div>

        {/* ── Info Cards ── */}
        <div className="contact__cards">
          {/* Phone */}
          <div className="contact__card" data-reveal="scale">
            <svg className="contact__card-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="contact__card-title">Call Us</span>
            <span className="contact__card-text">+91 99090 70429</span>
          </div>

          {/* Email */}
          <div className="contact__card" data-reveal="scale">
            <svg className="contact__card-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="contact__card-title">Email Us</span>
            <span className="contact__card-text">nilgiri@gmail.com</span>
          </div>

          {/* Location */}
          <div className="contact__card" data-reveal="scale">
            <svg className="contact__card-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="contact__card-title">Visit Us</span>
            <span className="contact__card-text">Odhav, Ahmedabad, Gujarat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
