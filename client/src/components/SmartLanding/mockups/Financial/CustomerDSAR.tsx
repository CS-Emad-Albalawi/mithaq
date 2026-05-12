// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Customer DSAR mockup for retail banking — 4-step progress
 * (Form → KYC → Compile → Deliver) with form preview.
 */
import { FileText, ShieldCheck, PackageCheck, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

interface Step { key: string; Icon: LucideIcon; pct: number }

const STEPS: readonly Step[] = [
  { key: "smartLanding.mockups.financial.dsar_step_form",    Icon: FileText,     pct: 100 },
  { key: "smartLanding.mockups.financial.dsar_step_kyc",     Icon: ShieldCheck,  pct: 100 },
  { key: "smartLanding.mockups.financial.dsar_step_compile", Icon: PackageCheck, pct: 65  },
  { key: "smartLanding.mockups.financial.dsar_step_deliver", Icon: Send,         pct: 0   },
] as const;

export function CustomerDSAR() {
  const { t, isAr } = useTranslation();
  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_financial">
      <div dir={isAr ? "rtl" : "ltr"}>
        <div className="mb-3">
          <h4 className="text-base font-semibold text-[var(--text-primary)]">
            {t("smartLanding.mockups.financial.dsar_title")}
          </h4>
          <p className="text-xs text-[var(--text-muted)]" dir="ltr">
            {t("smartLanding.mockups.financial.dsar_subtitle")}
          </p>
        </div>

        <div className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)] mb-3 space-y-1">
          <div className="text-[11px] text-[var(--text-secondary)]">
            {t("smartLanding.mockups.financial.dsar_meta_customer")}
          </div>
          <div className="text-[11px] text-[var(--text-secondary)] font-mono" dir="ltr">
            {t("smartLanding.mockups.financial.dsar_meta_id")}
          </div>
        </div>

        {/* Step list */}
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

export default CustomerDSAR;
