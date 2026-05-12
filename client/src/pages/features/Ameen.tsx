// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Feature page — Ameen Smart Companion.
 * Mock content: 5-message chat exchange + sovereignty notice.
 */
import { useTranslation } from "@/i18n";
import { MockupFrame } from "@/components/SmartLanding/MockupFrame";
import { FeaturePageShell, type RegulatoryMapping } from "./FeaturePageShell";

// Ameen is the single feature with the strongest AI ethics
// implications, so SDAIA mappings dominate. Local-only operation
// also lets us claim sovereignty-related NDMO and NCA controls.
const REGULATORY: readonly RegulatoryMapping[] = [
  { framework: "SDAIA AI", article: "Transparency Principle",          i18nKey: "featurePages.ameen.regulatory.sdaia_transparency" },
  { framework: "SDAIA AI", article: "Privacy & Security Principle",    i18nKey: "featurePages.ameen.regulatory.sdaia_privacy" },
  { framework: "PDPL",     article: "م.19 — حماية البيانات الشخصية",  i18nKey: "featurePages.ameen.regulatory.pdpl_protection" },
  { framework: "NDMO",     article: "DG.5.1 — Data Sovereignty",        i18nKey: "featurePages.ameen.regulatory.ndmo_sovereignty" },
  { framework: "NCA ECC",  article: "ECC-2-15-P-1 — الذكاء الاصطناعي", i18nKey: "featurePages.ameen.regulatory.ecc_ai" },
] as const;

interface Msg { from: "user" | "ameen"; key: string }

const MESSAGES: readonly Msg[] = [
  { from: "user",  key: "featurePages.ameen.msg_user_1"  },
  { from: "ameen", key: "featurePages.ameen.msg_ameen_1" },
  { from: "user",  key: "featurePages.ameen.msg_user_2"  },
  { from: "ameen", key: "featurePages.ameen.msg_ameen_2" },
  { from: "ameen", key: "featurePages.ameen.msg_ameen_3" },
] as const;

function AmeenMock() {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <MockupFrame urlKey="smartLanding.mockup.browser_url_healthcare">
        <div>
          <p className="text-xs text-[var(--text-muted)] mb-3">
            {t("featurePages.ameen.conversation_title")}
          </p>
          <div className="flex flex-col gap-2 p-3 rounded-md bg-[var(--bg-surface-2)] border border-[var(--border-color)]">
            {MESSAGES.map((m, i) => {
              const isUser = m.from === "user";
              return (
                <div
                  key={i}
                  className={`flex items-end gap-2 ${isUser ? "justify-start" : "justify-end"}`}
                >
                  {!isUser && (
                    <div
                      className="
                        w-7 h-7 rounded-full
                        bg-[var(--navy-primary)] text-white
                        flex items-center justify-center
                        text-[10px] font-bold shrink-0
                      "
                      aria-hidden="true"
                    >
                      ع
                    </div>
                  )}
                  <div
                    className={`
                      max-w-[78%] px-3 py-2 text-xs leading-relaxed
                      ${isUser
                        ? "rounded-2xl rounded-bl-sm bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-secondary)]"
                        : "rounded-2xl rounded-br-sm bg-[var(--navy-primary)] text-white"}
                    `}
                  >
                    {t(m.key)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MockupFrame>

      <div
        className="
          rounded-xl border border-[var(--navy-primary)]
          bg-[var(--navy-glow)] p-4 sm:p-5
        "
      >
        <h3 className="text-sm font-semibold text-[var(--navy-primary)] mb-1">
          {t("featurePages.ameen.sovereignty_title")}
        </h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          {t("featurePages.ameen.sovereignty_body")}
        </p>
      </div>
    </div>
  );
}

export default function AmeenFeature() {
  return (
    <FeaturePageShell
      slug="ameen"
      mockContent={<AmeenMock />}
      regulatoryMappings={REGULATORY}
    />
  );
}
