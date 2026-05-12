// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Patient DSAR mockup — request → verify → process → deliver tabs
 * with a tiny progress bar. Active step is "Process".
 */
import { useState } from "react";
import {
  FileQuestion,
  ShieldCheck,
  Cog,
  Send,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

interface Step { key: string; Icon: LucideIcon }

const STEPS: readonly Step[] = [
  { key: "smartLanding.mockups.healthcare.dsar_step_request", Icon: FileQuestion },
  { key: "smartLanding.mockups.healthcare.dsar_step_verify",  Icon: ShieldCheck  },
  { key: "smartLanding.mockups.healthcare.dsar_step_process", Icon: Cog          },
  { key: "smartLanding.mockups.healthcare.dsar_step_deliver", Icon: Send         },
] as const;

export function PatientDSAR() {
  const { t, isAr } = useTranslation();
  // Default "active" step is index 2 (Process) — visually shows that
  // the demo workflow is mid-flight.
  const [active, setActive] = useState(2);

  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_healthcare">
      <div dir={isAr ? "rtl" : "ltr"}>
        <div className="mb-3">
          <h4 className="text-base font-semibold text-[var(--text-primary)]">
            {t("smartLanding.mockups.healthcare.dsar_title")}
          </h4>
          <p className="text-xs text-[var(--text-muted)]" dir="ltr">
            {t("smartLanding.mockups.healthcare.dsar_subtitle")}
          </p>
        </div>

        {/* Tab strip */}
        <div className="flex items-center gap-1 mb-3" role="tablist">
          {STEPS.map((s, i) => {
            const isActive = i === active;
            const isDone = i < active;
            return (
              <button
                key={s.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className={`
                  flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px]
                  border transition-colors
                  ${isActive
                    ? "bg-[var(--navy-primary)] text-white border-[var(--navy-primary)]"
                    : isDone
                      ? "bg-[var(--navy-glow)] text-[var(--navy-primary)] border-[var(--navy-primary)]"
                      : "bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-color)]"}
                `}
              >
                <s.Icon className="w-3.5 h-3.5" />
                <span>{t(s.key)}</span>
              </button>
            );
          })}
        </div>

        {/* Content panel for the active step */}
        <div className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)] space-y-1.5">
          <div className="text-[11px] text-[var(--text-secondary)]">
            {t("smartLanding.mockups.healthcare.dsar_meta_patient")}
          </div>
          <div className="text-[11px] text-[var(--text-secondary)] font-mono" dir="ltr">
            {t("smartLanding.mockups.healthcare.dsar_meta_id")}
          </div>
          <div className="text-[11px] text-[var(--text-secondary)] font-mono" dir="ltr">
            {t("smartLanding.mockups.healthcare.dsar_meta_date")}
          </div>
          {/* Progress bar */}
          <div className="h-1.5 rounded-full bg-[var(--card-bg)] overflow-hidden mt-2">
            <div
              className="h-full bg-[var(--navy-primary)] transition-all"
              style={{ width: `${((active + 1) / STEPS.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

export default PatientDSAR;
