import React from "react";
import Typewriter from "typewriter-effect";
import Robot from "../../assets/images/robot.svg";

const AiMessage = ({ text }) => (
  <div className='flex max-w-[80%] mb-4 ml-4 items-start'>
    <img src={Robot} className='w-16' alt='' />
    <p className='bg-primary p-4 h-fit rounded-lg rounded-tl-none ml-4 min-h-[4rem] flex items-center justify-start'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(text).start();
        }}
        options={{
          skipAddStyles: true,
          delay: 20,
          cursor: "",
        }}
      />
    </p>
  </div>
);

export default AiMessage;
