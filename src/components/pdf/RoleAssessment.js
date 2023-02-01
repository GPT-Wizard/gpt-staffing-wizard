import React from "react";
import { View, Image, Text } from "@react-pdf/renderer";
import styles from "./styles";
import AssessmentIcon from "../../assets/images/assessment-icon.png";

function RoleAssessment({ roleAssessmentArray }) {
  return (
    <View style={styles.section.container}>
      <View style={styles.section.heading.container}>
        <Image src={AssessmentIcon} style={styles.section.heading.icon} />
        <Text style={styles.section.heading.text}>Role Assessment</Text>
      </View>
      <View style={styles.break} />
      {roleAssessmentArray?.map((roleAssessment) => (
        <View key={roleAssessment.role}>
          <Text style={styles.section.boldText}>{roleAssessment.role}</Text>
          <Text style={styles.section.text}>{roleAssessment.importance}</Text>
        </View>
      ))}
    </View>
  );
}

export default RoleAssessment;
