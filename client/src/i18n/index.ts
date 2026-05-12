// i18n — Translation hook that works with existing LanguageContext
import { useLanguage } from "../contexts/LanguageContext";
import { ar, type TranslationKeys } from "./ar";
import { en } from "./en";

const translations: Record<string, TranslationKeys> = { ar, en };

type NestedKeyOf<T> = T extends object
  ? { [K in keyof T]: K extends string ? (T[K] extends object ? `${K}.${NestedKeyOf<T[K]>}` : K) : never }[keyof T]
  : never;

type TranslationKey = NestedKeyOf<TranslationKeys>;

function getNestedValue(obj: any, path: string): string {
  return path.split(".").reduce((acc, key) => acc?.[key], obj) ?? path;
}

export function useTranslation() {
  const { lang, toggleLang, isAr } = useLanguage();
  const t = (key: string): string => getNestedValue(translations[lang], key);
  const dir = isAr ? "rtl" : "ltr";
  return { t, lang, dir, toggleLang, isAr };
}

export { ar, en };
export type { TranslationKeys };
