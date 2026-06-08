import Container from "../../components/ui/Container";
import DecorativeShape from "../../components/ui/DecorativeShape";
import RichText from "../../components/ui/RichText";
import SectionBadge from "../../components/ui/SectionBadge";

export default function PageHeader({ data }) {
  return (
    <section className={`page-hero ${data.compact ? "page-hero-compact" : ""}`}>
      <DecorativeShape className="page-hero-grid" />
      <DecorativeShape className="page-hero-orb page-hero-orb-1" />
      <DecorativeShape className="page-hero-orb page-hero-orb-2" />
      <Container className="page-hero-inner">
        <SectionBadge>{data.badge}</SectionBadge>
        <h1 className="page-title">
          <RichText parts={data.title} />
        </h1>
        <p className="page-sub">{data.description}</p>
        <div className="page-chips">
          {data.highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}
