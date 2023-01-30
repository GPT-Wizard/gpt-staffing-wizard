import React from "react";

function DoubleButtons({ text1, onSubmit1, text2, onSubmit2 }) {
  return (
    <div className="flex gap-2 w-full">
      <button className="bg-primary border border-secondary hover:bg-black-transparent p-4 rounded-lg flex-1" onClick={onSubmit1}>
        {text1}
      </button>
      <button className="bg-secondary hover:bg-secondary-transparent p-4 rounded-lg flex-1" onClick={onSubmit2}>
        {text2}
      </button>
    </div>
  );
}

export default DoubleButtons;
