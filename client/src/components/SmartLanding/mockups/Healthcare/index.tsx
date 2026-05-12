// © 2026 Mithaq Technology. All Rights Reserved.
import { DPODashboard } from "./DPODashboard";
import { PatientDSAR } from "./PatientDSAR";
import { AmeenChat } from "./AmeenChat";
import { Fingerprint } from "./Fingerprint";

export function HealthcareMockups() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <DPODashboard />
      <PatientDSAR />
      <AmeenChat />
      <Fingerprint />
    </div>
  );
}

export default HealthcareMockups;
