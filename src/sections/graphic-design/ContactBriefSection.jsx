import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import Container from "../../components/common/Container";
import Card from "../../components/ui/Card";
import RichText from "../../components/ui/RichText";
import SectionBadge from "../../components/ui/SectionBadge";

function ContactIcon({ label }) {
  if (label === "WhatsApp") return <MessageCircle size={18} />;
  if (label === "Email") return <Mail size={18} />;
  return <MapPin size={18} />;
}

export default function ContactBriefSection({ data }) {
  return (
    <section className="contact-brief section" id="brief">
      <Container>
        <div className="contact-brief-inner">
          <div className="contact-copy">
            <SectionBadge>{data.badge}</SectionBadge>
            <h2 className="section-title">
              <RichText parts={data.title} />
            </h2>
            <p className="section-sub">{data.description}</p>

            <div className="contact-cards">
              {data.cards.map((card) => (
                <Card
                  key={card.label}
                  as="a"
                  href={card.href}
                  className="contact-card"
                  style={{ "--contact": card.color }}
                >
                  <span className="contact-card-icon">
                    <ContactIcon label={card.label} />
                  </span>
                  <span className="contact-card-content">
                    <small>{card.label}</small>
                    <strong>{card.value}</strong>
                  </span>
                </Card>
              ))}
            </div>

            <ul className="contact-notes">
              {data.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>

          <Card as="form" className="brief-form" onSubmit={(event) => event.preventDefault()}>
            <div className="brief-form-top">
              <div>
                <span>01</span>
                <p>Brief awal</p>
              </div>
              <strong>Estimasi cepat</strong>
            </div>

            <div className="brief-grid">
              <label>
                Nama bisnis
                <input type="text" placeholder="Kopi Jalan Senja" />
              </label>

              <label>
                Nomor WhatsApp
                <input type="tel" placeholder="+62 812 3456 7890" />
              </label>

              <label>
                Layanan
                <select defaultValue="">
                  <option value="" disabled>
                    Pilih layanan
                  </option>
                  {data.services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Budget estimasi
                <select defaultValue="">
                  <option value="" disabled>
                    Pilih range
                  </option>
                  <option>Rp 2-5 juta</option>
                  <option>Rp 5-10 juta</option>
                  <option>Rp 10 juta ke atas</option>
                  <option>Butuh rekomendasi</option>
                </select>
              </label>
            </div>

            <label className="brief-full">
              Kebutuhan singkat
              <textarea
                rows="4"
                placeholder="Ceritakan target customer, deadline, referensi, atau channel yang akan dipakai."
              />
            </label>

            <p className="brief-helper">
              Setelah klik tombol, kamu bisa lanjut kirim detail project lewat WhatsApp.
            </p>

            <a className="brief-submit" href={data.whatsappHref}>
              Lanjut diskusi di WhatsApp <ArrowRight size={16} />
            </a>
          </Card>
        </div>
      </Container>
    </section>
  );
}
