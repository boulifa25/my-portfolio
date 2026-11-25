import { experience } from "@/data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="section" id="parcours">
      <div className="wrap">
        <SectionHead label="depuis quand" title="Parcours" />

        <div className="timeline">
          {experience.map((item, i) => (
            <Reveal key={item.title + item.period} delay={i * 70}>
              <article className={`xp${"current" in item && item.current ? " xp--current" : ""}`}>
                <p className="xp__period">{item.period}</p>
                <h3 className="xp__title">{item.title}</h3>
                <p className="xp__org">
                  {item.org} · {item.place}
                </p>
                {item.summary && <p className="xp__summary">{item.summary}</p>}
                <ul className="xp__list">
                  {item.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                {item.stack && <p className="xp__stack">{item.stack}</p>}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
