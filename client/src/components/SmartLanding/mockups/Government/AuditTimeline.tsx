// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * GovernmentAuditTimeline mockup — vertical timeline of 6 fake audit
 * events. Each row shows a control reference + sector-specific date.
 */
import { Clock } from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

interface Event {
  key: string;
  date: string;
  framework: string;
  ctrl: string;
}

const EVENTS: readonly Event[] = [
  { key: "smartLanding.mockups.government.timeline_event_1", date: "2026-04-26", framework: "NDMO",     ctrl: "DG.1.1" },
  { key: "smartLanding.mockups.government.timeline_event_2", date: "2026-04-22", framework: "PDPL",     ctrl: "Art.12" },
  { key: "smartLanding.mockups.government.timeline_event_3", date: "2026-04-18", framework: "NDMO",     ctrl: "DG.3.2" },
  { key: "smartLanding.mockups.government.timeline_event_4", date: "2026-04-15", framework: "NCA ECC",  ctrl: "2-1-1"  },
  { key: "smartLanding.mockups.government.timeline_event_5", date: "2026-04-08", framework: "NDMO",     ctrl: "Audit"  },
  { key: "smartLanding.mockups.government.timeline_event_6", date: "2026-04-01", framework: "NCA ECC",  ctrl: "Q1"     },
] as const;

export function AuditTimeline() {
  const { t, isAr } = useTranslation();

  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_government">
      <div dir={isAr ? "rtl" : "ltr"}>
        <div className="mb-3">
          <h4 className="text-base font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[var(--navy-primary)]" />
            {t("smartLanding.mockups.government.timeline_title")}
          </h4>
          <p className="text-xs text-[var(--text-muted)]" dir="ltr">
            {t("smartLanding.mockups.government.timeline_subtitle")}
          </p>
        </div>

        <ol className="relative space-y-3">
          {/* Vertical track — placed via padding-start so RTL flips automatically */}
          {EVENTS.map((e, i) => (
            <li key={e.key} className="flex gap-3 items-start">
              <div className="flex flex-col items-center gap-1 pt-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--navy-primary)] shrink-0" />
                {i < EVENTS.length - 1 && (
                  <span className="w-px flex-1 min-h-6 bg-[var(--border-color)]" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-mono text-[var(--text-muted)]" dir="ltr">
                    {e.date}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-px rounded bg-[var(--navy-glow)] text-[var(--navy-primary)]" dir="ltr">
                    {e.framework} · {e.ctrl}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {t(e.key)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </MockupFrame>
  );
}

export default AuditTimeline;
