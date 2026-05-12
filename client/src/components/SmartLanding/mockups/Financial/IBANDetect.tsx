// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * IBAN Pattern Detection mockup — code-snippet-style display showing
 * a paragraph with two IBAN matches highlighted, plus a classification
 * footer.
 */
import type { ReactNode } from "react";
import { Banknote } from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

/** Splits the source text on a constant marker so we can wrap each
 *  IBAN match in a styled <mark>. We use a placeholder approach
 *  rather than a real regex highlight so the rendered output is
 *  deterministic and easy to translate. */
function highlightIban(label: string, text: string): ReactNode[] {
  const parts = text.split(/(SA\d{2}(?: \d{4}){5})/g);
  return parts.map((part, i) => {
    if (/^SA\d{2}( \d{4}){5}$/.test(part)) {
      return (
        <mark
          key={i}
          className="
            inline-flex items-center gap-1 px-1.5 py-px mx-0.5 rounded
            bg-[var(--navy-glow)] border border-[var(--navy-primary)]
            text-[10px] text-[var(--navy-primary)] font-mono
          "
          dir="ltr"
        >
          <span className="opacity-70 uppercase tracking-wider text-[8px]">{label}</span>
          <span>{part}</span>
        </mark>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function IBANDetect() {
  const { t, isAr } = useTranslation();
  const text = t("smartLanding.mockups.financial.iban_text");
  const label = t("smartLanding.mockups.financial.iban_highlight_label");

  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_financial">
      <div dir={isAr ? "rtl" : "ltr"}>
        <div className="mb-3">
          <h4 className="text-base font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
            <Banknote className="w-4 h-4 text-[var(--navy-primary)]" />
            {t("smartLanding.mockups.financial.iban_title")}
          </h4>
          <p className="text-xs text-[var(--text-muted)]" dir="ltr">
            {t("smartLanding.mockups.financial.iban_subtitle")}
          </p>
        </div>

        <div className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)] font-mono">
          <p className="text-xs text-[var(--text-secondary)] leading-7">
            {highlightIban(label, text)}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px]">
          <span className="px-2 py-0.5 rounded bg-[#FB7185]/15 text-[#FB7185] border border-[#FB7185]/40">
            {t("smartLanding.mockups.financial.iban_classification")}
          </span>
          <span className="text-[var(--text-muted)] font-mono">2 IBAN matches</span>
        </div>
      </div>
    </MockupFrame>
  );
}

export default IBANDetect;
