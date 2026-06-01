export default function Button({
  as: Component,
  href,
  variant = "primary",
  size,
  className = "",
  children,
  ...props
}) {
  const Element = Component || (href ? "a" : "button");
  const classes = ["btn", `btn-${variant}`, size && `btn-${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Element href={href} className={classes} {...props}>
      {children}
    </Element>
  );
}
