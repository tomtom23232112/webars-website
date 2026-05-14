// Shared hooks and primitive components

function useScrollReveal(threshold = 0.12) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, className = '', delay = 0, style = {} }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

function CustomCursor() {
  const pos = React.useRef({ x: -100, y: -100 });
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);
  const ringPos = React.useRef({ x: -100, y: -100 });
  const [hov, setHov] = React.useState(false);
  const [enabled, setEnabled] = React.useState(true);

  React.useEffect(() => {
    // Skip custom cursor on touch devices
    const isTouch = window.matchMedia && window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) { setEnabled(false); return; }
    let raf;
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    // inject cursor:none while custom cursor is active — but keep text cursor on text inputs
    const s = document.createElement('style');
    s.textContent = `html, body, a, button, [data-hover], [role="button"] { cursor: none !important; }
      input[type="text"], input[type="email"], input[type="tel"], input[type="password"], input[type="search"], input[type="url"], input:not([type]), textarea, [contenteditable="true"] { cursor: text !important; }`;
    document.head.appendChild(s);
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };
    const over = (e) => {
      const isInput = e.target.closest('input, textarea, select, [contenteditable="true"]');
      setHov(!isInput && !!e.target.closest('a, button, [data-hover], [role="button"]'));
    };
    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      cancelAnimationFrame(raf);
      s.remove();
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className={`cursor-ring ${hov ? 'cursor-ring-hover' : ''}`} aria-hidden="true" />
    </>
  );
}

function MarqueeBand({ items, rtl = false }) {
  const text = items.join('   ✦   ') + '   ✦   ';
  return (
    <div className="marquee-row">
      <span className={`marquee-content ${rtl ? 'marquee-rtl' : 'marquee-ltr'}`}>
        {text}{text}{text}
      </span>
    </div>
  );
}

function PhotoPlaceholder({ label, aspect = '4/5', style = {} }) {
  return (
    <div className="photo-ph" style={{ aspectRatio: aspect, ...style }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <pattern id="stripes" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
            <rect width="10" height="20" fill="#1a1a1a" />
            <rect x="10" width="10" height="20" fill="#141414" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stripes)" />
        <rect width="100%" height="100%" fill="linear-gradient(to bottom, transparent 60%, #0a0a0a)" />
      </svg>
      <div className="photo-ph-label">{label}</div>
    </div>
  );
}

function CloudAccent({ side = 'left', top, bottom, opacity = 0.35, scale = 1 }) {
  const isLeft = side === 'left';
  return (
    <div style={{
      position: 'absolute',
      [isLeft ? 'left' : 'right']: `${-60 * scale}px`,
      top: top !== undefined ? top : 'auto',
      bottom: bottom !== undefined ? bottom : 'auto',
      width: `${320 * scale}px`,
      height: `${160 * scale}px`,
      background: "url('assets/cloud.png') center/contain no-repeat",
      transform: isLeft ? 'none' : 'scaleX(-1)',
      opacity,
      pointerEvents: 'none',
      zIndex: 0,
    }} />
  );
}

Object.assign(window, { useScrollReveal, Reveal, CustomCursor, MarqueeBand, PhotoPlaceholder, CloudAccent });
