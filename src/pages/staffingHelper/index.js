import { Configuration, OpenAIApi } from "openai";
import React, { useEffect, useRef, useState } from "react";
import Robot from "../../assets/images/robot.svg";
import Person from "../../assets/images/person.svg";
import Checkboxes from "../../components/inputs/Checkboxes";
import TextArea from "../../components/inputs/TextArea";
import SingleButton from "../../components/inputs/SingleButton";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

function StaffingHelper() {
  const [conversations, setConversations] = useState([
    {
      sender: "ai",
      text: "Hi Staffing Manager! Shall we start building staffing plans?",
    },
  ]);
  const [conversationStep, setConversationStep] = useState("welcome");
  const [showInput, setShowInput] = useState(true);
  const conversationRef = useRef();
  const [projectDescription, setProjectDescription] = useState("");
  const [services, setServices] = useState([
    {
      id: "staffing-notes",
      state: true,
      text: "Prepare staffing notes",
      completed: false,
    },
    {
      id: "ideal-team",
      state: true,
      text: "Form an ideal team",
      completed: false,
    },
    {
      id: "role-importance",
      state: true,
      text: "Make points for importance of the role for TWers",
      completed: false,
    },
    {
      id: "assessment",
      state: true,
      text: "Give questionnaire to asses TWers for the role",
      completed: false,
    },
  ]);

  const updateServiceCompletion = (serviceId) => {
    let servicesCopy = [...services];
    let serviceIndex = servicesCopy.findIndex(
      (service) => service.id === serviceId
    );

    servicesCopy[serviceIndex] = {
      ...servicesCopy[serviceIndex],
      completed: true,
    };

    setServices(servicesCopy);
  };

  const aiPersona =
    "You are one of the smartest staffing manager in the world working for thoughtworks. Your job is see how well you can devise a staffing plan for an software development project.";

  const formatConversations = () => {
    let previousConversations = ``;

    for (let conversation of conversations) {
      previousConversations += `${conversation.sender}: ${conversation.text}\n`;
    }

    return previousConversations;
  };

  const removeEmptyLinesAtStart = (text) => {
    if (text.startsWith("\n")) {
      return removeEmptyLinesAtStart(text.slice(2));
    }
    if (text.startsWith(" ")) {
      return removeEmptyLinesAtStart(text.slice(1));
    }

    return text;
  };
  const generate = async (serviceId, psmMessage) => {
    try {
      const previousConversations = formatConversations();
      const prompts = {
        "staffing-notes": `${aiPersona} \n We had these conversations where you played the role "ai" and I played the role "psm".\n Past Conversation: ${previousConversations} \n Based on the above information, tell me as a smart staffing manager of Thoughtworks, how will you asses the need from tech and non tech perspective, in the format: Staffing Notes: \n\nTech Perspective: points \n\n Non Tech Perspective: points`,
        "ideal-team": ``,
        "role-importance": ``,
        assessment: ``,
      };
      const openai = new OpenAIApi(configuration);
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompts[serviceId],
        max_tokens: 1024,
      });
      const response = removeEmptyLinesAtStart(completion.data.choices[0].text);
      setConversations([
        ...conversations,
        { sender: "psm", text: psmMessage },
        {
          sender: "ai",
          text: response.replaceAll("\n", "<br />"),
        },
        {
          sender: "ai",
          text: "Is this ok?",
        },
      ]);
      updateServiceCompletion(serviceId);
      setShowInput(true);
    } catch (error) {
      console.error(error);
    }
  };

  const aiMessage = (text) => (
    <div className="flex max-w-[80%] mb-4 items-start">
      <img src={Robot} className="w-16" alt="" />
      <p
        className="bg-primary p-4 h-fit rounded-lg rounded-tl-none ml-4 min-h-[4rem] flex items-center justify-start"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
  const psmMessage = (text) => (
    <div className="flex max-w-[80%] ml-auto mb-4 justify-end items-start">
      <p
        className="bg-primary p-4 h-fit rounded-lg rounded-tr-none mr-4 min-h-[4rem] flex items-center justify-start"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <img src={Person} className="w-16" alt="" />
    </div>
  );

  const nextStep = (psmMessage, aiMessage) => {
    setConversations([...conversations, { sender: "psm", text: psmMessage }]);
    setShowInput(false);
    if (aiMessage) {
      setTimeout(() => {
        setConversations([
          ...conversations,
          { sender: "psm", text: psmMessage },
          {
            sender: "ai",
            text: aiMessage,
          },
        ]);
        setShowInput(true);
      }, 500);
    }

    if (conversationStep === "welcome")
      setConversationStep("project-description");
    else if (conversationStep === "project-description")
      setConversationStep("services-required");
    else {
      for (let service of services) {
        if (service.state && !service.completed) {
          generate(service.id, psmMessage);
          setConversationStep(service.id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    conversationRef.current.scrollTo(0, conversationRef.current.scrollHeight);
  }, [conversations]);

  const getServicesMessage = () => {
    let serviceMessage = `Services selected:<br/><br/>`;

    for (let service of services) {
      if (service.state) {
        serviceMessage += `- ${service.text}<br/>`;
      }
    }

    return serviceMessage;
  };

  const psmInput = () => {
    if (conversationStep === "welcome") {
      return (
        <SingleButton
          text="Let's begin!"
          onSubmit={() =>
            nextStep(
              "Let's begin!",
              "Please provide me with the project description."
            )
          }
        />
      );
    } else if (conversationStep === "project-description") {
      return (
        <TextArea
          placeholder="Enter the project description…"
          text={projectDescription}
          onTextChange={setProjectDescription}
          onSubmit={() =>
            nextStep(
              projectDescription,
              "What do you want me to help you with?"
            )
          }
        />
      );
    } else if (conversationStep === "services-required") {
      return (
        <Checkboxes
          checkboxes={services}
          onCheckboxesChange={setServices}
          onSubmit={() => {
            nextStep(getServicesMessage());
          }}
        />
      );
    } else if (conversationStep === "staffing-notes") {
      return (
        <SingleButton
          text="Yes, Let's proceed!"
          // onSubmit={() => nextStep("Yes, Let's proceed!")}
          onSubmit={() => {}}
        />
      );
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-end pb-10">
      <div className="bg-white-transparent h-[80vh] w-[750px] rounded-lg p-10 flex flex-col justify-between">
        <div className="h-[60vh] overflow-y-auto" ref={conversationRef}>
          {conversations.map((message) => {
            if (message.sender === "ai") return aiMessage(message.text);
            else return psmMessage(message.text);
          })}
        </div>

        {showInput && psmInput()}
      </div>
    </div>
  );
}

export default StaffingHelper;
