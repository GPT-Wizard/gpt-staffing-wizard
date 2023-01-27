import { useState } from "react";
import Navbar from "./components/navbar";
import StaffingHelper from "./pages/staffingHelper";

const NavbarItems = {
  StaffingHelper: "Find perfect team",
};

function App() {
  // const [currentPage, setCurrentPage] = useState(NavbarItems.StaffingHelper);

  return (
    <div className="container mx-auto">
      {/* <Navbar
        currentPage={currentPage}
        changePage={setCurrentPage}
        navbarItems={NavbarItems}
      /> */}
      <StaffingHelper />
    </div>
  );
}

export default App;
