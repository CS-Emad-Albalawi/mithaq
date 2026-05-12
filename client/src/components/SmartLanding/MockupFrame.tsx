// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * MockupFrame — wraps a sector mockup in a faux-browser chrome with
 * the watermark required by the spec. All 16 mockups use this so the
 * watermark + URL bar style stays consistent across sectors.
 */
import type { ReactNode } from "react";
import { useTranslation } from "@/i18n";

export interface MockupFrameProps {
  /** i18n key (under `smartLanding.mockup.browser_url_*`) for the URL
   *  text shown in the fake browser chrome. */
  urlKey: string;
  /** The mockup body — fake dashboard, fake form, fake chat, etc. */
  children: ReactNode;
}

export function MockupFrame({ urlKey, children }: MockupFrameProps) {
  const { t } = useTranslation();
  return (
    <div
      className="
        relative mockup-frame
        rounded-xl border border-[var(--navy-primary)]
        bg-[var(--bg-surface)]
        shadow-[0_8px_24px_-8px_var(--navy-glow)]
        overflow-hidden
        transition-shadow hover:shadow-[0_12px_32px_-6px_var(--navy-glow)]
      "
    >
      {/* Fake browser chrome */}
      <div
        className="flex items-center gap-2 px-3 py-2 border-b border-[var(--border-color)] bg-[var(--bg-surface-2)]"
        aria-hidden="true"
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div
          className="flex-1 mx-2 px-3 py-1 rounded-md bg-[var(--bg-surface)] text-xs text-[var(--text-muted)] font-mono"
          dir="ltr"
        >
          {t(urlKey)}
        </div>
      </div>

      {/* Mockup body. Add bottom padding so the watermark pill never
          collides with the inner content; the watermark itself sits
          inside a small bordered pill at the bottom-right corner so it
          reads as a label, not a stray overlay. */}
      <div className="relative p-4 sm:p-5 pb-9 sm:pb-10">
        {children}
        {/* Watermark pill — bottom-right per spec, generous offset
            from the frame edge so it doesn't kiss the border. */}
        <span
          className="
            pointer-events-none absolute bottom-3 right-4
            px-2 py-0.5 rounded-md
            border border-[var(--border-color)] bg-[var(--bg-surface-2)]
            text-[10px] font-mono uppercase tracking-wider
            text-[var(--text-muted)] opacity-80 select-none
          "
          dir="ltr"
        >
          {t("smartLanding.mockup.watermark")}
        </span>
      </div>
    </div>
  );
}

export default MockupFrame;
