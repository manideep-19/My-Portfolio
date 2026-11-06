import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, User, Briefcase } from 'lucide-react';
import { moreProjects } from '../data/projects';

const pad = (n) => String(n).padStart(2, '0');

export default function MoreProjects() {
  const listRef = useRef(null);
  const badgeRef = useRef(null);
  const [badge, setBadge] = useState(null); // 'open' | 'client' | 'personal' | null

  // Rows slide in one after another when the list scrolls into view
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    // Rows are only hidden once this runs (.js-reveal), so they can never get stuck invisible
    list.classList.add('js-reveal');
    const check = () => {
      const limit = window.innerHeight * 0.95;
      // query each time so rows added later (e.g. hot reload) are never left hidden
      list.querySelectorAll('.more-row').forEach((row) => {
        if (row.getBoundingClientRect().top < limit) row.classList.add('is-in');
      });
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  // Round badge that trails the cursor while hovering the list
  useEffect(() => {
    const list = listRef.current;
    const el = badgeRef.current;
    if (!list || !el || !window.matchMedia('(hover: hover)').matches) return;
    const pos = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let frame = 0;
    let inside = false;
    const kick = () => { if (!frame) frame = requestAnimationFrame(tick); };
    function tick() {
      frame = 0;
      cur.x += (pos.x - cur.x) * 0.18;
      cur.y += (pos.y - cur.y) * 0.18;
      el.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
      if (inside || Math.hypot(pos.x - cur.x, pos.y - cur.y) > 0.5) kick();
    }
    const move = (e) => { pos.x = e.clientX; pos.y = e.clientY; kick(); };
    const enter = (e) => { inside = true; cur.x = pos.x = e.clientX; cur.y = pos.y = e.clientY; kick(); };
    const leave = () => { inside = false; };
    // Scrolling moves the list out from under a still cursor without any pointerleave,
    // so hide the badge on scroll; it comes back on the next real pointer move over a row.
    const hide = () => setBadge(null);
    window.addEventListener('scroll', hide, { passive: true });
    window.addEventListener('blur', hide);
    list.addEventListener('pointerenter', enter);
    list.addEventListener('pointermove', move);
    list.addEventListener('pointerleave', leave);
    return () => {
      cancelAnimationFrame(frame);
      list.removeEventListener('pointerenter', enter);
      list.removeEventListener('pointermove', move);
      list.removeEventListener('pointerleave', leave);
      window.removeEventListener('scroll', hide);
      window.removeEventListener('blur', hide);
    };
  }, []);

  return (
    <section className="section more">
      <div className="container">
        <div className="more__head">
          <div>
            <span className="kicker">More projects</span>
            <h2 className="title">Also <em>built.</em></h2>
          </div>
          <p className="more__note">Client apps, web builds, AI experiments and hardware projects.</p>
        </div>

        <ul className="more__list" ref={listRef} onPointerLeave={() => setBadge(null)}>
          {moreProjects.map((p, i) => {
            const inner = (
              <>
                <span className="more-row__idx">{pad(i + 1)}</span>
                <span className="more-row__title">{p.title}</span>
                <span className="more-row__desc">
                  {p.desc}
                  {p.client && <small className="more-row__client">Client · {p.client}</small>}
                </span>
                <span className="more-row__tag">{p.tag}</span>
                <span className="more-row__icon" aria-hidden="true">
                  {p.href ? <ArrowUpRight size={18} /> : p.client ? <Briefcase size={15} /> : <User size={15} />}
                </span>
              </>
            );
            return (
              <li
                key={p.title}
                className="more-row"
                style={{ transitionDelay: `${i * 70}ms` }}
                onPointerMove={(e) => { if (e.pointerType === 'mouse') setBadge(p.href ? 'open' : p.client ? 'client' : 'personal'); }}
              >
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                ) : (
                  <div>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div ref={badgeRef} className={`more__badge ${badge ? 'is-on' : ''} ${badge && badge !== 'open' ? 'is-private' : ''}`} aria-hidden="true">
        <span>{badge === 'open' ? 'Open ↗' : badge === 'client' ? 'Client work' : 'Personal'}</span>
      </div>
    </section>
  );
}
