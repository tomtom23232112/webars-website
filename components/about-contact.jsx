// ─── About Page ───────────────────────────────────────────────────────────────────
function AboutPage({ navigate }) {
  React.useEffect(() => {
    if (document.getElementById('wa-about-styles')) return;
    const s = document.createElement('style');
    s.id = 'wa-about-styles';
    s.textContent = `
      /* About hero — same sky gradient as main hero */
      .about-hero{position:relative;min-height:70vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:linear-gradient(180deg,#04070f 0%,#060d24 30%,var(--accent) 72%,var(--bg) 100%);text-align:center;padding:clamp(120px,16vw,200px) var(--px,40px) clamp(80px,10vw,120px)}
      .about-hero-cloud-l,.about-hero-cloud-r{position:absolute;width:130%;height:640px;bottom:-200px;background-image:url('assets/cloud.png');background-size:contain;background-repeat:no-repeat;background-position:center top;opacity:0;pointer-events:none;z-index:1}
      .about-hero-cloud-l{left:-55%;animation:cloudInLeft 1.4s ease .4s both,cloudDriftL 11s ease-in-out 1.8s infinite}
      .about-hero-cloud-r{right:-55%;animation:cloudInRight 1.4s ease .4s both,cloudDriftR 14s ease-in-out 2.4s infinite}
      .about-hero-glow{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 65%,var(--accent) 0%,transparent 65%);opacity:.45;pointer-events:none}
      .about-hero-content{position:relative;z-index:2;max-width:900px;margin:0 auto}
      .about-hero-label{display:flex;align-items:center;justify-content:center;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.55);margin-bottom:1.5rem}
      .about-hero-h1{font-family:var(--font-display);font-size:clamp(72px,13vw,180px);line-height:.9;letter-spacing:.02em;text-transform:uppercase;margin:.5rem 0 1.5rem;word-break:break-word}
      .about-hero-sub{font-size:clamp(14px,1.3vw,17px);color:rgba(255,255,255,.55);letter-spacing:.1em;text-transform:uppercase;line-height:1.8}
      /* Quote block */
      .about-quote-wrap{max-width:860px;margin:0 auto;text-align:center;padding:clamp(40px,6vw,80px) var(--px,40px)}
      .about-big-quote{font-family:var(--font-head);font-size:clamp(24px,3.5vw,48px);font-weight:700;line-height:1.25;color:var(--text)}
      .about-big-quote em{font-style:normal}
      /* Stats row */
      .about-stats{display:flex;gap:2px;flex-wrap:wrap;justify-content:center;margin-top:3rem;border:1px solid var(--border);border-radius:12px;overflow:hidden;background:var(--surface)}
      .about-stat{flex:1;min-width:160px;padding:1.75rem 1.5rem;text-align:center;border-right:1px solid var(--border)}
      .about-stat:last-child{border-right:none}
      .about-stat-val{font-family:var(--font-display);font-size:clamp(36px,5vw,64px);color:var(--accent);line-height:1;display:block}
      .about-stat-lbl{font-size:12px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;margin-top:.4rem;display:block}
      /* Timeline */
      .about-timeline{display:flex;flex-direction:column;gap:0;max-width:720px;margin:0 auto}
      .timeline-item{display:grid;grid-template-columns:140px 2px 1fr;gap:0 2rem;align-items:start;padding-bottom:3rem}
      .timeline-date{font-size:12px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;padding-top:.35rem;text-align:right}
      .timeline-dot{width:2px;background:var(--border);position:relative;margin-top:.5rem}
      .timeline-dot::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:10px;height:10px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent)}
      .timeline-event{font-family:var(--font-head);font-size:20px;font-weight:700;margin-bottom:.5rem}
      .timeline-desc{color:var(--muted);font-size:14px;line-height:1.6}
      /* Offices */
      .offices-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}
      .office-card{padding:2rem}
      .office-city{font-family:var(--font-head);font-size:22px;font-weight:700;margin-bottom:1rem}
      .office-addr{color:var(--muted);font-size:14px;line-height:1.8;white-space:pre-line}
      @media(max-width:600px){.timeline-item{grid-template-columns:1fr}.timeline-date{text-align:left}.timeline-dot{display:none}.about-stat{min-width:130px}}
    `;
    document.head.appendChild(s);
  }, []);

  const timeline = [
    { date:'Oktober 2024', event:'Erstes Büro Wien', desc:'Gründung und erster Standort im Herzen Wiens.' },
    { date:'Februar 2025', event:'Tower 9, Hauptbahnhof', desc:'Umzug in unser permanentes Büro im Tower 9 am Wiener Hauptbahnhof.' },
    { date:'Juli 2025', event:'Frankfurt Omniturm', desc:'Eröffnung des zweiten Standorts im Spaces Omniturm Frankfurt.' },
  ];

  const stats = [
    { val:'50+', lbl:'Projekte abgeschlossen' },
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
        <div className="about-hero-cloud-l" />
        <div className="about-hero-cloud-r" />
        <div className="about-hero-glow" />
        <div className="about-hero-content">
          <Reveal>
            <p className="about-hero-label">{ '{ Über uns }' }</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="about-hero-h1">Lerne das Team<br/>kennen.</h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="about-hero-sub">Effizient · Zielgerichtet · Pragmatisch · Flexibel</p>
          </Reveal>
        </div>
      </section>

      {/* Quote + Stats */}
      <section className="section" style={{borderBottom:'1px solid var(--border)'}}>
        <div className="about-quote-wrap">
          <Reveal>
            <p className="about-big-quote">
              „Wir bauen keine <em>schönen Websites</em>.<br/>
              Wir bauen <em style={{color:'var(--accent)'}}>Systeme, die wachsen.</em>“
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-lg" style={{color:'var(--muted)',marginTop:'1.75rem',fontSize:'clamp(15px,1.3vw,18px)',lineHeight:1.7}}>
              WebArs wurde gegründet, weil wir selbst erlebt haben, was Agenturen typischerweise liefern: generische Websites, leere Versprechen, keine Messbarkeit. Das machen wir anders. Kein Bullshit, keine unnötigen Meetings — nur Ergebnisse.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="about-stats">
              {stats.map((s,i) => (
                <div key={s.lbl} className="about-stat">
                  <span className="about-stat-val">{s.val}</span>
                  <span className="about-stat-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* USPs */}
      <section className="section" style={{borderBottom:'1px solid var(--border)'}}>
        <Reveal style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="section-label" style={{justifyContent:'center',display:'flex'}}>{ '{ Unsere Werte }' }</p>
          <h2 className="section-h2" style={{textAlign:'center',marginTop:'.75rem'}}>Wie wir denken.<br/>Wie wir arbeiten.</h2>
        </Reveal>
        <div className="features-grid">
          {usps.map(([title, desc], i) => (
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
      <section className="section" style={{borderBottom:'1px solid var(--border)'}}>
        <Reveal style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="section-label" style={{justifyContent:'center',display:'flex'}}>{ '{ Geschichte }' }</p>
          <h2 className="section-h2" style={{textAlign:'center',marginTop:'.75rem'}}>Wie wir hierher<br/>gekommen sind.</h2>
        </Reveal>
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
      <section className="section">
        <Reveal style={{textAlign:'center',marginBottom:'3rem'}}>
          <p className="section-label" style={{justifyContent:'center',display:'flex'}}>{ '{ Standorte }' }</p>
          <h2 className="section-h2" style={{textAlign:'center',marginTop:'.75rem'}}>Komm vorbei.</h2>
        </Reveal>
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

// ─── Contact Page ─────────────────────────────────────────────────────────────────
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
