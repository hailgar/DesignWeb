// Change this one value for each new client/order.
// Available presets: "neonLime", "electricPurple", "oceanCyan", "sunsetCoral", "monoGold".
export const ACTIVE_COLOR_PRESET = "neonLime";

export const colorPresets = {
  neonLime: {
    name: "Neon Lime",
    background: "#080809",
    surface: "#101012",
    surface2: "#181820",
    text: "#EFEFF2",
    textMuted: "#82828C",
    textFaint: "#3E3E46",
    accent: "#C8FF00",
    accentHover: "#D6FF1A",
    secondary: "#FF6B35",
    tertiary: "#7B4FFF",
    support1: "#00D4FF",
    support2: "#FF3D71",
    support3: "#FFAD00",
    support4: "#00FF94",
    support5: "#FF6B8A",
  },
  electricPurple: {
    name: "Electric Purple",
    background: "#08070D",
    surface: "#11101A",
    surface2: "#1A1827",
    text: "#F4F0FF",
    textMuted: "#928AA7",
    textFaint: "#494259",
    accent: "#9B5CFF",
    accentHover: "#B17DFF",
    secondary: "#00E0FF",
    tertiary: "#FF4FD8",
    support1: "#C8FF00",
    support2: "#FF7A45",
    support3: "#FFC857",
    support4: "#00FFB2",
    support5: "#FF6B9D",
  },
  oceanCyan: {
    name: "Ocean Cyan",
    background: "#061012",
    surface: "#0D1A1E",
    surface2: "#13252A",
    text: "#ECFDFF",
    textMuted: "#7E989E",
    textFaint: "#355056",
    accent: "#00E5FF",
    accentHover: "#38ECFF",
    secondary: "#7CFF6B",
    tertiary: "#4A7DFF",
    support1: "#C8FF00",
    support2: "#FF5C8A",
    support3: "#FFB84D",
    support4: "#00FFB2",
    support5: "#9D7CFF",
  },
  sunsetCoral: {
    name: "Sunset Coral",
    background: "#100908",
    surface: "#1A1110",
    surface2: "#251817",
    text: "#FFF1ED",
    textMuted: "#A08882",
    textFaint: "#513C38",
    accent: "#FF6B35",
    accentHover: "#FF875C",
    secondary: "#FFD166",
    tertiary: "#7B4FFF",
    support1: "#00D4FF",
    support2: "#FF3D71",
    support3: "#C8FF00",
    support4: "#00FF94",
    support5: "#FF9F80",
  },
  monoGold: {
    name: "Mono Gold",
    background: "#090907",
    surface: "#12110D",
    surface2: "#1B1912",
    text: "#F7F1DD",
    textMuted: "#8F866D",
    textFaint: "#46402F",
    accent: "#FFD166",
    accentHover: "#FFDB85",
    secondary: "#C8FF00",
    tertiary: "#B089FF",
    support1: "#00D4FF",
    support2: "#FF6B8A",
    support3: "#FFAD00",
    support4: "#00FF94",
    support5: "#FF6B35",
  },
};

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;

  const number = Number.parseInt(value, 16);

  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255,
  };
}

function rgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function getColorPreset(presetName = ACTIVE_COLOR_PRESET) {
  return colorPresets[presetName] || colorPresets[ACTIVE_COLOR_PRESET] || colorPresets.neonLime;
}

export const colorTemplateOptions = Object.entries(colorPresets).map(([id, preset]) => ({
  id,
  label: preset.name,
  accent: preset.accent,
}));

function portfolioGradient(preset, color, intensity = 0.22) {
  return `linear-gradient(135deg, ${preset.background} 0%, ${rgba(color, intensity)} 100%)`;
}

export function createGraphicDesignTheme(presetName = ACTIVE_COLOR_PRESET) {
  const activePreset = getColorPreset(presetName);
  const activePresetId = colorPresets[presetName] ? presetName : ACTIVE_COLOR_PRESET;

  return {
    activePreset: activePresetId,
    activePresetName: activePreset.name,
    colors: {
      background: activePreset.background,
      surface: activePreset.surface,
      surface2: activePreset.surface2,
      glass: "rgba(255, 255, 255, 0.04)",
      glassMedium: "rgba(255, 255, 255, 0.07)",
      border: "rgba(255, 255, 255, 0.07)",
      borderMedium: "rgba(255, 255, 255, 0.13)",
      borderLarge: "rgba(255, 255, 255, 0.20)",
      text: activePreset.text,
      textMuted: activePreset.textMuted,
      textFaint: activePreset.textFaint,
      black: "#000",
      accent: activePreset.accent,
      accentHover: activePreset.accentHover,
      orange: activePreset.secondary,
      purple: activePreset.tertiary,
      cyan: activePreset.support1,
      pink: activePreset.support2,
      amber: activePreset.support3,
      green: activePreset.support4,
      rose: activePreset.support5,
      neutral: "#888",
    },
    gradients: {
      processLine:
        "linear-gradient(90deg, var(--accent) 0%, var(--accent-3) 50%, var(--accent-2) 100%)",
      ctaGlow: `radial-gradient(circle, ${rgba(activePreset.accent, 0.07)} 0%, transparent 65%)`,
      portfolioInfo: "linear-gradient(transparent, rgba(4, 4, 5, 0.88))",
      portfolioGlow: "radial-gradient(circle, var(--pf-accent), transparent 68%)",
      portfolio: {
        arcove: portfolioGradient(activePreset, activePreset.accent, 0.2),
        lumio: portfolioGradient(activePreset, activePreset.secondary, 0.2),
        zendaya: portfolioGradient(activePreset, activePreset.support1, 0.2),
        novatech: portfolioGradient(activePreset, activePreset.tertiary, 0.2),
        foresta: portfolioGradient(activePreset, activePreset.support4, 0.2),
        pulse: portfolioGradient(activePreset, activePreset.support2, 0.2),
      },
    },
    shadows: {
      accentButton: `0 8px 28px ${rgba(activePreset.accent, 0.28)}`,
      accentPlan: `0 8px 28px ${rgba(activePreset.accent, 0.3)}`,
      canvas: "0 32px 80px rgba(0, 0, 0, 0.5)",
      floatingCard: "0 8px 32px rgba(0, 0, 0, 0.4)",
      card: "0 16px 40px rgba(0, 0, 0, 0.3)",
      cardLarge: "0 20px 50px rgba(0, 0, 0, 0.3)",
      portfolio: "0 24px 64px rgba(0, 0, 0, 0.55)",
      popularPlan: `0 0 0 1px var(--accent), 0 0 48px ${rgba(activePreset.accent, 0.1)}`,
      core: `0 0 50px ${rgba(activePreset.accent, 0.5)}`,
      headlineAccent: `0 0 60px ${rgba(activePreset.accent, 0.25)}`,
      node: `0 0 18px ${rgba(activePreset.accent, 0.55)}`,
      badgeDot: "0 0 8px var(--accent)",
    },
    radius: {
      sm: "8px",
      md: "14px",
      lg: "22px",
      pill: "100px",
    },
    spacing: {
      containerX: "28px",
      sectionY: "108px",
      sectionYMobile: "72px",
    },
    fonts: {
      display: "'Syne', sans-serif",
      body: "'DM Sans', sans-serif",
    },
    motion: {
      ease: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      transition: "all 0.28s var(--ease)",
      transitionMedium: "all 0.45s var(--ease)",
    },
  };
}

function createThemeVariables(theme) {
  const preset = getColorPreset(theme.activePreset);

  return {
    "--bg": theme.colors.background,
    "--surface": theme.colors.surface,
    "--surface-2": theme.colors.surface2,
    "--glass": theme.colors.glass,
    "--glass-md": theme.colors.glassMedium,
    "--border": theme.colors.border,
    "--border-md": theme.colors.borderMedium,
    "--border-lg": theme.colors.borderLarge,
    "--accent": theme.colors.accent,
    "--accent-hover": theme.colors.accentHover,
    "--accent-dim": rgba(preset.accent, 0.1),
    "--accent-border": rgba(preset.accent, 0.18),
    "--accent-border-soft": rgba(preset.accent, 0.08),
    "--accent-border-md": rgba(preset.accent, 0.14),
    "--accent-border-ring": rgba(preset.accent, 0.25),
    "--accent-2": theme.colors.orange,
    "--accent-3": theme.colors.purple,
    "--accent-4": theme.colors.cyan,
    "--accent-5": theme.colors.pink,
    "--accent-6": theme.colors.amber,
    "--accent-7": theme.colors.green,
    "--accent-8": theme.colors.rose,
    "--neutral": theme.colors.neutral,
    "--text": theme.colors.text,
    "--text-muted": theme.colors.textMuted,
    "--text-faint": theme.colors.textFaint,
    "--black": theme.colors.black,
    "--font-display": theme.fonts.display,
    "--font-body": theme.fonts.body,
    "--r-sm": theme.radius.sm,
    "--r-md": theme.radius.md,
    "--r-lg": theme.radius.lg,
    "--r-pill": theme.radius.pill,
    "--ease": theme.motion.ease,
    "--t": theme.motion.transition,
    "--t-md": theme.motion.transitionMedium,
    "--nav-bg-scrolled": rgba(preset.background, 0.82),
    "--mobile-menu-bg": rgba(preset.background, 0.97),
    "--hero-blob-accent": rgba(preset.accent, 0.14),
    "--hero-blob-purple": rgba(preset.tertiary, 0.18),
    "--hero-blob-orange": rgba(preset.secondary, 0.15),
    "--dot-grid-color": "rgba(255, 255, 255, 0.06)",
    "--canvas-grid-line": "rgba(255, 255, 255, 0.03)",
    "--swatch-border": "rgba(255, 255, 255, 0.15)",
    "--floating-card-bg": rgba(preset.surface, 0.92),
    "--gradient-process-line": theme.gradients.processLine,
    "--gradient-cta-glow": theme.gradients.ctaGlow,
    "--gradient-portfolio-info": theme.gradients.portfolioInfo,
    "--gradient-portfolio-glow": theme.gradients.portfolioGlow,
    "--portfolio-arcove-bg": theme.gradients.portfolio.arcove,
    "--portfolio-lumio-bg": theme.gradients.portfolio.lumio,
    "--portfolio-zendaya-bg": theme.gradients.portfolio.zendaya,
    "--portfolio-novatech-bg": theme.gradients.portfolio.novatech,
    "--portfolio-foresta-bg": theme.gradients.portfolio.foresta,
    "--portfolio-pulse-bg": theme.gradients.portfolio.pulse,
    "--shadow-accent-button": theme.shadows.accentButton,
    "--shadow-accent-plan": theme.shadows.accentPlan,
    "--shadow-canvas": theme.shadows.canvas,
    "--shadow-floating-card": theme.shadows.floatingCard,
    "--shadow-card": theme.shadows.card,
    "--shadow-card-lg": theme.shadows.cardLarge,
    "--shadow-portfolio": theme.shadows.portfolio,
    "--shadow-popular-plan": theme.shadows.popularPlan,
    "--shadow-core": theme.shadows.core,
    "--shadow-headline-accent": theme.shadows.headlineAccent,
    "--shadow-node": theme.shadows.node,
    "--shadow-badge-dot": theme.shadows.badgeDot,
  };
}

function serializeThemeCss(variables) {
  return `:root {
${Object.entries(variables)
  .map(([name, value]) => `  ${name}: ${value};`)
  .join("\n")}
}`;
}

export const graphicDesignTheme = createGraphicDesignTheme();
export const graphicDesignThemeVariables = createThemeVariables(graphicDesignTheme);

export function getGraphicDesignThemeCss(presetName = ACTIVE_COLOR_PRESET) {
  return serializeThemeCss(createThemeVariables(createGraphicDesignTheme(presetName)));
}

export const graphicDesignThemeCss = serializeThemeCss(graphicDesignThemeVariables);
