// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * SectorTemplate — dispatcher that lazy-loads the right sector
 * template based on a string value persisted in sessionStorage. Any
 * unknown value falls back to Default so a stale storage key never
 * blanks the page.
 */
import { Suspense, lazy, type LazyExoticComponent, type ComponentType } from "react";

const lazyTemplates: Record<string, LazyExoticComponent<ComponentType>> = {
  government: lazy(() =>
    import("./templates/Government").then((m) => ({ default: m.Government })),
  ),
  healthcare: lazy(() =>
    import("./templates/Healthcare").then((m) => ({ default: m.Healthcare })),
  ),
  financial: lazy(() =>
    import("./templates/Financial").then((m) => ({ default: m.Financial })),
  ),
  academic: lazy(() =>
    import("./templates/Academic").then((m) => ({ default: m.Academic })),
  ),
  default: lazy(() =>
    import("./templates/Default").then((m) => ({ default: m.Default })),
  ),
};

function TemplateSkeleton() {
  return (
    <div
      className="relative z-10 min-h-[60vh] flex items-center justify-center px-4"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-[var(--navy-primary)] border-t-transparent animate-spin" />
        <span className="text-sm text-[var(--text-muted)]" dir="auto">
          ...
        </span>
      </div>
    </div>
  );
}

export function SectorTemplate({ sector }: { sector: string }) {
  const T = lazyTemplates[sector] ?? lazyTemplates.default;
  return (
    <Suspense fallback={<TemplateSkeleton />}>
      <T />
    </Suspense>
  );
}

export default SectorTemplate;
