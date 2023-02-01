import React from "react";
import GptLogo from "../../assets/images/gpt-wizard.png";
import Pdf from "../../pages/pdf";

function Navbar(props) {
  return (
    <>
      <div className="flex justify-between py-6 pt-7 font-inter items-center">
        <div className="flex items-center">
          <img
            src={GptLogo}
            className="h-16 border-r-mist-gray border-r-[1.5px] mr-3 pr-1"
            alt="GPT Reviewer Logo"
          />
          <div>
            <p className="font-bitter text-xl">Staffing</p>
            <p className="font-bitter text-xl">Planner</p>
          </div>
        </div>
        <Pdf {...props} />
      </div>
    </>
  );
}

export default Navbar;
