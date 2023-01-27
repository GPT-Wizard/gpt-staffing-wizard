import React from "react";

function SingleButton({ text, onSubmit }) {
  return (
    <button className="bg-primary p-4 rounded-lg" onClick={onSubmit}>
      {text}
    </button>
  );
}

export default SingleButton;
