export function BetaBadge() {
  return (
    <div
      className="fixed bottom-4 right-4 z-30 text-xs font-medium px-2.5 py-1 rounded-full pointer-events-none select-none"
      style={{
        background: "var(--color-blue)",
        color: "var(--color-ivory)",
        opacity: 0.85,
      }}
    >
      Beta
    </div>
  );
}
