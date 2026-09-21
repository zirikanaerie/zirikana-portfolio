import { useState, useCallback, useEffect } from "react";
import { photography } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Lightbox from "../components/Lightbox";
import "../styles/photography.css";

export default function Photography() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openAt = useCallback((i) => setActiveIndex(i), []);
  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % photography.images.length),
    []
  );
  const prev = useCallback(
    () =>
      setActiveIndex(
        (i) => (i - 1 + photography.images.length) % photography.images.length
      ),
    []
  );

  return (
    <section id="photography" className="section photography">
      <div className="container">
        <SectionHeading
          number={photography.sectionNumber}
          title={photography.title}
          subtitle={photography.subtitle}
        />

        <div className="photography__grid">
          {photography.images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 90}
              className={`photography__item photography__item--${i}`}
            >
              <button
                className="photography__button"
                onClick={() => openAt(i)}
                aria-label={`View larger: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{ objectPosition: img.objectPosition }}
                  className="photography__image"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={photography.images}
          index={activeIndex}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  );
}
