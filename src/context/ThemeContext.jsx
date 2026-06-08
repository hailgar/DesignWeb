import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  ACTIVE_COLOR_PRESET,
  colorTemplateOptions,
  getGraphicDesignThemeCss,
} from "../config/graphicDesignTheme";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [activeTemplate, setActiveTemplate] = useState(() => {
    const savedTemplate = window.localStorage.getItem("graphic-design-template");
    const isValidTemplate = colorTemplateOptions.some((template) => template.id === savedTemplate);

    return isValidTemplate ? savedTemplate : ACTIVE_COLOR_PRESET;
  });

  const themeCss = useMemo(() => getGraphicDesignThemeCss(activeTemplate), [activeTemplate]);

  useEffect(() => {
    window.localStorage.setItem("graphic-design-template", activeTemplate);
  }, [activeTemplate]);

  const value = useMemo(
    () => ({
      activeTemplate,
      setActiveTemplate,
      templates: colorTemplateOptions,
      themeCss,
    }),
    [activeTemplate, themeCss],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
