import { useEffect, useState } from 'react';
import './FeaturedWork.css';

const FALLBACK_BUILDS = [
  { id: 1, title: 'Glacier Alpinist', base: 'Seiko SARB017', tags: ['Custom Dial', 'Sapphire Crystal'], hue: '210' },
  { id: 2, title: 'Midnight Turtle', base: 'Seiko SRP777', tags: ['Custom Bezel', 'Lume Hands'], hue: '240' },
  { id: 3, title: 'Brushed Phantom', base: 'Seiko SKX007', tags: ['Full Build', 'NH35 Movement'], hue: '0' },
  { id: 4, title: 'Amber Field', base: 'Seiko 5 Sports', tags: ['Custom Dial', 'Case Finishing'], hue: '35' },
  { id: 5, title: 'Arctic Explorer', base: 'Seiko SRPD', tags: ['Snowflake Dial', 'Chapter Ring'], hue: '190' },
  { id: 6, title: 'Carbon Edition', base: 'Seiko SKX013', tags: ['Full Build', 'Custom Bracelet'], hue: '150' },
];

export default function FeaturedWork() {
  const [builds, setBuilds] = useState(FALLBACK_BUILDS);

  useEffect(() => {
    fetch('/api/builds')
      .then((r) => r.json())
      .then((data) => {
        const withHues = data.map((b, i) => ({ ...b, hue: FALLBACK_BUILDS[i]?.hue || '0' }));
        setBuilds(withHues);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="work" id="work">
      <div className="work__inner">
        <div className="work__header reveal">
          <p className="section-eyebrow">Featured Builds</p>
          <h2 className="section-title">Crafted to Last</h2>
          <p className="section-subtitle">
            Every build is a collaboration between client vision and our craft.
            No two pieces are the same.
          </p>
        </div>

        <div className="work__grid">
          {builds.map((build, i) => (
            <BuildCard key={build.id} build={build} index={i} />
          ))}
        </div>

        <div className="work__footer reveal">
          <a href="#contact" className="work__all-btn">
            Commission Your Build
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function BuildCard({ build, index }) {
  const delayClass = `reveal-delay-${(index % 3) + 1}`;
  return (
    <article className={`build-card reveal ${delayClass}`}>
      <div className="build-card__image" style={{ '--hue': build.hue }}>
        <WatchMini hue={build.hue} />
        <div className="build-card__overlay">
          <span className="build-card__view">View Build</span>
        </div>
      </div>
      <div className="build-card__info">
        <h3 className="build-card__title">{build.title}</h3>
        <p className="build-card__base">{build.base}</p>
        <div className="build-card__tags">
          {build.tags.map((tag) => (
            <span key={tag} className="build-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function WatchMini({ hue }) {
  const color = `hsl(${hue}, 60%, 55%)`;
  const colorDim = `hsl(${hue}, 40%, 25%)`;
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="watch-mini-svg">
      <circle cx="100" cy="100" r="78" fill="#111" />
      <circle cx="100" cy="100" r="72" fill="#0e0e0e" stroke={colorDim} strokeWidth="0.8" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x1 = 100 + 62 * Math.cos(angle);
        const y1 = 100 + 62 * Math.sin(angle);
        const x2 = 100 + 54 * Math.cos(angle);
        const y2 = 100 + 54 * Math.sin(angle);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={i % 3 === 0 ? color : '#333'}
            strokeWidth={i % 3 === 0 ? 2.5 : 1}
          />
        );
      })}
      <text x="100" y="80" textAnchor="middle" fill={color} fontSize="7" letterSpacing="3" fontFamily="Inter, sans-serif" fontWeight="500">SEIDO</text>
      <line x1="100" y1="100" x2="100" y2="68" stroke="#ddd" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="100" y1="100" x2="122" y2="82" stroke="#ddd" strokeWidth="2" strokeLinecap="round" />
      <line x1="100" y1="108" x2="100" y2="64" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <circle cx="100" cy="100" r="4" fill={color} />
      <circle cx="100" cy="100" r="2" fill="#090909" />
      <ellipse cx="78" cy="72" rx="10" ry="4" fill="white" fillOpacity="0.03" transform="rotate(-30 78 72)" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
