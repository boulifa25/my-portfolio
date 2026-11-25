import { education } from "@/data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="section" id="formation">
      <div className="wrap">
        <SectionHead label="où" title="Formation" />

        <div className="timeline">
          {education.map((item, i) => (
            <Reveal key={item.title + item.period} delay={i * 70}>
              <article className={`xp${item.current ? " xp--current" : ""}`}>
                <p className="xp__period">{item.period}</p>
                <h3 className="xp__title">{item.title}</h3>
                <p className="xp__org">
                  {item.org} · {item.place}
                </p>
                <ul className="xp__list">
                  {item.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
