"use client";

import type { CSSProperties } from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSetLocale } from "gt-next";

const MENU_GAP = 6;
const MENU_MAX_HEIGHT = 340;
const VIEWPORT_PADDING = 8;

const localeOptions = [
  { code: "de", name: "Deutsch" },
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "it", name: "Italiano" },
  { code: "sw", name: "Kiswahili" },
  { code: "nl", name: "Nederlands" },
  { code: "no", name: "Norsk" },
  { code: "pt", name: "Português" },
  { code: "el", name: "Ελληνικά" },
  { code: "ru", name: "Русский" },
  { code: "ko", name: "한국어" },
  { code: "zh", name: "中文" },
  { code: "ja", name: "日本語" },
];

export default function LocaleSelector({ locale }: { locale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState<CSSProperties>();
  const rootRef = useRef<HTMLSpanElement>(null);
  const setLocale = useSetLocale();

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useLayoutEffect(() => {
    if (!isOpen) return;

    const updateMenuPosition = () => {
      const trigger = rootRef.current?.querySelector("button");
      if (!trigger) return;

      const triggerRect = trigger.getBoundingClientRect();
      const spaceBelow = window.innerHeight - triggerRect.bottom - MENU_GAP - VIEWPORT_PADDING;
      const spaceAbove = triggerRect.top - MENU_GAP - VIEWPORT_PADDING;
      const openAbove = spaceBelow < MENU_MAX_HEIGHT && spaceAbove > spaceBelow;
      const availableHeight = Math.max(0, openAbove ? spaceAbove : spaceBelow);

      setMenuStyle({
        left: triggerRect.left,
        width: triggerRect.width,
        maxHeight: Math.min(MENU_MAX_HEIGHT, availableHeight),
        top: openAbove ? "auto" : triggerRect.bottom + MENU_GAP,
        bottom: openAbove ? window.innerHeight - triggerRect.top + MENU_GAP : "auto",
      });
    };

    updateMenuPosition();
    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);

    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
    };
  }, [isOpen]);

  const currentLocale = localeOptions.find((option) => option.code === locale) ?? localeOptions[1];

  return (
    <span className="language-selector" ref={rootRef}>
      <button
        className="language-selector__trigger"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{currentLocale.name}</span>
        <svg viewBox="0 0 12 8" fill="none" aria-hidden="true">
          <path d="m1 1.5 5 5 5-5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      {isOpen && (
        <span
          className="language-selector__menu"
          role="listbox"
          aria-label="Languages"
          style={menuStyle}
        >
          {localeOptions.map((option) => {
            const isSelected = option.code === locale;

            return (
              <button
                key={option.code}
                className="language-selector__option"
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  setLocale(option.code);
                  setIsOpen(false);
                }}
              >
                {option.name}
              </button>
            );
          })}
        </span>
      )}
    </span>
  );
}
