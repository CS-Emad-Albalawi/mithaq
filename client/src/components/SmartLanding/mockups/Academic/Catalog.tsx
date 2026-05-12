// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Academic Research Data Catalog mockup — 5-row table tying projects
 * to datasets, classification, and IRB status.
 */
import { Database } from "lucide-react";
import { useTranslation } from "@/i18n";
import { MockupFrame } from "../../MockupFrame";

interface Row {
  project: string;
  dataset: string;
  classification: "Restricted" | "Confidential" | "Internal";
  irb: "approved" | "pending";
}

const ROWS: readonly Row[] = [
  { project: "M-RES-2026-088", dataset: "Survey-PHC-A",      classification: "Confidential", irb: "approved" },
  { project: "M-RES-2026-101", dataset: "Genome-Pilot-3",     classification: "Restricted",   irb: "pending"  },
  { project: "M-RES-2026-115", dataset: "Education-Outcomes", classification: "Internal",     irb: "approved" },
  { project: "M-RES-2026-122", dataset: "Workforce-Analytics",classification: "Internal",     irb: "approved" },
  { project: "M-RES-2026-130", dataset: "Behavioural-Trial",  classification: "Restricted",   irb: "pending"  },
] as const;

const TINTS: Record<Row["classification"], string> = {
  Restricted:   "#FB7185",
  Confidential: "#FBBF24",
  Internal:     "var(--navy-accent)",
};

export function Catalog() {
  const { t, isAr } = useTranslation();
  return (
    <MockupFrame urlKey="smartLanding.mockup.browser_url_academic">
      <div dir={isAr ? "rtl" : "ltr"}>
        <div className="mb-3">
          <h4 className="text-base font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
            <Database className="w-4 h-4 text-[var(--navy-primary)]" />
            {t("smartLanding.mockups.academic.catalog_title")}
          </h4>
          <p className="text-xs text-[var(--text-muted)]" dir="ltr">
            {t("smartLanding.mockups.academic.catalog_subtitle")}
          </p>
        </div>

        <div className="rounded-md border border-[var(--border-color)] overflow-hidden">
          <table className="w-full text-[11px]" dir={isAr ? "rtl" : "ltr"}>
            <thead className="bg-[var(--bg-surface-2)] text-[var(--text-secondary)]">
              <tr>
                <th className="text-start font-medium p-2">
                  {t("smartLanding.mockups.academic.catalog_col_project")}
                </th>
                <th className="text-start font-medium p-2">
                  {t("smartLanding.mockups.academic.catalog_col_dataset")}
                </th>
                <th className="text-start font-medium p-2">
                  {t("smartLanding.mockups.academic.catalog_col_classification")}
                </th>
                <th className="text-start font-medium p-2">
                  {t("smartLanding.mockups.academic.catalog_col_irb")}
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr
                  key={r.project}
                  className="border-t border-[var(--border-color)] hover:bg-[var(--bg-surface-2)]"
                >
                  <td className="p-2 font-mono text-[var(--text-secondary)]" dir="ltr">{r.project}</td>
                  <td className="p-2 font-mono text-[var(--text-secondary)]" dir="ltr">{r.dataset}</td>
                  <td className="p-2">
                    <span
                      className="px-1.5 py-0.5 rounded text-[10px]"
                      style={{
                        background: `${TINTS[r.classification]}26`,
                        color: TINTS[r.classification],
                        border: `1px solid ${TINTS[r.classification]}66`,
                      }}
                    >
                      {r.classification}
                    </span>
                  </td>
                  <td className="p-2">
                    {r.irb === "approved" ? (
                      <span className="text-[var(--navy-accent)] font-medium">
                        {t("smartLanding.mockups.academic.catalog_status_approved")}
                      </span>
                    ) : (
                      <span className="text-[#FBBF24] font-medium">
                        {t("smartLanding.mockups.academic.catalog_status_pending")}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MockupFrame>
  );
}

export default Catalog;
