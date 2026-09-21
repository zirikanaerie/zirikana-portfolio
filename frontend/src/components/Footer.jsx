import siteConfig from "../config/site";
import "../styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">
          {siteConfig.name} <span className="text-gold">&middot;</span>{" "}
          {siteConfig.title}
        </p>
        <p className="footer__copy">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
