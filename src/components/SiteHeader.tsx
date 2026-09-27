"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getCvHref, getNav, site } from "@/content/site";
import { t } from "@/content/ui";
import type { Locale } from "@/content/types";

export function SiteHeader({ locale = "es" }: { locale?: Locale }) {
  const ui = t(locale);
  const nav = getNav(locale);
  const cvHref = getCvHref(locale);
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const esPath = isEn ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const enPath = isEn ? pathname : pathname === "/" ? "/en" : `/en${pathname}`;

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="h-20 box-border px-6 md:px-24 flex items-center justify-between border-b border-(--color-hairline)">
      <a
        href={locale === "en" ? "/en#inicio" : "#inicio"}
        className="font-[family-name:var(--font-display)] text-2xl font-semibold text-(--color-blue) no-underline py-2"
      >
        {site.name}
      </a>

      {/* Desktop nav */}
      <nav
        aria-label={locale === "en" ? "Main" : "Principal"}
        className="hidden md:flex items-center gap-8 text-base"
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-(--color-blue) no-underline py-3"
          >
            {item.label}
          </a>
        ))}
        <div
          role="group"
          aria-label={ui.langToggle}
          className="flex gap-1 text-sm"
        >
          <a
            href={esPath}
            lang="es"
            aria-current={locale === "es" ? "true" : undefined}
            className={
              locale === "es"
                ? "text-(--color-blue) font-semibold no-underline py-3 px-2"
                : "text-(--color-secondary) no-underline py-3 px-2"
            }
          >
            ES
          </a>
          <a
            href={enPath}
            lang="en"
            hrefLang="en"
            aria-current={locale === "en" ? "true" : undefined}
            className={
              locale === "en"
                ? "text-(--color-blue) font-semibold no-underline py-3 px-2"
                : "text-(--color-secondary) no-underline py-3 px-2"
            }
          >
            EN
          </a>
        </div>
        <a
          href={cvHref}
          download
          className="inline-flex items-center h-11 px-5 border border-(--color-blue) rounded-lg text-(--color-blue) no-underline font-medium"
        >
          {ui.downloadCv}
        </a>
      </nav>

      {/* Mobile menu button */}
      <button
        ref={menuButtonRef}
        type="button"
        className="md:hidden inline-flex items-center justify-center w-11 h-11 border border-(--color-blue) rounded-lg"
        aria-expanded={menuOpen}
        aria-controls="menu-movil"
        aria-label={
          menuOpen
            ? locale === "en"
              ? "Close menu"
              : "Cerrar menú"
            : locale === "en"
              ? "Open menu"
              : "Abrir menú"
        }
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
          <path
            d={menuOpen ? "M1 1l18 12M19 1L1 13" : "M0 1h20M0 7h20M0 13h20"}
            stroke="#1D2A45"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {menuOpen ? (
        <div
          id="menu-movil"
          role="dialog"
          aria-modal="true"
          aria-label={locale === "en" ? "Main menu" : "Menú principal"}
          className="md:hidden fixed inset-0 top-20 bg-(--color-ivory) z-40 flex flex-col p-6 gap-2"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg text-(--color-blue) no-underline py-3 border-b border-(--color-hairline)"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 py-3">
            <a
              href={esPath}
              lang="es"
              className={
                locale === "es"
                  ? "text-(--color-blue) font-semibold no-underline"
                  : "text-(--color-secondary) no-underline"
              }
              onClick={() => setMenuOpen(false)}
            >
              ES
            </a>
            <a
              href={enPath}
              lang="en"
              hrefLang="en"
              className={
                locale === "en"
                  ? "text-(--color-blue) font-semibold no-underline"
                  : "text-(--color-secondary) no-underline"
              }
              onClick={() => setMenuOpen(false)}
            >
              EN
            </a>
          </div>
          <a
            href={cvHref}
            download
            className="inline-flex items-center justify-center h-12 mt-4 px-5 rounded-lg bg-(--color-blue) text-(--color-ivory) no-underline font-medium"
            onClick={() => setMenuOpen(false)}
          >
            {ui.downloadCv}
          </a>
        </div>
      ) : null}
    </header>
  );
}
