import React from "react";
import TextArea from "../../components/inputs/TextArea";
import SingleButton from "../../components/inputs/SingleButton";
import { conversationSteps, getConversationStep } from "../conversationStep";
import DoubleButtons from "./DoubleButtons";

const UserInput = ({
  projectDescription,
  setProjectDescription,
  addConversation,
  restartConversation,
  setInputIndex,
}) => {
  const projectDescConvo = () => {
    addConversation(
      projectDescription,
      "Super! Shall we prepare staffing notes?"
    );
    setInputIndex(0);
  };
  const projectDescConvo1 = () => {
    addConversation(
      "Looks Good!",
      "Cool! Can we now put together a team that is suited to the requirements?"
    );
    setInputIndex(1);
  };

  const projectDescConvo2 = () => {
    addConversation(
      "Looks Awesome!",
      "Great! Shall we explore the importance of each role?"
    );
    setInputIndex(2);
  };

  const projectDescConvo3 = () => {
    addConversation(
      "Looks Super!",
      "Good! Can we find best way to asses TWers for each role?"
    );
    setInputIndex(3);
  };

  const projectDescConvo4 = () => {
    addConversation(
      "Looks Excellent!",
      "Fantastic! You have reached the end. Do you want create a new staffing plan?"
    );
    setInputIndex(4);
  };

  switch (getConversationStep()) {
    case conversationSteps[0]:
      return (
        <SingleButton
          text="Let's get started!"
          onSubmit={() =>
            addConversation(
              "Let's get started!",
              "Please provide me with the project description."
            )
          }
        />
      );
    case conversationSteps[1]:
      return (
        <TextArea
          placeholder="Enter the project description…"
          text={projectDescription}
          onTextChange={setProjectDescription}
          onSubmit={projectDescConvo}
        />
      );
    case conversationSteps[2]:
      return (
        <DoubleButtons
          text1="Skip staffing notes"
          onSubmit1={() =>
            addConversation(
              "Skip staffing notes",
              "Sure! Can we now put together a team that is suited to the requirements?"
            )
          }
          text2="Yeah, sure!"
          onSubmit2={() =>
            addConversation("Yeah, sure!", "Just a moment, preparing!")
          }
        />
      );
    case conversationSteps[3]:
      return <SingleButton text="Looks Good!" onSubmit={projectDescConvo1} />;
    case conversationSteps[4]:
      return (
        <DoubleButtons
          text1="Skip team"
          onSubmit1={() =>
            addConversation(
              "Skip team",
              "Okay! You have reached the end. Do you want create a new staffing plan?"
            )
          }
          text2="Yes, let's start!"
          onSubmit2={() =>
            addConversation("Yes, let's start!", "Just a moment, preparing!")
          }
        />
      );
    case conversationSteps[5]:
      return (
        <SingleButton text="Looks Awesome!" onSubmit={projectDescConvo2} />
      );
    case conversationSteps[6]:
      return (
        <DoubleButtons
          text1="Skip role importance"
          onSubmit1={() =>
            addConversation(
              "Skip role importance",
              "Ok, can we find best way to asses TWers for each role?"
            )
          }
          text2="Yes, let's do it!"
          onSubmit2={() =>
            addConversation("Yes, let's do it!", "Just a moment, preparing!")
          }
        />
      );
    case conversationSteps[7]:
      return <SingleButton text="Looks Super!" onSubmit={projectDescConvo3} />;
    case conversationSteps[8]:
      return (
        <DoubleButtons
          text1="Skip role assessment"
          onSubmit1={() => {
            addConversation(
              "Skip role assessment",
              "Okay! You have reached the end. Do you want create a new staffing plan?"
            );
          }}
          text2="Yes, let's begin!"
          onSubmit2={() =>
            addConversation("Yes, let's begin!", "Just a moment, preparing!")
          }
        />
      );
    case conversationSteps[9]:
      return (
        <SingleButton text="Looks Excellent!" onSubmit={projectDescConvo4} />
      );
    case conversationSteps[10]:
      return (
        <SingleButton
          text="Create new plan"
          onSubmit={() => restartConversation()}
        />
      );

    default:
      return "";
  }
};

export default UserInput;
