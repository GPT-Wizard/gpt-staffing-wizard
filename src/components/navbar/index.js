import React from "react";
import Pdf from "../../pages/pdf";

function Navbar(props) {
  return (
    <>
      <div className="flex justify-between py-6 pt-7 font-inter items-center">
        <div className="flex items-center">
          <img
            src="https://images.ctfassets.net/a0typynlh1op/2k75gT4whjLt7desggIdUQ/baaf485404dc4b68820cabaf95c118b7/staffing-spell-low-resolution-logo-color-on-transparent-background__1_.png"
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
