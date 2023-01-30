import React from "react";

function SingleButton({ text, onSubmit }) {
  return (
    <button className="w-1/2 self-center bg-secondary hover:bg-secondary-transparent p-4 rounded-lg" onClick={onSubmit}>
      {text}
    </button>
  );
}

export default SingleButton;
