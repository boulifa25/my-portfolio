import { skillGroups } from "@/data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section className="section" id="competences">
      <div className="wrap">
        <SectionHead label="avec quoi" title="Compétences" />

        <div>
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 60}>
              <div className="skills__row">
                <span className="skills__label">{group.label}</span>
                <div className="skills__tags">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
