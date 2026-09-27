"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Keeps <html lang> in sync with the /en route prefix, since this app
 * uses a single root layout for both locales. */
export function HtmlLangSync() {
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    const isEn = pathname === "/en" || pathname.startsWith("/en/");
    document.documentElement.lang = isEn ? "en" : "es";
  }, [pathname]);

  return null;
}
