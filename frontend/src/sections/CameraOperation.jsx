import { cameraOperation } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import "../styles/camera-operation.css";

export default function CameraOperation() {
  return (
    <section id="camera-operation" className="section camera-operation">
      <div className="container">
        <SectionHeading
          number={cameraOperation.sectionNumber}
          title={cameraOperation.title}
          subtitle={cameraOperation.subtitle}
        />

        <div className="camera-operation__grid">
          <Reveal delay={100} className="camera-operation__body">
            <p className="camera-operation__description">
              {cameraOperation.description}
            </p>
            <ul className="camera-operation__skills">
              {cameraOperation.skills.map((skill) => (
                <li key={skill} className="camera-operation__skill">
                  <span className="camera-operation__dot" aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
            <p className="camera-operation__closing text-gold">
              {cameraOperation.closingLine}
            </p>
          </Reveal>

          <Reveal delay={220} className="camera-operation__media">
            <img
              src={cameraOperation.image.src}
              alt={cameraOperation.image.alt}
              loading="lazy"
              style={{ objectPosition: cameraOperation.image.objectPosition }}
              className="camera-operation__image"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
