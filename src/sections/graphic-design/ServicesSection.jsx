import { ArrowUpRight } from "lucide-react";
import Container from "../../components/common/Container";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";

export default function ServicesSection({ data }) {
  return (
    <section className="services section" id="services">
      <Container>
        <SectionHeader badge={data.badge} title={data.title} description={data.description} />
        <div className="services-grid">
          {data.services.map((service) => (
            <Card key={service.title} className="svc-card" style={{ "--svc": service.color }}>
              <div className="svc-sym">{service.symbol}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span className="svc-arrow">
                <ArrowUpRight size={15} />
              </span>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
