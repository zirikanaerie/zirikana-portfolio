import { about } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading
          number={about.sectionNumber}
          title={about.title}
          subtitle={about.subtitle}
        />

        <div className="about__grid">
          <Reveal className="about__media" delay={100}>
            <img
              src={about.image.src}
              alt={about.image.alt}
              loading="lazy"
              width="1184"
              height="1600"
              className="about__image"
            />
          </Reveal>

          <Reveal className="about__body" delay={220}>
            <h3 className="about__name text-gold">{about.name}</h3>
            <p className="about__role">{about.role}</p>
            <p className="about__description">{about.description}</p>

            <h4 className="about__approach-title text-gold">
              {about.approachTitle}
            </h4>
            <p className="about__approach">{about.approach}</p>

            <p className="about__keywords">{about.keywords.join(" • ")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
