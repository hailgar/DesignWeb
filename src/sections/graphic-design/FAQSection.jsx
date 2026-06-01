import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import Container from "../../components/common/Container";
import Button from "../../components/ui/Button";
import RichText from "../../components/ui/RichText";
import SectionBadge from "../../components/ui/SectionBadge";

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen((current) => !current)} type="button">
        <span>{faq.q}</span>
        <ChevronDown size={18} className="faq-icon" />
      </button>
      <div className="faq-body">
        <p>{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQSection({ data, site }) {
  return (
    <section className="faq-section section" id="faq">
      <Container>
        <div className="faq-inner">
          <div className="faq-left">
            <SectionBadge>{data.badge}</SectionBadge>
            <h2 className="section-title">
              <RichText parts={data.title} />
            </h2>
            <p className="section-sub">{data.description}</p>
            <Button href={data.contactHref || `mailto:${site.email}`} variant="ghost" className="faq-contact">
              <MessageCircle size={15} /> {data.contactLabel}
            </Button>
          </div>
          <div className="faq-list">
            {data.items.map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
