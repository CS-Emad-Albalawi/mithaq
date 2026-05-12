// usePageTitle — Sets document.title with bilingual support
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Sets the document title with Mithaq branding.
 * @param titleAr Arabic page title
 * @param titleEn English page title
 */
export function usePageTitle(titleAr: string, titleEn: string) {
  const { isAr } = useLanguage();

  useEffect(() => {
    const base = isAr ? "ميثاق" : "Mithaq";
    const title = isAr ? titleAr : titleEn;
    document.title = title ? `${title} | ${base}` : base;

    return () => {
      document.title = isAr ? "ميثاق | Mithaq — منصة حوكمة البيانات السعودية" : "Mithaq — Saudi Data Governance Platform";
    };
  }, [isAr, titleAr, titleEn]);
}
