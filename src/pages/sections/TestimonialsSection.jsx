import { Star } from "lucide-react";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";

export default function TestimonialsSection({ data }) {
  return (
    <section className="testimonials section" id="testimonials">
      <Container>
        <SectionHeader badge={data.badge} title={data.title} center />
        <div className="testi-grid">
          {data.items.map((testimonial) => (
            <Card key={testimonial.name} className="testi-card">
              <div className="testi-stars">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={`${testimonial.name}-${index}`}
                    size={13}
                    fill={data.ratingColor}
                    color={data.ratingColor}
                  />
                ))}
              </div>
              <p className="testi-text">"{testimonial.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: testimonial.avatarColor }}>
                  {testimonial.initials}
                </div>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
