import { Configuration, OpenAIApi } from "openai";
import getPrompts from "../prompts";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const formatConversations = (conversations) => {
  let previousConversations = ``;

  for (let conversation of conversations) {
    if (typeof conversation.text === "object") {
      previousConversations += `${conversation.sender}: ${JSON.stringify(
        conversation.text
      )}\n`;
    } else
      previousConversations += `${conversation.sender}: ${conversation.text}\n`;
  }

  return previousConversations;
};

const removeEmptyLinesAtStart = (text) => {
  if (text.startsWith("\n")) {
    return removeEmptyLinesAtStart(text.slice(1));
  }
  if (text.startsWith(" ")) {
    return removeEmptyLinesAtStart(text.slice(1));
  }
  if (text.startsWith(".")) {
    return removeEmptyLinesAtStart(text.slice(1));
  }

  return text;
};

const getJsonTextOnly = (text) => {
  if (
    text.startsWith("| Role") ||
    text.startsWith("|Role") ||
    text.startsWith("Role")
  ) {
    return text;
  }
  return getJsonTextOnly(text.slice(1));
};

function getIdealTeamObject(completion) {
  const response = getJsonTextOnly(completion.data.choices[0].text);
  const tableRows = response
    .split("\n")
    .filter((row, index) => index !== 1 && row);
  const headers = tableRows[0].split("|").map((header) => header.trim());

  const result = tableRows.slice(1).map((row, index) => {
    const columns = row.split("|").map((column) => column.trim());
    return headers.reduce((acc, header, index) => {
      acc[header] = columns[index];
      acc.id = acc["Role"];
      return acc;
    }, {});
  });

  return result;
}

const fetchResponse = async (conversationStep, conversations) => {
  try {
    const previousConversations = formatConversations(conversations);

    const prompts = getPrompts(previousConversations);

    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompts[conversationStep],
      max_tokens: 1024,
    });
    const response = removeEmptyLinesAtStart(
      completion.data.choices[0].text
    );

    if (conversationStep === "ideal-team-end") {
      return getIdealTeamObject(completion);
    }

    return response;
  } catch (error) {
    console.error(error);
  }
};

export default fetchResponse;
