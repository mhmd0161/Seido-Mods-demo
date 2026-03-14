import './InstagramCTA.css';

const mockPosts = [
  { id: 1, hue: '210', label: 'Glacier Alpinist build' },
  { id: 2, hue: '35', label: 'Amber Field complete' },
  { id: 3, hue: '0', label: 'Brushed Phantom detail' },
  { id: 4, hue: '150', label: 'Carbon Edition' },
  { id: 5, hue: '240', label: 'Midnight Turtle ref' },
  { id: 6, hue: '190', label: 'Arctic Explorer dial' },
];

export default function InstagramCTA() {
  return (
    <section className="ig-cta">
      <div className="ig-cta__inner">
        <div className="ig-cta__header reveal">
          <p className="section-eyebrow">Instagram</p>
          <h2 className="section-title">Follow the Journey</h2>
          <p className="section-subtitle">
            Behind-the-scenes builds, finished pieces, and the occasional tear-down.
          </p>
        </div>

        <div className="ig-cta__grid">
          {mockPosts.map((post, i) => (
            <a
              key={post.id}
              href="https://www.instagram.com/seidomods/"
              target="_blank"
              rel="noopener noreferrer"
              className={`ig-post reveal reveal-delay-${(i % 3) + 1}`}
              style={{ '--hue': post.hue }}
            >
              <div className="ig-post__img">
                <WatchThumb hue={post.hue} />
                <div className="ig-post__hover">
                  <InstagramIcon />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="ig-cta__follow reveal">
          <a
            href="https://www.instagram.com/seidomods/"
            target="_blank"
            rel="noopener noreferrer"
            className="ig-cta__btn"
          >
            <InstagramIcon />
            @seidomods
          </a>
        </div>
      </div>
    </section>
  );
}

function WatchThumb({ hue }) {
  const c = `hsl(${hue}, 50%, 45%)`;
  return (
    <svg viewBox="0 0 200 200" fill="none" className="watch-thumb-svg">
      <rect width="200" height="200" fill={`hsl(${hue}, 20%, 8%)`} />
      <radialGradient id={`g${hue}`} cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor={`hsl(${hue}, 30%, 15%)`} />
        <stop offset="100%" stopColor={`hsl(${hue}, 10%, 5%)`} />
      </radialGradient>
      <rect width="200" height="200" fill={`url(#g${hue})`} />
      <circle cx="100" cy="100" r="64" fill="#0e0e0e" stroke={`hsl(${hue}, 30%, 20%)`} strokeWidth="1" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 - 90) * Math.PI / 180;
        const isM = i % 3 === 0;
        return <line key={i}
          x1={100 + (isM ? 52 : 55) * Math.cos(a)} y1={100 + (isM ? 52 : 55) * Math.sin(a)}
          x2={100 + 62 * Math.cos(a)} y2={100 + 62 * Math.sin(a)}
          stroke={isM ? c : '#333'} strokeWidth={isM ? 2 : 1}
        />;
      })}
      <text x="100" y="94" textAnchor="middle" fill={c} fontSize="7" letterSpacing="3" fontFamily="Inter">SEIDO</text>
      <line x1="100" y1="100" x2="100" y2="68" stroke="#ddd" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="100" y1="100" x2="118" y2="80" stroke="#ddd" strokeWidth="2" strokeLinecap="round" />
      <circle cx="100" cy="100" r="4" fill={c} />
      <circle cx="100" cy="100" r="2" fill="#090909" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
