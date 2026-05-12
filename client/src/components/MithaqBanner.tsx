// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * MithaqBanner — Top informational banner.
 *
 * Shown ONLY on the homepage `/`. Other routes hide it so the visitor
 * sees the disclosure on first arrival and doesn't have it repeating
 * over every sub-page.
 *
 * Bilingual via the project's custom useTranslation() hook (key:
 * `banner.message`). Not dismissible by design — the disclosure is a
 * persistent honesty claim on the landing surface, not a one-time
 * notification.
 */
import { useLocation } from "wouter";
import { useTranslation } from "../i18n";

export function MithaqBanner() {
  const { t, isAr } = useTranslation();
  const [location] = useLocation();

  // Render nothing off the homepage.
  if (location !== "/") return null;

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      role="status"
      aria-label={isAr ? "إعلان المنصة" : "Platform notice"}
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #0A2647 0%, #144272 100%)",
        color: "#E8EEF5",
        padding: "8px 16px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: 500,
        position: "relative",
        zIndex: 50,
        // Belt-and-braces: keep it readable above the canvas particle
        // background even on browsers that drop fixed-position stacking.
        boxShadow: "0 1px 0 rgba(0,0,0,0.08)",
      }}
    >
      {t("banner.message")}
    </div>
  );
}

export default MithaqBanner;
