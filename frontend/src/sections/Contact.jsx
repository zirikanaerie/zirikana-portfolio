import { useState } from "react";
import { MessageCircle, Mail, Instagram, Download, Send } from "lucide-react";
import { contact, hero } from "../data/portfolio";
import siteConfig from "../config/site";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import "../styles/contact.css";

const initialForm = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error | unavailable
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(`${siteConfig.apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (res.status === 503) {
        // Email service not configured on the backend — graceful fallback
        setStatus("unavailable");
        return;
      }

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("unavailable");
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading
          number={contact.sectionNumber}
          title={contact.title}
          subtitle={contact.subtitle}
        />

        <div className="contact__grid">
          <Reveal delay={100} className="contact__media">
            <img
              src={contact.image.src}
              alt={contact.image.alt}
              loading="lazy"
              className="contact__image"
            />
          </Reveal>

          <Reveal delay={200} className="contact__body">
            <h3 className="contact__name text-gold">{hero.firstName} {hero.lastName}</h3>
            <p className="contact__role">{hero.title}</p>
            <p className="contact__services">{hero.services.join(" • ")}</p>

            <div className="contact__actions">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__action contact__action--primary"
              >
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="contact__action"
              >
                <Mail size={18} aria-hidden="true" />
                Email
              </a>
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__action"
              >
                <Instagram size={18} aria-hidden="true" />
                Instagram
              </a>
              <a
                href={siteConfig.cvPath}
                download={siteConfig.cvFilename}
                className="contact__action"
              >
                <Download size={18} aria-hidden="true" />
                Download CV
              </a>
            </div>

            <dl className="contact__details">
              <div>
                <dt>Phone / WhatsApp</dt>
                <dd>{siteConfig.phoneDisplay}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{siteConfig.email}</dd>
              </div>
              <div>
                <dt>Instagram</dt>
                <dd>{siteConfig.instagram.handle}</dd>
              </div>
              <div>
                <dt>TikTok</dt>
                <dd>{siteConfig.tiktok.handle}</dd>
              </div>
            </dl>

            <p className="contact__closing">
              {contact.line1}
              <br />
              <span className="text-gold">{contact.line2}</span>
            </p>
          </Reveal>
        </div>

        <Reveal delay={300} className="contact__form-wrap">
          <h3 className="contact__form-title">Send a message</h3>
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__form-row">
              <label className="contact__label" htmlFor="name">
                Name
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="contact__input"
                  autoComplete="name"
                />
              </label>
              <label className="contact__label" htmlFor="email">
                Email
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="contact__input"
                  autoComplete="email"
                />
              </label>
            </div>
            <label className="contact__label" htmlFor="phone">
              Phone (optional)
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="contact__input"
                autoComplete="tel"
              />
            </label>
            <label className="contact__label" htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="contact__input contact__textarea"
              />
            </label>

            <button
              type="submit"
              className="contact__submit"
              disabled={status === "sending"}
            >
              <Send size={16} aria-hidden="true" />
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            <div role="status" aria-live="polite" className="contact__status">
              {status === "sent" && (
                <p className="contact__status--sent">
                  Message sent. Thank you — I'll get back to you soon.
                </p>
              )}
              {status === "unavailable" && (
                <p className="contact__status--info">
                  The message form isn't available right now, but you can
                  reach me directly on{" "}
                  <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>{" "}
                  or by{" "}
                  <a href={`mailto:${siteConfig.email}`}>email</a>.
                </p>
              )}
              {status === "error" && (
                <p className="contact__status--error">{errorMsg}</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
