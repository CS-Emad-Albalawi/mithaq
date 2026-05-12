// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Feature page — Five-band Smart Compliance Dashboard.
 *
 * Visual treatment: every colour band is rendered as a refined neon
 * "status dot" — a radial-gradient sphere on top of a low-opacity
 * tinted background, with a glow halo via box-shadow. No emojis —
 * those render differently on every platform and read as amateur.
 *
 * Colour palette is drawn from Tailwind's 400 hues (sky / emerald /
 * amber / orange / rose). Saturated enough to be unambiguous on a
 * compliance board, but never garish.
 */
import { useTranslation } from "@/i18n";
import { MockupFrame } from "@/components/SmartLanding/MockupFrame";
import { FeaturePageShell, type RegulatoryMapping } from "./FeaturePageShell";

// The 5-band dashboard exists to satisfy reporting + audit-readiness
// obligations across the framework stack. Mappings emphasize the
// governance + reporting articles each regulator cares about.
const REGULATORY: readonly RegulatoryMapping[] = [
  { framework: "NDMO",     article: "DG.6.1 — Reporting & Monitoring", i18nKey: "featurePages.color.regulatory.ndmo_reporting" },
  { framework: "NDMO",     article: "DG.6.3 — Compliance Tracking",     i18nKey: "featurePages.color.regulatory.ndmo_compliance" },
  { framework: "PDPL",     article: "م.31 — التقارير الدورية",          i18nKey: "featurePages.color.regulatory.pdpl_reports" },
  { framework: "NCA ECC",  article: "ECC-1-5 — مراجعة الامتثال",        i18nKey: "featurePages.color.regulatory.ecc_review" },
  { framework: "SAMA CSF", article: "1.2.4 — Risk & Compliance",        i18nKey: "featurePages.color.regulatory.sama_risk" },
] as const;

type ColorState = "blue" | "green" | "yellow" | "orange" | "red";

interface Area {
  ns: "identity" | "lifecycle" | "sharing" | "quality" | "privacy" | "security";
  state: ColorState;
}

const AREAS: readonly Area[] = [
  { ns: "identity",  state: "blue"   },
  { ns: "lifecycle", state: "green"  },
  { ns: "sharing",   state: "yellow" },
  { ns: "quality",   state: "orange" },
  { ns: "privacy",   state: "red"    },
  { ns: "security",  state: "blue"   },
] as const;

// Refined palette — Tailwind 300/400/500 mix, designed to read as
// "neon-like" on dark theme while staying professional. Each entry
// carries: base (the dot's mid colour), highlight (the radial sheen
// at top-left), glow (the halo via box-shadow), tint (10% background
// fill on the card), and border (the card outline).
const TINTS: Record<ColorState, {
  base: string;
  highlight: string;
  glow: string;
  tint: string;
  border: string;
  textBright: string;
}> = {
  blue: {
    base: "#38BDF8", highlight: "#BAE6FD",
    glow: "rgba(56,189,248,0.55)",
    tint: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.45)",
    textBright: "#7DD3FC",
  },
  green: {
    base: "#34D399", highlight: "#A7F3D0",
    glow: "rgba(52,211,153,0.55)",
    tint: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.45)",
    textBright: "#6EE7B7",
  },
  yellow: {
    base: "#FBBF24", highlight: "#FDE68A",
    glow: "rgba(251,191,36,0.55)",
    tint: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.45)",
    textBright: "#FCD34D",
  },
  orange: {
    base: "#FB923C", highlight: "#FED7AA",
    glow: "rgba(251,146,60,0.55)",
    tint: "rgba(251,146,60,0.08)",
    border: "rgba(251,146,60,0.45)",
    textBright: "#FDBA74",
  },
  red: {
    base: "#FB7185", highlight: "#FECDD3",
    glow: "rgba(251,113,133,0.55)",
    tint: "rgba(251,113,133,0.08)",
    border: "rgba(251,113,133,0.45)",
    textBright: "#FDA4AF",
  },
};

/**
 * StatusDot — a small spherical color chip used wherever the design
 * called for an emoji bullet. Radial gradient gives a 3D sphere
 * feel, layered box-shadows give a soft neon halo. Pure CSS, scales
 * cleanly at any size, identical rendering on every platform.
 */
function StatusDot({ state, size = 12 }: { state: ColorState; size?: number }) {
  const t = TINTS[state];
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle at 32% 30%, ${t.highlight} 0%, ${t.base} 65%, ${t.base} 100%)`,
        boxShadow: [
          `0 0 ${size * 0.65}px ${t.glow}`,
          `0 0 ${size * 0.25}px ${t.glow}`,
          `inset 0 0 ${size * 0.35}px rgba(255,255,255,0.18)`,
        ].join(", "),
        verticalAlign: "middle",
        flexShrink: 0,
      }}
    />
  );
}

function ColorMock() {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <MockupFrame urlKey="smartLanding.mockup.browser_url_government">
        <div>
          <p className="text-xs text-[var(--text-muted)] mb-3">
            {t("featurePages.color.areas_title")}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {AREAS.map((a) => {
              const tint = TINTS[a.state];
              const ns = `featurePages.color.area_${a.ns}`;
              return (
                <div
                  key={a.ns}
                  className="rounded-md p-3 border"
                  style={{
                    background: tint.tint,
                    borderColor: tint.border,
                    // Subtle outer glow on the card itself — neon
                    // halo without overpowering the content.
                    boxShadow: `0 0 18px ${tint.glow.replace("0.55", "0.18")}`,
                  }}
                >
                  <div className="mb-2">
                    <StatusDot state={a.state} size={14} />
                  </div>
                  <div className="text-xs font-semibold text-[var(--text-primary)] mb-1">
                    {t(`${ns}_title`)}
                  </div>
                  <div className="text-[10px] font-mono mb-1.5" style={{ color: tint.textBright }}>
                    {t(`${ns}_state`)}
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)] leading-tight">
                    {t(`${ns}_desc`)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MockupFrame>

      <div className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4">
        <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
          {t("featurePages.color.legend_title")}
        </h3>
        <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
          {(["blue", "green", "yellow", "orange", "red"] as const).map((c) => (
            <li key={c} className="flex items-center gap-2.5">
              <StatusDot state={c} size={10} />
              <span>{t(`featurePages.color.legend_${c}`)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ColorDashboardFeature() {
  return (
    <FeaturePageShell
      slug="color"
      mockContent={<ColorMock />}
      regulatoryMappings={REGULATORY}
    />
  );
}
