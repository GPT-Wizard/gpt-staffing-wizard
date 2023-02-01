import { useState } from "react";
import Navbar from "./components/navbar";
import StaffingHelper from "./pages/staffingHelper";

function App() {
  const [staffingNotes, setStaffingNotes] = useState();
  const [idealTeam, setIdealTeam] = useState();
  const [roleImportance, setRoleImportance] = useState();
  const [roleAssessment, setRoleAssessment] = useState();

  return (
    <div className="container mx-auto">
      <Navbar
        staffingNotes={staffingNotes}
        idealTeam={idealTeam}
        roleImportance={roleImportance}
        roleAssessment={roleAssessment}
      />
      <StaffingHelper
        setStaffingNotes={setStaffingNotes}
        setIdealTeam={setIdealTeam}
        setRoleImportance={setRoleImportance}
        setRoleAssessment={setRoleAssessment}
      />
    </div>
  );
}

export default App;
