import { Camera, SquarePlay, Video, Pencil, Image as ImageIcon } from "lucide-react";
import { hero } from "../data/portfolio";
import "../styles/hero-fonts.css";
import "../styles/hero.css";

const serviceIcons = {
  Photography: Camera,
  "Video Editing": SquarePlay,
  "Camera Operation": Video,
  "Graphic Design": Pencil,
  "Photo Editing": ImageIcon,
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__media">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          className="hero__image"
          fetchpriority="high"
          loading="eager"
          width="1067"
          height="1600"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__light" aria-hidden="true" />
      </div>

      <span className="hero__corner-lines" aria-hidden="true">
        <i />
        <i />
      </span>

      <div className="hero__eyebrow-wrap container">
        <p className="hero__eyebrow hero-anim hero-anim--1">
          {hero.eyebrow.split(" / ").map((word, i) => (
            <span key={word}>
              {i > 0 && <span className="hero__eyebrow-sep">/</span>}
              {word}
            </span>
          ))}
        </p>
        <span className="hero__eyebrow-line hero-anim hero-anim--1" />
      </div>

      <div className="hero__content container">
        <h1 className="hero__title">
          <span className="hero-anim hero-anim--2">{hero.heroLine1}</span>
          <span className="hero-anim hero-anim--3 text-gold">
            {hero.heroLine2}
          </span>
        </h1>
        <span className="hero__title-line hero-anim hero-anim--3" aria-hidden="true" />

        <p className="hero__role hero-anim hero-anim--4">{hero.title}</p>

        <ul className="hero__services hero-anim hero-anim--5">
          {hero.services.map((service) => {
            const Icon = serviceIcons[service];
            return (
              <li key={service} className="hero__service">
                <span className="hero__service-icon">
                  <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <span className="hero__service-label">{service}</span>
              </li>
            );
          })}
        </ul>

        <p className="hero__quote hero-anim hero-anim--6">
          {hero.quote[0]}
          <br />
          <span className="hero__quote-script text-gold">
            {hero.quote[1]}
          </span>
          <br />
          {hero.quote[2]}
          <span className="hero__quote-stroke" aria-hidden="true" />
        </p>
      </div>

      <div className="hero__meta hero-anim hero-anim--6">
        <span className="hero__meta-line" aria-hidden="true" />
        <span className="hero__meta-text">
          <span>Portfolio</span>
          <span className="text-gold">{hero.meta.split("—")[1]?.trim() ?? "2026"}</span>
        </span>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  );
}
