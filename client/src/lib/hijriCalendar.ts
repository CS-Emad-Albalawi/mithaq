// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
// Unauthorized use prohibited. | mithaq.sa | mithaq.support@gmail.com
/**
 * Hijri Calendar Utilities for Mithaq
 * Full support for Hijri/Gregorian conversion, Arabic numerals, and Saudi date formatting
 */

// Hijri month names in Arabic
export const HIJRI_MONTHS_AR = [
  "محرم", "صفر", "ربيع الأول", "ربيع الثاني",
  "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان",
  "رمضان", "شوال", "ذو القعدة", "ذو الحجة"
];

export const HIJRI_MONTHS_EN = [
  "Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani",
  "Jumada al-Ula", "Jumada al-Akhirah", "Rajab", "Sha'ban",
  "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"
];

export const ARABIC_NUMERALS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

/**
 * Convert Western numerals to Eastern Arabic numerals
 */
export function toArabicNumerals(num: number | string): string {
  return String(num).replace(/[0-9]/g, (d) => ARABIC_NUMERALS[parseInt(d)]);
}

/**
 * Convert Eastern Arabic numerals to Western numerals
 */
export function fromArabicNumerals(str: string): string {
  return str.replace(/[٠-٩]/g, (d) => String(ARABIC_NUMERALS.indexOf(d)));
}

/**
 * Simple Gregorian to Hijri conversion algorithm
 * Based on the Umm al-Qura calendar approximation
 */
export function gregorianToHijri(gYear: number, gMonth: number, gDay: number): {
  year: number;
  month: number;
  day: number;
} {
  // Julian Day Number
  const jd = Math.floor((1461 * (gYear + 4800 + Math.floor((gMonth - 14) / 12))) / 4) +
    Math.floor((367 * (gMonth - 2 - 12 * Math.floor((gMonth - 14) / 12))) / 12) -
    Math.floor((3 * Math.floor((gYear + 4900 + Math.floor((gMonth - 14) / 12)) / 100)) / 4) +
    gDay - 32075;

  // Convert JD to Hijri
  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const l2 = l - 10631 * n + 354;
  const j = Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) +
    Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238);
  const l3 = l2 - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
    Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  const month = Math.floor((24 * l3) / 709);
  const day = l3 - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;

  return { year, month, day };
}

/**
 * Format a Gregorian date as Hijri date string
 */
export function formatHijriDate(date: Date, options: {
  useArabicNumerals?: boolean;
  includeMonthName?: boolean;
  lang?: "ar" | "en";
} = {}): string {
  const { useArabicNumerals = true, includeMonthName = true, lang = "ar" } = options;
  const { year, month, day } = gregorianToHijri(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );

  const monthName = lang === "ar" ? HIJRI_MONTHS_AR[month - 1] : HIJRI_MONTHS_EN[month - 1];

  if (useArabicNumerals && lang === "ar") {
    const d = toArabicNumerals(day);
    const m = includeMonthName ? monthName : toArabicNumerals(month);
    const y = toArabicNumerals(year);
    return includeMonthName ? `${d} ${m} ${y} هـ` : `${d}/${m}/${y} هـ`;
  } else {
    const m = includeMonthName ? monthName : String(month).padStart(2, "0");
    return includeMonthName ? `${day} ${m} ${year} H` : `${day}/${month}/${year} H`;
  }
}

/**
 * Format date with both Gregorian and Hijri
 */
export function formatDualDate(date: Date, lang: "ar" | "en" = "ar"): string {
  const gregorian = date.toLocaleDateString(lang === "ar" ? "ar-SA" : "en-SA", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const hijri = formatHijriDate(date, { lang });
  return lang === "ar" ? `${gregorian} | ${hijri}` : `${gregorian} | ${hijri}`;
}

/**
 * Get current Hijri date
 */
export function getCurrentHijriDate(): { year: number; month: number; day: number; formatted: string } {
  const now = new Date();
  const hijri = gregorianToHijri(now.getFullYear(), now.getMonth() + 1, now.getDate());
  return {
    ...hijri,
    formatted: formatHijriDate(now)
  };
}

/**
 * Format SAR currency
 */
export function formatSAR(amount: number, useArabicNumerals = false): string {
  const formatted = new Intl.NumberFormat("ar-SA", {
    style: "currency",
    currency: "SAR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);
  return useArabicNumerals ? formatted : formatted.replace(/[٠-٩]/g, (d) => String(ARABIC_NUMERALS.indexOf(d)));
}

/**
 * Saudi timezone offset (UTC+3)
 */
export function toSaudiTime(date: Date): Date {
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  return new Date(utc + 3 * 3600000);
}

export function formatSaudiDateTime(date: Date, lang: "ar" | "en" = "ar"): string {
  const saudiDate = toSaudiTime(date);
  return saudiDate.toLocaleString(lang === "ar" ? "ar-SA" : "en-SA", {
    timeZone: "Asia/Riyadh",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
