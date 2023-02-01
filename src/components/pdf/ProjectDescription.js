import React from "react";
import { View, Image, Text } from "@react-pdf/renderer";
import styles from "./styles";
import ProjectIcon from "../../assets/images/project-icon.png";

function ProjectDescription({ projectDescription }) {
  return (
    <View style={styles.section.container}>
      <View style={styles.section.heading.container}>
        <Image src={ProjectIcon} style={styles.section.heading.icon} />
        <Text style={styles.section.heading.text}>Project Description</Text>
      </View>
      <View style={styles.break} />
      <Text style={styles.section.text}>{projectDescription}</Text>
    </View>
  );
}

export default ProjectDescription;
