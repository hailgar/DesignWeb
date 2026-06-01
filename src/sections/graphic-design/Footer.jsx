import Container from "../../components/common/Container";

export default function Footer({ site, links }) {
  return (
    <footer className="footer">
      <Container className="footer-inner">
        <div className="footer-brand">
          <a href="#/" className="footer-logo">
            {site.name}
          </a>
          <p>
            {site.tagline} - {site.location}
          </p>
          <div className="footer-contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.whatsappHref}>{site.phone}</a>
          </div>
          <div className="footer-social">
            {site.social.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label}>
                {social.shortLabel}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>{links.services.title}</h4>
          <ul>
            {links.services.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{links.company.title}</h4>
          <ul>
            {links.company.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="footer-bottom">
        <Container className="footer-bottom-inner">
          <span>
            Copyright {site.copyrightYear} {site.name} All rights reserved.
          </span>
          <span>{links.bottomNote}</span>
        </Container>
      </div>
    </footer>
  );
}
