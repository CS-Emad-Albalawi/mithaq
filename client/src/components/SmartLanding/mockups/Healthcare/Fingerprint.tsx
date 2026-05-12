// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Medical Document Fingerprint mockup — a fake outpatient report with
 * inline highlights showing detected PII spans + classification.
 */
import { ScanText } from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

interface Highlight {
  text: string;
  labelKey: string;
}

const HIGHLIGHTS: readonly Highlight[] = [
  { text: "1085xxxxxx", labelKey: "smartLanding.mockups.healthcare.fingerprint_pii_id" },
  { text: "+966 5x xxx xxxx", labelKey: "smartLanding.mockups.healthcare.fingerprint_pii_phone" },
  { text: "Hypertension Stage 2", labelKey: "smartLanding.mockups.healthcare.fingerprint_pii_diagnosis" },
] as const;

function PiiPill({ label, value }: { label: string; value: string }) {
  return (
    <span
      className="
        inline-flex items-center gap-1 px-1.5 py-px mx-0.5 rounded
        bg-[var(--navy-glow)] border border-[var(--navy-primary)]
        text-[10px] text-[var(--navy-primary)] font-mono
      "
      dir="ltr"
    >
      <span className="opacity-70 uppercase tracking-wider text-[8px]">{label}</span>
      <span>{value}</span>
    </span>
  );
}

export function Fingerprint() {
  const { t, isAr } = useTranslation();
  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_healthcare">
      <div dir={isAr ? "rtl" : "ltr"}>
        <div className="mb-3">
          <h4 className="text-base font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
            <ScanText className="w-4 h-4 text-[var(--navy-primary)]" />
            {t("smartLanding.mockups.healthcare.fingerprint_title")}
          </h4>
          <p className="text-xs text-[var(--text-muted)]" dir="ltr">
            {t("smartLanding.mockups.healthcare.fingerprint_subtitle")}
          </p>
        </div>

        <div className="rounded-md p-3 bg-[var(--card-bg)] border border-[var(--border-color)]">
          <div className="text-xs font-semibold text-[var(--text-primary)] mb-2">
            {t("smartLanding.mockups.healthcare.fingerprint_doc_title")}
          </div>
          <p className="text-xs text-[var(--text-secondary)] leading-7">
            Patient: A. M. — National ID:{" "}
            <PiiPill label={t("smartLanding.mockups.healthcare.fingerprint_pii_id")} value={HIGHLIGHTS[0].text} />
            . Phone:{" "}
            <PiiPill label={t("smartLanding.mockups.healthcare.fingerprint_pii_phone")} value={HIGHLIGHTS[1].text} />
            . Diagnosis:{" "}
            <PiiPill label={t("smartLanding.mockups.healthcare.fingerprint_pii_diagnosis")} value={HIGHLIGHTS[2].text} />
            . Recommended follow-up in 4 weeks.
          </p>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px]">
          <span className="px-2 py-0.5 rounded bg-[#FBBF24]/15 text-[#FBBF24] border border-[#FBBF24]/40">
            {t("smartLanding.mockups.healthcare.fingerprint_classification")}
          </span>
          <span className="text-[var(--text-muted)]">
            {t("smartLanding.mockups.healthcare.fingerprint_pii_count_label")}{" "}
            <strong className="text-[var(--navy-primary)] font-mono">3</strong>
          </span>
        </div>
      </div>
    </MockupFrame>
  );
}

export default Fingerprint;
