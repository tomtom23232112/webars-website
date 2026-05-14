// ─── Exit-Intent Popup ────────────────────────────────────────────────────────
function ExitIntentPopup({ onContact }) {
  const [show, setShow] = React.useState(false);
  const [closing, setClosing] = React.useState(false);

  React.useEffect(() => {
    if (sessionStorage.getItem('wa_exit_shown')) return;
    const startTime = Date.now();
    let shown = false;

    const showPopup = () => {
      if (shown) return;
      shown = true;
      setShow(true);
    };

    // Exit-intent: Maus Richtung Tab-Leiste
    const onMouseLeave = (e) => {
      if (e.clientY > 16) return;
      if (Date.now() - startTime < 30000) return; // erst nach 30s
      showPopup();
    };

    // Fallback: nach 1,5 Minuten automatisch zeigen
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
        <div className="exit-tag">Kostenloses Angebot</div>
        <h2 className="exit-h">Warte kurz —</h2>
        <p className="exit-sub">
          Hol dir ein kostenloses <strong>30-Minuten-Website-Audit</strong>.<br />
          Wir zeigen dir konkret, wie du mit KI-Automatisierung<br />und Webdesign schneller wächst.
        </p>
        <div className="exit-ctas">
          <button
            className="btn-primary btn-xl exit-btn-yes"
            onClick={() => { close(); if (onContact) onContact(); }}
          >
            Jetzt buchen →
          </button>
          <button className="exit-btn-no" onClick={close}>Nein danke, ich wachse lieber langsam.</button>
        </div>
        <button className="exit-close" onClick={close} aria-label="Schließen">×</button>
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

  // Scroll to bottom when messages change
  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [msgs, loading]);

  // Bubble notification after delay if chat not opened
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
      {/* Chat window */}
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

      {/* Toggle button */}
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
