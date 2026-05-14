function WebArsFooter({ navigate }) {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState('');
  const go = (p) => { navigate(p); window.scrollTo({ top: 0, behavior: 'instant' }); };

  const handleNewsletter = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Bitte gültige E-Mail-Adresse eingeben.');
      return;
    }
    setError('');
    setSent(true);
    setEmail('');
  };

  return (
    <footer className="wa-footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <p className="footer-nl-label">Newsletter — bleib auf dem Stand</p>
          {sent ? (
            <p className="footer-nl-thanks">Danke! Du bist dabei.</p>
          ) : (
            <>
              <form className="footer-nl-form" onSubmit={handleNewsletter} noValidate>
                <input
                  type="email"
                  placeholder="deine@email.de"
                  value={email}
                  onChange={e => { setEmail(e.target.value); if (error) setError(''); }}
                  aria-label="E-Mail-Adresse für Newsletter"
                  aria-invalid={!!error}
                  required
                />
                <button type="submit" aria-label="Newsletter abonnieren">→</button>
              </form>
              {error && <p style={{color:'var(--accent)',fontSize:12,marginTop:8}}>{error}</p>}
            </>
          )}
        </div>
        <div className="footer-logo-big" aria-hidden="true">WebArs</div>
      </div>

      <div className="footer-mid">
        <div className="footer-col">
          <p className="footer-col-title">Leistungen</p>
          <button onClick={() => go('ki')}>KI-Automatisierung</button>
          <button onClick={() => go('webdesign')}>Webdesign</button>
          <button onClick={() => go('seo')}>SEO</button>
          <button onClick={() => go('geo')}>GEO</button>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">Unternehmen</p>
          <button onClick={() => go('about')}>Über uns</button>
          <button onClick={() => go('contact')}>Kontakt</button>
          <button>Projekte</button>
          <button>Blog</button>
          <button>Jobs</button>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">Legal</p>
          <button onClick={() => go('impressum')}>Impressum</button>
          <button onClick={() => go('datenschutz')}>Datenschutz</button>
          <button onClick={() => go('agb')}>AGB</button>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">Kontakt</p>
          <a href="tel:+436703061078" className="footer-contact-link">+43 670 3061078</a>
          <a href="mailto:contact@webars.at" className="footer-contact-link">contact@webars.at</a>
          <p className="footer-address">Wien · Tower 9, Hauptbahnhof</p>
          <p className="footer-address">Frankfurt · Spaces Omniturm</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social">
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">Facebook</a>
        </div>
        <div className="footer-designrush">
          <span className="dr-badge">Featured on DesignRush</span>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} WebArs GmbH · webars.at</p>
      </div>
    </footer>
  );
}

Object.assign(window, { WebArsFooter });
