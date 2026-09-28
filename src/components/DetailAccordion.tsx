import type { ReactNode } from "react";

/**
 * Collapsible wrapper for secondary/technical detail: the section's title
 * and one-line context stay visible on the page, and everything past that
 * (specs, tables, methodology notes) sits behind a labeled toggle so a fast
 * scan doesn't turn into a wall of text. Built on native <details> for
 * keyboard/screen-reader support with no extra JS.
 */
export function DetailAccordion({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <details className="acc">
      <summary className="acc-summary">
        {label}
        <span className="acc-sign" aria-hidden="true" />
      </summary>
      <div className="acc-body">{children}</div>
    </details>
  );
}
