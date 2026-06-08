import { ArrowRight, Check } from "lucide-react";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";

export default function PricingSection({ data }) {
  return (
    <section className="pricing section" id="pricing">
      <Container>
        <SectionHeader
          badge={data.badge}
          title={data.title}
          description={data.description}
          center
        />
        <div className="pricing-grid">
          {data.plans.map((plan) => (
            <Card
              key={plan.name}
              className={`plan-card ${plan.popular ? "popular" : ""}`}
              style={{ "--plan": plan.color }}
            >
              {plan.popular && <div className="popular-badge">{data.popularLabel}</div>}
              <div className="plan-top">
                <p className="plan-tag">{plan.tag}</p>
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="p-currency">{data.currency}</span>
                  <span className="p-amount">{plan.price}</span>
                </div>
                <span className="p-note">{data.note}</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={13} /> {feature}
                  </li>
                ))}
              </ul>
              <a href={plan.href} className="btn-plan">
                {plan.cta} <ArrowRight size={15} />
              </a>
            </Card>
          ))}
        </div>
        <p className="pricing-note">
          {data.customProject.text}{" "}
          <a href={data.customProject.href}>{data.customProject.label}</a>
        </p>
      </Container>
    </section>
  );
}
