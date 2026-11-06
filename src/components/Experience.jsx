import { useEffect, useRef, useState } from 'react';
import { experienceData } from '../data/projects';

const pad = (n) => String(n).padStart(2, '0');

export default function Experience() {
  const listRef = useRef(null);
  const railRef = useRef(null);
  const [active, setActive] = useState(0);

  // Timeline: rail fills with scroll, dots light up, and the row crossing the
  // "reading line" drives the big sticky year on the left.
  useEffect(() => {
    const list = listRef.current;
    const rail = railRef.current;
    if (!list || !rail) return;
    list.classList.add('js-reveal'); // rows are only hidden once JS is running
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const line = vh * 0.55;
      const r = rail.getBoundingClientRect();
      rail.style.setProperty('--fill', Math.min(1, Math.max(0, (line - r.top) / r.height)).toFixed(4));
      // Query rows every time so rows added later (e.g. hot reload) are never left hidden
      const rows = list.querySelectorAll('.exp__row');
      let current = 0;
      rows.forEach((row, i) => {
        const top = row.getBoundingClientRect().top;
        if (top < vh * 0.95) row.classList.add('is-in');
        const lit = top + 30 < line;
        row.classList.toggle('is-lit', lit);
        if (lit) current = i;
      });
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const cur = experienceData[active] ?? experienceData[0];

  return (
    <section id="experience" className="section">
      <div className="container exp-wrap">
        <aside className="exp-aside">
          <span className="kicker">03 — Experience</span>
          <h2 className="title">Where I've <em>worked.</em></h2>

          <div className="exp-aside__now" aria-hidden="true">
            <span key={cur.period} className="exp-aside__year">{cur.period.slice(0, 4)}</span>
            <div key={cur.company} className="exp-aside__meta">
              <strong>{cur.company}</strong>
              <span>{cur.role}</span>
            </div>
            <div className="exp-aside__count">
              <b>{pad(active + 1)}</b> / {pad(experienceData.length)}
            </div>
          </div>
        </aside>

        <ol className="exp" ref={listRef}>
          <span className="exp__rail" ref={railRef} aria-hidden="true"><span /></span>
          {experienceData.map((e) => (
            <li key={e.role + e.company} className="exp__row">
              <span className="exp__dot" aria-hidden="true" />
              <div className="exp__top">
                <span className="exp__period">{e.period}</span>
                {e.current && <span className="exp__now">Now</span>}
                {e.type && <span className="exp__type">{e.type}</span>}
              </div>
              <h3>{e.role}</h3>
              {e.href ? (
                <a className="exp__company exp__company--link" href={e.href} target="_blank" rel="noopener noreferrer">{e.company} ↗</a>
              ) : (
                <span className="exp__company">{e.company}</span>
              )}
              <p className="exp__note">{e.note}</p>
              {e.tech && (
                <ul className="exp__tech">
                  {e.tech.map((t) => <li key={t}>{t}</li>)}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
