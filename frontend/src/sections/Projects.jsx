import { useState, useCallback } from "react";
import { projects } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Lightbox from "../components/Lightbox";
import "../styles/projects.css";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % projects.items.length),
    []
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) => (i - 1 + projects.items.length) % projects.items.length),
    []
  );

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          number={projects.sectionNumber}
          title={projects.title}
          subtitle={projects.subtitle}
        />

        <div className="projects__grid">
          {projects.items.map((project, i) => (
            <Reveal key={project.src} delay={i * 100} className="projects__card">
              <button
                className="projects__button"
                onClick={() => setActiveIndex(i)}
                aria-label={`View larger: ${project.title}`}
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  loading="lazy"
                  className="projects__image"
                />
                <div className="projects__overlay">
                  <span className="projects__category">
                    {project.category}
                  </span>
                  <span className="projects__title">{project.title}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="projects__process">
          {projects.processLine}
        </Reveal>
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={projects.items.map((p) => ({ src: p.src, alt: p.alt }))}
          index={activeIndex}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  );
}
