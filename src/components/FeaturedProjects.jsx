import { useEffect, useRef } from 'react';
import { ArrowUpRight, MoveVertical } from 'lucide-react';
import { featuredProjects } from '../data/projects';

// Circular card deck: cards sit on a large wheel whose pivot is off-screen to the left.
// Scrolling (or dragging) through the pinned section rotates the wheel one card at a time.
const VARIANTS = ['orange', 'ink', 'paper', 'ink'];
const pad = (n) => String(n).padStart(2, '0');

export default function FeaturedProjects() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const counterRef = useRef(null);
  const total = featuredProjects.length;

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    let geo = null;
    let target = 0;
    let current = 0;
    let frame = 0;
    let lastActive = -1;

    const measure = () => {
      const w = stage.clientWidth || window.innerWidth;
      const h = stage.clientHeight || window.innerHeight;
      const mobile = w <= 900; // phones + tablets get the vertical, centred deck
      const cw = mobile ? Math.min(w * 0.86, 400) : Math.min(600, w * 0.44);
      const ch = mobile ? cw * 1.12 : cw * 0.62;
      const R = mobile ? Math.max(760, h * 1.15) : Math.max(1100, h * 1.5);
      const spacing = ch * (mobile ? 0.66 : 0.8); // vertical gap between neighbouring card centres
      const step = 2 * Math.asin(Math.min(1, spacing / (2 * R)));
      const cx = mobile ? w / 2 : w * 0.64;
      const cy = mobile ? h * 0.6 : h / 2;
      geo = { cw, ch, R, step, cx, cy, mobile };
      stage.style.setProperty('--cw', `${cw}px`);
      stage.style.setProperty('--ch', `${ch}px`);
      stage.classList.add('is-ready'); // switch cards from the CSS fallback position to JS placement
    };

    const readScroll = () => {
      const rect = section.getBoundingClientRect();
      const run = section.offsetHeight - window.innerHeight;
      const t = run > 0 ? Math.min(1, Math.max(0, -rect.top / run)) : 0;
      if (!Number.isFinite(t)) return;
      // Hold on each card for a moment, then ease to the next one
      const raw = t * (total - 1);
      const i = Math.min(Math.floor(raw), total - 2);
      const f = Math.min(1, Math.max(0, (raw - i - 0.18) / 0.64));
      target = i + f * f * (3 - 2 * f);
      kick();
    };

    const render = () => {
      if (!geo) return;
      const { cw, ch, R, step, cx, cy, mobile } = geo;
      const px = cx - R;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = i - current;
        const a = d * step;
        const x = px + R * Math.cos(a) - cw / 2;
        const y = cy + R * Math.sin(a) - ch / 2;
        const near = Math.min(1, Math.abs(d));
        const scale = 1 - near * 0.06;
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(${(a * 180 / Math.PI).toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        // cards that have passed sink below the incoming one, so it slides cleanly over them
        el.style.zIndex = String(100 - Math.round(Math.abs(d) * 10) - (d < -0.05 ? 6 : 0));
        el.style.setProperty('--dim', near.toFixed(3));
        // Far cards fade out; on phones, cards leaving upwards fade early so they clear the heading
        let fade = Math.min(1, Math.max(0, 2.6 - Math.abs(d)));
        if (mobile && d < 0) fade = Math.min(fade, Math.max(0, 1 + d * 1.6));
        el.style.opacity = fade.toFixed(3);
        el.classList.toggle('is-active', Math.abs(d) < 0.5);
      });
      const active = Math.round(current);
      if (active !== lastActive && counterRef.current) {
        counterRef.current.textContent = pad(active + 1);
        lastActive = active;
      }
    };

    // the loop only runs while the cards are moving towards their target
    const kick = () => { if (!frame) frame = requestAnimationFrame(tick); };
    function tick() {
      frame = 0;
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.0005) current = target;
      render();
      if (current !== target) kick();
    }

    // Mouse drag scrubs the page scroll, so drag and scroll always agree
    let drag = null;
    const onDown = (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0 || e.target.closest('a')) return;
      drag = { y: e.clientY, scroll: window.scrollY, moved: false, id: e.pointerId };
    };
    const onMove = (e) => {
      if (!drag) return;
      const dy = e.clientY - drag.y;
      if (!drag.moved && Math.abs(dy) > 4) {
        drag.moved = true;
        stage.setPointerCapture(drag.id);
        stage.classList.add('is-dragging');
      }
      if (drag.moved) window.scrollTo({ top: drag.scroll - dy * 2.2, behavior: 'instant' });
    };
    const onUp = () => {
      drag = null;
      stage.classList.remove('is-dragging');
    };

    const onResize = () => { measure(); readScroll(); render(); };

    measure();
    readScroll();
    current = target;
    // capture: also hears scrolls from any scrolling container, not just the window
    document.addEventListener('scroll', readScroll, { passive: true, capture: true });
    window.addEventListener('resize', onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(stage);
    stage.addEventListener('pointerdown', onDown);
    stage.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerup', onUp);
    stage.addEventListener('pointercancel', onUp);
    render();

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('scroll', readScroll, { capture: true });
      window.removeEventListener('resize', onResize);
      ro.disconnect();
      stage.removeEventListener('pointerdown', onDown);
      stage.removeEventListener('pointermove', onMove);
      stage.removeEventListener('pointerup', onUp);
      stage.removeEventListener('pointercancel', onUp);
    };
  }, [total]);

  return (
    <section
        id="work"
        ref={sectionRef}
        className="deck"
        style={{ height: `${(total - 1) * 75 + 100}vh` }}
      >
        <div className="deck__stage" ref={stageRef}>
          <div className="deck__intro">
            <span className="kicker">01 — Selected work</span>
            <h2 className="title">Things I've <em>shipped.</em></h2>
            <div className="deck__count">
              <span ref={counterRef}>01</span>
              <small>/ {pad(total)}</small>
            </div>
            <span className="deck__hint"><MoveVertical size={14} /> Scroll or drag</span>
          </div>

          {featuredProjects.map((p, i) => (
            <article
              key={p.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`deck-card deck-card--${VARIANTS[i % VARIANTS.length]}`}
            >
              <span className="deck-card__num" aria-hidden="true">{pad(i + 1)}</span>

              <header className="deck-card__top">
                <span>{p.role}</span>
                <span>{pad(i + 1)} / {pad(total)}</span>
              </header>

              <div className="deck-card__main">
                <h3>{p.title}</h3>
                <p>{p.tagline}</p>
              </div>

              <dl className="deck-card__facts">
                {p.facts.map((f) => (
                  <div key={f.k}>
                    <dt>{f.k}</dt>
                    <dd>{f.v}</dd>
                  </div>
                ))}
              </dl>

              <footer className="deck-card__foot">
                <span className="deck-card__tags">{p.tags.join(' · ')}</span>
                <span className="deck-card__links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label} <ArrowUpRight size={14} />
                    </a>
                  ))}
                </span>
              </footer>
            </article>
          ))}
        </div>
      </section>
  );
}
