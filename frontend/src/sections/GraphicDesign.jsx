import { useState, useCallback } from "react";
import { graphicDesign } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Lightbox from "../components/Lightbox";
import "../styles/graphic-design.css";

export default function GraphicDesign() {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % graphicDesign.images.length),
    []
  );
  const prev = useCallback(
    () =>
      setActiveIndex(
        (i) => (i - 1 + graphicDesign.images.length) % graphicDesign.images.length
      ),
    []
  );

  return (
    <section id="graphic-design" className="section graphic-design">
      <div className="container">
        <SectionHeading
          number={graphicDesign.sectionNumber}
          title={graphicDesign.title}
          subtitle={graphicDesign.subtitle}
        />

        <div className="graphic-design__gallery">
          {graphicDesign.images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 100}
              className={`graphic-design__item graphic-design__item--${i}`}
            >
              <button
                className="graphic-design__button"
                onClick={() => setActiveIndex(i)}
                aria-label={`View larger: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="graphic-design__image"
                />
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="graphic-design__footer">
          <p className="graphic-design__description">
            {graphicDesign.description}
          </p>
          <p className="graphic-design__focus">
            <span className="text-gold">{graphicDesign.focusLabel}</span>{" "}
            {graphicDesign.focus.join(" • ")}
          </p>
        </Reveal>
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={graphicDesign.images}
          index={activeIndex}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  );
}
