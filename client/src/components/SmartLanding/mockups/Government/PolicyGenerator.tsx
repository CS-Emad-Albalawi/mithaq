// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * GovernmentPolicyGenerator mockup — form on the left, "generated"
 * preview pane on the right.
 */
import { FileText, Sparkles } from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

const FIELD_DEFS = [
  { key: "framework", value: "PDPL" },
  { key: "article",   value: "Art. 5" },
  { key: "audience",  value: "Public" },
  { key: "format",    value: "Markdown" },
] as const;

export function PolicyGenerator() {
  const { t, isAr } = useTranslation();

  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_government">
      <div dir={isAr ? "rtl" : "ltr"}>
        <div className="mb-3">
          <h4 className="text-base font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[var(--navy-primary)]" />
            {t("smartLanding.mockups.government.policygen_title")}
          </h4>
          <p className="text-xs text-[var(--text-muted)]" dir="ltr">
            {t("smartLanding.mockups.government.policygen_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Form */}
          <div className="space-y-2">
            {FIELD_DEFS.map((f) => (
              <div key={f.key}>
                <label className="block text-[11px] text-[var(--text-muted)] mb-0.5">
                  {t(`smartLanding.mockups.government.policygen_field_${f.key}`)}
                </label>
                <div
                  className="
                    px-3 py-1.5 rounded-md
                    bg-[var(--bg-surface-2)] border border-[var(--border-color)]
                    text-xs text-[var(--text-secondary)] font-mono
                  "
                  dir="ltr"
                >
                  {f.value}
                </div>
              </div>
            ))}
          </div>

          {/* Preview */}
          <div className="rounded-md bg-[var(--bg-surface-2)] border border-[var(--border-color)] p-3">
            <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)] mb-2">
              <FileText className="w-3.5 h-3.5 text-[var(--navy-primary)]" />
              <span>{t("smartLanding.mockups.government.policygen_preview_title")}</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {t("smartLanding.mockups.government.policygen_preview_text")}
            </p>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

export default PolicyGenerator;
