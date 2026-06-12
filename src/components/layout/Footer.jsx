import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Logo from "../ui/Logo";

function FooterLink({ href, children }) {
  if (typeof href === "string" && href.startsWith("/")) {
    return <Link to={href}>{children}</Link>;
  }

  return <a href={href}>{children}</a>;
}

export default function Footer({ site, links }) {
  return (
    <footer className="footer">
      <Container className="footer-inner">
        <div className="footer-brand">
          <Logo name={site.name} className="footer-logo" />
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
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{links.company.title}</h4>
          <ul>
            {links.company.links.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
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
