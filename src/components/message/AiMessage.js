import React from "react";
import Robot from "../../assets/images/robot.svg";
import DataEditingGrid from "../table/table";
import MarkdownPreview from "@uiw/react-markdown-preview";

const AiMessage = ({ text, step, dispatch }) => (
  <div className="flex max-w-full w-fit mb-4 ml-4 items-start">
    <img src={Robot} className="w-16" alt="" />
    <div className="bg-primary p-4 h-fit rounded-lg rounded-tl-none ml-4 min-h-[4rem] flex items-center justify-start flex-1 overflow-x-auto">
      {step === "ideal-team-end" ? (
        <div className="w-[36rem]">
          <DataEditingGrid dispatch={dispatch} data={text} />
        </div>
      ) : (
        <MarkdownPreview source={text} style={{ background: "transparent" }} />
      )}
    </div>
  </div>
);

export default AiMessage;
