import { ArrowRight, PenTool, Sparkles } from "lucide-react";
import Container from "../../components/common/Container";
import Button from "../../components/ui/Button";
import DecorativeShape from "../../components/ui/DecorativeShape";

function HeroActionIcon({ icon }) {
  if (icon === "arrow-right") {
    return <ArrowRight size={17} />;
  }

  return null;
}

export default function HeroSection({ data }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <DecorativeShape className="blob blob-1" />
        <DecorativeShape className="blob blob-2" />
        <DecorativeShape className="blob blob-3" />
        <DecorativeShape className="dot-grid" />
      </div>

      <Container className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            {data.badge}
          </div>

          <h1 className="hero-headline">
            {data.headline.map((line, index) => (
              <span
                key={line.text}
                className={`hl-line hl-${index} ${line.accent ? "hl-accent" : ""}`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p className="hero-sub">{data.subheadline}</p>

          <div className="hero-actions">
            {data.ctas.map((cta) => (
              <Button key={cta.label} href={cta.href} variant={cta.variant} size="lg">
                {cta.label} <HeroActionIcon icon={cta.icon} />
              </Button>
            ))}
          </div>

          <div className="hero-stats">
            {data.stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="canvas-mock">
            <div className="canvas-grid-bg" />
            <svg className="sketch-path" viewBox="0 0 400 400" aria-hidden="true">
              <path d="M78 250 C130 118 244 312 322 138" />
            </svg>
            <div className="design-orbit" aria-hidden="true">
              <span className="orbit-node orbit-node-1" />
              <span className="orbit-node orbit-node-2" />
              <span className="orbit-node orbit-node-3" />
            </div>
            <div className="canvas-artwork">
              <div className="artwork-ring ring-outer" />
              <div className="artwork-ring ring-inner" />
              <div className="artwork-core">
                <span className="core-symbol">{data.canvas.core.symbol}</span>
                <span className="core-name">{data.canvas.core.name}</span>
                <span className="core-sub">{data.canvas.core.subtitle}</span>
              </div>
            </div>
            <div className="canvas-swatches">
              {data.canvas.swatches.map((color) => (
                <div key={color} className="swatch" style={{ background: color }} />
              ))}
            </div>
            <div className="creative-tool creative-tool-pen">
              <PenTool size={15} />
              <span>Vector</span>
            </div>
            <div className="creative-tool creative-tool-spark">
              <Sparkles size={15} />
              <span>Concept</span>
            </div>
            {data.canvas.floatingCards.map((card, index) => (
              <div
                key={card.label}
                className={`float-card float-card-${index}`}
                style={{ "--card-color": card.color }}
              >
                <span className="float-sym">{card.symbol}</span>
                <span className="float-lbl">{card.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="hero-scroll">
        <span>{data.scrollLabel}</span>
        <div className="scroll-bar" />
      </div>
    </section>
  );
}
