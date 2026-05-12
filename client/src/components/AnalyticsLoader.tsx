// AnalyticsLoader — Injects Umami analytics script at runtime using Vite env vars
import { useEffect } from "react";

export function AnalyticsLoader() {
  useEffect(() => {
    const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
    const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

    if (!endpoint || !websiteId) return;

    const script = document.createElement("script");
    script.defer = true;
    script.src = `${endpoint}/umami`;
    script.dataset.websiteId = websiteId;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
