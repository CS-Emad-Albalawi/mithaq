// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * SAMA CSF Compliance Report mockup — PDF-preview-style mockup
 * with header, period, score, three findings.
 */
import { FileText, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

const FINDINGS: ReadonlyArray<{ key: string; ok: boolean }> = [
  { key: "smartLanding.mockups.financial.report_finding_1", ok: true  },
  { key: "smartLanding.mockups.financial.report_finding_2", ok: false },
  { key: "smartLanding.mockups.financial.report_finding_3", ok: true  },
] as const;

export function ComplianceReport() {
  const { t, isAr } = useTranslation();

  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_financial">
      <div dir={isAr ? "rtl" : "ltr"}>
        <div className="mb-3">
          <h4 className="text-base font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[var(--navy-primary)]" />
            {t("smartLanding.mockups.financial.report_title")}
          </h4>
          <p className="text-xs text-[var(--text-muted)]" dir="ltr">
            {t("smartLanding.mockups.financial.report_subtitle")}
          </p>
        </div>

        {/* Faux PDF page */}
        <div
          className="
            rounded-md bg-[var(--card-bg)] border border-[var(--border-color)]
            shadow-inner p-4 sm:p-5
          "
        >
          <div className="border-b border-[var(--border-color)] pb-2 mb-3">
            <div className="text-xs text-[var(--text-muted)]" dir="ltr">
              {t("smartLanding.mockups.financial.report_meta_period")}
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-base font-semibold text-[var(--text-primary)]">
                {t("smartLanding.mockups.financial.report_meta_score")}
              </span>
              <span className="text-2xl font-bold text-[var(--navy-primary)] font-mono" dir="ltr">
                92<span className="text-sm">%</span>
              </span>
            </div>
            {/* Progress bar */}
            <div className="h-1.5 rounded-full bg-[var(--bg-surface-2)] overflow-hidden mt-2">
              <div className="h-full bg-[var(--navy-primary)]" style={{ width: "92%" }} />
            </div>
          </div>

          <ul className="space-y-2">
            {FINDINGS.map((f) => (
              <li key={f.key} className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                {f.ok ? (
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--navy-accent)] shrink-0 mt-px" />
                ) : (
                  <AlertCircle className="w-3.5 h-3.5 text-[#FBBF24] shrink-0 mt-px" />
                )}
                <span>{t(f.key)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MockupFrame>
  );
}

export default ComplianceReport;
