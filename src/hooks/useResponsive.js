import { useEffect, useState } from "react";

export default function useResponsive(breakpoint = 768) {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    width,
    isMobile: width <= breakpoint,
    isDesktop: width > breakpoint,
  };
}
