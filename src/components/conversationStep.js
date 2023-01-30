/**
 * 0start
 * 1project-description
 * 2staffing-notes-start
 * 3staffing-notes-end
 * 4ideal-team-start
 * 5ideal-team-end
 * 6role-importance-start
 * 7role-importance-end
 * 8role-assessment-start
 * 9role-assessment-end
 * 10end
 */

const conversationSteps = [
  "start",
  "project-description",
  "staffing-notes-start",
  "staffing-notes-end",
  "ideal-team-start",
  "ideal-team-end",
  "role-importance-start",
  "role-importance-end",
  "role-assessment-start",
  "role-assessment-end",
  "end",
];

let currentConversationStepIndex = 0;

const getConversationStep = () => {
  return conversationSteps[currentConversationStepIndex];
};

const nextConversationStep = () => {
  currentConversationStepIndex += 1;
  return currentConversationStepIndex;
};

const skipConversationStep = () => {
  if (conversationSteps[currentConversationStepIndex] === "ideal-team-start")
    currentConversationStepIndex += 6;
  else currentConversationStepIndex += 2;
};

const restartConversationStep = () => {
  currentConversationStepIndex = 0;
};

export {
  getConversationStep,
  nextConversationStep,
  skipConversationStep,
  restartConversationStep,
  conversationSteps,
};
