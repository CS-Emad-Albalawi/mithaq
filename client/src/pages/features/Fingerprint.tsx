// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Feature page — Saudi Regulatory Fingerprint.
 * Mock content: a labeled fingerprint string broken into 8 chips,
 * each with a tooltip-style explanation underneath.
 */
import { useTranslation } from "@/i18n";
import { MockupFrame } from "@/components/SmartLanding/MockupFrame";
import { FeaturePageShell, type RegulatoryMapping } from "./FeaturePageShell";

// Regulatory mapping — the fingerprint is the single most direct
// link to the framework stack, because each segment IS a framework
// pointer. So this table is unusually dense.
const REGULATORY: readonly RegulatoryMapping[] = [
  { framework: "NDMO",      article: "DG.1.1 — Data Classification", i18nKey: "featurePages.fingerprint.regulatory.ndmo_class" },
  { framework: "NDMO",      article: "DG.2.4 — Sensitivity Marking", i18nKey: "featurePages.fingerprint.regulatory.ndmo_marking" },
  { framework: "PDPL",      article: "م.16 — تصنيف البيانات الشخصية", i18nKey: "featurePages.fingerprint.regulatory.pdpl_class" },
  { framework: "NCA ECC",   article: "ECC-2-3-P-1 — تصنيف الأصول",   i18nKey: "featurePages.fingerprint.regulatory.ecc_assets" },
  { framework: "SDAIA AI",  article: "Transparency Principle",        i18nKey: "featurePages.fingerprint.regulatory.sdaia_transparency" },
] as const;

interface Segment { value: string; key: string }

const SEGMENTS: readonly Segment[] = [
  { value: "MTH",     key: "featurePages.fingerprint.seg_prefix" },
  { value: "2026-Q1", key: "featurePages.fingerprint.seg_year" },
  { value: "NDMO77",  key: "featurePages.fingerprint.seg_ndmo" },
  { value: "PDPL16",  key: "featurePages.fingerprint.seg_pdpl" },
  { value: "ECC4.7",  key: "featurePages.fingerprint.seg_ecc" },
  { value: "S2",      key: "featurePages.fingerprint.seg_sensitivity" },
  { value: "T",       key: "featurePages.fingerprint.seg_scope" },
  { value: "a8f3e9",  key: "featurePages.fingerprint.seg_checksum" },
] as const;

function FingerprintMock() {
  const { t } = useTranslation();
  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_government">
      <div className="space-y-5">
        <div>
          <p className="text-xs text-[var(--text-muted)] mb-2">
            {t("featurePages.fingerprint.sample_label")}
          </p>
          <div className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)] font-mono text-sm overflow-x-auto" dir="ltr">
            {SEGMENTS.map((s, i) => (
              <span key={s.key}>
                {i > 0 && <span className="text-[var(--text-muted)] mx-1">-</span>}
                <span
                  className="inline-block px-2 py-0.5 rounded bg-[var(--navy-glow)] text-[var(--navy-primary)] border border-[var(--navy-primary)]"
                >
                  {s.value}
                </span>
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SEGMENTS.map((s) => (
            <div
              key={s.key}
              className="rounded-md p-3 bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center gap-3"
            >
              <span
                className="inline-block px-2 py-0.5 rounded bg-[var(--navy-primary)] text-white font-mono text-xs shrink-0"
                dir="ltr"
              >
                {s.value}
              </span>
              <span className="text-xs text-[var(--text-secondary)] leading-tight">
                {t(s.key)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MockupFrame>
  );
}

export default function FingerprintFeature() {
  return (
    <FeaturePageShell
      slug="fingerprint"
      mockContent={<FingerprintMock />}
      regulatoryMappings={REGULATORY}
    />
  );
}
