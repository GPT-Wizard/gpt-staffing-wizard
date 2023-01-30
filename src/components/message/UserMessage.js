import React from "react";
import Person from "../../assets/images/person.svg";

const UserMessage = ({ text }) => (
  <div className="flex max-w-[80%] ml-auto mb-4 mr-4 justify-end items-start">
    <p
      className="bg-primary p-4 h-fit rounded-lg rounded-tr-none mr-4 min-h-[4rem] flex items-center justify-start"
      dangerouslySetInnerHTML={{ __html: text }}
    />
    <img src={Person} className="w-16" alt="" />
  </div>
);

export default UserMessage;
