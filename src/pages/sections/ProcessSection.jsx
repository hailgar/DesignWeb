import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";

export default function ProcessSection({ data }) {
  return (
    <section className="process section" id="process">
      <Container>
        <SectionHeader
          badge={data.badge}
          title={data.title}
          description={data.description}
          center
        />
        <div className="process-track">
          <div className="process-line" />
          {data.steps.map((step) => (
            <div key={step.step} className="process-step">
              <div className="step-num">{step.step}</div>
              <div className="step-node">
                <div className="node-dot" />
                <div className="node-ring" />
              </div>
              <div className="step-body">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
