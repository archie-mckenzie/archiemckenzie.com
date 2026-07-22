"use client";

import { useEffect, useRef, useState } from "react";
import { useSetLocale } from "gt-next";

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
        <span className="language-selector__menu" role="listbox" aria-label="Languages">
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
