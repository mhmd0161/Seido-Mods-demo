import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__bg-glow" />
        <div className="hero__bg-grid" />
      </div>

      <div className="hero__watch">
        <WatchFace />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">精度 — Precision</p>
        <h1 className="hero__title">
          The Art of the<br />
          <em>Custom Build</em>
        </h1>
        <p className="hero__subtitle">
          Bespoke Seiko modifications crafted for those who refuse<br className="hero__break" /> to wear what everyone else is wearing.
        </p>
        <div className="hero__actions">
          <a href="#work" className="hero__btn hero__btn--primary">
            View Our Work
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">
            Commission a Build
          </a>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span />
      </div>
    </section>
  );
}

function WatchFace() {
  return (
    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="watch-svg">
      {/* Strap top */}
      <rect x="112" y="10" width="76" height="80" rx="8" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1" />
      <rect x="119" y="14" width="62" height="72" rx="6" fill="#141414" />
      {/* Strap holes */}
      {[30, 42, 54, 66].map((y) => (
        <circle key={y} cx="150" cy={y} r="3" fill="#0a0a0a" />
      ))}

      {/* Case */}
      <rect x="60" y="90" width="180" height="220" rx="48" fill="#1e1e1e" stroke="#2e2e2e" strokeWidth="1.5" />
      <rect x="68" y="98" width="164" height="204" rx="42" fill="#161616" />

      {/* Crown */}
      <rect x="242" y="175" width="18" height="28" rx="5" fill="#1a1a1a" stroke="#333" strokeWidth="1" />

      {/* Dial outer ring */}
      <circle cx="150" cy="200" r="76" fill="#111" stroke="#2a2a2a" strokeWidth="1" />
      {/* Dial chapter ring */}
      <circle cx="150" cy="200" r="72" fill="none" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.4" />

      {/* Hour markers */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x1 = 150 + 63 * Math.cos(angle);
        const y1 = 200 + 63 * Math.sin(angle);
        const x2 = 150 + 55 * Math.cos(angle);
        const y2 = 200 + 55 * Math.sin(angle);
        const isMain = i % 3 === 0;
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={isMain ? '#c9a84c' : '#444'}
            strokeWidth={isMain ? 2 : 1}
          />
        );
      })}

      {/* Minute markers */}
      {Array.from({ length: 60 }).map((_, i) => {
        if (i % 5 === 0) return null;
        const angle = (i * 6 - 90) * (Math.PI / 180);
        const x1 = 150 + 70 * Math.cos(angle);
        const y1 = 200 + 70 * Math.sin(angle);
        const x2 = 150 + 65 * Math.cos(angle);
        const y2 = 200 + 65 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="0.8" />;
      })}

      {/* Logo on dial */}
      <text x="150" y="172" textAnchor="middle" fill="#c9a84c" fontSize="8" letterSpacing="3" fontFamily="Inter, sans-serif" fontWeight="500">SEIDO</text>
      <text x="150" y="183" textAnchor="middle" fill="#555" fontSize="5" letterSpacing="2" fontFamily="Inter, sans-serif">MODS</text>

      {/* Sub-seconds at 6 o'clock */}
      <circle cx="150" cy="233" r="12" fill="none" stroke="#2a2a2a" strokeWidth="0.8" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 - 90) * (Math.PI / 180);
        return (
          <line key={i}
            x1={150 + 10 * Math.cos(a)} y1={233 + 10 * Math.sin(a)}
            x2={150 + 12 * Math.cos(a)} y2={233 + 12 * Math.sin(a)}
            stroke="#333" strokeWidth="0.7"
          />
        );
      })}
      <circle cx="150" cy="233" r="1.5" fill="#c9a84c" />

      {/* Hour hand */}
      <line x1="150" y1="200" x2="150" y2="158" stroke="#e8d5a3" strokeWidth="3" strokeLinecap="round" />
      {/* Minute hand */}
      <line x1="150" y1="200" x2="176" y2="172" stroke="#e8d5a3" strokeWidth="2" strokeLinecap="round" />
      {/* Second hand */}
      <line x1="150" y1="218" x2="150" y2="154" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" />
      {/* Center dot */}
      <circle cx="150" cy="200" r="4" fill="#c9a84c" />
      <circle cx="150" cy="200" r="2" fill="#090909" />

      {/* Sapphire crystal highlight */}
      <ellipse cx="124" cy="156" rx="14" ry="6" fill="white" fillOpacity="0.03" transform="rotate(-30 124 156)" />

      {/* Strap bottom */}
      <rect x="112" y="310" width="76" height="80" rx="8" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1" />
      <rect x="119" y="314" width="62" height="72" rx="6" fill="#141414" />
      {[330, 342, 354, 366].map((y) => (
        <circle key={y} cx="150" cy={y} r="3" fill="#0a0a0a" />
      ))}
    </svg>
  );
}
