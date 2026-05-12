// Footer — 3-column grid (logo + platform nav + support nav), plus
// a bottom "AI Disclosure" strip. Compliance badges and Legal column
// removed in the portfolio cleanup. The AI Disclosure line is a
// deliberate ethical-honesty signal — the operational Program was
// scaffolded with the help of an AI coding assistant, and surfacing
// that transparently is a non-negotiable design principle for
// Mithaq (see About → "Authorship & Tooling").
import { Sparkles } from "lucide-react";
import { Link } from "wouter";
import { MithaqLogo } from "./MithaqLogo";
import { useTranslation } from "@/i18n";

export function Footer() {
  const { t, isAr } = useTranslation();

  return (
    <footer className="bg-[var(--footer-bg)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Logo + tagline */}
          <div className="space-y-4">
            <MithaqLogo size="md" showName />
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{t("footer.tagline")}</p>
          </div>

          {/* Col 2: Platform */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">{t("footer.platform")}</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: t("nav.home") },
                { href: "/about", label: t("nav.about") },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--navy-light)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">{t("footer.support")}</h4>
            <ul className="space-y-2">
              {[
                { href: "/faq", label: t("nav.faq") },
                { href: "/contact", label: t("nav.contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--navy-light)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AI Disclosure — sits below the 3-column grid as a single
            quiet line. It's not a copyright bar; it's an integrity
            signal. The Sparkles icon doubles as a visual cue that
            we're talking about AI tooling, not legal boilerplate. */}
        <div className="mt-10 pt-6 border-t border-[var(--border-color)]">
          <p className="flex items-start gap-2 text-xs text-[var(--text-muted)] leading-relaxed">
            <Sparkles className="w-3.5 h-3.5 mt-px shrink-0 text-[var(--navy-light)]" strokeWidth={1.75} />
            <span>{t("footer.ai_disclosure")}</span>
          </p>
          <p className="mt-2 text-[10px] text-[var(--text-muted)] opacity-70">
            {isAr
              ? "تفاصيل أكثر في صفحة «عن ميثاق» → التأليف والأدوات."
              : "More detail on the About page → Authorship & Tooling."}
          </p>
        </div>
      </div>
    </footer>
  );
}
