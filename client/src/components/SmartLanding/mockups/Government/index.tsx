// © 2026 Mithaq Technology. All Rights Reserved.
/** Government sector — 4-mockup gallery. */
import { Dashboard } from "./Dashboard";
import { Heatmap } from "./Heatmap";
import { PolicyGenerator } from "./PolicyGenerator";
import { AuditTimeline } from "./AuditTimeline";

export function GovernmentMockups() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Dashboard />
      <Heatmap />
      <PolicyGenerator />
      <AuditTimeline />
    </div>
  );
}

export default GovernmentMockups;
