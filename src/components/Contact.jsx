import { useEffect, useRef } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/projects';
import SunsetScene from './SunsetScene';

// Illustrated sunset scene that doubles as the contact section + footer.
// Layers carry data-depth and drift at different speeds as the scene scrolls into view.
export default function Contact() {
  const { email, github, linkedin } = personalInfo.socials;
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    // pause all scene animations while it is off-screen
    const io = new IntersectionObserver(([entry]) => scene.classList.toggle('is-paused', !entry.isIntersecting));
    io.observe(scene);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => io.disconnect();
    const layers = [...scene.querySelectorAll('[data-depth]')];
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = scene.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the scene's top touches the bottom of the screen, 1 when it is fully in view
      const p = Math.min(1, Math.max(0, (vh - r.top) / Math.min(r.height, vh)));
      const rest = 1 - p;
      layers.forEach((el) => {
        const d = parseFloat(el.dataset.depth);
        el.style.transform = `translate3d(0, ${(rest * d * 120).toFixed(1)}px, 0)`;
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <footer id="contact" className="scene-wrap">
      <div className="scene" ref={sceneRef}>
        <SunsetScene />

        <div className="scene__grain" aria-hidden="true" />
        <div className="scene__shade" aria-hidden="true" />

        <div className="scene__content">
          <span className="scene__kicker">Open to roles &amp; freelance work</span>
          <h2 className="scene__title">
            Let's build<br /><em>something real.</em>
          </h2>
          <div className="scene__actions">
            <a href={`mailto:${email}`} className="scene__mail">
              {email} <ArrowUpRight size={18} />
            </a>
            <div className="scene__socials">
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={`mailto:${email}`} aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>
        </div>

        <div className="scene__foot">
          <span>© {new Date().getFullYear()} {personalInfo.name} · {personalInfo.location}</span>
          <a href="#top">Back to top <ArrowUp size={14} /></a>
        </div>
      </div>
    </footer>
  );
}
