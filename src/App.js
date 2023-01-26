import { useState } from "react";
import Navbar from "./components/navbar";
import StaffingHelper from "./pages/staffingHelper";

const NavbarItems = {
  StaffingHelper: "Find perfect team",
};

function App() {
  const [currentPage, setCurrentPage] = useState(NavbarItems.StaffingHelper);

  return (
    <div className="bg-wave-blue container mx-auto">
      <Navbar
        currentPage={currentPage}
        changePage={setCurrentPage}
        navbarItems={NavbarItems}
      />
      {currentPage === NavbarItems.StaffingHelper && <StaffingHelper />}
      
    </div>
  );
}

export default App;
