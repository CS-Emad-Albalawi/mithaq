// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Academic Faculty (Dean of Research) dashboard mockup. Four stat
 * tiles + recent-activity strip.
 */
import { FlaskConical, Users, ClipboardCheck, BookOpenCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

interface Stat { Icon: LucideIcon; value: string; key: string }

const STATS: readonly Stat[] = [
  { Icon: FlaskConical,    value: "47",  key: "smartLanding.mockups.academic.faculty_stat_projects" },
  { Icon: Users,           value: "183", key: "smartLanding.mockups.academic.faculty_stat_students" },
  { Icon: ClipboardCheck,  value: "9",   key: "smartLanding.mockups.academic.faculty_stat_irb_pending" },
  { Icon: BookOpenCheck,   value: "62",  key: "smartLanding.mockups.academic.faculty_stat_papers" },
] as const;

export function FacultyDashboard() {
  const { t, isAr } = useTranslation();
  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_academic">
      <div dir={isAr ? "rtl" : "ltr"}>
        <div className="mb-3">
          <h4 className="text-base font-semibold text-[var(--text-primary)]">
            {t("smartLanding.mockups.academic.faculty_title")}
          </h4>
          <p className="text-xs text-[var(--text-muted)]" dir="ltr">
            {t("smartLanding.mockups.academic.faculty_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {STATS.map((s) => (
            <div
              key={s.key}
              className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)]"
            >
              <s.Icon className="w-4 h-4 text-[var(--navy-primary)] mb-1.5" />
              <div className="text-xl font-bold text-[var(--text-primary)] font-mono" dir="ltr">{s.value}</div>
              <div className="text-[10px] text-[var(--text-muted)] mt-0.5 leading-tight">
                {t(s.key)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MockupFrame>
  );
}

export default FacultyDashboard;
