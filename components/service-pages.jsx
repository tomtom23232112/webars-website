// ─── Webdesign Page ──────────────────────────────────────────────────────────
function WebdesignPage({ navigate }) {
  const features = [
    ['Individuelles Framer-Design','Kein Template. Jede Website wird von Grund auf für dich entwickelt.'],
    ['Conversion-Optimierung','Jedes Element ist darauf ausgerichtet, Besucher zu Kunden zu machen.'],
    ['Mobile First','Perfekte Darstellung auf allen Geräten — 375px bis 4K.'],
    ['Animationen & Micro-Interactions','Deine Website bewegt sich. Subtil, durchdacht, wirkungsvoll.'],
    ['SEO-Grundlagen inklusive','Technisches SEO und Meta-Struktur sind von Anfang an eingebaut.'],
    ['CMS-Integration','Bearbeite deine Inhalte selbst — ganz ohne Entwickler.'],
  ];

  return (
    <main>
      <section className="page-hero page-hero-split">
        <div className="page-hero-content">
          <Reveal><p className="section-label">{ '{ Webdesign }' }</p></Reveal>
          <Reveal delay={100}><h1 className="page-h1">Websites,<br/>die verkaufen.</h1></Reveal>
          <Reveal delay={200}><p className="page-sub">Kein Template-Baukastenmurks. Jede Website ist individuell auf Framer entwickelt — schnell, animiert, conversion-optimiert.</p></Reveal>
          <Reveal delay={300}>
            <div className="hero-ctas" style={{marginTop:'2.5rem'}}>
              <button className="btn-primary" onClick={() => navigate('contact')}>Projekt anfragen →</button>
              <button className="btn-ghost">Projekte ansehen</button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} className="page-hero-visual">
          <div className="browser-mock">
            <div className="browser-bar"><span /><span /><span /></div>
            <div className="browser-content">
              <div className="browser-lines">
                {[80,60,90,40,70,50,85,45].map((w,i) => (
                  <div key={i} className="browser-line" style={{width:`${w}%`,height: i===0?'14px':'8px',background: i===0?'var(--accent)':'rgba(255,255,255,0.12)',borderRadius:'4px'}} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <Reveal><p className="section-label">{ '{ Leistungsumfang }' }</p></Reveal>
        <Reveal delay={80}><h2 className="section-h2" style={{marginBottom:'3rem'}}>Was inklusive ist.</h2></Reveal>
        <div className="features-grid">
          {features.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 80} className="feature-card-wrap">
              <div className="feature-card">
                <div className="feature-card-top">
                  <span className="feature-num">{`{ 0${i+1} }`}</span>
                </div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{borderTop:'1px solid var(--border)'}}>
        <Reveal><p className="section-label">{ '{ Preise }' }</p></Reveal>
        <Reveal delay={80}><h2 className="section-h2" style={{marginBottom:'3rem'}}>Klare Preise.<br/>Keine Überraschungen.</h2></Reveal>
        <div className="pricing-grid">
          {[
            {
              tier:'One Page',
              price:'€ 400',
              desc:'Ideal für Einzelunternehmer und einfache Auftritte.',
              features:['1 Landing Page','Bis zu 5 Sektionen','Mobile-optimiert','Kontaktformular','Framer-basiert','1 Revisionsrunde'],
              popular:false,
            },
            {
              tier:'10 Unterseiten',
              price:'€ 1.500',
              desc:'Vollständiger Webauftritt für wachsende Unternehmen.',
              features:['Bis zu 10 Unterseiten','Navigation & Footer','Blog / CMS optional','Individuelle Animationen','SEO-Grundlagen','3 Revisionsrunden'],
              popular:true,
            },
            {
              tier:'Shop individuell',
              price:'Auf Anfrage',
              desc:'Maßgeschneiderter E-Commerce — von Produkt bis Checkout.',
              features:['Individueller Online-Shop','Produkt- & Kategorieseiten','Warenkorb & Checkout','Zahlungsanbindung','SEO & Performance','Priority Support'],
              popular:false,
            },
          ].map((p, i) => (
            <Reveal key={p.tier} delay={i*120} className="pricing-card-wrap">
              <div className={`pricing-card ${p.popular ? 'pricing-popular' : ''}`}>
                {p.popular && <div className="popular-badge">Am beliebtesten</div>}
                <div className="pricing-tier">{p.tier}</div>
                <div className="pricing-price" style={{fontSize:'clamp(32px,4vw,56px)'}}>{p.price}</div>
                <p className="pricing-desc">{p.desc}</p>
                <ul className="pricing-features">
                  {p.features.map(f => <li key={f}><span className="pf-check">✓</span>{f}</li>)}
                </ul>
                <button className={p.popular ? 'btn-primary' : 'btn-outline'} style={{width:'100%',marginTop:'auto'}} onClick={() => navigate('contact')}>Anfragen →</button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="closing-cta" style={{minHeight:'45vh'}}>
        <div className="closing-glow" />
        <div className="closing-content">
          <Reveal><h2 className="closing-h" style={{fontSize:'clamp(36px,5vw,80px)'}}>Deine neue Website<br/>in 2–3 Wochen.</h2></Reveal>
          <Reveal delay={150}><button className="btn-primary btn-xl" onClick={() => navigate('contact')}>Jetzt starten →</button></Reveal>
        </div>
      </section>
    </main>
  );
}

// ─── SEO Page ─────────────────────────────────────────────────────────────────
function SEOPage({ navigate }) {
  const services = [
    ['OnPage SEO','Technische Optimierung, Meta-Daten, interne Verlinkung — alles was Google sieht.'],
    ['Content-Strategie','Inhalte, die ranken und konvertieren. Keyword-getrieben, leserfreundlich.'],
    ['Backlink-Building','Qualitätslinks von relevanten Quellen — nachhaltig und white-hat.'],
    ['Technical SEO','Core Web Vitals, Ladezeiten, Schema-Markup — die unsichtbare Grundlage.'],
    ['Keyword-Recherche','Wir finden die Begriffe, bei denen deine Kunden wirklich suchen.'],
    ['Monatliches Reporting','Transparenz über jeden Fortschritt — klare Zahlen, keine Ausreden.'],
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-content">
          <Reveal><p className="section-label">{ '{ SEO }' }</p></Reveal>
          <Reveal delay={100}><h1 className="page-h1">Gefunden werden.<br/>Immer.</h1></Reveal>
          <Reveal delay={200}><p className="page-sub">SEO ist kein Einmal-Projekt. Wir bauen dir eine Sichtbarkeits-Maschine, die Monat für Monat mehr Traffic bringt.</p></Reveal>
          <Reveal delay={300}>
            <div className="hero-ctas" style={{marginTop:'2.5rem'}}>
              <button className="btn-primary" onClick={() => navigate('contact')}>SEO-Paket anfragen →</button>
              <button className="btn-ghost" onClick={() => navigate('geo')}>Was ist GEO? →</button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal><p className="section-label">{ '{ Leistungen }' }</p></Reveal>
        <Reveal delay={80}><h2 className="section-h2" style={{marginBottom:'3rem'}}>Vollständige<br/>SEO-Betreuung.</h2></Reveal>
        <div className="features-grid">
          {services.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 80} className="feature-card-wrap">
              <div className="feature-card">
                <div className="feature-card-top">
                  <span className="feature-num">{`{ 0${i+1} }`}</span>
                </div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{borderTop:'1px solid var(--border)'}}>
        <div className="geo-bridge-block">
          <Reveal>
            <div className="geo-bridge-inner">
              <p className="section-label">{ '{ Neu: GEO }' }</p>
              <h2 className="section-h2" style={{fontSize:'clamp(32px,4vw,60px)',marginBottom:'1rem'}}>SEO war gestern.<br/>Kennst du GEO?</h2>
              <p className="body-lg" style={{color:'var(--muted)',maxWidth:'560px',marginBottom:'2rem'}}>Während klassische SEO auf Google zielt, platziert GEO dich in KI-Suchen wie ChatGPT, Perplexity und Google SGE — wo die nächste Generation sucht.</p>
              <button className="btn-primary" onClick={() => navigate('geo')}>GEO entdecken →</button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="closing-cta" style={{minHeight:'45vh'}}>
        <div className="closing-glow" />
        <div className="closing-content">
          <Reveal><h2 className="closing-h" style={{fontSize:'clamp(36px,5vw,80px)'}}>Mehr Traffic.<br/>Monat für Monat.</h2></Reveal>
          <Reveal delay={150}><button className="btn-primary btn-xl" onClick={() => navigate('contact')}>SEO-Strategie anfragen →</button></Reveal>
        </div>
      </section>
    </main>
  );
}

// ─── GEO Page ─────────────────────────────────────────────────────────────────
function GEOPage({ navigate }) {
  const steps = [
    ['Structured Data','Schema-Markup das KI-Systeme verstehen und zitieren.'],
    ['Entity Building','Dein Unternehmen als Authority in deiner Nische positionieren.'],
    ['Citation Building','Konsistente Erwähnungen auf Quellen, die LLMs vertrauen.'],
    ['Content für LLMs','Texte strukturiert und faktendicht — so wie KI-Systeme es mögen.'],
  ];
  const aiTools = ['ChatGPT','Perplexity','Google AI Overview','Claude','Microsoft Copilot','Gemini'];

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-content">
          <Reveal><p className="section-label">{ '{ GEO — Generative Engine Optimization }' }</p></Reveal>
          <Reveal delay={100}><h1 className="page-h1">Die nächste SEO.<br/>Jetzt.</h1></Reveal>
          <Reveal delay={200}><p className="page-sub">Während deine Konkurrenz noch Google-Rankings jagt, werden wir dich in ChatGPT und Perplexity platzieren — wo die nächste Generation sucht.</p></Reveal>
          <Reveal delay={300}>
            <div className="hero-ctas" style={{marginTop:'2.5rem'}}>
              <button className="btn-primary" onClick={() => navigate('contact')}>GEO-Strategie anfragen →</button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal><p className="section-label">{ '{ Was ist GEO? }' }</p></Reveal>
        <div className="geo-explain-block">
          <Reveal delay={100} style={{flex:1}}>
            <h2 className="section-h2" style={{fontSize:'clamp(32px,4vw,60px)'}}>Sichtbar wo<br/>deine Kunden<br/>wirklich suchen.</h2>
          </Reveal>
          <Reveal delay={200} style={{flex:1}}>
            <div className="geo-explain-text">
              <p><strong style={{color:'var(--text)'}}>GEO (Generative Engine Optimization)</strong> bedeutet: Dein Unternehmen wird von KI-Systemen wie ChatGPT, Perplexity, Google AI Overview und Claude empfohlen, wenn potenzielle Kunden danach fragen.</p>
              <p style={{marginTop:'1rem'}}>Es ist das SEO der nächsten Generation — und die meisten deiner Mitbewerber wissen noch nicht mal, dass es existiert.</p>
              <div className="geo-stat-row" style={{marginTop:'2rem'}}>
                <div className="geo-stat"><span className="stat-val">40%</span><span className="stat-lbl">aller Suchanfragen laufen 2025 über KI-Systeme</span></div>
                <div className="geo-stat"><span className="stat-val">3×</span><span className="stat-lbl">höhere Conversion wenn Kunden durch KI empfohlen werden</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{borderTop:'1px solid var(--border)'}}>
        <Reveal><p className="section-label">{ '{ Wo wir dich platzieren }' }</p></Reveal>
        <Reveal delay={80}><h2 className="section-h2" style={{marginBottom:'2.5rem'}}>KI-Suchmaschinen,<br/>die zählen.</h2></Reveal>
        <div className="tools-grid">
          {aiTools.map((t, i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="tool-badge tool-badge-ai">{t}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{borderTop:'1px solid var(--border)'}}>
        <Reveal><p className="section-label">{ '{ Was wir konkret tun }' }</p></Reveal>
        <Reveal delay={80}><h2 className="section-h2" style={{marginBottom:'3rem'}}>Vier Hebel<br/>für KI-Sichtbarkeit.</h2></Reveal>
        <div className="features-grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
          {steps.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 100} className="feature-card-wrap">
              <div className="feature-card">
                <div className="feature-card-top">
                  <span className="feature-num">{`{ 0${i+1} }`}</span>
                </div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="closing-cta" style={{minHeight:'45vh'}}>
        <div className="closing-glow" />
        <div className="closing-content">
          <Reveal><h2 className="closing-h" style={{fontSize:'clamp(36px,5vw,80px)'}}>Sei die Antwort.<br/>Die KI gibt.</h2></Reveal>
          <Reveal delay={150}><button className="btn-primary btn-xl" onClick={() => navigate('contact')}>GEO jetzt anfragen →</button></Reveal>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { WebdesignPage, SEOPage, GEOPage });
