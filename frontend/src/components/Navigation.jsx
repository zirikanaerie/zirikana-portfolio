import { useEffect, useState, useCallback } from "react";
import { Menu, X, Download } from "lucide-react";
import navLinks from "../config/navigation";
import siteConfig from "../config/site";
import { useActiveSection } from "../hooks/useActiveSection";
import "../styles/navigation.css";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  }, []);

  return (
    <header
      className={`nav ${scrolled ? "nav--scrolled" : ""} ${menuOpen ? "nav--menu-open" : ""}`}
    >
      <div className="container nav__inner">
        <a
          href="#top"
          className="nav__brand"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          ZIRIKANA <span className="text-gold">ELIE</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`nav__link ${activeId === link.id ? "nav__link--active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.cvPath}
          download={siteConfig.cvFilename}
          className="nav__cv-btn"
        >
          <Download size={16} strokeWidth={2} aria-hidden="true" />
          Download CV
        </a>

        <button
          className="nav__toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`nav__mobile ${menuOpen ? "nav__mobile--open" : ""}`}
      >
        <nav aria-label="Mobile primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`nav__mobile-link ${activeId === link.id ? "nav__mobile-link--active" : ""}`}
            >
              <span className="nav__mobile-number">{link.number}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={siteConfig.cvPath}
          download={siteConfig.cvFilename}
          className="nav__mobile-cv"
          onClick={() => setMenuOpen(false)}
        >
          <Download size={18} strokeWidth={2} aria-hidden="true" />
          Download CV
        </a>
      </div>
    </header>
  );
}
