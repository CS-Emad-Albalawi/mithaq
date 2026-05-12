// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * SectorContext — single source of truth for the visitor's chosen
 * sector across the app. Hoisted out of Home.tsx so the Navbar can
 * read the same state and surface a "Change sector" affordance.
 *
 * The choice persists in sessionStorage under the same
 * `mithaq-sector` key Home.tsx was using before. SSR-safe: the
 * initial read is wrapped in a try/catch and falls back to `null`
 * when sessionStorage is unavailable.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const SECTOR_KEY = "mithaq-sector";

interface SectorContextValue {
  /** Currently-selected sector, or null while the picker is showing. */
  sector: string | null;
  /** Persist and broadcast a new pick. */
  setSector: (value: string) => void;
  /** Clear the choice and re-show the picker. */
  clearSector: () => void;
}

const SectorContext = createContext<SectorContextValue | null>(null);

function readFromStorage(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return sessionStorage.getItem(SECTOR_KEY);
  } catch {
    return null;
  }
}

export function SectorProvider({ children }: { children: ReactNode }) {
  const [sector, setSectorState] = useState<string | null>(readFromStorage);

  // Re-sync on mount in case sessionStorage was set in another tab
  // between SSR (always null) and hydration.
  useEffect(() => {
    const fromStorage = readFromStorage();
    if (fromStorage !== sector) setSectorState(fromStorage);
    // Intentionally one-shot — subsequent updates flow through
    // setSector / clearSector below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setSector = useCallback((value: string) => {
    try {
      sessionStorage.setItem(SECTOR_KEY, value);
    } catch {
      /* sessionStorage unavailable — proceed in-memory only */
    }
    setSectorState(value);
  }, []);

  const clearSector = useCallback(() => {
    try {
      sessionStorage.removeItem(SECTOR_KEY);
    } catch {
      /* noop */
    }
    setSectorState(null);
  }, []);

  return (
    <SectorContext.Provider value={{ sector, setSector, clearSector }}>
      {children}
    </SectorContext.Provider>
  );
}

export function useSector(): SectorContextValue {
  const ctx = useContext(SectorContext);
  if (!ctx) {
    throw new Error("useSector must be used inside <SectorProvider>");
  }
  return ctx;
}
