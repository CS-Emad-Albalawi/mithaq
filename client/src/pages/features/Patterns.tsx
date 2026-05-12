// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Feature page — Saudi Pattern Memory.
 * Mock content: 4 pattern cards (National ID, IBAN, MRN, Plate),
 * each showing the regex + 1-line description + "detected in" hint.
 */
import { Fingerprint, Banknote, Stethoscope, Car } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "@/components/SmartLanding/MockupFrame";
import { FeaturePageShell, type RegulatoryMapping } from "./FeaturePageShell";

// Pattern Memory directly serves PII detection and breach-notification
// duties — that's why the mappings lean heavily on PDPL and NCA ECC's
// data-protection controls.
const REGULATORY: readonly RegulatoryMapping[] = [
  { framework: "PDPL",     article: "م.19 — حماية البيانات الشخصية", i18nKey: "featurePages.patterns.regulatory.pdpl_protection" },
  { framework: "PDPL",     article: "م.20 — الإخطار بالخرق",          i18nKey: "featurePages.patterns.regulatory.pdpl_breach" },
  { framework: "NDMO",     article: "DG.3.1 — Data Quality",           i18nKey: "featurePages.patterns.regulatory.ndmo_quality" },
  { framework: "NCA ECC",  article: "ECC-2-7-P-1 — حماية البيانات",   i18nKey: "featurePages.patterns.regulatory.ecc_data" },
  { framework: "SAMA CSF", article: "3.3.5 — Data Loss Prevention",    i18nKey: "featurePages.patterns.regulatory.sama_dlp" },
] as const;

interface PatternCard {
  Icon: LucideIcon;
  ns: "id" | "iban" | "mrn" | "plate";
}

const PATTERNS: readonly PatternCard[] = [
  { Icon: Fingerprint, ns: "id" },
  { Icon: Banknote,    ns: "iban" },
  { Icon: Stethoscope, ns: "mrn" },
  { Icon: Car,         ns: "plate" },
] as const;

function PatternsMock() {
  const { t } = useTranslation();
  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_government">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {PATTERNS.map((p) => {
          const k = `featurePages.patterns.pattern_${p.ns}`;
          return (
            <div
              key={p.ns}
              className="rounded-md p-4 bg-[var(--bg-surface-2)] border border-[var(--border-color)] space-y-2"
            >
              <div className="flex items-center gap-2 text-[var(--navy-primary)]">
                <p.Icon className="w-4 h-4" />
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                  {t(`${k}_title`)}
                </h3>
              </div>
              <pre className="
                text-[10px] font-mono px-2 py-1 rounded
                bg-[var(--card-bg)] border border-[var(--border-color)]
                text-[var(--navy-primary)] overflow-x-auto whitespace-pre-wrap break-all
              " dir="ltr">{t(`${k}_regex`)}</pre>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {t(`${k}_desc`)}
              </p>
              <p className="text-[10px] text-[var(--text-muted)]">
                {t(`${k}_seen`)}
              </p>
            </div>
          );
        })}
      </div>
    </MockupFrame>
  );
}

export default function PatternsFeature() {
  return (
    <FeaturePageShell
      slug="patterns"
      mockContent={<PatternsMock />}
      regulatoryMappings={REGULATORY}
    />
  );
}
