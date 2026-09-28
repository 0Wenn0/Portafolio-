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
      <span className="act-numeral" aria-hidden="true">
        {numeral}
      </span>
      <div
        className="act-label"
        style={align === "center" ? { justifyContent: "center" } : undefined}
      >
        {label}
      </div>
    </>
  );
}
