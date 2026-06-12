import { Link } from "react-router-dom";

export default function Button({
  as: Component,
  href,
  variant = "primary",
  size,
  className = "",
  children,
  ...props
}) {
  const isInternalLink = !Component && typeof href === "string" && href.startsWith("/");
  const Element = Component || (isInternalLink ? Link : href ? "a" : "button");
  const classes = ["btn", `btn-${variant}`, size && `btn-${size}`, className]
    .filter(Boolean)
    .join(" ");
  const linkProps = isInternalLink ? { to: href } : href ? { href } : {};

  return (
    <Element className={classes} {...linkProps} {...props}>
      {children}
    </Element>
  );
}
