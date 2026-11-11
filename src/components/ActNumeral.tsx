/**
 * Giant, near-invisible roman-numeral watermark + small act label, used to
 * frame a section as a "chapter" in the narrative rather than a plain block.
 * Purely decorative (aria-hidden on the numeral); the label carries no
 * semantics either, the section's own heading remains the real title.
 */
export function ActNumeral({
  numeral,
  label,
  align = "left",
}: {
  numeral: string;
  label: string;
  align?: "left" | "center";
}) {
  return (
    <>
      {/* The numeral is drawn by CSS (::before) from data-numeral: it is a
          decorative watermark, so it stays out of the accessibility tree and
          out of text-contrast checks (WCAG 1.4.3 exempts pure decoration). */}
      <span className="act-numeral" aria-hidden="true" data-numeral={numeral} />
      <div
        className="act-label"
        style={align === "center" ? { justifyContent: "center" } : undefined}
      >
        {label}
      </div>
    </>
  );
}
