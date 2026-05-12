// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
// Unauthorized use prohibited. | mithaq.sa | emad.cs.albalawi@gmail.com
/**
 * ErrorBoundary — Mithaq Platform
 * Catches React rendering errors and shows a user-friendly Arabic error page
 */
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: string | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to console in development
    if (import.meta.env.DEV) {
      console.error("[ErrorBoundary]", error, errorInfo);
    }
    this.setState({ errorInfo: errorInfo.componentStack || null });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className="flex items-center justify-center min-h-screen p-8"
          style={{ background: "#0A1628", color: "#E8EDF5" }}
          dir="rtl"
          lang="ar"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex flex-col items-center w-full max-w-lg text-center">
            {/* Icon */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)" }}
            >
              <AlertTriangle className="w-10 h-10" style={{ color: "#ef4444" }} />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold mb-3" style={{ color: "#F1F5F9" }}>
              حدث خطأ غير متوقع
            </h1>
            <p className="text-sm mb-8 leading-relaxed" style={{ color: "#64748B" }}>
              نعتذر عن هذا الخطأ. يمكنك إعادة تحميل الصفحة أو العودة للصفحة الرئيسية.
              إذا استمر الخطأ، يرجى التواصل مع الدعم الفني.
            </p>

            {/* Error details (dev only) */}
            {import.meta.env.DEV && this.state.error && (
              <div
                className="p-4 w-full rounded-lg overflow-auto mb-6 text-left"
                style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}
              >
                <p className="text-xs font-mono mb-2" style={{ color: "#ef4444" }}>
                  {this.state.error.message}
                </p>
                {this.state.errorInfo && (
                  <pre className="text-xs font-mono whitespace-pre-wrap" style={{ color: "#64748B" }}>
                    {this.state.errorInfo.slice(0, 500)}
                  </pre>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{ background: "#2E5A9E", color: "#0F1B35" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "#6FCF97"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#2E5A9E"; }}
                aria-label="إعادة تحميل الصفحة"
              >
                <RotateCcw className="w-4 h-4" />
                إعادة التحميل
              </button>
              <a href="/">
                <button
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all border"
                  style={{ borderColor: "rgba(201,168,76,0.3)", color: "#2E5A9E", background: "rgba(201,168,76,0.05)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,168,76,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(201,168,76,0.05)"; }}
                  aria-label="العودة للصفحة الرئيسية"
                >
                  <Home className="w-4 h-4" />
                  الصفحة الرئيسية
                </button>
              </a>
            </div>

            {/* Contact */}
            <p className="text-xs mt-8" style={{ color: "#334155" }}>
              للدعم الفني:{" "}
              <a
                href="mailto:emad.cs.albalawi@gmail.com"
                className="transition-colors"
                style={{ color: "#2E5A9E" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#6FCF97"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#2E5A9E"; }}
              >
                emad.cs.albalawi@gmail.com
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
