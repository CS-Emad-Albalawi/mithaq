// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
// Unauthorized use prohibited. | mithaq.sa | mithaq.support@gmail.com
/**
 * LanguageContext.tsx — shared bilingual language state.
 * Persists to localStorage under `mithaq-lang` and applies the
 * matching `dir` / `lang` / font-family to <html>.
 */
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "ar" | "en";

interface LanguageContextValue {
  lang: Language;
  toggleLang: () => void;
  isAr: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "ar",
  toggleLang: () => {},
  isAr: true,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("mithaq-lang");
    return (saved === "en" ? "en" : "ar") as Language;
  });

  useEffect(() => {
    localStorage.setItem("mithaq-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    // Apply Arabic font when needed
    if (lang === "ar") {
      document.body.classList.add("font-arabic");
      document.body.classList.remove("font-latin");
    } else {
      document.body.classList.add("font-latin");
      document.body.classList.remove("font-arabic");
    }
  }, [lang]);

  const toggleLang = () => setLang(l => l === "ar" ? "en" : "ar");

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, isAr: lang === "ar" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
