import React, { useEffect, useRef, useState } from "react";
import fetchResponse from "../../api/fetchResponse";
import UserMessage from "../../components/message/UserMessage";
import AiMessage from "../../components/message/AiMessage";
import UserInput from "../../components/inputs";
import {
  conversationSteps,
  nextConversationStep,
  restartConversationStep,
  skipConversationStep,
} from "../../components/conversationStep";

function StaffingHelper({ state, dispatch }) {
  const [conversations, setConversations] = useState([
    {
      sender: "AI",
      text: "Hi Staffing Manager! Shall we start building staffing plans?",
    },
  ]);

  const timelineSteps = [
    "Project Description",
    "Staffing Notes",
    "Ideal Team",
    "Role Importance",
    "Role Assessment",
  ];

  const [showInput, setShowInput] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [listIndex, setlistIndex] = useState(100);

  const setInputIndex = (index) => {
    setlistIndex(index);
  };

  const conversationRef = useRef();

  const generate = async (userMessage, aiMessage, conversationStep) => {
    const response = await fetchResponse(conversationStep, conversations);

    switch (conversationStep) {
      case "staffing-notes-end":
        dispatch({
          type: "SET_STAFFING_NOTES",
          payload: response,
        });
        break;
      case "role-importance-end":
        dispatch({
          type: "SET_ROLE_IMPORTANCE",
          payload: response,
        });
        break;
      case "role-assessment-end":
        dispatch({ type: "SET_ROLE_ASSESSMENT", payload: response });
        break;

      default:
        break;
    }

    setConversations([
      ...conversations,
      { sender: "User", text: userMessage },
      {
        sender: "AI",
        text: aiMessage,
      },
      {
        sender: "AI",
        text: response,
        conversationStep,
      },
      {
        sender: "AI",
        text: "Is this ok?",
      },
    ]);
    setShowInput(true);
    setIsLoading(false);
  };

  const addConversation = (userMessage, aiMessage) => {
    setConversations([...conversations, { sender: "User", text: userMessage }]);
    setShowInput(false);

    // setTimeout(() => {
    setConversations([
      ...conversations,
      { sender: "User", text: userMessage },
      {
        sender: "AI",
        text: aiMessage,
      },
    ]);
    setShowInput(true);
    // }, 500);

    const nextConversationStepIndex = userMessage.startsWith("Skip")
      ? skipConversationStep()
      : nextConversationStep();

    if (
      nextConversationStepIndex === 3 ||
      nextConversationStepIndex === 5 ||
      nextConversationStepIndex === 7 ||
      nextConversationStepIndex === 9
    ) {
      setIsLoading(true);
      generate(
        userMessage,
        aiMessage,
        conversationSteps[nextConversationStepIndex]
      );
    }
  };

  const restartConversation = () => {
    restartConversationStep();
    setConversations([
      {
        sender: "AI",
        text: "Hi Staffing Manager! Shall we start building staffing plans?",
      },
    ]);
    setIsLoading(false);
    setShowInput(true);
  };

  useEffect(() => {
    conversationRef.current.scrollTo(0, conversationRef.current.scrollHeight);
  }, [conversations]);

  return (
    <div className="flex">
      <div className="w-full h-full flex justify-center px-2 items-end pb-10 mt-10 gap-5">
        <div className="bg-white-transparent h-[80vh] w-full max-w-[750px] rounded-lg p-8 flex flex-col justify-between">
          <div className="h-[60vh] px-2 overflow-y-auto" ref={conversationRef}>
            {conversations.map((message, index) => {
              if (message.sender === "AI")
                return (
                  <div key={index}>
                    <AiMessage
                      text={message.text}
                      step={message.conversationStep}
                      dispatch={dispatch}
                    />
                  </div>
                );
              else
                return (
                  <div key={index}>
                    <UserMessage text={message.text} />
                  </div>
                );
            })}
          </div>

          {showInput && !isLoading && (
            <UserInput
              addConversation={addConversation}
              projectDescription={state.projectDescription}
              setProjectDescription={(newProjectDescription) =>
                dispatch({
                  type: "SET_PROJECT_DESCRIPTION",
                  payload: newProjectDescription,
                })
              }
              restartConversation={restartConversation}
              setInputIndex={setInputIndex}
            />
          )}
        </div>
      </div>
      <div className="w-[30%] h-full flex justify-center px-2 items-end pb-10 mt-10 gap-5 ">
        <div className="bg-white-transparent h-[40vh] w-full max-w-[750px] rounded-lg p-8 flex flex-wrap justify-between">
          {timelineSteps.map((item, index) => {
            if (listIndex !== index)
              return [
                <div className="flex w-[85%]" key={index}>
                  <div className=" w-[3vh] h-[3vh] rounded-[50%] shrink-0 bg-white flex justify-center items-center mr-4 text-black font-semibold ">
                    {index + 1}
                  </div>
                  <div className="h-[5vh] w-[80%] ">{item}</div>
                </div>,
              ];
            else
              return [
                <div className="flex w-[85%]" key={index}>
                  <div className=" w-[3vh] h-[3vh] rounded-[50%] shrink-0 bg-secondary flex justify-center items-center mr-4 text-white font-semibold ">
                    {index + 1}
                  </div>
                  <div className="h-[5vh] w-[80%] text-[#FF4057]">{item}</div>
                </div>,
              ];
          })}
        </div>
      </div>
    </div>
  );
}

export default StaffingHelper;
