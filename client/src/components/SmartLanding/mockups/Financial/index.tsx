// © 2026 Mithaq Technology. All Rights Reserved.
import { CISODashboard } from "./CISODashboard";
import { CustomerDSAR } from "./CustomerDSAR";
import { IBANDetect } from "./IBANDetect";
import { ComplianceReport } from "./ComplianceReport";

export function FinancialMockups() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <CISODashboard />
      <CustomerDSAR />
      <IBANDetect />
      <ComplianceReport />
    </div>
  );
}

export default FinancialMockups;
