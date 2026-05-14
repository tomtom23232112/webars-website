// ─── Hero ───────────────────────────────────────────────────────────────────
function HeroSection({ navigate }) {
  const [glitchDone, setGlitchDone] = React.useState(false);
  const [linesIn, setLinesIn] = React.useState(0);

  React.useEffect(() => {
    const timers = [
      setTimeout(() => setLinesIn(1), 200),
      setTimeout(() => setLinesIn(2), 600),
      setTimeout(() => setLinesIn(3), 1000),
      setTimeout(() => setGlitchDone(true), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="hero">
      <div className="hero-cloud-left" />
      <div className="hero-cloud-right" />

      <div className="hero-content">
        <div className="hero-proof-strip">
          <span className="proof-live-dot" />
          <span>★ 4.9 Trustpilot</span>
          <span className="proof-sep">·</span>
          <span>50+ Projekte</span>
          <span className="proof-sep">·</span>
          <span>Ø 2–3 Wo. Lieferzeit</span>
          <span className="proof-sep">·</span>
          <span>24h Reaktionszeit</span>
        </div>
        <h1 className="hero-h1">
          <span className={`hero-line ${linesIn >= 1 ? 'line-in' : ''}`}>Dein Unternehmen.</span>
          <span className={`hero-line hero-line-accent ${linesIn >= 2 ? 'line-in' : ''} ${!glitchDone ? 'glitch-active' : ''}`} data-text="Automatisiert.">Automatisiert.</span>
          <span className={`hero-line ${linesIn >= 3 ? 'line-in' : ''}`}>Skaliert.</span>
        </h1>
        <p className="hero-sub">WebArs verbindet KI-Automatisierung mit modernem Webdesign —<br/>damit du schneller wächst als deine Konkurrenz.</p>
        <div className="hero-ctas" style={{justifyContent:'center',marginTop:'2.5rem'}}>
          <button className="btn-primary btn-xl hero-btn-primary" onClick={() => navigate('contact')}>Jetzt kostenlos beraten lassen →</button>
          <button className="btn-ghost btn-xl hero-btn-ghost" onClick={() => { const el=document.getElementById('projects-section'); if(el) window.scrollTo({top:el.offsetTop-80,behavior:'smooth'}); }}>Projekte ansehen</button>
        </div>
      </div>

      <div className="hero-scroll-hint" style={{position:'absolute',zIndex:2}}>scroll</div>
    </section>
  );
}
// ─── Marquee ─────────────────────────────────────────────────────────────────
function MarqueeSection() {
  return (
    <div className="marquee-section">
      <MarqueeBand items={['KI-Automatisierung','Webdesign','SEO','GEO','Sales Funnels','E-Mail-Marketing','Brand Identity','UX/UI']} />
      <MarqueeBand items={['Wien','Frankfurt','DACH','Framer','n8n','Make','ChatGPT API','Zapier','Claude']} rtl={true} />
    </div>
  );
}

// ─── Features ────────────────────────────────────────────────────────────────
function FeaturesSection({ navigate }) {
  const cards = [
    { num:'01', title:'KI-Automatisierung', desc:'Wir automatisieren repetitive Prozesse — von Lead-Erfassung bis Onboarding. Mit n8n, Make und ChatGPT-Integrationen.', page:'ki' },
    { num:'02', title:'Webdesign', desc:'Websites, die nicht nur gut aussehen, sondern konvertieren. Individuell auf Framer entwickelt, schnell geliefert.', page:'webdesign' },
    { num:'03', title:'SEO & GEO', desc:'Sichtbarkeit in klassischen Suchmaschinen und KI-Suchen wie ChatGPT, Perplexity & Google SGE.', page:'seo' },
  ];

  return (
    <section className="section features-section">
      <Reveal><p className="section-label">{ '{ Was wir machen }' }</p></Reveal>
      <Reveal delay={100}><h2 className="section-h2">Drei Hebel.<br/>Ein Ziel: Dein Wachstum.</h2></Reveal>
      <div className="features-grid">
        {cards.map((c, i) => (
          <Reveal key={c.num} delay={i * 120} className="feature-card-wrap">
            <div className="feature-card" onClick={() => navigate(c.page)} data-hover>
              <div className="feature-card-top">
                <span className="feature-num">{`{ ${c.num} }`}</span>
              </div>
              <h3 className="feature-title">{c.title}</h3>
              <p className="feature-desc">{c.desc}</p>
              <span className="feature-link">Mehr erfahren →</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─── KI Section ──────────────────────────────────────────────────────────────
function WorkflowSVG() {
  const nodes = [
    { x: 20, y: 40, w: 120, h: 48, label: 'Lead Eingang', sub: 'Web / CRM' },
    { x: 210, y: 40, w: 120, h: 48, label: 'KI Analyse', sub: 'ChatGPT API' },
    { x: 400, y: 40, w: 120, h: 48, label: 'CRM Update', sub: 'HubSpot' },
    { x: 210, y: 160, w: 120, h: 48, label: 'E-Mail Seq.', sub: 'Make / n8n' },
    { x: 400, y: 160, w: 120, h: 48, label: 'Slack Alert', sub: 'Webhook' },
    { x: 210, y: 280, w: 120, h: 48, label: 'Reporting', sub: 'Notion / Sheet' },
  ];
  const edges = [
    [80+120, 64, 210, 64],
    [210+120, 64, 400, 64],
    [210+60, 40+48, 210+60, 160],
    [210+120, 184, 400, 184],
    [210+60, 160+48, 210+60, 280],
  ];

  return (
    <svg viewBox="0 0 560 360" className="workflow-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
      {edges.map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 5"
          markerEnd="url(#arr)" opacity="0.7"
          style={{ animation: `dashFlow ${1.8 + i * 0.2}s linear infinite` }} />
      ))}
      {nodes.map((n, i) => (
        <g key={i} style={{ animation: `nodePulse ${2 + i * 0.3}s ease-in-out infinite alternate` }}>
          <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="6"
            fill="#141414" stroke="currentColor" strokeWidth="1"
            filter="url(#glow)" opacity="0.9" />
          <text x={n.x + n.w/2} y={n.y + 18} textAnchor="middle"
            fill="#fff" fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="500">{n.label}</text>
          <text x={n.x + n.w/2} y={n.y + 34} textAnchor="middle"
            fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="DM Sans, sans-serif">{n.sub}</text>
        </g>
      ))}
    </svg>
  );
}

function KISection({ navigate }) {
  const features = [
    'Automatische Lead-Qualifizierung & CRM-Integration',
    'KI-gestützte E-Mail-Sequenzen & Follow-ups',
    'Chatbots & KI-Assistenten für deine Website',
    'Datenpipelines & Reporting ohne Excel-Hölle',
    'Anbindung an bestehende Tools (HubSpot, Notion, Slack)',
  ];
  return (
    <section className="section ki-section">
      <div className="ki-inner">
        <div className="ki-text">
          <Reveal><p className="section-label">{ '{ KI-Automatisierung }' }</p></Reveal>
          <Reveal delay={80}><h2 className="section-h2" style={{fontSize:'clamp(40px,5vw,72px)'}}>Schluss mit<br/>manuellem Aufwand.</h2></Reveal>
          <Reveal delay={160}><p className="body-lg" style={{color:'var(--muted)',marginBottom:'2rem'}}>Wir bauen dir KI-Workflows, die rund um die Uhr für dich arbeiten — ganz ohne deinen Input.</p></Reveal>
          <div className="ki-features">
            {features.map((f, i) => (
              <Reveal key={i} delay={200 + i * 80}>
                <div className="ki-feat-item">
                  <span className="ki-check">✓</span>
                  <span>{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={600}>
            <button className="btn-primary" style={{marginTop:'2.5rem'}} onClick={() => navigate('ki')}>KI-Automatisierung anfragen →</button>
          </Reveal>
        </div>
        <Reveal delay={200} className="ki-visual">
          <WorkflowSVG />
        </Reveal>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  { name:'Grundner GmbH', tags:['Web Design','Development'], year:'2025', desc:'Corporate Website mit Conversion-Fokus und individueller Framer-Animation.' },
  { name:'Schmuckkultur', tags:['E-Commerce','Branding'], year:'2025', desc:'Hochwertiger Online-Shop mit Brand-System und UX-Optimierung.' },
  { name:'Dr. Derya', tags:['Web Design','SEO'], year:'2024', desc:'Praxis-Website mit lokaler SEO-Strategie und Online-Booking.' },
  { name:'CityEvents', tags:['Web Design','Marketing'], year:'2024', desc:'Event-Plattform — +28% Kundenbindung, +61% Konversionsrate.' },
  { name:'Stefanie Kosmalla', tags:['Branding','Web Design'], year:'2024', desc:'Personal Brand — Coaching-Website mit Booking und Content-System.' },
];

function ProjectCard({ project, delay }) {
  const [hov, setHov] = React.useState(false);
  return (
    <Reveal delay={delay} className="project-card-wrap">
      <div className={`project-card ${hov ? 'card-hov' : ''}`}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        data-hover>
        <div className="project-img">
          <svg width="100%" height="100%" style={{position:'absolute',inset:0}}>
            <defs>
              <pattern id={`pp${project.name.replace(/\s/g,'')}`} patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(25)">
                <rect width="10" height="20" fill="#111" /><rect x="10" width="10" height="20" fill="#0d0d0d" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#pp${project.name.replace(/\s/g,'')})`} />
          </svg>
          <div className={`project-overlay ${hov ? 'overlay-in' : ''}`}>
            <span className="project-cta">Ansehen →</span>
          </div>
        </div>
        <div className="project-info">
          <div className="project-meta">
            {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
            <span className="tag tag-year">{project.year}</span>
          </div>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-desc">{project.desc}</p>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectsSection({ navigate }) {
  return (
    <section className="section projects-section" id="projects-section">
      <div className="projects-header">
        <div>
          <Reveal><p className="section-label">{ '{ Ausgewählte Arbeiten }' }</p></Reveal>
          <Reveal delay={80}><h2 className="section-h2">Referenzen</h2></Reveal>
        </div>
        <Reveal delay={200}><span className="muted-text">2024 – 2025</span></Reveal>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => <ProjectCard key={p.name} project={p} delay={i * 100} />)}
      </div>
      <Reveal delay={200} style={{textAlign:'center',marginTop:'3rem'}}>
        <button className="btn-ghost" onClick={() => navigate && navigate('contact')}>Alle Projekte ansehen →</button>
      </Reveal>
    </section>
  );
}

// ─── Process ─────────────────────────────────────────────────────────────────
function ProcessSection() {
  const steps = [
    { num:'01', title:'Briefing', desc:'Kostenloses Erstgespräch (30 Min.) — wir verstehen dein Ziel.' },
    { num:'02', title:'Strategie', desc:'Wir analysieren dein Potenzial & liefern einen konkreten Plan.' },
    { num:'03', title:'Umsetzung', desc:'Bau, Test, Iteration — schnell & transparent.' },
    { num:'04', title:'Launch & Scale', desc:'Go-Live + laufende Optimierung & KI-Monitoring.' },
  ];
  return (
    <section className="section process-section">
      <Reveal><p className="section-label">{ '{ Wie wir arbeiten }' }</p></Reveal>
      <Reveal delay={80}><h2 className="section-h2">Vom Erstgespräch<br/>zur laufenden Automation</h2></Reveal>
      <div className="process-track">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 150} className="process-step-wrap">
            <div className="process-step">
              <div className="process-num">{s.num}</div>
              <div className="process-line" />
              <h3 className="process-title">{s.title}</h3>
              <p className="process-desc">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { quote:'"WebArs hat unsere Buchungsrate in 6 Wochen um 61% gesteigert. Das ist kein Marketing — das sind Zahlen."', name:'Lena Chatsakos & Jimmy Jura', role:'CityEvents', stats:[{v:'+61%',l:'Konversionsrate'},{v:'+28%',l:'Kundenbindung'}] },
  { quote:'"Die haben genau verstanden, was ich brauche. Nicht eine Website — ein System, das neue Kunden bringt."', name:'Prince Mike', role:'DJ & Sprnterrecords', stats:[] },
  { quote:'"Geliefert in 2 Wochen. Genau wie versprochen. Qualität, die man so bei kleinen Agenturen nicht erwartet."', name:'Anna Karenina', role:'E-Commerce', stats:[] },
];

function TestimonialsSection() {
  const [active, setActive] = React.useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="section testimonials-section">
      <Reveal><p className="section-label">{ '{ Was Kunden sagen }' }</p></Reveal>
      <div className="testimonial-body">
        <div className="testimonial-photo">
          <svg width="100%" height="100%" style={{position:'absolute',inset:0}}>
            <defs>
              <pattern id="tpp" patternUnits="userSpaceOnUse" width="16" height="16" patternTransform="rotate(45)">
                <rect width="8" height="16" fill="#111" /><rect x="8" width="8" height="16" fill="#0e0e0e" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tpp)" />
          </svg>
          <div className="photo-label-inner">Portrait</div>
          {t.stats.length > 0 && (
            <div className="testimonial-stats">
              {t.stats.map(s => (
                <div key={s.l} className="testimonial-stat">
                  <span className="stat-val">{s.v}</span>
                  <span className="stat-lbl">{s.l}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="testimonial-content">
          <p className="testimonial-quote">{t.quote}</p>
          <p className="testimonial-name">{t.name}</p>
          <p className="testimonial-role">{t.role}</p>
          <div className="testimonial-dots">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} className={`dot ${i === active ? 'dot-active' : ''}`} onClick={() => setActive(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
const PRICING = {
  webdesign: [
    { tier:'Starter', price:'1.250', desc:'Perfekt für Einzelunternehmer & kleine Firmen.', features:['Bis zu 5 Seiten','Framer-basiert','Mobile-optimiert','SEO-Grundlagen','2 Revisionsrunden'], popular:false },
    { tier:'Business', price:'3.000', desc:'Für wachsende Unternehmen mit Conversion-Ziel.', features:['Bis zu 12 Seiten','Individuelle Animationen','Blog / CMS','A/B Testing Setup','Conversion-Optimierung','4 Revisionsrunden'], popular:true },
    { tier:'Premium', price:'6.500', desc:'Volle Leistung — Branding bis Automation.', features:['Unbegrenzt Seiten','Brand Identity System','KI-Chatbot inklusive','SEO & GEO inklusive','Priority Support','Laufende Betreuung'], popular:false },
  ],
  ki: [
    { tier:'Starter', price:'990', desc:'Erster KI-Workflow für dein Unternehmen.', features:['1 automatisierter Workflow','n8n oder Make','CRM-Integration','2 Wochen Betreuung','Dokumentation'], popular:false },
    { tier:'Business', price:'2.800', desc:'Vollständige Automatisierung deines Lead-Prozesses.', features:['Bis zu 5 Workflows','Lead-Qualifizierung','E-Mail-Automatisierung','CRM + Slack','Reporting Dashboard','Monatliches Review'], popular:true },
    { tier:'Premium', price:'5.500', desc:'KI-First Unternehmen — end-to-end.', features:['Unbegrenzte Workflows','Custom KI-Modell','Chatbot + Voicebot','Vollständige Integration','24h Support SLA','Quartals-Strategy'], popular:false },
  ],
  seo: [
    { tier:'Starter', price:'490 /mo', desc:'Sichtbarkeit aufbauen — nachhaltig und messbar.', features:['Keyword-Recherche','OnPage-Optimierung','Monthly Report','Local SEO'], popular:false },
    { tier:'Business', price:'1.200 /mo', desc:'Organisches Wachstum als verlässlicher Kanal.', features:['Content-Strategie','Backlink-Building','Technical SEO','Google Search Console','Wöchentlicher Report'], popular:true },
    { tier:'Premium', price:'2.400 /mo', desc:'Marktführerschaft durch Sichtbarkeit.', features:['Alles aus Business','GEO inklusive','Dedizierter SEO Manager','Priority Indexing','KI-Suchen Optimierung'], popular:false },
  ],
};

function PricingSection({ navigate }) {
  const [tab, setTab] = React.useState('webdesign');
  const plans = PRICING[tab];
  const tabs = [['webdesign','Webdesign'],['ki','KI-Automatisierung'],['seo','SEO-Pakete']];

  return (
    <section className="section pricing-section">
      <Reveal><p className="section-label">{ '{ Preise }' }</p></Reveal>
      <Reveal delay={80}><h2 className="section-h2">Transparent.<br/>Kein Kleingedrucktes.</h2></Reveal>
      <Reveal delay={160}>
        <div className="pricing-tabs">
          {tabs.map(([k,l]) => (
            <button key={k} className={`pricing-tab ${tab === k ? 'tab-active' : ''}`} onClick={() => setTab(k)}>{l}</button>
          ))}
        </div>
      </Reveal>
      <div className="pricing-grid">
        {plans.map((p, i) => (
          <Reveal key={p.tier} delay={i * 120} className="pricing-card-wrap">
            <div className={`pricing-card ${p.popular ? 'pricing-popular' : ''}`}>
              {p.popular && <div className="popular-badge">Am beliebtesten</div>}
              <div className="pricing-tier">{p.tier}</div>
              <div className="pricing-price">€{p.price}</div>
              <p className="pricing-desc">{p.desc}</p>
              <ul className="pricing-features">
                {p.features.map(f => <li key={f}><span className="pf-check">✓</span>{f}</li>)}
              </ul>
              <button className={p.popular ? 'btn-primary' : 'btn-outline'} style={{width:'100%',marginTop:'auto'}} onClick={() => navigate && navigate('contact')}>Anfragen →</button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  { q:'Was ist KI-Automatisierung und brauche ich das wirklich?', a:'KI-Automatisierung bedeutet, dass wiederkehrende Aufgaben — vom Lead-Management bis zur Kundenkommunikation — von intelligenten Workflows übernommen werden. Das spart Zeit, reduziert Fehler und skaliert ohne Mehrkosten. Ja, du brauchst das.' },
  { q:'Welche KI-Tools setzt WebArs ein?', a:'Wir arbeiten mit n8n, Make (ex-Integromat), dem OpenAI/Claude API, Zapier, und bauen individuelle Integrationen für HubSpot, Notion, Slack, Pipedrive und weitere Tools.' },
  { q:'Wie lange dauert die Umsetzung?', a:'Eine Standard-Website liefern wir in 2–3 Wochen. KI-Workflows sind je nach Komplexität in 1–4 Wochen live. Wir sind schnell — kein bürokratischer Overhead.' },
  { q:'Arbeitet ihr mit kleinen Unternehmen?', a:'Ja. Unsere Zielgruppe sind ambitionierte KMUs im DACH-Raum. Groß denken, schlank umsetzen — das ist unser Ansatz.' },
  { q:'Gibt es laufende Betreuung nach dem Launch?', a:'Abhängig vom Paket. Business und Premium beinhalten laufendes Monitoring, Optimierung und Support. Starter-Pakete können jederzeit erweitert werden.' },
  { q:'Was ist der Unterschied zwischen SEO und GEO?', a:'SEO optimiert für klassische Suchmaschinen wie Google. GEO (Generative Engine Optimization) sorgt dafür, dass dein Unternehmen von KI-Systemen wie ChatGPT, Perplexity und Claude empfohlen wird.' },
];

function FAQSection() {
  const [open, setOpen] = React.useState(null);
  return (
    <section className="section faq-section">
      <Reveal><p className="section-label">{ '{ FAQ }' }</p></Reveal>
      <Reveal delay={80}><h2 className="section-h2" style={{marginBottom:'3rem'}}>Häufige Fragen.</h2></Reveal>
      <div className="faq-list">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={i} delay={i * 60}>
              <div className={`faq-item ${isOpen ? 'faq-open' : ''}`}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                >
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div id={`faq-a-${i}`} className="faq-a-wrap" style={{maxHeight: isOpen ? '400px' : '0', overflow:'hidden', transition:'max-height .4s ease'}}>
                  <div className="faq-a">{f.a}</div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

// ─── Closing CTA ──────────────────────────────────────────────────────────────
function ClosingCTA({ navigate }) {
  return (
    <section className="closing-cta">
      <CloudAccent side="left"  bottom="-40px" opacity={0.5} scale={1.0} />
      <CloudAccent side="right" bottom="-40px" opacity={0.5} scale={1.0} />
      <div className="closing-bg">
        <svg width="100%" height="100%" style={{position:'absolute',inset:0}}>
          <defs>
            <pattern id="cpph" patternUnits="userSpaceOnUse" width="30" height="30" patternTransform="rotate(20)">
              <rect width="15" height="30" fill="#0d0d0d" /><rect x="15" width="15" height="30" fill="#0a0a0a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cpph)" />
        </svg>
        <div className="closing-glow" />
        <div className="photo-label-inner" style={{fontSize:'11px',opacity:.25}}>Close-up Auge S/W-Photo</div>
      </div>
      <div className="closing-content">
        <Reveal><h2 className="closing-h">Bereit, smarter<br/>zu wachsen?</h2></Reveal>
        <Reveal delay={150}><p className="closing-sub">Kostenloses Erstgespräch — 30 Minuten, kein Pitch, nur Klarheit.</p></Reveal>
        <Reveal delay={280}><button className="btn-primary btn-xl" onClick={() => navigate('contact')}>Termin buchen →</button></Reveal>
      </div>
    </section>
  );
}

// ─── HomePage ────────────────────────────────────────────────────────────────
function HomePage({ navigate }) {
  return (
    <main>
      <HeroSection navigate={navigate} />
      <MarqueeSection />
      <FeaturesSection navigate={navigate} />
      <KISection navigate={navigate} />
      <ProjectsSection navigate={navigate} />
      <ProcessSection />
      <TestimonialsSection />
      <ComparisonSection />
      <FAQSection />
      <ClosingCTA navigate={navigate} />
    </main>
  );
}

function ComparisonSection() {
  const rows = [
    { label:'Reaktionszeit',       wa:'24h',       free:'variabel',   big:'1–2 Wochen' },
    { label:'Lieferzeit',          wa:'2–3 Wochen',free:'variabel',   big:'2–3 Monate' },
    { label:'KI-Automatisierung',  wa:'✓',         free:'selten',     big:'teuer extra' },
    { label:'Persönlicher Kontakt',wa:'✓',         free:'✓',          big:'✗' },
    { label:'Büro Wien & Frankfurt',wa:'✓',        free:'✗',          big:'✗' },
    { label:'Faire Preise',        wa:'✓',         free:'✓',          big:'✗' },
  ];
  return (
    <section className="section comparison-section">
      <Reveal><p className="section-label">{ '{ Warum WebArs }' }</p></Reveal>
      <Reveal delay={80}><h2 className="section-h2" style={{marginBottom:'3rem'}}>Kein Roulette.<br/>Kein Offshore.</h2></Reveal>
      <Reveal delay={160}>
        <div className="comparison-table">
          <div className="comp-header">
            <div className="comp-label-col"></div>
            <div className="comp-col comp-col-wa">WebArs</div>
            <div className="comp-col">Freelancer</div>
            <div className="comp-col">Große Agentur</div>
          </div>
          {rows.map(r => (
            <div key={r.label} className="comp-row">
              <div className="comp-label-col">{r.label}</div>
              <div className="comp-col comp-col-wa comp-val-wa">{r.wa}</div>
              <div className="comp-col comp-val">{r.free}</div>
              <div className="comp-col comp-val">{r.big}</div>
            </div>
          ))}
        </div>
        <p className="comp-note">Persönlicher Ansprechpartner in Wien & Frankfurt. Kein anonymes Ticketsystem, keine Offshore-Teams — nur direkte Kommunikation und nachweisbare Ergebnisse.</p>
      </Reveal>
    </section>
  );
}

Object.assign(window, { HomePage });
