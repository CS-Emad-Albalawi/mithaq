// Navbar — Transparent on hero, solid on scroll. Arabic-first.
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { MithaqLogo } from "./MithaqLogo";
import { useTranslation } from "@/i18n";
import { useTheme } from "@/contexts/ThemeContext";
// Button import dropped — the Login CTA was removed.

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export function Navbar() {
  const { t, lang, toggleLang, isAr } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location === "/";

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/faq", label: t("nav.faq") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav
      // Sticky (not fixed) so the MithaqBanner above us in the
      // normal flow stays visible at the very top of the page. With
      // fixed, the navbar overlaid on the banner and visitors saw
      // both at the same Y-position. Sticky keeps the navbar pinned
      // to the top ONLY after the banner scrolls out of view.
      //
      // The bottom border is rendered ALWAYS (regardless of scroll
      // or route) so the navbar reads as a distinct horizontal
      // strip in every state. Earlier the border only kicked in
      // after scroll, which let the floating "Back" pill blend
      // into the navbar when both rendered against the dark hero.
      className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 border-b border-[var(--border-color)] ${
        scrolled || !isHome ? "backdrop-blur-md" : "bg-transparent"
      }`}
      style={{ backgroundColor: scrolled || !isHome ? 'var(--navbar-bg)' : 'transparent' }}
      aria-label={isAr ? "التنقل الرئيسي" : "Primary navigation"}
    >
      {/* Navbar spans the FULL viewport width (no max-w cap) while
          page content below is constrained to max-w-7xl in each page.
          That gap is intentional: with the navbar capped, `justify-
          between`'s middle gap = (container_inner - sum_of_groups) ÷ 2
          stays small no matter how much side-padding we add. Letting
          the navbar take the whole viewport makes the central nav
          links truly float in the middle with hundreds of pixels of
          empty space between them and the side clusters on wide
          monitors. This is the same pattern Stripe / Vercel / Apple
          use — full-bleed navbar over a constrained content area. */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — inline textDecoration is belt-and-suspenders
              against the default <a> underline that browsers paint
              under any anchor's text children, in case Tailwind's
              `no-underline` utility hasn't been picked up by the
              compiler for this build. */}
          <Link
            href="/"
            className="flex items-center gap-2 no-underline"
            style={{ textDecoration: "none" }}
          >
            <MithaqLogo size="sm" showName />
          </Link>

          {/* Nav Links — hidden below lg (1024px) so the strip doesn't
              fight with the EN + theme + login buttons at intermediate
              widths. Below lg the hamburger takes over. */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--navy-light)] ${
                  location === link.href ? "text-[var(--navy-light)]" : "text-[var(--text-secondary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: hamburger + theme toggle + lang toggle + CTAs */}
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg border border-[var(--border-color)] hover:border-[var(--navy-light)] transition-colors text-[var(--text-primary)]"
              aria-label={mobileOpen
                ? (isAr ? "إغلاق القائمة" : "Close menu")
                : (isAr ? "فتح القائمة" : "Open menu")}
              aria-expanded={mobileOpen}
              aria-controls="primary-navigation"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[var(--border-color)] hover:border-[var(--navy-light)] transition-colors text-[var(--text-primary)]"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? (isAr ? "الوضع الفاتح" : "Light mode") : (isAr ? "الوضع الداكن" : "Dark mode")}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Language pill */}
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[var(--border-color)] hover:border-[var(--navy-light)] transition-colors text-[var(--text-primary)]"
              aria-label={isAr ? "Switch to English" : "التبديل للعربية"}
              title={isAr ? "Switch to English" : "التبديل للعربية"}
            >
              {isAr ? "EN" : "AR"}
            </button>

            {/* No login surface — brochure scope, every route is
                public. The user-pill and logout button that used to
                live here were removed when AuthProvider was cut from
                App.tsx in the static-only refactor. */}
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div
          id="primary-navigation"
          className="lg:hidden border-t border-[var(--border-color)] backdrop-blur-md"
          style={{ backgroundColor: 'var(--navbar-bg, var(--bg-surface))' }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-[var(--navy-light)] bg-[var(--navy-dark)]/20"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-2)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
