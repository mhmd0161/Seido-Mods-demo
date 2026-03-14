import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__visual reveal">
          <div className="about__visual-frame">
            <AboutWatch />
            <div className="about__badge">
              <span className="about__badge-text">精度</span>
              <span className="about__badge-sub">Seido</span>
            </div>
          </div>
          <div className="about__visual-accent" />
        </div>

        <div className="about__content">
          <p className="section-eyebrow reveal">Our Story</p>
          <h2 className="section-title reveal">Built on Obsession,<br /><em>Refined by Craft</em></h2>

          <div className="about__text reveal reveal-delay-1">
            <p>
              Seido Mods was born from a deep passion for Seiko's iconic watch platform and the
              endless possibilities it presents. <em>Seido</em> — 精度 — means <em>precision</em> in
              Japanese. It's not just a name. It's a standard we hold every build to.
            </p>
          </div>

          <div className="about__text reveal reveal-delay-2">
            <p>
              What started as a personal obsession became a craft. Each modification is
              researched, sourced, and assembled with the care of someone who would wear it
              themselves. We work with a small number of clients at a time, because quality
              demands time, and time demands honesty.
            </p>
          </div>

          <div className="about__stats reveal reveal-delay-3">
            <div className="about__stat">
              <span className="about__stat-number">100+</span>
              <span className="about__stat-label">Builds Completed</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">0</span>
              <span className="about__stat-label">Cookie-Cutter Builds</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">∞</span>
              <span className="about__stat-label">Possible Combinations</span>
            </div>
          </div>

          <a href="https://www.instagram.com/seidomods/" target="_blank" rel="noopener noreferrer" className="about__ig-link reveal reveal-delay-4">
            <InstagramIcon />
            Follow the journey @seidomods
          </a>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function AboutWatch() {
  return (
    <svg viewBox="0 0 280 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="about-watch-svg">
      {/* Strap top */}
      <rect x="100" y="8" width="80" height="70" rx="7" fill="#1a1a1a" stroke="#252525" strokeWidth="1" />
      <line x1="110" y1="8" x2="110" y2="78" stroke="#222" strokeWidth="1" />
      <line x1="170" y1="8" x2="170" y2="78" stroke="#222" strokeWidth="1" />
      {[22, 36, 50, 64].map(y => <circle key={y} cx="140" cy={y} r="4" fill="#0a0a0a" />)}

      {/* Case */}
      <rect x="46" y="78" width="188" height="204" rx="50" fill="#1c1c1c" stroke="#282828" strokeWidth="1.5" />
      <rect x="54" y="86" width="172" height="188" rx="44" fill="#151515" />

      {/* Crown */}
      <rect x="237" y="158" width="16" height="24" rx="4" fill="#1e1e1e" stroke="#2e2e2e" strokeWidth="1" />

      {/* Dial */}
      <circle cx="140" cy="180" r="80" fill="#0d0d0d" stroke="#222" strokeWidth="1" />

      {/* Chapter ring ticks */}
      {Array.from({ length: 60 }).map((_, i) => {
        const isMain = i % 5 === 0;
        const ang = (i * 6 - 90) * Math.PI / 180;
        const r1 = isMain ? 71 : 74;
        const r2 = 77;
        return (
          <line key={i}
            x1={140 + r1 * Math.cos(ang)} y1={180 + r1 * Math.sin(ang)}
            x2={140 + r2 * Math.cos(ang)} y2={180 + r2 * Math.sin(ang)}
            stroke={isMain ? '#c9a84c' : '#2a2a2a'}
            strokeWidth={isMain ? 2 : 0.8}
          />
        );
      })}

      {/* Sunburst texture lines */}
      {Array.from({ length: 36 }).map((_, i) => {
        const ang = (i * 10) * Math.PI / 180;
        return (
          <line key={i}
            x1="140" y1="180"
            x2={140 + 68 * Math.cos(ang)} y2={180 + 68 * Math.sin(ang)}
            stroke="rgba(255,255,255,0.015)" strokeWidth="1"
          />
        );
      })}

      {/* Date window at 3 */}
      <rect x="194" y="173" width="16" height="14" rx="2" fill="#111" stroke="#333" strokeWidth="0.8" />
      <text x="202" y="183" textAnchor="middle" fill="#888" fontSize="7" fontFamily="Inter">14</text>

      {/* Logo */}
      <text x="140" y="154" textAnchor="middle" fill="#c9a84c" fontSize="9" letterSpacing="4" fontFamily="Inter, sans-serif" fontWeight="500">SEIDO</text>
      <text x="140" y="166" textAnchor="middle" fill="#444" fontSize="5.5" letterSpacing="3" fontFamily="Inter, sans-serif">CUSTOM MODS</text>

      {/* Hands */}
      <line x1="140" y1="180" x2="140" y2="138" stroke="#e8d5a3" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="140" y1="180" x2="168" y2="160" stroke="#e8d5a3" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="140" y1="196" x2="140" y2="130" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="140" cy="180" r="5" fill="#c9a84c" />
      <circle cx="140" cy="180" r="2.5" fill="#090909" />

      {/* Crystal highlight */}
      <ellipse cx="114" cy="142" rx="16" ry="6" fill="white" fillOpacity="0.025" transform="rotate(-30 114 142)" />

      {/* Strap bottom */}
      <rect x="100" y="282" width="80" height="70" rx="7" fill="#1a1a1a" stroke="#252525" strokeWidth="1" />
      <line x1="110" y1="282" x2="110" y2="352" stroke="#222" strokeWidth="1" />
      <line x1="170" y1="282" x2="170" y2="352" stroke="#222" strokeWidth="1" />
      {[296, 310, 324, 338].map(y => <circle key={y} cx="140" cy={y} r="4" fill="#0a0a0a" />)}
    </svg>
  );
}
