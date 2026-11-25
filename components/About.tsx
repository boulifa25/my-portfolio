import { about, profile } from "@/data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section" id="profil">
      <div className="wrap">
        <SectionHead label="qui" title="Profil" />

        <div className="about">
          <Reveal>
            <div className="about-quote">
              <span className="about-quote__mark" aria-hidden="true">
                “
              </span>
              <div className="about-quote__text">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="about-side">
            <div className="about-grid">
              {about.facts.map((fact, i) => (
                <Reveal key={fact.label} delay={i * 60}>
                  <div className="about-card">
                    <span className="about-card__icon">{fact.icon}</span>
                    <p className="about-card__label">{fact.label}</p>
                    <p className="about-card__value">{fact.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={240}>
              <div className="terminal">
                <div className="terminal__bar">
                  <i className="terminal__dot terminal__dot--red" />
                  <i className="terminal__dot terminal__dot--yellow" />
                  <i className="terminal__dot terminal__dot--green" />
                  <span className="terminal__title">{profile.email}</span>
                </div>
                <div className="terminal__body">
                  {about.terminal.map((line) => (
                    <div className="terminal__line" key={line.cmd}>
                      <p className="terminal__cmd">
                        <span className="terminal__prompt">$</span> {line.cmd}
                      </p>
                      <p
                        className={`terminal__output${
                          line.success ? " is-success" : ""
                        }`}
                      >
                        {line.output}
                      </p>
                    </div>
                  ))}
                  <p className="terminal__cursor">
                    <span className="terminal__prompt">$</span> <i />
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={300}>
          <div className="passions">
            <p className="passions__label">// passions</p>
            <div className="passions__tags">
              {about.passions.map((p) => (
                <span className={`passion passion--${p.color}`} key={p.label}>
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
