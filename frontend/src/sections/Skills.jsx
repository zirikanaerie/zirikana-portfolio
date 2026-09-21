import {
  Camera,
  Video,
  PenTool,
  Image as ImageIcon,
  Wand2,
  Palette,
  Sparkles,
  Aperture,
  FileText,
  FileSpreadsheet,
  Presentation,
  Mail,
  Lightbulb,
} from "lucide-react";
import { skills } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import "../styles/skills.css";

const creativeIcons = {
  Photography: Camera,
  "Video Editing": Video,
  "Camera Operation": Aperture,
  "Graphic Design": PenTool,
  "Photo Editing & Retouching": ImageIcon,
  "Visual Storytelling": Sparkles,
  "Color Correction": Palette,
  "Creative Concept Development": Lightbulb,
};

const toolIcons = {
  "Adobe Photoshop": ImageIcon,
  "Adobe Premiere Pro": Video,
  CapCut: Wand2,
  Canva: PenTool,
  "Camera & Lenses": Camera,
  "Lighting Equipment": Sparkles,
  "Social Media Content": Palette,
};

const additionalIcons = {
  "Microsoft Word": FileText,
  "Microsoft Excel": FileSpreadsheet,
  "Microsoft PowerPoint": Presentation,
  "Internet and Email": Mail,
};

function SkillList({ items, iconMap, delayStart = 0 }) {
  return (
    <ul className="skills__list">
      {items.map((item, i) => {
        const Icon = iconMap[item] ?? Sparkles;
        return (
          <Reveal
            as="li"
            key={item}
            delay={delayStart + i * 60}
            className="skills__item"
          >
            <span className="skills__icon">
              <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
            </span>
            {item}
          </Reveal>
        );
      })}
    </ul>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          number={skills.sectionNumber}
          title={skills.title}
          subtitle={skills.subtitle}
        />

        <div className="skills__grid">
          <div className="skills__group">
            <h3 className="skills__group-title text-gold">Creative Skills</h3>
            <SkillList items={skills.creative} iconMap={creativeIcons} />
          </div>

          <div className="skills__group">
            <h3 className="skills__group-title text-gold">
              Tools &amp; Production
            </h3>
            <SkillList
              items={skills.tools}
              iconMap={toolIcons}
              delayStart={80}
            />
          </div>
        </div>

        <div className="skills__secondary">
          <div className="skills__group">
            <h3 className="skills__group-title-sm">Additional Computer Skills</h3>
            <SkillList
              items={skills.additional}
              iconMap={additionalIcons}
              delayStart={160}
            />
          </div>

          <div className="skills__group">
            <h3 className="skills__group-title-sm">Languages</h3>
            <ul className="skills__languages">
              {skills.languages.map((lang, i) => (
                <Reveal
                  as="li"
                  key={lang.name}
                  delay={200 + i * 60}
                  className="skills__language"
                >
                  <span>{lang.name}</span>
                  <span className="skills__language-level">{lang.level}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={280} className="skills__note">
          {skills.note}
        </Reveal>
      </div>
    </section>
  );
}
