function WebArsNav({ currentPage, navigate }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (p) => { navigate(p); setMobileOpen(false); setServicesOpen(false); };

  return (
    <nav className={`wa-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => go('home')}>WebArs</button>

        <div className={`nav-links ${mobileOpen ? 'nav-open' : ''}`}>
          <button className={`nav-link ${currentPage === 'ki' ? 'nav-active' : ''}`} onClick={() => go('ki')}>
            KI-Automatisierung
          </button>

          <div
            className="nav-services"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`nav-link nav-has-drop ${['webdesign','seo','geo'].includes(currentPage) ? 'nav-active' : ''}`}>
              Leistungen <span className="nav-caret">▾</span>
            </button>
            <div className={`nav-drop ${servicesOpen ? 'drop-open' : ''}`}>
              <button onClick={() => go('webdesign')}>Webdesign</button>
              <button onClick={() => go('seo')}>SEO</button>
              <button onClick={() => go('geo')}>GEO</button>
            </div>
          </div>

          <button className={`nav-link ${currentPage === 'about' ? 'nav-active' : ''}`} onClick={() => go('about')}>
            Über uns
          </button>
          <button className={`nav-link ${currentPage === 'contact' ? 'nav-active' : ''}`} onClick={() => go('contact')}>
            Kontakt
          </button>
        </div>

        <button className="btn-nav-cta" onClick={() => go('contact')}>Projekt starten →</button>

        <button
          className={`nav-burger ${mobileOpen ? 'burger-open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}

Object.assign(window, { WebArsNav });
