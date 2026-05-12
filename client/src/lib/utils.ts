// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
// Unauthorized use prohibited. | mithaq.sa | mithaq.support@gmail.com
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
