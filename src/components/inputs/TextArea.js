import React from "react";
import Send from "../../assets/images/send.svg";

function TextArea({ placeholder, text, onTextChange, onSubmit }) {
  return (
    <div className="focus-within:outline focus-within:outline-secondary bg-primary p-4 rounded-lg flex gap-2">
      <textarea
        className="bg-transparent flex-1 resize-none h-32 placeholder:italic"
        placeholder={placeholder}
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
      ></textarea>
      <button onClick={onSubmit}>
        <img src={Send} className="w-6" alt="" />
      </button>
    </div>
  );
}

export default TextArea;
