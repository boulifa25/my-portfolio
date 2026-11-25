import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>
          Conçu et développé par {profile.firstName} {profile.lastName} —
          Next.js, sans framework CSS
        </span>
        <a className="footer__top" href="#top">
          retour en haut ↑
        </a>
      </div>
    </footer>
  );
}
