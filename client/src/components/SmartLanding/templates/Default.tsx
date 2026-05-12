// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Default template — shown when the visitor picks "Skip" on the
 * sector selector, or when sessionStorage carries `default`.
 *
 * Two sections:
 *   1. Hero with the bilingual title + subtitle + frameworks trust
 *      line. The title carries the same multi-layer text-shadow
 *      glow as the wordmark next to the logo.
 *   2. Five smart features — the core pillars surfaced as
 *      "spotlight" cards: numbered, hover-elevated, with their own
 *      glow halo, and a "learn more" affordance that nudges
 *      visitors into the deep-feature pages. This is the
 *      SHOWCASE surface; About page's 9-card capabilities grid is
 *      the COMPREHENSIVE list. Different presentations of related
 *      content so each surface justifies its existence.
 */
import { Link } from "wouter";
import {
  Fingerprint,
  Brain,
  Languages,
  Sparkles,
  Palette,
  ArrowLeft,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "@/i18n";

interface SmartFeature {
  Icon: LucideIcon;
  titleKey: string;
  descKey: string;
  /** Route the card links to. */
  href: string;
  /** 2-3 framework labels this feature primarily addresses. */
  frameworks: readonly string[];
}

const SMART_FEATURES: readonly SmartFeature[] = [
  {
    Icon: Fingerprint,
    titleKey: "smartLanding.templates.default.feature_fingerprint_title",
    descKey: "smartLanding.templates.default.feature_fingerprint_desc",
    href: "/features/fingerprint",
    frameworks: ["NDMO", "PDPL", "NCA ECC"],
  },
  {
    Icon: Brain,
    titleKey: "smartLanding.templates.default.feature_patterns_title",
    descKey: "smartLanding.templates.default.feature_patterns_desc",
    href: "/features/patterns",
    frameworks: ["PDPL", "SAMA CSF"],
  },
  {
    Icon: Languages,
    titleKey: "smartLanding.templates.default.feature_translator_title",
    descKey: "smartLanding.templates.default.feature_translator_desc",
    href: "/features/translator",
    frameworks: ["PDPL", "NDMO", "SDAIA AI"],
  },
  {
    Icon: Sparkles,
    titleKey: "smartLanding.templates.default.feature_ameen_title",
    descKey: "smartLanding.templates.default.feature_ameen_desc",
    href: "/features/ameen",
    frameworks: ["SDAIA AI", "PDPL"],
  },
  {
    Icon: Palette,
    titleKey: "smartLanding.templates.default.feature_color_title",
    descKey: "smartLanding.templates.default.feature_color_desc",
    href: "/features/color-dashboard",
    frameworks: ["NDMO", "NCA ECC"],
  },
] as const;

export function Default() {
  const { t, isAr } = useTranslation();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div dir={isAr ? "rtl" : "ltr"} className="relative z-10">
      {/* ── Hero ── */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-10 heading-glow">
            {t("hero.title")}
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <p className="text-sm text-[var(--text-muted)]">{t("hero.trust")}</p>
        </div>
      </section>

      {/* ── Five Smart Features — Showcase Cards ──
           Premium presentation: numbered pillars, lifted hover,
           per-icon halo, "Learn more" reveal on hover. The intent
           is for a decision-maker to scan this section and feel
           the project is concrete + has range, then click into a
           specific pillar's deep page to verify the depth. */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header — eyebrow + glow heading + lede */}
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navy-light)] mb-3">
              {isAr ? "محاور أساسية" : "Core Pillars"}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--text-primary)] heading-glow">
              {t("smartLanding.templates.default.features_heading")}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              {isAr
                ? "خمسة محاور تكشف كيف يُترجم ميثاق رؤيته إلى قدرات تشغيلية حقيقية. اضغط أي بطاقة لاستكشاف التفاصيل التقنية والعملية."
                : "Five pillars showing how Mithaq translates vision into real operational capability. Click any card to explore the technical and practical detail."}
            </p>
          </div>

          {/* Cards grid — 1 col mobile, 2 col tablet, 5 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {SMART_FEATURES.map(({ Icon, titleKey, descKey, href, frameworks }, idx) => (
              <Link
                key={titleKey}
                href={href}
                className="
                  group relative block
                  rounded-2xl
                  border border-[var(--border-color)]
                  bg-gradient-to-br from-[var(--card-bg)] to-[var(--bg-surface)]
                  p-6 pt-7
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:border-[var(--navy-primary)]
                  hover:shadow-[0_12px_40px_-12px_rgba(56,189,248,0.35),0_0_0_1px_rgba(56,189,248,0.15)]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy-accent)]
                  focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]
                "
              >
                {/* Numbered badge — top-end corner */}
                <span
                  className="
                    absolute top-3
                    text-[10px] font-mono tracking-wider
                    text-[var(--text-muted)]
                    group-hover:text-[var(--navy-light)]
                    transition-colors duration-300
                  "
                  style={isAr ? { left: "0.75rem" } : { right: "0.75rem" }}
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, "0")} / 05
                </span>

                {/* Icon — bigger, with its own glow halo */}
                <div
                  className="
                    w-14 h-14 rounded-xl mb-5
                    bg-[var(--navy-glow)]
                    text-[var(--navy-primary)]
                    flex items-center justify-center
                    group-hover:bg-gradient-to-br
                    group-hover:from-[var(--navy-primary)]
                    group-hover:to-[var(--navy-accent)]
                    group-hover:text-white
                    transition-all duration-300
                  "
                  style={{
                    boxShadow: "0 0 24px rgba(56,189,248,0.10)",
                  }}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>

                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 leading-snug">
                  {t(titleKey)}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {t(descKey)}
                </p>

                {/* Framework badges — small pills showing which
                    Saudi frameworks this feature primarily serves.
                    Reads as evidence the feature is anchored in a
                    real regulatory mandate, not invented. */}
                <div className="flex flex-wrap gap-1.5 mb-4" dir="ltr">
                  {frameworks.map((fw) => (
                    <span
                      key={fw}
                      className="
                        inline-block px-1.5 py-0.5 rounded
                        text-[9px] font-bold uppercase tracking-wider
                        bg-[var(--navy-glow)] text-[var(--navy-primary)]
                        border border-[var(--navy-primary)]/30
                      "
                    >
                      {fw}
                    </span>
                  ))}
                </div>

                {/* "Learn more" affordance — fades in on hover */}
                <div
                  className="
                    flex items-center gap-1.5
                    text-xs font-medium
                    text-[var(--navy-light)]
                    opacity-60 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                  aria-hidden="true"
                >
                  <span>{isAr ? "اكتشف أكثر" : "Learn more"}</span>
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>

          {/* Section footer — explains the framework badges */}
          <p className="text-xs text-[var(--text-muted)] text-center mt-10 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? "كل ميزة مُصمَّمة لخدمة أُطر سعودية محددة — اضغط أي بطاقة لرؤية البنود التنظيمية بالتفصيل."
              : "Every feature is designed to address specific Saudi frameworks — click any card to see the regulatory mapping in detail."}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Default;
