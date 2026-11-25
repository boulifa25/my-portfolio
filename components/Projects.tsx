import { projects } from "@/data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section className="section" id="projets">
      <div className="wrap">
        <SectionHead label="quoi" title="Projets" />

        <div className="grid">
          {projects.map((project, i) => {
            const card = (
              <article className="card">
                <div className="card__top">
                  <h3 className="card__name">{project.name}</h3>
                  <span className="card__year">{project.year}</span>
                </div>
                <p className="card__context">{project.context}</p>
                <p className="card__summary">{project.summary}</p>
                <div className="card__foot">
                  {project.stack.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                  <span className="card__status">{project.status}</span>
                </div>
              </article>
            );

            return (
              <Reveal key={project.name} delay={i * 70}>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
