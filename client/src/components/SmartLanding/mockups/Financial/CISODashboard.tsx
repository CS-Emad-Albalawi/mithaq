// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Banking CISO Dashboard mockup — 4-panel grid (incidents, controls,
 * PII exposure, SAMA CSF compliance) with mini sparkline-style
 * indicators in each cell.
 */
import { ShieldAlert, Layers, Eye, BadgeCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

interface Panel {
  Icon: LucideIcon;
  titleKey: string;
  /** Big-number indicator. */
  value: string;
  /** Small caption to the right of the value. */
  caption: string;
  /** Mini bar widths (0-100) — visualises a 7-day trend. */
  bars: number[];
  /** Bar tint. */
  tint: string;
}

const PANELS: readonly Panel[] = [
  {
    Icon: ShieldAlert,
    titleKey: "smartLanding.mockups.financial.ciso_panel_incidents",
    value: "2",
    caption: "this week",
    bars: [10, 25, 15, 30, 20, 35, 25],
    tint: "#FB7185",
  },
  {
    Icon: Layers,
    titleKey: "smartLanding.mockups.financial.ciso_panel_controls",
    value: "92/115",
    caption: "implemented",
    bars: [60, 70, 75, 80, 82, 88, 92],
    tint: "var(--navy-accent)",
  },
  {
    Icon: Eye,
    titleKey: "smartLanding.mockups.financial.ciso_panel_pii",
    value: "0.4%",
    caption: "of dataset",
    bars: [5, 4, 6, 3, 5, 4, 4],
    tint: "#FBBF24",
  },
  {
    Icon: BadgeCheck,
    titleKey: "smartLanding.mockups.financial.ciso_panel_sama",
    value: "92%",
    caption: "Q1 2026",
    bars: [75, 80, 84, 87, 89, 90, 92],
    tint: "var(--navy-primary)",
  },
] as const;

export function CISODashboard() {
  const { t, isAr } = useTranslation();
  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_financial">
      <div dir={isAr ? "rtl" : "ltr"}>
        <div className="mb-3">
          <h4 className="text-base font-semibold text-[var(--text-primary)]">
            {t("smartLanding.mockups.financial.ciso_title")}
          </h4>
          <p className="text-xs text-[var(--text-muted)]" dir="ltr">
            {t("smartLanding.mockups.financial.ciso_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {PANELS.map((p) => (
            <div
              key={p.titleKey}
              className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)]"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <p.Icon className="w-3.5 h-3.5 text-[var(--navy-primary)]" />
                <span className="text-[11px] text-[var(--text-secondary)]">
                  {t(p.titleKey)}
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-[var(--text-primary)]" dir="ltr">{p.value}</span>
                <span className="text-[10px] text-[var(--text-muted)]" dir="ltr">{p.caption}</span>
              </div>
              <div className="flex items-end gap-1 mt-2 h-8" aria-hidden="true">
                {p.bars.map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{ background: p.tint, opacity: 0.7, height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MockupFrame>
  );
}

export default CISODashboard;
