import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import ThemeSwitcher from "../ui/ThemeSwitcher";

export default function Header({
  links,
  site,
  cta,
  templates,
  activeTemplate,
  onTemplateChange,
  activePage,
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Container className="nav-inner">
        <Logo name={site.name} onClick={close} />

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={link.page === activePage ? "active" : ""}
                onClick={close}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <Button href={cta.href} onClick={close}>
              {cta.label}
            </Button>
          </li>
          <li className="nav-template-mobile">
            <ThemeSwitcher
              templates={templates}
              activeTemplate={activeTemplate}
              onTemplateChange={(value) => {
                onTemplateChange(value);
                close();
              }}
            />
          </li>
        </ul>

        <ThemeSwitcher
          templates={templates}
          activeTemplate={activeTemplate}
          onTemplateChange={onTemplateChange}
          className="nav-template-desktop"
        />

        <Button href={cta.href} className="nav-cta-desktop">
          {cta.label}
        </Button>

        <button
          className="nav-toggle"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
          type="button"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>
    </nav>
  );
}
