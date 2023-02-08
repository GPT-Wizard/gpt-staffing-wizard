import React from "react";
import Pdf from "../../pages/pdf";

function Navbar(props) {
  return (
    <>
      <div className="flex justify-between py-6 pt-7 font-inter items-center">
        <div className="flex items-center">
          <img
            src="https://images.ctfassets.net/a0typynlh1op/GslXGcvQSCrg29kFSYLpl/e1452c04a4127a473d1f515fe9b5c4d8/Group_134191.png"
            className="h-10"
            alt="Thoughtworks GPT Staffing Spell"
          />
        </div>
        <Pdf {...props} />
      </div>
    </>
  );
}

export default Navbar;
