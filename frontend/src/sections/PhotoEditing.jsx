import { photoEditing } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import "../styles/photo-editing.css";

export default function PhotoEditing() {
  return (
    <section id="photo-editing" className="section photo-editing">
      <div className="container">
        <SectionHeading
          number={photoEditing.sectionNumber}
          title={photoEditing.title}
          subtitle={photoEditing.subtitle}
        />

        <div className="photo-editing__images">
          {photoEditing.images.map((img, i) => (
            <Reveal key={img.src} delay={i * 120} className="photo-editing__frame">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="photo-editing__image"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={260} className="photo-editing__content">
          <h3 className="photo-editing__label text-gold">
            {photoEditing.label}
          </h3>
          <p className="photo-editing__description">
            {photoEditing.description}
          </p>
          <ul className="photo-editing__capabilities">
            {photoEditing.capabilities.map((cap) => (
              <li key={cap}>{cap}</li>
            ))}
          </ul>
          <p className="photo-editing__closing">{photoEditing.closingLine}</p>
        </Reveal>
      </div>
    </section>
  );
}
