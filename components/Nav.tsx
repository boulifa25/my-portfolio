import { nav, profile } from "@/data/content";
import { GithubIcon } from "./icons";

export default function Nav() {
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`;

  return (
    <nav className="nav">
      <div className="wrap nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__badge">{initials}</span>
          <span className="nav__name">
            <span className="grad-text">{profile.firstName}</span>{" "}
            <b>{profile.lastName}</b>
          </span>
        </a>

        <div className="nav__links">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav__actions">
          <a className="nav__cv" href={profile.cv} target="_blank" rel="noreferrer">
            CV
          </a>
          <a
            className="nav__gh"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon /> GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
