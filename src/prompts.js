const organisationName = "Thoughtworks";

const AI_PERSONA = `You are one of the smartest staffing manager in the world working for ${organisationName}. Your job is to see how well you can devise a staffing plan for an software development project.`;

const getPrompts = (previousConversations) => {
  const starterPrompt = `${AI_PERSONA} \n We had these conversations where you played the role "AI" and I played the role "User".\n Past Conversation: ${previousConversations} \n Based on the above information, tell me as a smart staffing manager of ${organisationName}`;

  return {
    "staffing-notes-end": `${starterPrompt}, how will you asses the need from tech and non tech perspective, in the format: \n\nTech Perspective: bullet points \n\nNon Tech Perspective: bullet points`,
    "ideal-team-end": `${starterPrompt}, give me an ideal team combination for this project with roles in ${organisationName} in the markdown table format with headers Role, Number of People, Years of Experience and Possible Skills Required`,
    "role-importance-end": `${starterPrompt}, now give me a sales pitch to convince these various roles from ${organisationName} to join this project in a format: \n\nRole: Sales Pitch`,
    "role-assessment-end": `${starterPrompt}, now the role decides to join. For ${organisationName}, How do I assess the role based on project context. I am a staffing manager, so wont go in detail but still need to get a rough idea for the Above identified role will be able to do the task, in markdown format: \n\nRole: Assessment Conversation`,
  };
};

export default getPrompts;
