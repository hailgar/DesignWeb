import { ArrowUpRight } from "lucide-react";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";

export default function PortfolioSection({ data }) {
  return (
    <section className="portfolio section" id="portfolio">
      <Container>
        <SectionHeader badge={data.badge} title={data.title} description={data.description} />
        <div className="portfolio-grid">
          {data.items.map((item) => (
            <Card
              key={item.title}
              className={`pf-card pf-${item.size}`}
              style={{ "--pf-accent": item.accent, background: item.bg }}
            >
              <div className="pf-visual">
                <div className="pf-glow" />
                <span className="pf-sym">{item.symbol}</span>
                <div className="pf-bars">
                  <div className="bar b1" />
                  <div className="bar b2" />
                  <div className="bar b3" />
                </div>
              </div>
              <div className="pf-info">
                <span className="pf-cat">{item.category}</span>
                <h3 className="pf-title">{item.title}</h3>
                <span className="pf-link">
                  {data.viewLabel} <ArrowUpRight size={13} />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
