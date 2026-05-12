// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Healthcare DPO Dashboard mockup. Three stat tiles (matching the real
 * Tabuk Health Cluster numbers: 12 hospitals / 84 PHC centres / 886K
 * beneficiaries) plus a 5-button quick-action card.
 */
import {
  FileSearch,
  AlertOctagon,
  ListChecks,
  ShieldEllipsis,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

interface QuickAction { Icon: LucideIcon; key: string }

const QUICK_ACTIONS: readonly QuickAction[] = [
  { Icon: FileSearch,     key: "smartLanding.mockups.healthcare.dpo_action_dsar" },
  { Icon: AlertOctagon,   key: "smartLanding.mockups.healthcare.dpo_action_breach" },
  { Icon: ListChecks,     key: "smartLanding.mockups.healthcare.dpo_action_consent" },
  { Icon: ShieldEllipsis, key: "smartLanding.mockups.healthcare.dpo_action_audit" },
  { Icon: GraduationCap,  key: "smartLanding.mockups.healthcare.dpo_action_training" },
] as const;

export function DPODashboard() {
  const { t, isAr } = useTranslation();
  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_healthcare">
      <div dir={isAr ? "rtl" : "ltr"}>
        <div className="mb-3">
          <h4 className="text-base font-semibold text-[var(--text-primary)]">
            {t("smartLanding.mockups.healthcare.dpo_title")}
          </h4>
          <p className="text-xs text-[var(--text-muted)]" dir="ltr">
            {t("smartLanding.mockups.healthcare.dpo_subtitle")}
          </p>
        </div>

        {/* Stats — Tabuk Health Cluster real numbers per spec */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)]">
            <div className="text-xl font-bold text-[var(--navy-primary)]">12</div>
            <div className="text-[10px] text-[var(--text-muted)]">
              {t("smartLanding.mockups.healthcare.dpo_stat_hospitals")}
            </div>
          </div>
          <div className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)]">
            <div className="text-xl font-bold text-[var(--navy-primary)]">84</div>
            <div className="text-[10px] text-[var(--text-muted)]">
              {t("smartLanding.mockups.healthcare.dpo_stat_phc")}
            </div>
          </div>
          <div className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)]">
            <div className="text-xl font-bold text-[var(--navy-primary)]">886K</div>
            <div className="text-[10px] text-[var(--text-muted)]">
              {t("smartLanding.mockups.healthcare.dpo_stat_beneficiaries")}
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {QUICK_ACTIONS.map((a) => (
            <div
              key={a.key}
              className="
                rounded-md p-3 bg-[var(--card-bg)] border border-[var(--border-color)]
                flex flex-col items-center text-center gap-1.5
                transition-colors hover:border-[var(--navy-primary)]
              "
              aria-hidden="true"
            >
              <a.Icon className="w-4 h-4 text-[var(--navy-primary)]" />
              <span className="text-[11px] text-[var(--text-secondary)] leading-tight">
                {t(a.key)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MockupFrame>
  );
}

export default DPODashboard;
