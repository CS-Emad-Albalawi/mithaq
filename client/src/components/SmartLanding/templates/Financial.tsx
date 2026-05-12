// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Financial template — DSAR-engine-headlined sector. The killer
 * preview shows the 4-step DSAR pipeline as a horizontal stepper.
 */
import {
  FileText,
  ShieldCheck,
  PackageCheck,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "@/i18n";
import { TemplateShell } from "../TemplateShell";
import { FinancialMockups } from "../mockups/Financial";

function FinancialKillerPreview() {
  const { isAr } = useTranslation();
  const Chevron = isAr ? ChevronLeft : ChevronRight;
  const steps = [
    { Icon: FileText,    label: "Form" },
    { Icon: ShieldCheck, label: "KYC" },
    { Icon: PackageCheck, label: "Compile" },
    { Icon: Send,        label: "Deliver" },
  ];
  return (
    <div className="w-full max-w-md" aria-hidden="true">
      <div className="flex items-center justify-between gap-1">
        {steps.map((s, i) => (
          <div key={s.label} className="contents">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="
                  w-10 h-10 rounded-full
                  bg-[var(--navy-glow)] text-[var(--navy-primary)]
                  flex items-center justify-center
                  border-2 border-[var(--navy-primary)]
                "
              >
                <s.Icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]" dir="ltr">
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <Chevron className="w-4 h-4 text-[var(--navy-mid)] shrink-0" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 px-3 py-2 rounded-md bg-[var(--card-bg)] border border-[var(--border-color)] text-center">
        <div className="text-xs text-[var(--text-muted)]">SLA</div>
        <div className="text-lg font-bold text-[var(--navy-primary)]">≤ 30 days</div>
      </div>
    </div>
  );
}

export function Financial() {
  return (
    <TemplateShell
      sector="financial"
      killerPreview={<FinancialKillerPreview />}
      mockupGallery={<FinancialMockups />}
    />
  );
}

export default Financial;
