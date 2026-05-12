// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * SectorSelector — top-of-Home picker that asks visitors which sector
 * they belong to. Surfaces 6 cards (4 sectors + Other + Skip), persists
 * the choice in sessionStorage, and dispatches via onSelect to the
 * parent (Home.tsx) which swaps in a sector-specific template.
 *
 * Accessibility:
 *   - The grid is a `radiogroup`. Each card is a `radio` with
 *     `aria-checked`. Roving tabindex; arrow-key navigation moves
 *     between cards; Enter/Space activates.
 *   - Focus ring uses --navy-accent for high contrast.
 */
import {
  useCallback,
  useEffect,
  useRef,
  type KeyboardEvent,
} from "react";
import {
  Building2,
  Heart,
  Banknote,
  GraduationCap,
  SkipForward,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "@/i18n";
import { trackIfConsented } from "@/lib/analytics";

export interface SectorSelectorProps {
  /** Called with the chosen sector value (`government` / `healthcare`
   *  / `financial` / `academic` / `default`). The parent persists. */
  onSelect: (sector: string) => void;
}

interface CardDef {
  /** Stable value persisted to sessionStorage + sent to onSelect. */
  value: string;
  labelKey: string;
  descKey: string;
  Icon: LucideIcon;
}

/* Four sector cards + Skip. The grid was switched from CSS grid to
 * flex-wrap + justify-center so the trailing Skip card (which has no
 * partner in its row at lg+) gets centred automatically rather than
 * left-aligned. With justify-center, any orphan row reads as a
 * deliberate "secondary choice" line rather than a truncated grid.
 * (An "Energy" card lived here briefly but it pointed at the same
 *  default template as Skip and read as duplicate content — removed.) */
const CARDS: readonly CardDef[] = [
  { value: "government", labelKey: "smartLanding.selector.card_government",
    descKey: "smartLanding.selector.card_government_desc", Icon: Building2 },
  { value: "healthcare", labelKey: "smartLanding.selector.card_healthcare",
    descKey: "smartLanding.selector.card_healthcare_desc", Icon: Heart },
  { value: "financial", labelKey: "smartLanding.selector.card_financial",
    descKey: "smartLanding.selector.card_financial_desc", Icon: Banknote },
  { value: "academic", labelKey: "smartLanding.selector.card_academic",
    descKey: "smartLanding.selector.card_academic_desc", Icon: GraduationCap },
  { value: "default", labelKey: "smartLanding.selector.card_skip",
    descKey: "smartLanding.selector.card_skip_desc", Icon: SkipForward },
] as const;

export function SectorSelector({ onSelect }: SectorSelectorProps) {
  const { t, isAr } = useTranslation();
  const cardRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Track that the selector was shown — matters more than which sector
  // a visitor picks (if consent is granted).
  useEffect(() => {
    trackIfConsented("smart_landing_selector_shown");
  }, []);

  const handleSelect = useCallback(
    (idx: number) => {
      const card = CARDS[idx];
      if (!card) return;
      try {
        sessionStorage.setItem("mithaq-sector", card.value);
      } catch {
        // sessionStorage unavailable — proceed without persisting
      }
      trackIfConsented("smart_landing_sector_selected", {
        sector: card.value,
        labelKey: card.labelKey,
      });
      onSelect(card.value);
    },
    [onSelect],
  );

  /** Roving tabindex + arrow-key navigation. RTL flips Left/Right. */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
      const last = CARDS.length - 1;
      let next = idx;
      switch (e.key) {
        case "ArrowRight":
          next = isAr ? Math.max(0, idx - 1) : Math.min(last, idx + 1);
          break;
        case "ArrowLeft":
          next = isAr ? Math.min(last, idx + 1) : Math.max(0, idx - 1);
          break;
        case "ArrowDown":
          next = Math.min(last, idx + 3);
          break;
        case "ArrowUp":
          next = Math.max(0, idx - 3);
          break;
        case "Home":
          next = 0;
          break;
        case "End":
          next = last;
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          handleSelect(idx);
          return;
        default:
          return;
      }
      if (next !== idx) {
        e.preventDefault();
        cardRefs.current[next]?.focus();
      }
    },
    [isAr, handleSelect],
  );

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="relative z-10 w-full px-4 py-12 sm:py-16"
      aria-labelledby="sector-selector-heading"
    >
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2
          id="sector-selector-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-[var(--text-primary)] heading-glow"
        >
          {t("smartLanding.selector.heading")}
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-secondary)]">
          {t("smartLanding.selector.subheading")}
        </p>
      </div>

      <div
        role="radiogroup"
        aria-labelledby="sector-selector-heading"
        className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 p-4 sm:p-6"
      >
        {CARDS.map((card, idx) => {
          const Icon = card.Icon;
          return (
            <button
              key={`${card.value}-${idx}`}
              ref={(el) => { cardRefs.current[idx] = el; }}
              role="radio"
              aria-checked={false}
              tabIndex={idx === 0 ? 0 : -1}
              onClick={() => handleSelect(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className="
                group flex flex-col items-start text-start gap-3
                w-full sm:w-72
                rounded-xl border-2 border-[var(--navy-primary)]
                bg-[var(--card-bg)] p-5
                transition-all duration-200
                hover:-translate-y-0.5 hover:border-[var(--navy-light)]
                hover:shadow-[0_0_0_3px_var(--navy-glow)]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy-accent)]
                focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]
                active:bg-[var(--navy-accent)]
              "
            >
              <span
                className="
                  inline-flex items-center justify-center
                  w-10 h-10 rounded-lg
                  bg-[var(--navy-glow)] text-[var(--navy-primary)]
                  group-hover:bg-[var(--navy-accent)] group-hover:text-white
                  transition-colors
                "
                aria-hidden="true"
              >
                <Icon className="w-5 h-5" />
              </span>
              <span className="text-lg font-semibold text-[var(--text-primary)]">
                {t(card.labelKey)}
              </span>
              <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {t(card.descKey)}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default SectorSelector;
