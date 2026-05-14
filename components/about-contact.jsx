// ─── About Page ───────────────────────────────────────────────────────────────────
function AboutPage({ navigate }) {
  React.useEffect(() => {
    if (document.getElementById('wa-about-styles')) return;
    const s = document.createElement('style');
    s.id = 'wa-about-styles';
    s.textContent = `
      /* Hero — centered */
      .about-hero{padding:clamp(140px,18vw,220px) var(--px,40px) clamp(60px,8vw,100px);border-bottom:1px solid var(--border);text-align:center}
      .about-hero-inner{max-width:860px;margin:0 auto}
      .about-hero-h1{font-family:var(--font-display);font-size:clamp(64px,12vw,160px);line-height:.9;letter-spacing:.02em;text-transform:uppercase;margin:.75rem 0 2rem}
      .about-hero-sub{font-size:clamp(15px,1.3vw,18px);color:var(--muted);line-height:1.7;max-width:520px;margin:0 auto}
      .about-accent-line{width:48px;height:3px;background:var(--accent);border-radius:2px;margin:1.5rem auto}
      .about-hero .section-label{justify-content:center}
      /* Stats row */
      .about-stats{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-top:3.5rem}
      .about-stat{padding:1.75rem 1.5rem;border-right:1px solid var(--border);background:var(--surface);text-align:left}
      .about-stat:last-child{border-right:none}
      .about-stat-val{font-family:var(--font-display);font-size:clamp(36px,4.5vw,60px);color:var(--accent);line-height:1;display:block}
      .about-stat-lbl{font-size:11px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;margin-top:.4rem;display:block}
      @media(max-width:540px){.about-stats{grid-template-columns:1fr}.about-stat{border-right:none;border-bottom:1px solid var(--border)}.about-stat:last-child{border-bottom:none}}
      /* Timeline */
      .about-timeline{display:flex;flex-direction:column;max-width:720px}
      .timeline-item{display:grid;grid-template-columns:140px 2px 1fr;gap:0 2rem;align-items:start;padding-bottom:3rem}
      .timeline-date{font-size:12px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;padding-top:.35rem;text-align:right}
      .timeline-track{width:2px;background:var(--border);position:relative;margin-top:.5rem}
      .timeline-track::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:10px;height:10px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent)}
      .timeline-event{font-family:var(--font-head);font-size:20px;font-weight:700;margin-bottom:.5rem}
      .timeline-desc{color:var(--muted);font-size:14px;line-height:1.6}
      /* Offices */
      .offices-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}
      .office-city{font-family:var(--font-head);font-size:22px;font-weight:700;margin-bottom:1rem}
      .office-addr{color:var(--muted);font-size:14px;line-height:1.8;white-space:pre-line}
      @media(max-width:600px){.timeline-item{grid-template-columns:1fr}.timeline-date{text-align:left}.timeline-track{display:none}}
    `;
    document.head.appendChild(s);
  }, []);

  const timeline = [
    { date:'Oktober 2024', event:'Erstes Büro Wien', desc:'Gründung und erster Standort im Herzen Wiens.' },
    { date:'Februar 2025', event:'Tower 9, Hauptbahnhof', desc:'Umzug in unser permanentes Büro im Tower 9 am Wiener Hauptbahnhof.' },
    { date:'Juli 2025', event:'Frankfurt Omniturm', desc:'Eröffnung des zweiten Standorts im Spaces Omniturm Frankfurt.' },
  ];

  const stats = [
    { val:'4.9', lbl:'Sterne Trustpilot' },
    { val:'2–3', lbl:'Wochen Lieferzeit' },
    { val:'24h', lbl:'Reaktionszeit' },
  ];

  const usps = [
    ['Effizient', 'Keine Meetingkultur. Wir liefern in 2–3 Wochen, was andere in 3 Monaten versprechen.'],
    ['Zielgerichtet', 'Jede Entscheidung — Design, Copy, Technik — hat einen Grund: dein Wachstum.'],
    ['Pragmatisch', 'Wir nutzen Tools, die funktionieren. Keine Experimente auf Kosten deiner Zeit.'],
    ['Flexibel', 'Zwei Standorte, Remote-First, internationale Projekte. Wir passen uns an.'],
  ];

  return (
    <main>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <Reveal><p className="section-label">{ '{ Über uns }' }</p></Reveal>
          <Reveal delay={100}>
            <h1 className="about-hero-h1">Lerne das Team<br/>kennen.</h1>
          </Reveal>
          <div className="about-accent-line" />
          <Reveal delay={220}>
            <p className="about-hero-sub">
              Wir bauen Systeme, die wachsen — keine generischen Websites, keine leeren Versprechen.
              Aus Wien & Frankfurt, für den deutschsprachigen Raum.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="about-stats">
              {stats.map(s => (
                <div key={s.lbl} className="about-stat">
                  <span className="about-stat-val">{s.val}</span>
                  <span className="about-stat-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quote */}
      <section className="section" style={{borderBottom:'1px solid var(--border)'}}>
        <Reveal><p className="section-label">{ '{ Unsere Haltung }' }</p></Reveal>
        <Reveal delay={100}>
          <h2 className="section-h2" style={{maxWidth:'760px',marginTop:'.75rem'}}>
            „Wir bauen keine schönen Websites.<br/>
            Wir bauen Systeme, die wachsen.“
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="body-lg" style={{color:'var(--muted)',marginTop:'1.75rem',maxWidth:'620px',lineHeight:1.75}}>
            WebArs wurde gegründet, weil wir selbst erlebt haben, was Agenturen typischerweise liefern:
            generische Websites, leere Versprechen, keine Messbarkeit.
            Das machen wir anders — kein Bullshit, keine unnötigen Meetings, nur Ergebnisse.
          </p>
        </Reveal>
      </section>

      {/* USPs */}
      <section className="section" style={{borderBottom:'1px solid var(--border)'}}>
        <Reveal><p className="section-label">{ '{ Unsere Werte }' }</p></Reveal>
        <Reveal delay={80}><h2 className="section-h2" style={{marginTop:'.75rem',marginBottom:'3rem'}}>Wie wir denken.<br/>Wie wir arbeiten.</h2></Reveal>
        <div className="features-grid">
          {usps.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 100} className="feature-card-wrap">
              <div className="feature-card">
                <div className="feature-card-top"><span className="feature-num">{`{ 0${i+1} }`}</span></div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{borderBottom:'1px solid var(--border)'}}>
        <Reveal><p className="section-label">{ '{ Geschichte }' }</p></Reveal>
        <Reveal delay={80}><h2 className="section-h2" style={{marginTop:'.75rem',marginBottom:'3rem'}}>Wie wir hierher<br/>gekommen sind.</h2></Reveal>
        <div className="about-timeline">
          {timeline.map((t, i) => (
            <Reveal key={t.date} delay={i * 150}>
              <div className="timeline-item">
                <div className="timeline-date">{t.date}</div>
                <div className="timeline-track" />
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
      <section className="section">
        <Reveal><p className="section-label">{ '{ Standorte }' }</p></Reveal>
        <Reveal delay={80}><h2 className="section-h2" style={{marginTop:'.75rem',marginBottom:'3rem'}}>Komm vorbei.</h2></Reveal>
        <div className="offices-grid">
          {[
            { city:'Wien', addr:'Tower 9\nHauptbahnhof\n1100 Wien, Österreich', flag:'🇦🇹' },
            { city:'Frankfurt', addr:'Spaces Omniturm\nGrüneburgweg 18\n60322 Frankfurt, Deutschland', flag:'🇩🇪' },
          ].map(o => (
            <Reveal key={o.city} delay={100} className="feature-card-wrap">
              <div className="feature-card">
                <div className="office-city">{o.flag} {o.city}</div>
                <p className="office-addr">{o.addr}</p>
                <button className="btn-outline" style={{marginTop:'1.5rem'}} onClick={() => navigate('contact')}>Kontakt aufnehmen →</button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="closing-cta" style={{minHeight:'50vh',overflow:'hidden'}}>
        <div className="cta-cloud-left" />
        <div className="cta-cloud-right" />
        <div className="closing-bg"><div className="closing-glow" /></div>
        <div className="closing-content">
          <Reveal><h2 className="closing-h" style={{fontSize:'clamp(40px,7vw,100px)'}}>Lass uns gemeinsam<br/>etwas bauen.</h2></Reveal>
          <Reveal delay={150}><p className="closing-sub">Kostenloses Erstgespräch — 30 Minuten, kein Pitch, nur Klarheit.</p></Reveal>
          <Reveal delay={280}><button className="btn-primary btn-xl" onClick={() => navigate('contact')}>Projekt starten →</button></Reveal>
        </div>
      </section>
    </main>
  );
}

// ─── Contact Page ───────────────────────────────────────────────────────────────────
function ContactPage() {
  const [form, setForm] = React.useState({ name:'', email:'', company:'', message:'', service:'webdesign' });
  const [sent, setSent] = React.useState(false);
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

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
                  <span className="cd-icon">↗</span><span>+43 670 3061078</span>
                </a>
                <a href="mailto:contact@webars.at" className="contact-detail-item">
                  <span className="cd-icon">↗</span><span>contact@webars.at</span>
                </a>
                <div className="contact-detail-item">
                  <span className="cd-icon">◉</span><span>Wien · Tower 9, Hauptbahnhof</span>
                </div>
                <div className="contact-detail-item">
                  <span className="cd-icon">◉</span><span>Frankfurt · Spaces Omniturm</span>
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
