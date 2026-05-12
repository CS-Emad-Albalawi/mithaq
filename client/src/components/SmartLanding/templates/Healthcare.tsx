// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Healthcare template — Ameen-headlined sector. The killer-feature
 * preview is a chat bubble teaser; the full conversation mockup
 * lives in the gallery.
 */
import { MessageCircle, AlertTriangle, ShieldCheck } from "lucide-react";
import { TemplateShell } from "../TemplateShell";
import { HealthcareMockups } from "../mockups/Healthcare";

function HealthcareKillerPreview() {
  return (
    <div className="w-full max-w-md flex flex-col gap-2" aria-hidden="true">
      <div className="self-start max-w-[80%] rounded-2xl rounded-bl-sm px-3 py-2 bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)]">
        رفعتُ لقطة شاشة لتقرير مريض، ماذا أفعل؟
      </div>
      <div className="self-end max-w-[85%] rounded-2xl rounded-br-sm px-3 py-2 bg-[var(--navy-primary)] text-white text-xs">
        <div className="flex items-start gap-1.5 mb-1">
          <AlertTriangle className="w-3.5 h-3.5 mt-px shrink-0" />
          <span className="font-semibold">PII detected</span>
        </div>
        <span>اكتشفتُ أرقام هوية وتاريخ ميلاد. هذه بيانات حسّاسة.</span>
      </div>
      <div className="self-end max-w-[85%] rounded-2xl rounded-br-sm px-3 py-2 bg-[var(--navy-primary)] text-white text-xs flex items-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
        <span>استخدم نظام HIS الرسمي بدلاً من الواتساب.</span>
      </div>
      <div className="self-start text-[10px] text-[var(--text-muted)] flex items-center gap-1 mt-1">
        <MessageCircle className="w-3 h-3" />
        Ameen
      </div>
    </div>
  );
}

export function Healthcare() {
  return (
    <TemplateShell
      sector="healthcare"
      killerPreview={<HealthcareKillerPreview />}
      mockupGallery={<HealthcareMockups />}
    />
  );
}

export default Healthcare;
