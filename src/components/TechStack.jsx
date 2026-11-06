import { personalInfo, skills, awards } from '../data/projects';

export default function TechStack() {
  const loop = [...skills, ...skills];

  return (
    <section id="skills" className="section section--tight">
      <div className="container about">
        <span className="kicker">02 — About</span>
        <p className="about__text">{personalInfo.about}</p>
      </div>

      <div className="marquee" aria-label="Skills">
        <ul className="marquee__track">
          {loop.map((s, i) => (
            <li key={i} aria-hidden={i >= skills.length}>{s}<span>✦</span></li>
          ))}
        </ul>
      </div>

      <div className="container">
        <ul className="awards">
          {awards.map((a) => <li key={a}>🏆 {a}</li>)}
        </ul>
      </div>
    </section>
  );
}
