// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * GovernmentDashboard mockup — National Supervisory Dashboard.
 * Stats row + 5×4 entity heatmap + sidebar of recent alerts.
 *
 * Tile palette refined to the same neon-but-tasteful system used on
 * the ColorDashboard feature page. Each tile carries a 135° linear
 * gradient (top-left highlight → bottom-right deep), a subtle
 * matching glow halo, and an inset top highlight that reads as soft
 * ambient lighting — a polished alternative to the previous flat-
 * fill tones.
 */
import { AlertTriangle, FileCheck2, Bell } from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

type Score = "high" | "mid" | "low";

interface EntityCell { code: string; score: Score }

function buildEntityGrid(): EntityCell[] {
  return Array.from({ length: 20 }, (_, i): EntityCell => {
    const code = `س-${String(101 + i).padStart(3, "0")}`;
    const score: Score =
      i === 3 || i === 11 ? "low" :
      i === 1 || i === 7 || i === 16 ? "mid" :
      "high";
    return { code, score };
  });
}

// Linear-gradient tones (top-left brighter → bottom-right deeper).
// `glow` feeds an outer box-shadow that gives the tiles a soft neon
// halo without becoming distracting.
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

const ALERT_COLORS = {
  critical: "#FB7185",
  info: "#38BDF8",
  warn: "#FBBF24",
} as const;

export function Dashboard() {
  const { t, isAr } = useTranslation();
  const cells = buildEntityGrid();

  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_government">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" dir={isAr ? "rtl" : "ltr"}>
        {/* Main column — stats + heatmap */}
        <div className="lg:col-span-2 space-y-3">
          {/* Title row */}
          <div>
            <h4 className="text-base font-semibold text-[var(--text-primary)]">
              {t("smartLanding.mockups.government.dashboard_title")}
            </h4>
            <p className="text-xs text-[var(--text-muted)]" dir="ltr">
              {t("smartLanding.mockups.government.dashboard_subtitle")}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)]">
              <div className="text-xl font-bold text-[var(--navy-primary)]">200+</div>
              <div className="text-[10px] text-[var(--text-muted)]">
                {t("smartLanding.mockups.government.dashboard_stat_entities")}
              </div>
            </div>
            <div className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)]">
              <div className="text-xl font-bold text-[var(--navy-primary)]">523</div>
              <div className="text-[10px] text-[var(--text-muted)]">
                {t("smartLanding.mockups.government.dashboard_stat_controls")}
              </div>
            </div>
            <div className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)]">
              <div className="text-xl font-bold text-[var(--navy-primary)]">98%</div>
              <div className="text-[10px] text-[var(--text-muted)]">
                {t("smartLanding.mockups.government.dashboard_stat_compliance")}
              </div>
            </div>
          </div>

          {/* Heatmap 5×4 — neon-tinted gradient tiles */}
          <div className="grid grid-cols-5 gap-1.5">
            {cells.map((c) => {
              const tone = TONES[c.score];
              return (
                <div
                  key={c.code}
                  className="aspect-square rounded-md p-1.5 flex flex-col justify-between"
                  style={{
                    background: tone.gradient,
                    // Outer halo + inset top sheen + crisp 1px ring
                    boxShadow: [
                      `0 0 12px ${tone.glow}`,
                      "inset 0 1px 0 rgba(255,255,255,0.18)",
                      "0 0 0 1px rgba(255,255,255,0.06)",
                    ].join(", "),
                  }}
                  aria-hidden="true"
                >
                  <span
                    className="text-[8px] font-mono text-white"
                    style={{ textShadow: "0 1px 2px rgba(0,0,0,0.40)" }}
                    dir="ltr"
                  >
                    {c.code}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar — alerts */}
        <aside className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)]">
          <div className="flex items-center gap-1.5 mb-2 text-xs font-semibold text-[var(--text-primary)]">
            <Bell className="w-3.5 h-3.5 text-[var(--navy-primary)]" />
            <span>{t("smartLanding.mockups.government.dashboard_alerts_title")}</span>
          </div>
          <ul className="space-y-2">
            {[
              { Icon: AlertTriangle, key: "smartLanding.mockups.government.dashboard_alert_1", color: ALERT_COLORS.critical },
              { Icon: FileCheck2,    key: "smartLanding.mockups.government.dashboard_alert_2", color: ALERT_COLORS.info },
              { Icon: AlertTriangle, key: "smartLanding.mockups.government.dashboard_alert_3", color: ALERT_COLORS.warn },
            ].map((a) => (
              <li
                key={a.key}
                className="flex items-start gap-1.5 text-[11px] text-[var(--text-secondary)] leading-relaxed"
              >
                <a.Icon
                  className="w-3.5 h-3.5 shrink-0 mt-0.5"
                  style={{
                    color: a.color,
                    filter: `drop-shadow(0 0 4px ${a.color}55)`,
                  }}
                />
                <span>{t(a.key)}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </MockupFrame>
  );
}

export default Dashboard;
