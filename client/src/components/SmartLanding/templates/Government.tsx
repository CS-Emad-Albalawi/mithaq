// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Government template — supplies the killer-feature preview + the
 * 4-mockup gallery for the Government sector. All copy via i18n.
 */
import { TemplateShell } from "../TemplateShell";
import { GovernmentMockups } from "../mockups/Government";

/** Tiny CSS-only preview of the National Supervisory Dashboard
 *  (heatmap + 3 stat tiles). Renders inside the killer-feature card.
 *  Decorative only — the full mockup lives in the gallery below. */
function GovernmentKillerPreview() {
  // Procedurally-generated 5x4 entity grid — the sector mockups use
  // a richer version; this miniature is just a visual hint.
  const cells = Array.from({ length: 20 }, (_, i) => {
    const tone =
      i % 7 === 0 ? "var(--navy-accent)" :
      i % 5 === 0 ? "#F59E0B" :
      i % 11 === 0 ? "#EF4444" :
      "var(--navy-light)";
    return tone;
  });

  return (
    <div className="w-full max-w-md">
      <div className="grid grid-cols-3 gap-2 mb-3" aria-hidden="true">
        <div className="rounded-md p-2 bg-[var(--card-bg)] border border-[var(--border-color)] text-center">
          <div className="text-lg font-bold text-[var(--navy-primary)]">200+</div>
          <div className="text-[10px] text-[var(--text-muted)]">entities</div>
        </div>
        <div className="rounded-md p-2 bg-[var(--card-bg)] border border-[var(--border-color)] text-center">
          <div className="text-lg font-bold text-[var(--navy-primary)]">523</div>
          <div className="text-[10px] text-[var(--text-muted)]">controls</div>
        </div>
        <div className="rounded-md p-2 bg-[var(--card-bg)] border border-[var(--border-color)] text-center">
          <div className="text-lg font-bold text-[var(--navy-primary)]">98%</div>
          <div className="text-[10px] text-[var(--text-muted)]">compliance</div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1.5" aria-hidden="true">
        {cells.map((tone, i) => (
          <div
            key={i}
            className="aspect-square rounded-sm"
            style={{ background: tone, opacity: 0.85 }}
          />
        ))}
      </div>
    </div>
  );
}

export function Government() {
  return (
    <TemplateShell
      sector="government"
      killerPreview={<GovernmentKillerPreview />}
      mockupGallery={<GovernmentMockups />}
    />
  );
}

export default Government;
