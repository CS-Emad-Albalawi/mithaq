// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * FeaturePageShell — shared layout for the 5 feature deep-pages.
 * Each feature supplies a slug (used to scope i18n keys), the mock
 * content, and a regulatory-mapping table that ties this feature
 * to specific articles/controls in NDMO, PDPL, NCA ECC, and SDAIA AI.
 * The shell renders hero → mock → technical approach → regulatory
 * mapping → disclaimer → CTAs in a uniform layout.
 */
import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Scale } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/i18n";

/** A single row in the regulatory-mapping table — framework + article + how this feature serves it. */
export interface RegulatoryMapping {
  /** Short framework label (NDMO, PDPL, NCA ECC, SDAIA AI, SAMA CSF, …). */
  framework: string;
  /** Specific article / control identifier (e.g. "PDPL م.19", "ECC-2-7-P-1"). */
  article: string;
  /** i18n key under `featurePages.<slug>.regulatory.<key>` for the "how it serves" text. */
  i18nKey: string;
}

export interface FeaturePageShellProps {
  /** i18n namespace under `featurePages.<slug>.*`. */
  slug: "fingerprint" | "patterns" | "translator" | "ameen" | "color";
  /** Mock content area — feature-specific visuals (diagram, cards, chat). */
  mockContent: ReactNode;
  /** 3-5 regulatory mappings tying this feature to specific articles/controls. */
  regulatoryMappings: readonly RegulatoryMapping[];
}

export function FeaturePageShell({ slug, mockContent, regulatoryMappings }: FeaturePageShellProps) {
  const { t, isAr } = useTranslation();
  // Per-page text lives under `featurePages.<slug>.*` — the namespace was
  // renamed from the original `features.*` to avoid collision with the
  // home-page `features` key which holds the 17 capability cards.
  const ns = `featurePages.${slug}`;

  return (
    <div className="min-h-screen text-[var(--text-primary)]" dir={isAr ? "rtl" : "ltr"}>
      <Navbar />

      <main className="relative z-10 max-w-4xl mx-auto px-4 pt-28 pb-16">
        {/* Hero */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[var(--text-primary)] heading-glow">
            {t(`${ns}.hero`)}
          </h1>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
            {t(`${ns}.intro`)}
          </p>
        </header>

        {/* Mock content */}
        <section className="mb-10">{mockContent}</section>

        {/* Technical approach */}
        <section className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 mb-8">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-2 heading-glow">
            {t(`${ns}.tech_heading`)}
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {t(`${ns}.tech_body`)}
          </p>
        </section>

        {/* Regulatory mapping — ties this feature to specific
            article/control identifiers across the Saudi framework
            stack. Reads as evidence of depth: this isn't a vague
            "we cover NDMO" claim, it's a row-by-row map of which
            articles each capability addresses. */}
        <section className="rounded-xl border border-[var(--navy-primary)] bg-[var(--card-bg)] p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-[var(--navy-light)]" strokeWidth={1.75} />
            <h2 className="text-lg font-semibold text-[var(--text-primary)] heading-glow">
              {isAr ? "التغطية التنظيمية" : "Regulatory Coverage"}
            </h2>
          </div>
          <p className="text-xs text-[var(--text-muted)] mb-4">
            {isAr
              ? "كيف تخدم هذه الميزة بنوداً محددة من الأُطر السعودية."
              : "How this feature addresses specific articles in the Saudi framework stack."}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border-color)]">
                  <th className={`py-2 px-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider ${isAr ? "text-right" : "text-left"}`}>
                    {isAr ? "الإطار" : "Framework"}
                  </th>
                  <th className={`py-2 px-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider ${isAr ? "text-right" : "text-left"}`}>
                    {isAr ? "البند" : "Article / Control"}
                  </th>
                  <th className={`py-2 px-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider ${isAr ? "text-right" : "text-left"}`}>
                    {isAr ? "كيف تخدمه هذه الميزة" : "How this feature serves it"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {regulatoryMappings.map((row) => (
                  <tr
                    key={`${row.framework}-${row.article}`}
                    className="border-b border-[var(--border-color)] last:border-b-0 hover:bg-[var(--bg-surface)]/40 transition-colors"
                  >
                    <td className="py-3 px-2 align-top">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[var(--navy-glow)] text-[var(--navy-primary)] whitespace-nowrap">
                        {row.framework}
                      </span>
                    </td>
                    <td className="py-3 px-2 align-top">
                      <span className="font-mono text-xs text-[var(--text-primary)]" dir="ltr">
                        {row.article}
                      </span>
                    </td>
                    <td className="py-3 px-2 align-top">
                      <span className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {t(row.i18nKey)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-[var(--text-muted)] mt-4 opacity-70">
            {isAr
              ? "هذه المصفوفة تصف غايات التصميم — لا تمثِّل اعتماداً رسمياً من الجهة التنظيمية."
              : "This matrix describes design intent — it does not represent formal certification from the regulator."}
          </p>
        </section>

        {/* Future-program disclaimer */}
        <p className="text-xs text-[var(--text-muted)] text-center mb-8">
          {t("featurePages.common.future_program")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact">
            <span className="
              inline-flex items-center gap-2
              px-8 py-3 rounded-lg font-semibold
              bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)]
              hover:bg-[var(--btn-primary-hover)] transition-colors
            ">
              {t("featurePages.common.cta")}
              {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </span>
          </Link>
          <Link href="/">
            <span className="
              inline-flex items-center
              px-8 py-3 rounded-lg font-semibold
              border-2 border-[var(--navy-primary)] text-[var(--navy-primary)]
              hover:bg-[var(--navy-glow)] transition-colors
            ">
              {t("featurePages.common.back_home")}
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FeaturePageShell;
