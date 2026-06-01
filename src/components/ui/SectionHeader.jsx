import RichText from "./RichText";
import SectionBadge from "./SectionBadge";

export default function SectionHeader({ badge, title, description, center = false, subClassName = "" }) {
  const classes = ["section-header", center && "center"].filter(Boolean).join(" ");
  const subClasses = ["section-sub", center && "section-sub-center", subClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {badge && <SectionBadge>{badge}</SectionBadge>}
      <h2 className="section-title">
        <RichText parts={title} />
      </h2>
      {description && <p className={subClasses}>{description}</p>}
    </div>
  );
}
