import './Services.css';

const services = [
  {
    icon: <DialIcon />,
    title: 'Custom Dials',
    description:
      'Handpicked or custom-made dials to transform the face of your watch. From sunburst metallics to textured finishes — the dial sets the tone.',
  },
  {
    icon: <CaseIcon />,
    title: 'Case & Bezel Work',
    description:
      'Full case refinishing, bezel swaps, and custom inserts. We treat every surface — brushed, polished, or satin — with exacting attention.',
  },
  {
    icon: <GearIcon />,
    title: 'Full Custom Builds',
    description:
      'Start with a vision. We source, spec, and assemble every component from the ground up, delivering a complete one-of-one timepiece.',
  },
  {
    icon: <MovementIcon />,
    title: 'Movement Service',
    description:
      'Movement swaps, upgrades, and regulation. NH35, NH38, SW200, and more — properly lubricated and timed to specification.',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__inner">
        <div className="services__header reveal">
          <p className="section-eyebrow">What We Do</p>
          <h2 className="section-title">Every Detail, Considered</h2>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div key={s.title} className={`service-card reveal reveal-delay-${i + 1}`}>
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>
              <div className="service-card__line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DialIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const r = deg * Math.PI / 180;
        return <line key={deg} x1={16 + 9 * Math.cos(r - Math.PI/2)} y1={16 + 9 * Math.sin(r - Math.PI/2)}
          x2={16 + 12 * Math.cos(r - Math.PI/2)} y2={16 + 12 * Math.sin(r - Math.PI/2)}
          stroke="currentColor" strokeWidth="1.5" />;
      })}
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}

function CaseIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="8" width="20" height="16" rx="5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="9" y="11" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
      <rect x="24" y="13" width="3" height="6" rx="1.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 10a6 6 0 100 12 6 6 0 000-12z" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" fillOpacity="0.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const r = deg * Math.PI / 180;
        const x1 = 16 + 9 * Math.cos(r);
        const y1 = 16 + 9 * Math.sin(r);
        const x2 = 16 + 12 * Math.cos(r);
        const y2 = 16 + 12 * Math.sin(r);
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />;
      })}
    </svg>
  );
}

function MovementIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1" />
      <line x1="16" y1="4" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="24" x2="16" y2="28" stroke="currentColor" strokeWidth="1.5" />
      <line x1="4" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <line x1="24" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>
  );
}
