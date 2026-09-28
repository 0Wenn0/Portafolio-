/**
 * Fixed, full-viewport film-grain texture + a soft top vignette. Purely
 * atmospheric: aria-hidden, pointer-events none, and the grain animation
 * is disabled under prefers-reduced-motion (see globals.css).
 */
export function Grain() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
    </>
  );
}
