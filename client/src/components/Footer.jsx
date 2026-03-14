import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer__commission">
        <div className="footer__commission-inner">
          <div className="footer__commission-content reveal">
            <p className="section-eyebrow">Ready to Start?</p>
            <h2 className="footer__commission-title">Commission Your Build</h2>
            <p className="footer__commission-sub">
              Limited spots available. Each build receives full attention — no rush, no shortcuts.
            </p>
          </div>
          <form className="footer__form reveal reveal-delay-2" onSubmit={handleSubmit}>
            <div className="footer__form-row">
              <input type="text" name="name" placeholder="Your Name" required className="footer__input" />
              <input type="email" name="email" placeholder="Email Address" required className="footer__input" />
            </div>
            <select name="watchBase" className="footer__input footer__select">
              <option value="">Base Watch (Optional)</option>
              <option>Seiko SKX007 / SKX013</option>
              <option>Seiko 5 Sports (SRPD)</option>
              <option>Seiko Turtle (SRP)</option>
              <option>Seiko Alpinist (SARB)</option>
              <option>Other / Not sure yet</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell us about your vision — style, colours, budget, anything you have in mind."
              rows="5"
              required
              className="footer__input footer__textarea"
            />
            <button type="submit" className="footer__submit">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <div className="footer__brand">
            <span className="footer__logo">SEIDO <span>MODS</span></span>
            <p className="footer__tagline">Precision. Craftsmanship. Individuality.</p>
          </div>
          <nav className="footer__nav">
            {['Work', 'Services', 'Process', 'About'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="footer__nav-link">{l}</a>
            ))}
          </nav>
          <div className="footer__social">
            <a href="https://www.instagram.com/seidomods/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer__legal">
          <p>© {year} Seido Mods. All rights reserved.</p>
          <p className="footer__legal-right">Handcrafted with care.</p>
        </div>
      </div>
    </footer>
  );
}

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    watchBase: form.watchBase.value,
    message: form.message.value,
  };

  const btn = form.querySelector('.footer__submit');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  try {
    const res = await fetch('/api/inquire', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (json.success) {
      btn.textContent = 'Sent! We\'ll be in touch.';
      form.reset();
    } else {
      throw new Error(json.error);
    }
  } catch {
    btn.textContent = 'Something went wrong. Try again.';
    btn.disabled = false;
  }
}
