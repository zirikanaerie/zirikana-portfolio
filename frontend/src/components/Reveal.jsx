import { useReveal } from "../hooks/useReveal";

/**
 * Wraps children in a subtle fade/rise reveal triggered on scroll.
 * delay is in milliseconds, for staggered groups.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  style = {},
  ...rest
}) {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
