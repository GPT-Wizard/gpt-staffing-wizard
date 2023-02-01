import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import styles from "./styles";
import Header from "./Header";
import StaffingNotes from "./StaffingNotes";
import ProjectDescription from "./ProjectDescription";
import RoleImportance from "./RoleImportance";
import RoleAssessment from "./RoleAssessment";

const removeEmptyLinesAtStart = (text) => {
  if (text.startsWith("\n")) {
    return removeEmptyLinesAtStart(text.slice(1));
  }
  if (text.startsWith(" ")) {
    return removeEmptyLinesAtStart(text.slice(1));
  }

  return text;
};

const formatRoleImportance = (roleImportance) => {
  const rolesImportanceArray = [];
  let roleImportancePending = removeEmptyLinesAtStart(roleImportance);

  while (true) {
    if (!roleImportancePending.includes(":")) break;

    const colonIndex = roleImportancePending.indexOf(":");
    let breakIndex = roleImportancePending.indexOf("\n");
    if (breakIndex === -1) breakIndex = roleImportancePending.length;
    const role = roleImportancePending.substring(0, colonIndex);
    const importance = roleImportancePending.substring(
      colonIndex + 2,
      breakIndex
    );
    rolesImportanceArray.push({ role, importance });
    roleImportancePending = removeEmptyLinesAtStart(
      roleImportancePending.substring(breakIndex)
    );
  }
  return rolesImportanceArray;
};

function PdfDocument({
  projectDescription,
  staffingNotes,
  roleImportance,
  roleAssessment,
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header />
      </Page>
      <Page size="A4" style={styles.page}>
        {projectDescription && (
          <ProjectDescription projectDescription={projectDescription} />
        )}
        {staffingNotes && <StaffingNotes staffingNotes={staffingNotes} />}
        {roleImportance && (
          <RoleImportance
            roleImportanceArray={formatRoleImportance(roleImportance)}
          />
        )}
        {roleAssessment && (
          <RoleAssessment
            roleAssessmentArray={formatRoleImportance(roleAssessment)}
          />
        )}
      </Page>
    </Document>
  );
}

export default PdfDocument;
