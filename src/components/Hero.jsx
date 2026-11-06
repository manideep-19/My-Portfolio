import { useEffect, useId, useRef } from 'react';
import { ArrowUpRight, MousePointer2 } from 'lucide-react';
import portraitArt from '../assets/prof-illustrated.webp';
import portraitPhoto from '../assets/prof-photo.webp';
import { personalInfo } from '../data/projects';

// Cursor-wipe tuning (same feel as the GSAP version, animated by hand — no extra dependency)
const EFFECT = {
  smoothing: 0.1,   // how lazily the brush follows the cursor
  threshold: 0.5,   // min movement (px/frame) before ink is stamped
  speedSize: 0.22,  // brush radius per px of movement
  minRadius: 14,
  growth: 2,        // blob grows to radius * growth…
  growFor: 2,       // …over this many seconds
  shrinkFor: 3      // …then shrinks away over this many
};

const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);
const easeIn3 = (t) => t * t * t;

export default function Hero() {
  const { firstName, role, intro, stats } = personalInfo;
  const panelRef = useRef(null);
  const svgRef = useRef(null);
  const inkRef = useRef(null);
  const hintRef = useRef(null);
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const filterId = `wipe-filter-${uid}`;
  const maskId = `wipe-mask-${uid}`;

  useEffect(() => {
    const panel = panelRef.current;
    const svg = svgRef.current;
    const ink = inkRef.current;
    if (!panel || !svg || !ink) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const stamps = [];
    let active = false;
    let frame = 0;
    let demoUntil = 0;
    let visible = true;
    // the loop only runs while the hero is on screen and something is moving
    const kick = () => { if (!frame && visible) frame = requestAnimationFrame(tick); };

    const setPoint = (x, y) => {
      if (!active) {
        current.x = target.x = x;
        current.y = target.y = y;
        active = true;
        return;
      }
      target.x = x;
      target.y = y;
    };

    const onPointer = (e) => {
      demoUntil = 0; // real input takes over from the intro sweep
      hintRef.current?.classList.add('is-hidden');
      const b = panel.getBoundingClientRect();
      setPoint(e.clientX - b.left, e.clientY - b.top);
      kick();
    };

    const resize = () => {
      svg.setAttribute('width', panel.clientWidth);
      svg.setAttribute('height', panel.clientHeight);
    };

    const stamp = (x, y, r) => {
      if (stamps.length > 160) return; // cap the ink so the blur filter stays cheap
      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('cx', x);
      c.setAttribute('cy', y);
      c.setAttribute('r', r);
      c.setAttribute('fill', 'white');
      ink.prepend(c);
      stamps.push({ c, r, born: performance.now() });
    };

    const start = performance.now();
    demoUntil = start + 2600;

    function tick(now) {
      frame = 0;
      // Intro: a short automatic sweep across the portrait so visitors discover the effect
      if (now < demoUntil) {
        const t = (now - start) / 2600;
        const w = panel.clientWidth;
        const h = panel.clientHeight;
        setPoint(w * (0.3 + 0.4 * t), h * (0.42 + 0.12 * Math.sin(t * Math.PI * 3)));
      }

      if (active) {
        current.x += (target.x - current.x) * EFFECT.smoothing;
        current.y += (target.y - current.y) * EFFECT.smoothing;
        const speed = Math.hypot(target.x - current.x, target.y - current.y);
        if (speed > EFFECT.threshold) {
          stamp(current.x, current.y, Math.max(EFFECT.minRadius, speed * EFFECT.speedSize));
        }
      }

      for (let i = stamps.length - 1; i >= 0; i--) {
        const s = stamps[i];
        const age = (now - s.born) / 1000;
        let r;
        if (age < EFFECT.growFor) {
          r = s.r + s.r * (EFFECT.growth - 1) * easeInOut(age / EFFECT.growFor);
        } else if (age < EFFECT.growFor + EFFECT.shrinkFor) {
          r = s.r * EFFECT.growth * (1 - easeIn3((age - EFFECT.growFor) / EFFECT.shrinkFor));
        } else {
          s.c.remove();
          stamps.splice(i, 1);
          continue;
        }
        s.c.setAttribute('r', r.toFixed(1));
      }

      const settled = Math.hypot(target.x - current.x, target.y - current.y) < 0.5;
      if (now < demoUntil || stamps.length || !settled) kick();
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(panel);
    panel.addEventListener('pointermove', onPointer);
    panel.addEventListener('pointerdown', onPointer);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) kick();
      else { cancelAnimationFrame(frame); frame = 0; }
    });
    io.observe(panel);
    kick();

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      panel.removeEventListener('pointermove', onPointer);
      panel.removeEventListener('pointerdown', onPointer);
      ink.replaceChildren();
    };
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero__panel" ref={panelRef}>
        {/* Layer 1 — illustrated portrait on orange (default view) */}
        <div className="hero__layer hero__layer--front">
          <h1 className="hero__name" aria-label={personalInfo.name}>{firstName}</h1>
          <img
            className="hero__portrait"
            src={portraitArt}
            alt="Illustrated portrait of Manideep Chilukuri"
            width="793"
            height="873"
            fetchPriority="high"
          />
        </div>

        {/* Layer 2 — real photo, revealed by the cursor */}
        <div className="hero__layer hero__layer--back" style={{ mask: `url(#${maskId})`, WebkitMask: `url(#${maskId})` }} aria-hidden="true">
          <span className="hero__name hero__name--back">{firstName}</span>
          <p className="hero__secret">
            Code by day.<br />Circuits by <em>night.</em>
          </p>
          <img className="hero__portrait hero__portrait--photo" src={portraitPhoto} alt="" width="793" height="873" />
        </div>

        <svg ref={svgRef} className="hero__wipe" aria-hidden="true">
          <defs>
            <filter id={filterId}>
              <feGaussianBlur in="SourceGraphic" stdDeviation="22" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -14" />
            </filter>
            <mask id={maskId}>
              <g ref={inkRef} filter={`url(#${filterId})`} />
            </mask>
          </defs>
        </svg>

        {/* UI that stays on top of both layers */}
        <p className="hero__eyebrow">{role} · Bangalore</p>
        <span className="hero__hint" ref={hintRef}><MousePointer2 size={13} /> Move your cursor</span>

        <a href="#contact" className="hero__talk" aria-label="Let's talk">
          <ArrowUpRight size={20} />
          <span>Let's<br />talk</span>
        </a>

        <div className="hero__bottom">
          <h2 className="hero__headline">
            Building products<br />people <em>actually</em> use.
          </h2>
          <div className="hero__meta">
            <p>{intro}</p>
            <ul className="hero__stats">
              {stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
