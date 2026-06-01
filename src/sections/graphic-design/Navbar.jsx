import { useEffect, useState } from "react";
import { Menu, Palette, X } from "lucide-react";
import Container from "../../components/common/Container";
import Button from "../../components/ui/Button";

function TemplateSwitcher({ templates, activeTemplate, onTemplateChange, className = "" }) {
  if (!templates?.length) {
    return null;
  }

  return (
    <label className={`template-switcher ${className}`}>
      <Palette size={15} aria-hidden="true" />
      <select
        value={activeTemplate}
        onChange={(event) => onTemplateChange(event.target.value)}
        aria-label="Pilih template warna"
      >
        {templates.map((template) => (
          <option key={template.id} value={template.id}>
            {template.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function Navbar({
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
        <a href="#/" className="nav-logo" onClick={close}>
          {site.name}
        </a>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={link.page === activePage ? "active" : ""}
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <Button href={cta.href} onClick={close}>
              {cta.label}
            </Button>
          </li>
          <li className="nav-template-mobile">
            <TemplateSwitcher
              templates={templates}
              activeTemplate={activeTemplate}
              onTemplateChange={(value) => {
                onTemplateChange(value);
                close();
              }}
            />
          </li>
        </ul>

        <TemplateSwitcher
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
