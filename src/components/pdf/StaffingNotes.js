import React from "react";
import { View, Image, Text } from "@react-pdf/renderer";
import styles from "./styles";
import NotesIcon from "../../assets/images/notes-icon.png";

function StaffingNotes({ staffingNotes }) {
  return (
    <View style={styles.section.container}>
      <View style={styles.section.heading.container}>
        <Image src={NotesIcon} style={styles.section.heading.icon} />
        <Text style={styles.section.heading.text}>Staffing Notes</Text>
      </View>
      <View style={styles.break} />
      <Text style={styles.section.text}>{staffingNotes}</Text>
    </View>
  );
}

export default StaffingNotes;
