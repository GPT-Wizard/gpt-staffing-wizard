import React from "react";
import Robot from "../../assets/images/robot.svg";

const AiMessage = ({ text }) => (
  <div className="flex max-w-[80%] mb-4 items-start">
    <img src={Robot} className="w-16" alt="" />
    <p
      className="bg-primary p-4 h-fit rounded-lg rounded-tl-none ml-4 min-h-[4rem] flex items-center justify-start"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </div>
);

export default AiMessage;
