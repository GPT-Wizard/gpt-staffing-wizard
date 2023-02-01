import { useReducer } from "react";

const initialState = {
  projectDescription: "",
  staffingNotes: undefined,
  idealTeam: undefined,
  roleImportance: undefined,
  roleAssessment: undefined,
};

const staffingPlanReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROJECT_DESCRIPTION":
      return { ...state, projectDescription: action.payload };
    case "SET_STAFFING_NOTES":
      return { ...state, staffingNotes: action.payload };
    case "SET_IDEAL_TEAM":
      return { ...state, idealTeam: action.payload };
    case "SET_ROLE_IMPORTANCE":
      return { ...state, roleImportance: action.payload };
    case "SET_ROLE_ASSESSMENT":
      return { ...state, roleAssessment: action.payload };
    default:
      return state;
  }
};

export const useStaffingPlan = () => {
  return useReducer(staffingPlanReducer, initialState);
};
