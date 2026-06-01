import { ArrowRight } from "lucide-react";
import Container from "../../components/common/Container";
import Button from "../../components/ui/Button";
import DecorativeShape from "../../components/ui/DecorativeShape";
import RichText from "../../components/ui/RichText";

function CTAIcon({ icon }) {
  if (icon === "arrow-right") {
    return <ArrowRight size={19} />;
  }

  return null;
}

export default function FinalCTA({ data }) {
  return (
    <section className="final-cta">
      <DecorativeShape className="cta-glow" />
      <Container className="cta-inner">
        <p className="cta-eyebrow">{data.eyebrow}</p>
        <h2 className="cta-headline">
          <RichText parts={data.title} />
        </h2>
        <p className="cta-sub">{data.description}</p>
        <div className="cta-actions">
          {data.ctas.map((cta) => (
            <Button key={cta.label} href={cta.href} variant={cta.variant} size="xl">
              {cta.label} <CTAIcon icon={cta.icon} />
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
}
