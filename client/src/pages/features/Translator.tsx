// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Feature page — Smart Regulatory Translator.
 * Mock content: a tabbed interface with 4 audience tabs over the same
 * source legal excerpt, showing different translations.
 */
import { useState } from "react";
import { Briefcase, ShieldCheck, Hammer, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "@/components/SmartLanding/MockupFrame";
import { FeaturePageShell, type RegulatoryMapping } from "./FeaturePageShell";

// The translator's job is to make a single regulatory requirement
// land for four different audiences — so the mappings cover the
// articles that most often need to be communicated across roles.
const REGULATORY: readonly RegulatoryMapping[] = [
  { framework: "PDPL",     article: "م.5 — الموافقة الصريحة",          i18nKey: "featurePages.translator.regulatory.pdpl_consent" },
  { framework: "PDPL",     article: "م.12 — حق الوصول للبيانات",       i18nKey: "featurePages.translator.regulatory.pdpl_access" },
  { framework: "NDMO",     article: "DG.4.2 — Awareness & Training",    i18nKey: "featurePages.translator.regulatory.ndmo_awareness" },
  { framework: "NCA ECC",  article: "ECC-1-6 — التدريب والتوعية",      i18nKey: "featurePages.translator.regulatory.ecc_training" },
  { framework: "SDAIA AI", article: "Fairness & Inclusion",             i18nKey: "featurePages.translator.regulatory.sdaia_fairness" },
] as const;

interface Tab { id: "ceo" | "dpo" | "employee" | "citizen"; Icon: LucideIcon }

const TABS: readonly Tab[] = [
  { id: "ceo",      Icon: Briefcase   },
  { id: "dpo",      Icon: ShieldCheck },
  { id: "employee", Icon: Hammer      },
  { id: "citizen",  Icon: User        },
] as const;

function TranslatorMock() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Tab["id"]>("ceo");

  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_government">
      <div className="space-y-4">
        {/* Source */}
        <div>
          <p className="text-xs text-[var(--text-muted)] mb-1">
            {t("featurePages.translator.source_label")}
          </p>
          <p className="rounded-md p-3 bg-[var(--bg-surface-2)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)] leading-relaxed">
            {t("featurePages.translator.source_text")}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1.5" role="tablist">
          {TABS.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.id)}
                className={`
                  inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs
                  border transition-colors
                  ${isActive
                    ? "bg-[var(--navy-primary)] text-white border-[var(--navy-primary)]"
                    : "bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-color)] hover:bg-[var(--navy-glow)]"}
                `}
              >
                <tab.Icon className="w-3.5 h-3.5" />
                <span>{t(`featurePages.translator.tab_${tab.id}`)}</span>
              </button>
            );
          })}
        </div>

        {/* Translation panel */}
        <p
          className="
            rounded-md p-4 min-h-[110px]
            bg-[var(--card-bg)] border border-[var(--navy-primary)]
            text-sm text-[var(--text-primary)] leading-relaxed
          "
        >
          {t(`featurePages.translator.${active}_text`)}
        </p>
      </div>
    </MockupFrame>
  );
}

export default function TranslatorFeature() {
  return (
    <FeaturePageShell
      slug="translator"
      mockContent={<TranslatorMock />}
      regulatoryMappings={REGULATORY}
    />
  );
}
