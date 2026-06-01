import { ArrowRight } from "lucide-react";
import Container from "../../components/common/Container";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import RichText from "../../components/ui/RichText";
import SectionBadge from "../../components/ui/SectionBadge";

export default function WhyChooseUs({ data }) {
  return (
    <section className="benefits section" id="why">
      <Container>
        <div className="benefits-inner">
          <div className="benefits-left">
            <SectionBadge>{data.badge}</SectionBadge>
            <h2 className="section-title">
              <RichText parts={data.title} />
            </h2>
            <p className="section-sub">{data.description}</p>
            <Button href={data.cta.href} className="benefits-cta">
              {data.cta.label} <ArrowRight size={15} />
            </Button>
          </div>
          <div className="benefits-grid">
            {data.benefits.map((benefit) => (
              <Card key={benefit.title} className="benefit-card">
                <span className="benefit-sym">{benefit.symbol}</span>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
