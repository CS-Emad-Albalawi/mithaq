// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
// Unauthorized use prohibited. | mithaq.sa | emad.cs.albalawi@gmail.com
import { lazy, Suspense, type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ParticleNetwork } from "./components/ParticleNetwork";
import { MithaqBanner } from "./components/MithaqBanner";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { SectorProvider } from "./contexts/SectorContext";
import { AnalyticsLoader } from "./components/AnalyticsLoader";

// ── Lazy-loaded pages (route-based code splitting) ──

// Public pages
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Portfolio scope — the platform showcases the Mithaq project under
// active development. No user accounts, no admin surface, no
// commercial transactions. Engagement flows through the Contact form
// (mailto: / wa.me — never relayed through our servers).
//
// Live routes: /, /about, /contact, /faq, /features/* (5 deep pages).
// The server-side routers still exist but no UI reaches them.

// Feature deep-pages — lazy-loaded so the Default homepage doesn't
// pull them on initial paint. Routes registered below.
const FeatureFingerprint = lazy(() => import("@/pages/features/Fingerprint"));
const FeaturePatterns = lazy(() => import("@/pages/features/Patterns"));
const FeatureTranslator = lazy(() => import("@/pages/features/Translator"));
const FeatureAmeen = lazy(() => import("@/pages/features/Ameen"));
const FeatureColorDashboard = lazy(() => import("@/pages/features/ColorDashboard"));

// ── No auth ──
// The brochure has no authenticated surface and no backend tRPC/REST
// calls. The previous AuthProvider hit `/api/spoke/me` on every page
// load — that endpoint no longer exists for the static deployment and
// the fetch added a 404 to every visit. Removed entirely.

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-[var(--navy-primary)] border-t-transparent rounded-full animate-spin" />
        <span className="text-sm text-[var(--text-secondary)]" dir="auto">جارٍ التحميل... | Loading...</span>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {/* ── Public pages ── */}
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />

        {/* Feature deep-pages — linked from Default template cards */}
        <Route path="/features/fingerprint" component={FeatureFingerprint} />
        <Route path="/features/patterns" component={FeaturePatterns} />
        <Route path="/features/translator" component={FeatureTranslator} />
        <Route path="/features/ameen" component={FeatureAmeen} />
        <Route path="/features/color-dashboard" component={FeatureColorDashboard} />

        {/* ── 404 ── */}
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      {/* Dark theme by default — enterprise BI standard */}
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>
          <SectorProvider>
            <TooltipProvider delayDuration={300}>
                <Toaster richColors position="top-center" />
                <AnalyticsLoader />
                <ParticleNetwork />
                {/* Skip link — satisfies WCAG 2.4.1 "Bypass Blocks".
                    Hidden until focused, then jumps past the sidebar/nav
                    into the page's <main id="main-content">. */}
                <a
                  href="#main-content"
                  className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:shadow-lg"
                >
                  Skip to main content
                </a>
                <div id="app-root" style={{ position: "relative", zIndex: 1 }}>
                  {/* Persistent disclosure banner — visible above every
                      route. Mounted above <Router/> so it never unmounts
                      during navigation. */}
                  <MithaqBanner />
                  <Router />
                </div>
            </TooltipProvider>
          </SectorProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
