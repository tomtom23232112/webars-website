// ─── Exit-Intent Popup ────────────────────────────────────────────────────────
function ExitIntentPopup({ onContact }) {
  const [show, setShow] = React.useState(false);
  const [closing, setClosing] = React.useState(false);
  const [step, setStep] = React.useState('form');
  const [name, setName] = React.useState('');
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
    `;
    document.head.appendChild(s);
  }, []);

  React.useEffect(() => {
    if (sessionStorage.getItem('wa_exit_shown')) return;
    const startTime = Date.now();
    let shown = false;

    const showPopup = () => {
      if (shown) return;
      shown = true;
      setShow(true);
    };

    const onMouseLeave = (e) => {
      if (e.clientY > 16) return;
      if (Date.now() - startTime < 30000) return;
      showPopup();
    };

    const timer = setTimeout(showPopup, 90000);
    document.addEventListener('mouseleave', onMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', onMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  const close = () => {
    sessionStorage.setItem('wa_exit_shown', '1');
    setClosing(true);
    setTimeout(() => { setShow(false); setClosing(false); }, 320);
  };

  const submit = (e) => {
    e.preventDefault();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) { setEmailErr('Bitte gib eine gültige E-Mail ein.'); return; }
    setEmailErr('');
    setSending(true);
    // Replace with real endpoint when ready
    setTimeout(() => {
      setSending(false);
      setStep('success');
      sessionStorage.setItem('wa_exit_shown', '1');
    }, 900);
  };

  if (!show) return null;

  return (
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
            <div className="exit-tag">Kostenloses Angebot</div>
            <h2 className="exit-h">Warte kurz —</h2>
            <p className="exit-sub">
              Hol dir ein kostenloses <strong>30-Minuten-Website-Audit</strong>.<br />
              Wir zeigen dir konkret, wie du mit KI&#8209;Automatisierung und Webdesign schneller wächst.
            </p>
            <form className="exit-form" onSubmit={submit}>
              <input
                className="exit-form-input"
                type="text"
                placeholder="Dein Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
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
                {sending ? 'Wird gesendet…' : 'Kostenlos anfragen →'}
              </button>
            </form>
            <button className="exit-btn-no" onClick={close} style={{ marginTop: '.75rem' }}>
              Nein danke, ich wachse lieber langsam.
            </button>
          </>
        ) : (
          <div className="exit-form-success">
            <div className="exit-success-icon">✓</div>
            <h2 className="exit-h" style={{ fontSize: '1.6rem' }}>Danke, {name || 'schön'}!</h2>
            <p className="exit-sub">
              Wir melden uns innerhalb von 24&#8239;h bei dir.<br />
              Schau auch mal in den Spam&#8209;Ordner.
            </p>
            <button className="btn-ghost" style={{ marginTop: '1.5rem' }} onClick={close}>
              Schließen
            </button>
          </div>
        )}
      </div>
    </div>
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
  const [msgs, setMsgs]   = React.useState([
    { role: 'assistant', content: 'Hi! Ich bin der WebArs KI-Assistent — und ein live Beispiel für das was wir bauen 🤖\n\nWie kann ich dir helfen?' }
  ]);
  const [input, setInput]   = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [hasNew, setHasNew]   = React.useState(false);
  const listRef = React.useRef(null);

  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [msgs, loading]);

  React.useEffect(() => {
    const t = setTimeout(() => { if (!open) setHasNew(true); }, 12000);
    return () => clearTimeout(t);
  }, []);

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
    } catch (e) {
      setMsgs([...next, { role: 'assistant', content: 'Entschuldigung, kurzer technischer Fehler. Schreib uns direkt: office@webars.at' }]);
    }
    setLoading(false);
  };

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const toggleOpen = () => {
    setOpen(o => !o);
    setHasNew(false);
  };

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
                <div className="wa-bubble wa-typing">
                  <span /><span /><span />
                </div>
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

      <button className="wa-chat-toggle" onClick={toggleOpen} aria-label="Chat öffnen">
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M19 3H3C1.9 3 1 3.9 1 5V15C1 16.1 1.9 17 3 17H7V21L11 17H19C20.1 17 21 16.1 21 15V5C21 3.9 20.1 3 19 3Z" fill="currentColor"/>
          </svg>
        )}
        {hasNew && !open && <span className="wa-chat-badge" />}
      </button>
    </div>
  );
}

Object.assign(window, { ExitIntentPopup, WebArsChat });
