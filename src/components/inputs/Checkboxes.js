import React from "react";
import Send from "../../assets/images/send.svg";
import CheckboxTrue from "../../assets/images/checkbox-true.svg";
import CheckboxFalse from "../../assets/images/checkbox-false.svg";

function Checkboxes({ checkboxes, onCheckboxesChange, onSubmit }) {
  const toggleCheckbox = (index) => {
    const checkboxesCopy = [...checkboxes];
    checkboxesCopy[index] = {
      ...checkboxesCopy[index],
      state: !checkboxesCopy[index].state,
    };
    onCheckboxesChange(checkboxesCopy);
  };

  return (
    <div className="bg-primary p-4 rounded-lg flex gap-2">
      <div className="flex-1 flex flex-col gap-2 px-3">
        {checkboxes.map((checkbox, index) => (
          <button
            className="flex items-center"
            onClick={() => toggleCheckbox(index)}
          >
            <img
              src={checkbox.state ? CheckboxTrue : CheckboxFalse}
              className="w-4 mr-2"
              alt=""
            />
            <p>{checkbox.text}</p>
          </button>
        ))}
      </div>
      <button onClick={onSubmit}>
        <img src={Send} className="w-6" alt="" />
      </button>
    </div>
  );
}

export default Checkboxes;
