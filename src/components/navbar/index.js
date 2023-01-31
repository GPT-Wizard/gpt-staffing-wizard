import React from "react";
import GptLogo from "../../assets/images/gpt-wizard.png";

function Navbar() {
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
        <button className="self-center bg-black-transparent hover:bg-secondary px-4 py-2 rounded-lg transition-all duration-300">
          Export to PDF
        </button>
      </div>
    </>
  );
}

export default Navbar;
