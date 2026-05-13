// ─── About Page ───────────────────────────────────────────────────────────────
function AboutPage({ navigate }) {
  const timeline = [
    { date:'Oktober 2024', event:'Erstes Büro Wien', desc:'Gründung und erster Standort im Herzen Wiens.' },
    { date:'Februar 2025', event:'Tower 9, Hauptbahnhof', desc:'Umzug in unser permanentes Büro im Tower 9 am Wiener Hauptbahnhof.' },
    { date:'Juli 2025', event:'Frankfurt Omniturm', desc:'Eröffnung des zweiten Standorts im Spaces Omniturm Frankfurt.' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <Reveal><p className="section-label">{ '{ Über uns }' }</p></Reveal>
          <Reveal delay={100}><h1 className="page-h1">Lerne das Team<br/>kennen.</h1></Reveal>
          <Reveal delay={200}><p className="page-sub">Effizient. Zielgerichtet. Pragmatisch. Flexibel.</p></Reveal>
        </div>
      </section>

      {/* Statement */}
      <section className="section">
        <div className="about-statement">
          <Reveal>
            <p className="about-big-quote">
              "Wir bauen keine <em>schönen Websites</em>.<br/>
              Wir bauen <em style={{color:'var(--accent)'}}>Systeme, die wachsen.</em>"
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="body-lg" style={{color:'var(--muted)',maxWidth:'640px',marginTop:'2rem'}}>
              WebArs wurde gegründet, weil wir selbst erlebt haben, was Agenturen typischerweise liefern: generische Websites, leere Versprechen, keine Messbarkeit. Das machen wir anders. Kein Bullshit, keine unnötigen Meetings — nur Ergebnisse.
            </p>
          </Reveal>
        </div>
      </section>

      {/* USPs */}
      <section className="section" style={{borderTop:'1px solid var(--border)'}}>
        <div className="features-grid">
          {[
            ['Effizient','Keine Meetingkultur. Wir liefern in 2–3 Wochen, was andere in 3 Monaten versprechen.'],
            ['Zielgerichtet','Jede Entscheidung — Design, Copy, Technik — hat einen Grund: dein Wachstum.'],
            ['Pragmatisch','Wir nutzen Tools, die funktionieren. Keine Experimente auf Kosten deiner Zeit.'],
            ['Flexibel','Zwei Standorte, Remote-First, internationale Projekte. Wir passen uns an.'],
          ].map(([title, desc], i) => (
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

      {/* Timeline */}
      <section className="section" style={{borderTop:'1px solid var(--border)'}}>
        <Reveal><p className="section-label">{ '{ Geschichte }' }</p></Reveal>
        <Reveal delay={80}><h2 className="section-h2" style={{marginBottom:'3rem'}}>Wie wir hierher<br/>gekommen sind.</h2></Reveal>
        <div className="about-timeline">
          {timeline.map((t, i) => (
            <Reveal key={t.date} delay={i * 150}>
              <div className="timeline-item">
                <div className="timeline-date">{t.date}</div>
                <div className="timeline-dot" />
                <div className="timeline-body">
                  <h3 className="timeline-event">{t.event}</h3>
                  <p className="timeline-desc">{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Offices */}
      <section className="section" style={{borderTop:'1px solid var(--border)'}}>
        <Reveal><p className="section-label">{ '{ Standorte }' }</p></Reveal>
        <Reveal delay={80}><h2 className="section-h2" style={{marginBottom:'3rem'}}>Komm vorbei.</h2></Reveal>
        <div className="offices-grid">
          {[
            { city:'Wien', addr:'Tower 9\nHauptbahnhof\n1100 Wien, Österreich', flag:'🇦🇹' },
            { city:'Frankfurt', addr:'Spaces Omniturm\nGrüneburgweg 18\n60322 Frankfurt, Deutschland', flag:'🇩🇪' },
          ].map(o => (
            <Reveal key={o.city} delay={100} className="feature-card-wrap">
              <div className="feature-card office-card">
                <div className="office-city">{o.flag} {o.city}</div>
                <p className="office-addr">{o.addr}</p>
                <button className="btn-outline" style={{marginTop:'1.5rem'}} onClick={() => navigate('contact')}>Kontakt aufnehmen →</button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="closing-cta" style={{minHeight:'45vh'}}>
        <div className="closing-glow" />
        <div className="closing-content">
          <Reveal><h2 className="closing-h" style={{fontSize:'clamp(36px,5vw,80px)'}}>Lass uns gemeinsam<br/>etwas bauen.</h2></Reveal>
          <Reveal delay={150}><button className="btn-primary btn-xl" onClick={() => navigate('contact')}>Projekt starten →</button></Reveal>
        </div>
      </section>
    </main>
  );
}

// ─── Contact Page ─────────────────────────────────────────────────────────────
function ContactPage() {
  const [form, setForm] = React.useState({ name:'', email:'', company:'', message:'', service:'webdesign' });
  const [sent, setSent] = React.useState(false);

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <section className="section" style={{paddingTop:'160px'}}>
        <div className="contact-layout">
          <div className="contact-left">
            <Reveal><p className="section-label">{ '{ Kontakt }' }</p></Reveal>
            <Reveal delay={100}><h1 className="page-h1" style={{fontSize:'clamp(40px,6vw,90px)'}}>Lass uns reden.</h1></Reveal>
            <Reveal delay={200}>
              <p className="body-lg" style={{color:'var(--muted)',marginTop:'1.5rem',marginBottom:'3rem'}}>
                30 Minuten. Kostenlos. Kein Pitch —<br/>nur ein ehrliches Gespräch über dein Ziel.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="contact-details">
                <a href="tel:+436703061078" className="contact-detail-item">
                  <span className="cd-icon">↗</span>
                  <span>+43 670 3061078</span>
                </a>
                <a href="mailto:contact@webars.at" className="contact-detail-item">
                  <span className="cd-icon">↗</span>
                  <span>contact@webars.at</span>
                </a>
                <div className="contact-detail-item">
                  <span className="cd-icon">◉</span>
                  <span>Wien · Tower 9, Hauptbahnhof</span>
                </div>
                <div className="contact-detail-item">
                  <span className="cd-icon">◉</span>
                  <span>Frankfurt · Spaces Omniturm</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <div className="response-time">⚡ Antwortzeit: &lt; 24 Stunden</div>
            </Reveal>
          </div>

          <Reveal delay={200} className="contact-right">
            {sent ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Nachricht gesendet.</h3>
                <p>Wir melden uns innerhalb von 24 Stunden.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name *</label>
                    <input type="text" value={form.name} onChange={e => update('name', e.target.value)} placeholder="Max Mustermann" required />
                  </div>
                  <div className="form-group">
                    <label>E-Mail *</label>
                    <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="max@firma.de" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Unternehmen</label>
                  <input type="text" value={form.company} onChange={e => update('company', e.target.value)} placeholder="Deine Firma GmbH" />
                </div>
                <div className="form-group">
                  <label>Ich interessiere mich für</label>
                  <select value={form.service} onChange={e => update('service', e.target.value)}>
                    <option value="webdesign">Webdesign</option>
                    <option value="ki">KI-Automatisierung</option>
                    <option value="seo">SEO</option>
                    <option value="geo">GEO</option>
                    <option value="komplett">Gesamtpaket</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Nachricht *</label>
                  <textarea rows="5" value={form.message} onChange={e => update('message', e.target.value)} placeholder="Erzähl uns von deinem Projekt..." required />
                </div>
                <button type="submit" className="btn-primary" style={{width:'100%'}}>Nachricht senden →</button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { AboutPage, ContactPage });
