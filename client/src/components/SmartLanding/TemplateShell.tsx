// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * TemplateShell — shared layout for all 4 sector-specific templates.
 *
 * Each sector template (Government, Healthcare, Financial, Academic)
 * supplies a hero copy, a single "killer feature" highlight, the URL
 * for the in-mockup browser-chrome bar, three real-world scenarios
 * the Program is designed to address, and a slot for its 4 mockups.
 * The shell renders all of that in a consistent layout so any future
 * tweak (spacing, typography, CTA wording) lands once.
 */
import type { ReactNode } from "react";
import { AlertTriangle, Workflow, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/i18n";

export interface TemplateShellProps {
  /** i18n namespace under `smartLanding.templates.<sector>` for this template. */
  sector: "government" | "healthcare" | "financial" | "academic";
  /** Pre-rendered killer-feature preview block (small CSS visual) */
  killerPreview: ReactNode;
  /** The 4 mockups belonging to this sector. */
  mockupGallery: ReactNode;
}

/**
 * Three scenarios per sector, each split into the same 3-step rhythm:
 *   1. Trigger — the real-world event that surfaces the problem
 *   2. Mithaq response — what the Program does about it
 *   3. Outcome — the regulatory or operational result
 *
 * Reading the section, a decision-maker walks away with a concrete
 * mental model of how the Program "thinks", not just what features
 * it has.
 */
const SCENARIO_NUMBERS = [1, 2, 3] as const;

export function TemplateShell({
  sector,
  killerPreview,
  mockupGallery,
}: TemplateShellProps) {
  const { t, isAr } = useTranslation();
  const tplKey = `smartLanding.templates.${sector}`;
  const commonKey = "smartLanding.templates.common";

  return (
    <div dir={isAr ? "rtl" : "ltr"} className="relative z-10">
      {/* Hero — sector-specific */}
      <section className="px-4 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 text-[var(--text-primary)]">
            {t(`${tplKey}.hero`)}
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-3">
            {t(`${tplKey}.subtitle`)}
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            {t(`${commonKey}.future_program_disclaimer`)}
          </p>
        </div>
      </section>

      {/* Killer feature card */}
      <section className="px-4 pb-12">
        <div className="max-w-5xl mx-auto rounded-2xl border border-[var(--navy-primary)] bg-[var(--card-bg)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-6 sm:p-8 flex flex-col justify-center gap-4">
              <span className="self-start text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-[var(--navy-glow)] text-[var(--navy-primary)]">
                {t(`${commonKey}.killer_badge`)}
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-1">
                  {t(`${tplKey}.killer_title`)}
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  {t(`${tplKey}.killer_subtitle`)}
                </p>
              </div>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {t(`${tplKey}.killer_desc`)}
              </p>
            </div>
            <div className="bg-[var(--bg-surface-2)] p-6 flex items-center justify-center min-h-[260px]">
              {killerPreview}
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios — 3 concrete cases per sector. Renders as 3
          numbered cards in a responsive grid, each showing the
          trigger / Mithaq response / outcome triplet. */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--navy-light)] mb-3">
              {isAr ? "حالات نموذجية" : "Representative Scenarios"}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] heading-glow mb-3">
              {t(`${tplKey}.scenarios_heading`)}
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              {isAr
                ? "ثلاث حالات واقعية يُصمَّم البرنامج التشغيلي للتعامل معها — تتابع: المُشغِّل، استجابة ميثاق، النتيجة."
                : "Three real-world cases the operational Program is designed to handle — flow: trigger, Mithaq's response, outcome."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SCENARIO_NUMBERS.map((n) => {
              const ns = `${tplKey}.scenario_${n}`;
              return (
                <article
                  key={n}
                  className="
                    relative rounded-2xl p-6
                    bg-gradient-to-br from-[var(--card-bg)] to-[var(--bg-surface)]
                    border border-[var(--border-color)]
                    hover:border-[var(--navy-primary)]
                    transition-colors
                  "
                >
                  <span
                    className="
                      absolute top-3 text-[10px] font-mono tracking-wider
                      text-[var(--text-muted)]
                    "
                    style={isAr ? { left: "0.75rem" } : { right: "0.75rem" }}
                    aria-hidden="true"
                  >
                    {String(n).padStart(2, "0")} / 03
                  </span>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-4 leading-snug pr-12">
                    {t(`${ns}.title`)}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" strokeWidth={1.75} />
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                          {isAr ? "المُشغِّل" : "Trigger"}
                        </p>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {t(`${ns}.trigger`)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2.5">
                      <Workflow className="w-4 h-4 text-[var(--navy-light)] shrink-0 mt-0.5" strokeWidth={1.75} />
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                          {isAr ? "استجابة ميثاق" : "Mithaq Response"}
                        </p>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {t(`${ns}.response`)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={1.75} />
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-1">
                          {isAr ? "النتيجة" : "Outcome"}
                        </p>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {t(`${ns}.outcome`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTAs removed — both buttons resolved to "/contact" with the
          same label, which read as duplicates. Navbar + Footer already
          surface the Contact route on every page. */}

      {/* 4-mockup gallery for this sector */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">{mockupGallery}</div>
      </section>
    </div>
  );
}

export default TemplateShell;
