import { videoEditing } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import "../styles/video-editing.css";

export default function VideoEditing() {
  return (
    <section id="video-editing" className="section video-editing">
      <div className="container">
        <SectionHeading
          number={videoEditing.sectionNumber}
          title={videoEditing.title}
          subtitle={videoEditing.subtitle}
        />

        <Reveal delay={80}>
          <p className="video-editing__description">
            {videoEditing.description}
          </p>
        </Reveal>

        <div className="video-editing__layout">
          <div className="video-editing__services">
            {videoEditing.services.map((service, i) => (
              <Reveal
                key={service.title}
                delay={150 + i * 100}
                className="video-editing__service"
              >
                <span className="video-editing__bar" aria-hidden="true" />
                <div>
                  <h3 className="video-editing__service-title">
                    {service.title}
                  </h3>
                  <p className="video-editing__service-desc">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="video-editing__media">
            {videoEditing.images.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="video-editing__thumb"
              />
            ))}
          </Reveal>
        </div>

        <Reveal delay={300}>
          <p className="video-editing__keywords">
            {videoEditing.keywords.join(" • ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
