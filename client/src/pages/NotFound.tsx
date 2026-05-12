// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
// NotFound — 404 Page (bilingual, consistent with design system)
import { Link } from "wouter";
import { useTranslation } from "@/i18n";

const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const ArrowIcon = ({ flip }: { flip?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: flip ? "scaleX(-1)" : "none" }}>
    <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
  </svg>
);

export default function NotFound() {
  const { isAr, dir } = useTranslation();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-[var(--text-primary)]" dir={dir} lang={isAr ? "ar" : "en"}>
      {/* Background decoration */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--navy-primary), transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* 404 number */}
        <div className="text-8xl font-bold text-[var(--text-primary)] opacity-10 tabular-nums mb-4 select-none">
          404
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold mb-2">
          {isAr ? "الصفحة غير موجودة" : "Page Not Found"}
        </h1>
        <p className="text-[var(--text-secondary)] mb-8 max-w-sm leading-relaxed">
          {isAr
            ? "عذرًا، الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها أو حذفها."
            : "Sorry, the page you're looking for doesn't exist or may have been moved or deleted."}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[var(--btn-primary-bg)] text-white hover:bg-[var(--navy-dark)] transition-colors"
          >
            <HomeIcon />
            {isAr ? "الصفحة الرئيسية" : "Home Page"}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-[var(--border-color)] text-[var(--navy-light)] hover:bg-[var(--bg-surface-2)] transition-colors"
          >
            <ArrowIcon flip={isAr} />
            {isAr ? "الرجوع للخلف" : "Go Back"}
          </button>
        </div>

        {/* Footer hint */}
        <p className="text-xs text-[var(--text-muted)] mt-12">
          ميثاق | Mithaq
        </p>
      </div>
    </div>
  );
}
