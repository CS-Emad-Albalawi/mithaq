// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Home — User-Driven Sector Selection landing.
 *
 * Flow:
 *   1. First visit (SectorContext.sector === null) → render the
 *      <SectorSelector />.
 *   2. After a pick → render <SectorTemplate sector="..." /> (lazy
 *      loads government/healthcare/financial/academic/default
 *      content + 4 mockups).
 *   3. Footer renders at the bottom. The old CommonSections block
 *      (trust bar + features grid + FAQ preview) was moved to /about
 *      so Home is purely a sector-discovery surface.
 *
 * The "Change sector" pill is a small floating affordance pinned to
 * the top-end corner of the viewport. Earlier it was tucked into the
 * Navbar as an icon-only button, but that placement was too easy to
 * miss; the floating pill (now scaled down from the original) is
 * loud enough to notice without dominating the page.
 */
import { useCallback } from "react";
import { RefreshCcw } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/i18n";
import { usePageTitle } from "@/hooks/usePageTitle";
import { SectorSelector } from "@/components/SmartLanding/SectorSelector";
import { SectorTemplate } from "@/components/SmartLanding/SectorTemplate";
import { useSector } from "@/contexts/SectorContext";
import { trackIfConsented } from "@/lib/analytics";

export default function Home() {
  const { t, isAr } = useTranslation();
  usePageTitle("الرئيسية", "Home");

  const { sector, setSector, clearSector } = useSector();

  const handleSelect = useCallback(
    (s: string) => {
      setSector(s);
    },
    [setSector],
  );

  const handleChangeSector = useCallback(() => {
    clearSector();
    trackIfConsented("smart_landing_change_sector_clicked");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [clearSector]);

  return (
    <div className="min-h-screen text-[var(--text-primary)]" dir={isAr ? "rtl" : "ltr"}>
      <Navbar />

      {/* "Back" floating pill — visible only after a sector has been
          picked. Compact (px-3 / py-1.5 / text-xs) so it reads as a
          secondary affordance. Top offset is `top-28` (112px) so a
          48px gap separates it from the 64px-tall navbar bottom —
          avoids the visual overlap that the earlier top-20 (16px gap)
          had with the lang + theme buttons at the same horizontal end. */}
      {sector !== null && (
        <button
          type="button"
          onClick={handleChangeSector}
          className="
            fixed top-28 z-50
            inline-flex items-center gap-1.5
            px-3 py-1.5 rounded-full
            bg-[var(--card-bg)] border border-[var(--navy-primary)]
            text-xs font-medium text-[var(--navy-primary)]
            shadow-sm hover:bg-[var(--navy-glow)]
            transition-colors
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy-accent)]
          "
          style={isAr ? { left: "1rem" } : { right: "1rem" }}
          aria-label={t("smartLanding.selector.change_sector")}
        >
          <RefreshCcw className="w-3.5 h-3.5" />
          <span>{t("smartLanding.selector.change_sector")}</span>
        </button>
      )}

      {/* Home is now purely a sector landing — the visitor either
          picks a sector (selector) or sees that sector's template.
          Trust bar, capabilities grid, and FAQ preview all moved to
          /about so Home stays a clean entry into the experience. */}
      {sector === null
        ? <SectorSelector onSelect={handleSelect} />
        : <SectorTemplate sector={sector} />}

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
