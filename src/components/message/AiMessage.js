import React from "react";
import Typewriter from "typewriter-effect";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Robot from "../../assets/images/robot.svg";

const AiMessage = ({ text }) => (
  <div className="flex max-w-full w-fit mb-4 ml-4 items-start">
    <img src={Robot} className="w-16" alt="" />
    <div className="bg-primary p-4 h-fit rounded-lg rounded-tl-none ml-4 min-h-[4rem] flex items-center justify-start flex-1 overflow-x-auto">
      {/* <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(text).start();
        }}
        options={{
          skipAddStyles: true,
          delay: 10,
          cursor: "",
        }}
      /> */}
      <MarkdownPreview source={text} style={{ background: "transparent" }} />
    </div>
  </div>
);

export default AiMessage;
