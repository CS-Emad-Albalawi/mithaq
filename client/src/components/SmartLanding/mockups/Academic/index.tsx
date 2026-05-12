// © 2026 Mithaq Technology. All Rights Reserved.
import { FacultyDashboard } from "./FacultyDashboard";
import { IRBFlow } from "./IRBFlow";
import { StudentDSAR } from "./StudentDSAR";
import { Catalog } from "./Catalog";

export function AcademicMockups() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <FacultyDashboard />
      <IRBFlow />
      <StudentDSAR />
      <Catalog />
    </div>
  );
}

export default AcademicMockups;
