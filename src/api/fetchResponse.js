import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const AI_PERSONA =
  "You are one of the smartest staffing manager in the world working for thoughtworks. Your job is to see how well you can devise a staffing plan for an software development project.";

const formatConversations = (conversations) => {
  let previousConversations = ``;

  for (let conversation of conversations) {
    previousConversations += `${conversation.sender}: ${conversation.text}\n`;
  }

  return previousConversations;
};

const removeEmptyLinesAtStart = (text) => {
  // if (text.startsWith("\n")) {
  //   return removeEmptyLinesAtStart(text.slice(2));
  // }
  // if (text.startsWith(" ")) {
  //   return removeEmptyLinesAtStart(text.slice(1));
  // }
  // if (text.startsWith(".")) {
  //   return removeEmptyLinesAtStart(text.slice(1));
  // }

  return text;
};

const fetchResponse = async (conversationStep, conversations) => {
  try {
    const previousConversations = formatConversations(conversations);
    const starterPrompt = `${AI_PERSONA} \n We had these conversations where you played the role "AI" and I played the role "User".\n Past Conversation: ${previousConversations} \n Based on the above information, tell me as a smart staffing manager of Thoughtworks`;

    const prompts = {
      "staffing-notes-end": `${starterPrompt}, how will you asses the need from tech and non tech perspective, in the markdown format: \n\nTech Perspective: bullet points \n\n Non Tech Perspective: bullet points`,
      "ideal-team-end": `${starterPrompt}, give me an ideal team combination for this project with roles in thoughtworks in the markdown table format with headers Role, Number of People, Years of Experience and Possible skill required`,
      "role-importance-end": `${starterPrompt}, now give me a sales pitch to convince these various roles from Thoughtworks to join this project in a markdown format: \n\nRole \nSales Pitch`,
      "role-assessment-end": `${starterPrompt}, now the role decides to join. For Thoughtworks, How do I assess the role based on project context. I am a staffing manager, so wont go in detail but still need to get a rough idea for the Above identified role will be able to do the task, in markdown format: \nRole: \nAssessment Conversation:`,
    };

    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompts[conversationStep],
      max_tokens: 1024,
    });
    const response = removeEmptyLinesAtStart(completion.data.choices[0].text);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export default fetchResponse;
