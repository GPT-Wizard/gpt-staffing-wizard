import React from "react";
import { View, Image, Text } from "@react-pdf/renderer";
import styles from "./styles";
import ImportantIcon from "../../assets/images/important-icon.png";

function RoleImportance({ roleImportanceArray }) {
  return (
    <View style={styles.section.container}>
      <View style={styles.section.heading.container}>
        <Image src={ImportantIcon} style={styles.section.heading.icon} />
        <Text style={styles.section.heading.text}>Role Importance</Text>
      </View>
      <View style={styles.break} />
      {roleImportanceArray?.map((roleImportance) => (
        <View key={roleImportance.role}>
          <Text style={styles.section.boldText}>{roleImportance.role}</Text>
          <Text style={styles.section.text}>{roleImportance.importance}</Text>
        </View>
      ))}
    </View>
  );
}

export default RoleImportance;
