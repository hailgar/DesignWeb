import { Palette } from "lucide-react";

export default function ThemeSwitcher({
  templates,
  activeTemplate,
  onTemplateChange,
  className = "",
}) {
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
