// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * analytics.ts — consent-gated analytics helper.
 *
 * Every UI tracking call should go through `trackIfConsented` so that
 * if the visitor declined the privacy banner, no analytics event is
 * recorded. The check is sessionStorage-based to match the privacy
 * banner's own scope: consent re-asked each session, never persisted.
 *
 * The actual transport here is a no-op POST to /api/analytics/event.
 * On the brochure platform we don't yet ship a real analytics endpoint;
 * the helper exists so future wiring (Plausible, PostHog, an in-house
 * collector) can be plugged in without a callsite migration.
 */

const CONSENT_KEY = "mithaq-consent";

export type ConsentState = "granted" | "denied" | null;

/** Read the visitor's current consent state from sessionStorage. */
export function getConsent(): ConsentState {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(CONSENT_KEY);
  if (raw === "granted" || raw === "denied") return raw;
  return null;
}

export function setConsent(state: "granted" | "denied"): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(CONSENT_KEY, state);
}

/**
 * Record a UI event if (and only if) the visitor has granted consent.
 * Silent no-op otherwise — never throws, never logs to console at
 * info level (debug logging is fine).
 */
export function trackIfConsented(
  eventName: string,
  payload: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;
  if (getConsent() !== "granted") return;

  // Best-effort fire-and-forget. The brochure platform does not ship
  // an analytics endpoint yet, so we just push to a global queue
  // any future collector can drain. The window-level reference is
  // intentional: it lets us inspect events from the dev console
  // without round-tripping a request.
  type AnalyticsWindow = Window & {
    __mithaqAnalytics?: Array<{
      ts: string;
      event: string;
      payload: Record<string, unknown>;
    }>;
  };
  const w = window as AnalyticsWindow;
  if (!w.__mithaqAnalytics) w.__mithaqAnalytics = [];
  w.__mithaqAnalytics.push({
    ts: new Date().toISOString(),
    event: eventName,
    payload,
  });
}
