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
  if (text.startsWith("\n")) {
    return removeEmptyLinesAtStart(text.slice(2));
  }
  if (text.startsWith(" ")) {
    return removeEmptyLinesAtStart(text.slice(1));
  }

  return text;
};

const fetchResponse = async (conversationStep, conversations) => {
  try {
    const previousConversations = formatConversations(conversations);

    const prompts = {
      "staffing-notes-end": `${AI_PERSONA} \n We had these conversations where you played the role "AI" and I played the role "User".\n Past Conversation: ${previousConversations} \n Based on the above information, tell me as a smart staffing manager of Thoughtworks, how will you asses the need from tech and non tech perspective, in the format: Staffing Notes: \n\nTech Perspective: points \n\n Non Tech Perspective: points`,
      "ideal-team-end": ``,
      "role-importance-end": ``,
      "role-assessment-end": ``,
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
