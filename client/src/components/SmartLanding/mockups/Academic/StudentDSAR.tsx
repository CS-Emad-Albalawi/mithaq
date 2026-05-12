// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Student DSAR mockup — 4-step pill-style stepper with active flag.
 */
import { FileQuestion, UserCheck, PackageCheck, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

interface Step { key: string; Icon: LucideIcon; pct: number }

const STEPS: readonly Step[] = [
  { key: "smartLanding.mockups.academic.student_dsar_step_request", Icon: FileQuestion, pct: 100 },
  { key: "smartLanding.mockups.academic.student_dsar_step_advisor", Icon: UserCheck,    pct: 80  },
  { key: "smartLanding.mockups.academic.student_dsar_step_data",    Icon: PackageCheck, pct: 30  },
  { key: "smartLanding.mockups.academic.student_dsar_step_deliver", Icon: Send,         pct: 0   },
] as const;

export function StudentDSAR() {
  const { t, isAr } = useTranslation();
  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_academic">
      <div dir={isAr ? "rtl" : "ltr"}>
        <div className="mb-3">
          <h4 className="text-base font-semibold text-[var(--text-primary)]">
            {t("smartLanding.mockups.academic.student_dsar_title")}
          </h4>
          <p className="text-xs text-[var(--text-muted)]" dir="ltr">
            {t("smartLanding.mockups.academic.student_dsar_subtitle")}
          </p>
        </div>

        <div className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)] mb-3 space-y-1">
          <div className="text-[11px] text-[var(--text-secondary)]">
            {t("smartLanding.mockups.academic.student_dsar_meta_student")}
          </div>
          <div className="text-[11px] text-[var(--text-secondary)] font-mono" dir="ltr">
            {t("smartLanding.mockups.academic.student_dsar_meta_id")}
          </div>
        </div>

        <ul className="space-y-2.5">
          {STEPS.map((s) => (
            <li key={s.key} className="flex items-center gap-3">
              <div
                className={`
                  w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2
                  ${s.pct === 100
                    ? "bg-[var(--navy-primary)] border-[var(--navy-primary)] text-white"
                    : s.pct > 0
                      ? "bg-[var(--navy-glow)] border-[var(--navy-primary)] text-[var(--navy-primary)]"
                      : "bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--text-muted)]"}
                `}
              >
                <s.Icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-[var(--text-secondary)] mb-1">{t(s.key)}</div>
                <div className="h-1 rounded-full bg-[var(--bg-surface-2)] overflow-hidden">
                  <div
                    className="h-full bg-[var(--navy-primary)] transition-all"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)] w-9 text-end" dir="ltr">
                {s.pct}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </MockupFrame>
  );
}

export default StudentDSAR;
