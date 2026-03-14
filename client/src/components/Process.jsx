import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    desc: 'Share your vision with us via DM or our inquiry form. We discuss base watches, components, budget, and timeline.',
  },
  {
    number: '02',
    title: 'Design & Sourcing',
    desc: 'We spec out the full build and source every component — dials, hands, crystals, cases — from trusted suppliers.',
  },
  {
    number: '03',
    title: 'The Build',
    desc: 'Your watch is assembled by hand in a dust-free environment. Every part is inspected and tested before assembly.',
  },
  {
    number: '04',
    title: 'Delivery',
    desc: 'Your completed timepiece is timed, regulated, and shipped securely. Documented with photos throughout.',
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process__inner">
        <div className="process__header reveal">
          <p className="section-eyebrow">How It Works</p>
          <h2 className="section-title">From Idea to Wrist</h2>
          <p className="section-subtitle">
            Commissioning a custom Seiko build is a personal experience. Here's what to expect.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((step, i) => (
            <div key={step.number} className={`process-step reveal reveal-delay-${i + 1}`}>
              <div className="process-step__number">{step.number}</div>
              <div className="process-step__connector" />
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="process__cta reveal">
          <a href="#contact" className="process__cta-btn">
            Start Your Commission
          </a>
        </div>
      </div>
    </section>
  );
}
