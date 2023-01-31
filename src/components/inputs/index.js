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
}) => {
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
          onSubmit={() =>
            addConversation(
              projectDescription,
              "Super! Shall we prepare staffing notes?"
            )
          }
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
      return (
        <SingleButton
          text="Looks Good!"
          onSubmit={() =>
            addConversation(
              "Looks Good!",
              "Cool! Can we now put together a team that is suited to the requirements?"
            )
          }
        />
      );
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
        <SingleButton
          text="Looks Awesome!"
          onSubmit={() =>
            addConversation(
              "Looks Awesome!",
              "Great! Shall we explore the importance of each role?"
            )
          }
        />
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
      return (
        <SingleButton
          text="Looks Super!"
          onSubmit={() =>
            addConversation(
              "Looks Super!",
              "Good! Can we find best way to asses TWers for each role?"
            )
          }
        />
      );
    case conversationSteps[8]:
      return (
        <DoubleButtons
          text1="Skip role assessment"
          onSubmit1={() =>
            addConversation(
              "Skip role assessment",
              "Okay! You have reached the end. Do you want create a new staffing plan?"
            )
          }
          text2="Yes, let's begin!"
          onSubmit2={() =>
            addConversation("Yes, let's begin!", "Just a moment, preparing!")
          }
        />
      );
    case conversationSteps[9]:
      return (
        <SingleButton
          text="Looks Excellent!"
          onSubmit={() =>
            addConversation(
              "Looks Excellent!",
              "Fantastic! You have reached the end. Do you want create a new staffing plan?"
            )
          }
        />
      );
    case conversationSteps[10]:
      return (
        <DoubleButtons
          text1="Create new plan"
          onSubmit1={() => restartConversation()}
          text2="Export plan to PDF"
          onSubmit2={() => restartConversation()}
        />
      );

    default:
      return "";
  }

  // if (conversationStep === "welcome") {
  //   return (
  //     <SingleButton
  //       text="Let's begin!"
  //       onSubmit={() =>
  //         nextStep(
  //           "Let's begin!",
  //           "Please provide me with the project description."
  //         )
  //       }
  //     />
  //   );
  // } else if (conversationStep === "project-description") {
  //   return (
  //     <TextArea
  //       placeholder="Enter the project description…"
  //       text={projectDescription}
  //       onTextChange={setProjectDescription}
  //       onSubmit={() =>
  //         nextStep(projectDescription, "What do you want me to help you with?")
  //       }
  //     />
  //   );
  // } else if (conversationStep === "services-required") {
  //   return (
  //     <Checkboxes
  //       checkboxes={services}
  //       onCheckboxesChange={setServices}
  //       onSubmit={() => {
  //         nextStep(getServicesMessage());
  //       }}
  //     />
  //   );
  // } else if (conversationStep === "staffing-notes") {
  //   return (
  //     <SingleButton
  //       text="Yes, Let's proceed!"
  //       // onSubmit={() => nextStep("Yes, Let's proceed!")}
  //       onSubmit={() => {}}
  //     />
  //   );
  // }
};

export default UserInput;
