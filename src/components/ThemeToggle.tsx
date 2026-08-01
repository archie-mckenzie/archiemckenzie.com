"use client";

import { useState } from "react";

/**
 * Toggles the site's `.dark` class for CSS-based theme styling.
 */
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((currentTheme) => {
      const nextTheme = !currentTheme;
      document.documentElement.classList.toggle("dark", nextTheme);
      return nextTheme;
    });
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      onClick={toggleTheme}
    >
      <svg className="theme-toggle__sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.25" />
        <path d="M12 2.25v2M12 19.75v2M2.25 12h2M19.75 12h2M5.1 5.1l1.4 1.4M17.5 17.5l1.4 1.4M18.9 5.1l-1.4 1.4M6.5 17.5l-1.4 1.4" />
      </svg>
      <svg className="theme-toggle__moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 15.25A8.5 8.5 0 0 1 8.75 4 8.5 8.5 0 1 0 20 15.25Z" />
      </svg>
    </button>
  );
}
