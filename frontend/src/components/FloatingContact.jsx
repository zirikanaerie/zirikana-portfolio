import siteConfig from "../config/site";
import "../styles/floating-contact.css";

export default function FloatingContact() {
  return (
    <div className="floating-contact" role="complementary" aria-label="Quick contact">
      <a
        href={siteConfig.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn--instagram"
        aria-label={`Message ${siteConfig.name} on Instagram`}
      >
        <img
          src="/assets/icons/instagram.webp"
          alt=""
          width="48"
          height="48"
          className="floating-btn__icon"
          decoding="async"
          draggable="false"
        />
      </a>
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn--whatsapp"
        aria-label={`Message ${siteConfig.name} on WhatsApp`}
      >
        <img
          src="/assets/icons/whatsapp.webp"
          alt=""
          width="48"
          height="48"
          className="floating-btn__icon"
          decoding="async"
          draggable="false"
        />
      </a>
    </div>
  );
}
