import { BadgeCheck, Brush, HeartHandshake, Layers3 } from "lucide-react";
import Container from "../../components/common/Container";
import Card from "../../components/ui/Card";
import RichText from "../../components/ui/RichText";
import SectionBadge from "../../components/ui/SectionBadge";

const valueIcons = [BadgeCheck, HeartHandshake, Layers3];

export default function AboutSection({ data }) {
  return (
    <section className="about-section section">
      <Container>
        <div className="about-intro">
          <div>
            <SectionBadge>{data.badge}</SectionBadge>
            <h2 className="section-title">
              <RichText parts={data.title} />
            </h2>
          </div>
          <p>{data.intro}</p>
        </div>

        <div className="about-main">
          <div className="about-story">
            {data.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-visual" aria-label="KREATIV design system">
            <div className="about-mark">
              <span>K</span>
              <strong>KREATIV</strong>
            </div>
            <div className="about-ruler about-ruler-x" />
            <div className="about-ruler about-ruler-y" />
            <div className="about-floating about-floating-1">Brand</div>
            <div className="about-floating about-floating-2">Social</div>
            <div className="about-floating about-floating-3">Print</div>
          </div>
        </div>

        <div className="about-stats">
          {data.stats.map((stat) => (
            <Card key={stat.label} className="about-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Card>
          ))}
        </div>

        <div className="about-values">
          {data.values.map((value, index) => {
            const Icon = valueIcons[index] || Brush;

            return (
              <Card key={value.title} className="about-value" style={{ "--about-value": value.color }}>
                <div className="about-value-icon">
                  <Icon size={18} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </Card>
            );
          })}
        </div>

        <div className="about-workflow">
          <div>
            <SectionBadge>Workflow</SectionBadge>
            <h2 className="section-title">Cara kami menjaga project tetap jelas.</h2>
          </div>
          <ol>
            {data.workflow.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
