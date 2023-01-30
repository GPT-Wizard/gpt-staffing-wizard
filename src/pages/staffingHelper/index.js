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

function StaffingHelper() {
  const [conversations, setConversations] = useState([
    {
      sender: "AI",
      text: "Hi Staffing Manager! Shall we start building staffing plans?",
    },
  ]);
  const [showInput, setShowInput] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const conversationRef = useRef();
  const [projectDescription, setProjectDescription] = useState("");

  const generate = async (aiMessage, userMessage, conversationStep) => {
    const response = await fetchResponse(conversationStep, conversations);

    setConversations([
      ...conversations,
      { sender: "User", text: userMessage },
      {
        sender: "AI",
        text: aiMessage,
      },
      {
        sender: "AI",
        text: response.replaceAll("\n", "<br />"),
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

    setTimeout(() => {
      setConversations([
        ...conversations,
        { sender: "User", text: userMessage },
        {
          sender: "AI",
          text: aiMessage,
        },
      ]);
      setShowInput(true);
    }, 500);

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
    <div className="w-full h-full flex justify-center px-2 items-end pb-10 mt-10">
      <div className="bg-white-transparent h-[80vh] w-full max-w-[750px] rounded-lg p-10 flex flex-col justify-between">
        <div className="h-[60vh] overflow-y-auto" ref={conversationRef}>
          {conversations.map((message) => {
            if (message.sender === "AI")
              return <AiMessage text={message.text} />;
            else return <UserMessage text={message.text} />;
          })}
        </div>

        {showInput && !isLoading && (
          <UserInput
            addConversation={addConversation}
            projectDescription={projectDescription}
            setProjectDescription={setProjectDescription}
            restartConversation={restartConversation}
          />
        )}
      </div>
    </div>
  );
}

export default StaffingHelper;
