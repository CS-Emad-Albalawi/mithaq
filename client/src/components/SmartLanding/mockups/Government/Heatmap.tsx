// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * GovernmentHeatmap mockup — Entity Compliance Heatmap.
 * Full-width grid of 30 fake entity tiles, each colored by score.
 *
 * Tile palette matches the National Supervisory Dashboard: 135°
 * linear gradient + neon halo + inset top highlight. The legend
 * chips use a tighter version of the same gradient.
 */
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

type Score = "high" | "mid" | "low";

interface Cell { code: string; score: Score; pct: number }

function buildEntities(): Cell[] {
  return Array.from({ length: 30 }, (_, i): Cell => {
    const code = `س-${String(60 + i).padStart(3, "0")}`;
    const seed = (i * 17 + 11) % 100;
    const score: Score =
      seed >= 60 ? "high" :
      seed >= 30 ? "mid" :
      "low";
    const pct =
      score === "high" ? 75 + (seed % 25) :
      score === "mid"  ? 45 + (seed % 25) :
      10 + (seed % 25);
    return { code, score, pct };
  });
}

const TONES: Record<Score, { gradient: string; glow: string }> = {
  high: {
    gradient: "linear-gradient(135deg, #7DD3FC 0%, #0284C7 100%)",
    glow: "rgba(56,189,248,0.30)",
  },
  mid: {
    gradient: "linear-gradient(135deg, #FCD34D 0%, #B45309 100%)",
    glow: "rgba(251,191,36,0.30)",
  },
  low: {
    gradient: "linear-gradient(135deg, #FDA4AF 0%, #BE123C 100%)",
    glow: "rgba(251,113,133,0.30)",
  },
};

export function Heatmap() {
  const { t, isAr } = useTranslation();
  const entities = buildEntities();

  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_government">
      <div dir={isAr ? "rtl" : "ltr"}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="text-base font-semibold text-[var(--text-primary)]">
              {t("smartLanding.mockups.government.heatmap_title")}
            </h4>
            <p className="text-xs text-[var(--text-muted)]" dir="ltr">
              {t("smartLanding.mockups.government.heatmap_subtitle")}
            </p>
          </div>
          {/* Legend — small gradient chips matching the tiles */}
          <div className="flex items-center gap-2.5 text-[10px]">
            {(["high", "mid", "low"] as const).map((band) => (
              <div key={band} className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-sm"
                  style={{
                    background: TONES[band].gradient,
                    boxShadow: `0 0 6px ${TONES[band].glow}`,
                  }}
                />
                <span className="text-[var(--text-muted)]">
                  {t(`smartLanding.mockups.government.heatmap_legend_${band}`)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-10 gap-1.5" aria-hidden="true">
          {entities.map((e) => {
            const tone = TONES[e.score];
            return (
              <div
                key={e.code}
                className="aspect-square rounded-md flex items-center justify-center text-[8px] font-mono text-white"
                style={{
                  background: tone.gradient,
                  boxShadow: [
                    `0 0 10px ${tone.glow}`,
                    "inset 0 1px 0 rgba(255,255,255,0.18)",
                    "0 0 0 1px rgba(255,255,255,0.06)",
                  ].join(", "),
                  textShadow: "0 1px 2px rgba(0,0,0,0.40)",
                }}
                dir="ltr"
                title={`${e.code} — ${e.pct}%`}
              >
                {e.pct}
              </div>
            );
          })}
        </div>
      </div>
    </MockupFrame>
  );
}

export default Heatmap;
