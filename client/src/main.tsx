// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
// The brochure does not call any backend API. tRPC, react-query, and
// the auth-redirect plumbing the old SaaS shell carried were removed
// in the static-only cleanup pass — every interaction now happens
// client-side (Contact form composes mailto: / wa.me links locally).
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// ── Theme flash prevention: apply saved theme BEFORE React renders ──
// Convention: .dark class = dark mode, no class = light mode (matches
// shadcn/ui). Also handled inline in index.html for ultra-early paint.
const savedTheme = localStorage.getItem("mithaq-theme") || "dark";
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Skip-to-content link for WCAG 2.4.1 keyboard accessibility — placed
// outside React so it's available before the bundle hydrates.
const skipLink = document.createElement("a");
skipLink.href = "#main-content";
skipLink.className = "skip-to-content";
skipLink.textContent = "انتقل إلى المحتوى الرئيسي";
document.body.insertBefore(skipLink, document.body.firstChild);

createRoot(document.getElementById("root")!).render(<App />);
