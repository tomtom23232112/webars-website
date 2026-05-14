// ─── Mobile Sticky Bar ─────────────────────────────────────────────────────────
function MobileStickyBar({ onContact }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (document.getElementById('wa-sticky-styles')) return;
    const s = document.createElement('style');
    s.id = 'wa-sticky-styles';
    s.textContent = `
      .mobile-sticky-bar{position:fixed;bottom:0;left:0;right:0;z-index:900;display:none;gap:8px;transform:translateY(100%);transition:transform .4s cubic-bezier(.22,1,.36,1);background:rgba(10,10,10,.93);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-top:1px solid rgba(255,255,255,.1);padding:12px 16px;padding-bottom:calc(12px + env(safe-area-inset-bottom))}
      @media(max-width:768px){.mobile-sticky-bar{display:flex}}
      .mobile-sticky-bar.sticky-in{transform:translateY(0)}
      .sticky-call{flex:1;display:flex;align-items:center;justify-content:center;gap:7px;height:48px;border-radius:8px;border:1px solid rgba(255,255,255,.15);color:#fff;font-family:var(--font-body);font-size:14px;font-weight:600;text-decoration:none;background:transparent;transition:background .2s}
      .sticky-call:hover{background:rgba(255,255,255,.08)}
      .sticky-cta{flex:1;height:48px;border-radius:8px;border:none;background:var(--accent);color:#fff;font-family:var(--font-body);font-size:14px;font-weight:600;cursor:pointer;transition:opacity .2s}
      .sticky-cta:hover{opacity:.88}
    `;
    document.head.appendChild(s);
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`mobile-sticky-bar${visible ? ' sticky-in' : ''}`}>
      <a href="tel:+436703061078" className="sticky-call">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.007 1.2 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
        </svg>
        Anrufen
      </a>
      <button className="sticky-cta" onClick={onContact}>Beratung anfragen</button>
    </div>
  );
}

// ─── WhatsApp Button ────────────────────────────────────────────────────────────
function WhatsAppButton() {
  React.useEffect(() => {
    if (document.getElementById('wa-whatsapp-styles')) return;
    const s = document.createElement('style');
    s.id = 'wa-whatsapp-styles';
    s.textContent = `
      .wa-float{position:fixed;right:24px;bottom:24px;z-index:800;width:54px;height:54px;border-radius:50%;background:#25d366;display:flex;align-items:center;justify-content:center;text-decoration:none;box-shadow:0 4px 20px rgba(37,211,102,.45);animation:waPulse 4.5s ease-in-out infinite;transition:transform .2s}
      .wa-float:hover{transform:scale(1.1);animation:none}
      @keyframes waPulse{0%,100%{box-shadow:0 4px 20px rgba(37,211,102,.45)}55%{box-shadow:0 4px 32px rgba(37,211,102,.75),0 0 0 10px rgba(37,211,102,.1)}}
      @media(max-width:768px){.wa-float{bottom:84px}}
    `;
    document.head.appendChild(s);
  }, []);

  const msg = encodeURIComponent('Hallo WebArs, ich interessiere mich für ein Erstgespräch.');
  return (
    <a
      href={`https://wa.me/436703061078?text=${msg}`}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

// ─── Exit-Intent Popup ────────────────────────────────────────────────────────
function ExitIntentPopup({ onContact }) {
  const [show, setShow] = React.useState(false);
  const [closing, setClosing] = React.useState(false);
  const [step, setStep] = React.useState('form');
  const [email, setEmail] = React.useState('');
  const [emailErr, setEmailErr] = React.useState('');
  const [sending, setSending] = React.useState(false);

  React.useEffect(() => {
    if (document.getElementById('wa-popup-styles')) return;
    const s = document.createElement('style');
    s.id = 'wa-popup-styles';
    s.textContent = `
      .exit-form{display:flex;flex-direction:column;gap:.75rem;width:100%;margin-top:1.25rem}
      .exit-form-input{background:#1a1a1a;border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:.75rem 1rem;color:#fff;font-family:inherit;font-size:15px;outline:none;transition:border-color .2s;width:100%;box-sizing:border-box}
      .exit-form-input:focus{border-color:var(--accent)}
      .exit-form-input-err{border-color:#ff4444!important}
      .exit-form-err{color:#ff6b6b;font-size:12px;margin-top:2px}
      .exit-form-success{text-align:center;padding:1.5rem 0 1rem}
      .exit-success-icon{width:56px;height:56px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:1.4rem;color:#fff;margin:0 auto 1rem;line-height:1}
      .exit-popup-microcopy{font-size:11px;color:rgba(255,255,255,.28);text-align:center;margin-top:.75rem}
    `;
    document.head.appendChild(s);
  }, []);

  React.useEffect(() => {
    if (sessionStorage.getItem('wa_exit_shown')) return;
    const startTime = Date.now();
    let shown = false;
    const showPopup = () => { if (shown) return; shown = true; setShow(true); };
    const onMouseLeave = (e) => {
      if (e.clientY > 16) return;
      if (Date.now() - startTime < 30000) return;
      showPopup();
    };
    const timer = setTimeout(showPopup, 90000);
    document.addEventListener('mouseleave', onMouseLeave);
    return () => { document.removeEventListener('mouseleave', onMouseLeave); clearTimeout(timer); };
  }, []);

  const close = () => {
    sessionStorage.setItem('wa_exit_shown', '1');
    setClosing(true);
    setTimeout(() => { setShow(false); setClosing(false); }, 320);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailErr('Bitte gib eine gültige E-Mail ein.'); return;
    }
    setEmailErr('');
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setStep('success');
      sessionStorage.setItem('wa_exit_shown', '1');
    }, 900);
  };

  return (
    <>
      <MobileStickyBar onContact={onContact} />
      <WhatsAppButton />
      {show && (
        <div
          className={`exit-overlay ${closing ? 'exit-out' : 'exit-in'}`}
          onClick={close}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div
            className={`exit-popup ${closing ? 'exit-popup-out' : 'exit-popup-in'}`}
            onClick={e => e.stopPropagation()}
            style={{ margin: 'auto' }}
          >
            <div className="exit-accent-bar" />
            <button className="exit-close" onClick={close} aria-label="Schließen">×</button>

            {step === 'form' ? (
              <>
                <div className="exit-tag">Kostenloses Freebie</div>
                <h2 className="exit-h">Bevor du gehst —</h2>
                <p className="exit-sub">
                  Hol dir kostenlos die <strong>WebArs-KI-Checkliste</strong>: 15&nbsp;Prozesse, die du in deinem Unternehmen automatisieren kannst — mit konkreten Tool-Empfehlungen.
                </p>
                <form className="exit-form" onSubmit={submit}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <input
                      className={`exit-form-input${emailErr ? ' exit-form-input-err' : ''}`}
                      type="email"
                      placeholder="Deine E-Mail-Adresse"
                      value={email}
                      onChange={e => { setEmail(e.target.value); if (emailErr) setEmailErr(''); }}
                      required
                    />
                    {emailErr && <span className="exit-form-err">{emailErr}</span>}
                  </div>
                  <button
                    type="submit"
                    className="btn-primary btn-xl exit-btn-yes"
                    disabled={sending}
                    style={{ opacity: sending ? .7 : 1 }}
                  >
                    {sending ? 'Wird gesendet…' : 'Checkliste anfordern →'}
                  </button>
                </form>
                <p className="exit-popup-microcopy">Kein Spam. Jederzeit abmeldbar.</p>
                <button className="exit-btn-no" onClick={close} style={{ marginTop: '.5rem' }}>
                  Nein danke, ich will keine Zeit sparen.
                </button>
              </>
            ) : (
              <div className="exit-form-success">
                <div className="exit-success-icon">✓</div>
                <h2 className="exit-h" style={{ fontSize: '1.6rem' }}>Gleich in deinem Postfach!</h2>
                <p className="exit-sub">
                  Wir schicken dir die Checkliste an <strong>{email}</strong>.<br />
                  Schau auch im Spam-Ordner nach.
                </p>
                <button className="btn-ghost" style={{ marginTop: '1.5rem' }} onClick={close}>
                  Schließen
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// ─── WebArs Chatbot ───────────────────────────────────────────────────────────
const WA_SYSTEM = `Du bist der KI-Assistent von WebArs, einer Digitalagentur aus Wien und Frankfurt. WebArs kombiniert KI-Automatisierung mit modernem Webdesign.

Über WebArs:
- Gegründet in Wien, auch Büro in Frankfurt
- Leistungen: KI-Automatisierung (n8n, Make, ChatGPT API, Claude), Webdesign (Framer), SEO & GEO (Generative Engine Optimization)
- Durchschnittliche Lieferzeit: 2–3 Wochen
- Reaktionszeit: 24h
- Ø 4.9 Sterne auf Trustpilot, 50+ Projekte

Preise (Beispiele):
- Webdesign Starter: ab €1.250 (bis 5 Seiten, Framer, mobile-optimiert)
- Webdesign Business: ab €3.000 (bis 12 Seiten, Animationen, CMS)
- Webdesign Premium: ab €6.500 (unbegrenzt, Brand Identity, KI-Chatbot)
- KI-Automatisierung Starter: ab €990 (1 Workflow, n8n/Make)
- KI-Automatisierung Business: ab €2.800 (bis 5 Workflows, Lead-Prozess)
- KI-Automatisierung Premium: ab €5.500 (unbegrenzt, Custom KI-Modell)
- SEO ab €490/Monat

Verhalten:
- Antworte auf Deutsch, freundlich und direkt
- Halte Antworten kurz (max. 3-4 Sätze)
- Wenn jemand konkret Interesse zeigt, empfehle ein kostenloses Erstgespräch: "Buche jetzt dein kostenloses 30-Minuten-Gespräch auf unserer Website."
- Erfinde keine Informationen — wenn du etwas nicht weißt, sage das ehrlich
- Du bist ein echtes Beispiel von WebArs' eigener KI-Kompetenz — erwähne das gerne subtil`;

function WebArsChat() {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState([
    { role: 'assistant', content: 'Hi! Ich bin der WebArs KI-Assistent — und ein live Beispiel für das was wir bauen 🤖\n\nWie kann ich dir helfen?' }
  ]);
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const listRef = React.useRef(null);
  const toggleRef = React.useRef(null);

  React.useEffect(() => {
    if (document.getElementById('wa-chat-extra')) return;
    const s = document.createElement('style');
    s.id = 'wa-chat-extra';
    s.textContent = `
      @keyframes chatWiggle{0%,100%{transform:rotate(0) scale(1)}20%{transform:rotate(-10deg) scale(1.05)}40%{transform:rotate(10deg) scale(1.05)}60%{transform:rotate(-6deg) scale(1.02)}80%{transform:rotate(6deg) scale(1.02)}}
      .wa-chat-toggle.wiggle{animation:chatWiggle .7s ease-in-out}
      @media(max-width:768px){.wa-chat-wrap{bottom:152px!important}}
    `;
    document.head.appendChild(s);
  }, []);

  // Wiggle every 45s — never auto-open
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (open) return;
      const btn = toggleRef.current;
      if (!btn) return;
      btn.classList.remove('wiggle');
      void btn.offsetWidth; // reflow to restart animation
      btn.classList.add('wiggle');
      setTimeout(() => btn.classList.remove('wiggle'), 700);
    }, 45000);
    return () => clearInterval(interval);
  }, [open]);

  React.useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [msgs, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...msgs, { role: 'user', content: text }];
    setMsgs(next);
    setInput('');
    setLoading(true);
    try {
      const reply = await window.claude.complete({
        messages: next.map(m => ({ role: m.role, content: m.content })),
        system: WA_SYSTEM,
      });
      setMsgs([...next, { role: 'assistant', content: reply }]);
    } catch {
      setMsgs([...next, { role: 'assistant', content: 'Entschuldigung, kurzer technischer Fehler. Schreib uns direkt: office@webars.at' }]);
    }
    setLoading(false);
  };

  const onKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } };

  return (
    <div className="wa-chat-wrap">
      {open && (
        <div className="wa-chat-window">
          <div className="wa-chat-header">
            <div className="wa-chat-avatar">W</div>
            <div>
              <div className="wa-chat-name">WebArs KI</div>
              <div className="wa-chat-status"><span className="wa-online-dot" />Online</div>
            </div>
            <button className="wa-chat-close" onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="wa-chat-msgs" ref={listRef}>
            {msgs.map((m, i) => (
              <div key={i} className={`wa-msg ${m.role === 'user' ? 'wa-msg-user' : 'wa-msg-bot'}`}>
                <div className="wa-bubble">{m.content}</div>
              </div>
            ))}
            {loading && (
              <div className="wa-msg wa-msg-bot">
                <div className="wa-bubble wa-typing"><span /><span /><span /></div>
              </div>
            )}
          </div>
          <div className="wa-chat-input-row">
            <textarea
              className="wa-chat-input"
              placeholder="Nachricht schreiben…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={onKey}
              rows={1}
            />
            <button className="wa-chat-send" onClick={send} disabled={!input.trim() || loading}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8L14 2L10 8L14 14L2 8Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
          <div className="wa-chat-footer">Powered by Claude · WebArs KI-Automatisierung</div>
        </div>
      )}
      <button ref={toggleRef} className="wa-chat-toggle" onClick={() => setOpen(o => !o)} aria-label="Chat öffnen">
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M19 3H3C1.9 3 1 3.9 1 5V15C1 16.1 1.9 17 3 17H7V21L11 17H19C20.1 17 21 16.1 21 15V5C21 3.9 20.1 3 19 3Z" fill="currentColor"/>
          </svg>
        )}
      </button>
    </div>
  );
}

Object.assign(window, { ExitIntentPopup, WebArsChat });
