import { profile } from "@/data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PinIcon,
} from "./icons";

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, "");

const links = [
  {
    icon: <MailIcon />,
    color: "purple",
    label: "email",
    value: profile.email,
    hint: "Idéal pour les demandes professionnelles",
    href: `mailto:${profile.email}`,
  },
  {
    icon: <LinkedinIcon />,
    color: "blue",
    label: "linkedin",
    value: stripProtocol(profile.linkedin),
    hint: "Se connecter professionnellement",
    href: profile.linkedin,
  },
  {
    icon: <GithubIcon />,
    color: "cyan",
    label: "github",
    value: stripProtocol(profile.github),
    hint: "Parcourir mes dépôts",
    href: profile.github,
  },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <SectionHead label="et après" title="Contact" />

        <p className="contact__intro">
          Toujours partant pour discuter d&apos;une opportunité, d&apos;une
          collaboration, ou simplement échanger sur la tech et la donnée.
        </p>

        <div className="contact">
          <div className="contact-cards">
            {links.map((link, i) => (
              <Reveal key={link.label} delay={i * 60}>
                <a
                  className="contact-card"
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                >
                  <span className={`contact-card__icon is-${link.color}`}>
                    {link.icon}
                  </span>
                  <span className="contact-card__body">
                    <span className="contact-card__label">{link.label}</span>
                    <span className="contact-card__value">{link.value}</span>
                    <span className="contact-card__hint">{link.hint}</span>
                  </span>
                  <ArrowUpRightIcon />
                </a>
              </Reveal>
            ))}

            <Reveal delay={links.length * 60}>
              <div className="contact-card contact-card--static">
                <span className="contact-card__icon is-pink">
                  <PinIcon />
                </span>
                <span className="contact-card__body">
                  <span className="contact-card__label">localisation</span>
                  <span className="contact-card__value">Tunis, Tunisie</span>
                  <span className="contact-card__hint">
                    Basé en Tunisie, mobile France
                  </span>
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={220}>
            <div className="contact-highlight">
              <span className="contact-highlight__wave" aria-hidden="true">
                👋
              </span>
              <h3 className="contact-highlight__title">
                Construisons quelque chose ensemble
              </h3>
              <p className="contact-highlight__text">
                Un projet, un stage, ou juste envie d&apos;échanger sur la
                donnée et l&apos;IA — j&apos;aimerais en discuter avec vous !
              </p>

              <a
                className="btn btn--primary contact-highlight__btn"
                href={`mailto:${profile.email}`}
              >
                <MailIcon /> M&apos;envoyer un e-mail
              </a>
              <a
                className="btn contact-highlight__btn"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Me suivre sur LinkedIn
              </a>

              <div className="contact-status">
                <span className="contact-status__dot" />
                <div>
                  <p className="contact-status__title">
                    Ouvert aux opportunités
                  </p>
                  <p className="contact-status__sub">
                    Stages &amp; projets · Réponse sous 24h
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
