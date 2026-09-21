import Reveal from "./Reveal";

export default function SectionHeading({
  number,
  title,
  subtitle,
  align = "left",
}) {
  return (
    <Reveal className="section-header" style={{ textAlign: align }}>
      <span className="section-number">{number}</span>
      <h2 className="section-title">{title}</h2>
      <span className="section-accent" style={align === "center" ? { marginLeft: "auto", marginRight: "auto" } : undefined} />
      {subtitle && <p className="section-subtitle" style={align === "center" ? { marginLeft: "auto", marginRight: "auto" } : undefined}>{subtitle}</p>}
    </Reveal>
  );
}
