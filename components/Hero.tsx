import { profile, projects, skillGroups } from "@/data/content";
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const YEARS_STUDY = new Date().getFullYear() - 2023;
const TECH_COUNT = new Set(skillGroups.flatMap((g) => g.items)).size;

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__field" aria-hidden="true">
        <span className="hero__blob hero__blob--a" />
        <span className="hero__blob hero__blob--b" />
        <span className="hero__blob hero__blob--c" />
        <span className="hero__dot" style={{ top: "14%", left: "8%" }} />
        <span className="hero__dot" style={{ top: "62%", left: "4%" }} />
        <span className="hero__dot" style={{ top: "22%", left: "92%" }} />
        <span className="hero__dot" style={{ top: "78%", left: "88%" }} />
        <span className="hero__dot" style={{ top: "40%", left: "50%" }} />
      </div>

      <div className="wrap hero__inner">
        <div className="hero__main">
          {profile.available && (
            <p className="badge">
              <i className="badge__dot" />
              Ouvert aux opportunités
            </p>
          )}

          <h1 className="hero__name">
            Salut, je suis <span className="grad-text">{profile.firstName}</span>
            <br />
            {profile.lastName}
          </h1>

          <p className="hero__role">
            <span className="hero__chevron">&gt;</span> {profile.role}
          </p>

          <p className="hero__tagline">
            Ingénieur en génie informatique (ESPRIT), je construis des
            applications qui allient un <b className="hl hl--purple">back-end</b>{" "}
            robuste (Java, Spring Boot, Python), un{" "}
            <b className="hl hl--cyan">front-end</b> soigné (React, Next.js) et
            des pipelines de <b className="hl hl--pink">données</b> qui tiennent
            debout, avec une pointe d&apos;
            <b className="hl hl--blue">IA &amp; recherche</b> appliquée.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#projets">
              Voir mes projets <ArrowIcon />
            </a>
            <a className="btn" href="#contact">
              Me contacter
            </a>
          </div>

          <div className="hero__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="E-mail">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="hero__side">
          <div className="portrait">
            <img src={profile.photo} alt={`${profile.firstName} ${profile.lastName}`} />
          </div>

          <div className="stats">
            <div className="stats__item">
              <p className="stats__value grad-text">{projects.length}+</p>
              <p className="stats__label">Projets</p>
            </div>
            <div className="stats__item">
              <p className="stats__value grad-text">{TECH_COUNT}+</p>
              <p className="stats__label">Technos</p>
            </div>
            <div className="stats__item">
              <p className="stats__value grad-text">{YEARS_STUDY}+</p>
              <p className="stats__label">Ans d&apos;études</p>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>scroll</span>
        <i className="scroll-cue__mouse">
          <em />
        </i>
      </div>
    </section>
  );
}
