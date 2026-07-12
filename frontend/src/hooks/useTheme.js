import { useState, useEffect, useCallback } from "react";

const THEME_COLORS = { light: "#fafaf8", dark: "#161514" };

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLORS[theme]);
}

/**
 * Theme state shared with the pre-paint script in index.html.
 * First visit follows the OS preference; the toggle overrides it and
 * persists in localStorage. While no manual choice is stored, live OS
 * preference changes are followed.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem("theme", next);
      } catch { /* private mode etc. — theme just won't persist */ }
      return next;
    });
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      let stored = null;
      try {
        stored = localStorage.getItem("theme");
      } catch { /* ignore */ }
      if (stored) return; // manual choice wins
      const next = e.matches ? "dark" : "light";
      applyTheme(next);
      setTheme(next);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return { theme, toggle };
}
