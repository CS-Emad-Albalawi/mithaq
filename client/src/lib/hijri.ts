// © 2026 Mithaq Technology — UXA-003 Hijri date formatting.
// Minimal Umm al-Qura-approximating converter (sufficient for display;
// use @hebcal/hdate in production for full accuracy).

const MS_PER_DAY = 86_400_000;
const HIJRI_EPOCH_JD = 1948439.5;

function toJulianDay(d: Date): number {
  return d.getTime() / MS_PER_DAY + 2440587.5;
}

export interface HijriDate {
  year: number;
  month: number;
  day: number;
}

/** Approximate Gregorian → Hijri (civil / tabular). For production
 *  display, swap to `@hebcal/hdate` or the official Umm al-Qura tables. */
export function gregorianToHijri(d: Date): HijriDate {
  const jd = Math.floor(toJulianDay(d)) + 1;
  const daysSinceEpoch = jd - HIJRI_EPOCH_JD;
  const approxYear = Math.floor((30 * daysSinceEpoch + 10646) / 10631);
  const monthDay = daysSinceEpoch - ((10631 * approxYear - 10617) / 30);
  const month = Math.min(12, Math.ceil(monthDay / 29.5));
  const day = Math.max(1, Math.floor(monthDay - Math.ceil(29.5 * (month - 1))));
  return { year: approxYear, month, day };
}

const HIJRI_MONTH_NAMES_AR = [
  "محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة",
  "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة",
];

export function formatHijri(d: Date, locale: "ar" | "en" = "ar"): string {
  const h = gregorianToHijri(d);
  if (locale === "ar") return `${h.day} ${HIJRI_MONTH_NAMES_AR[h.month - 1]} ${h.year} هـ`;
  return `${h.day}/${h.month}/${h.year} AH`;
}

/** Arabic collator: respects Arabic alphabetical order + diacritic-insensitive. */
export function arabicCompare(a: string, b: string): number {
  return new Intl.Collator("ar-SA", { sensitivity: "base", ignorePunctuation: true }).compare(a, b);
}

/** Normalize Arabic input: alif variants → bare alif, ta marbuta → ha,
 *  alif maqsura → ya, remove diacritics. Keeps search + sort consistent. */
export function normalizeArabic(s: string): string {
  return s
    .normalize("NFKD")
    .replace(/[\u064B-\u065F\u0670]/g, "")     // tashkeel
    .replace(/[إأآا]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي");
}
