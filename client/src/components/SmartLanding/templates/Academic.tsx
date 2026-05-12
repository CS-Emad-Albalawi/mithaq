// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Academic template — IRB-engine-headlined sector. The killer
 * preview is a 4-step IRB pipeline.
 */
import {
  FileSearch,
  Scale,
  Database,
  CheckCircle2,
} from "lucide-react";
import { TemplateShell } from "../TemplateShell";
import { AcademicMockups } from "../mockups/Academic";

function AcademicKillerPreview() {
  const steps = [
    { Icon: FileSearch,   label: "Submit",  pct: 100 },
    { Icon: Scale,        label: "Ethics",  pct: 100 },
    { Icon: Database,     label: "Data",    pct: 60  },
    { Icon: CheckCircle2, label: "Decision", pct: 0  },
  ];
  return (
    <div className="w-full max-w-md flex flex-col gap-3" aria-hidden="true">
      {steps.map((s) => (
        <div key={s.label} className="flex items-center gap-3">
          <div
            className={`
              w-8 h-8 rounded-md flex items-center justify-center shrink-0
              ${s.pct === 100
                ? "bg-[var(--navy-primary)] text-white"
                : s.pct > 0
                  ? "bg-[var(--navy-glow)] text-[var(--navy-primary)] border border-[var(--navy-primary)]"
                  : "bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-color)]"}
            `}
          >
            <s.Icon className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-mono text-[var(--text-muted)] mb-1" dir="ltr">
              {s.label}
            </div>
            <div className="h-1.5 rounded-full bg-[var(--bg-surface-2)] overflow-hidden">
              <div
                className="h-full bg-[var(--navy-primary)] transition-all"
                style={{ width: `${s.pct}%` }}
              />
            </div>
          </div>
          <span className="text-[10px] font-mono text-[var(--text-muted)] w-8 text-end" dir="ltr">
            {s.pct}%
          </span>
        </div>
      ))}
    </div>
  );
}

export function Academic() {
  return (
    <TemplateShell
      sector="academic"
      killerPreview={<AcademicKillerPreview />}
      mockupGallery={<AcademicMockups />}
    />
  );
}

export default Academic;
