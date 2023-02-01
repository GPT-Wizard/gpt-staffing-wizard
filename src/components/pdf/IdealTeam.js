import React from "react";
import { View, Image, Text } from "@react-pdf/renderer";
import styles from "./styles";
import TeamIcon from "../../assets/images/team-icon.png";

function IdealTeam({ idealTeam }) {
  return (
    <View style={styles.section.container}>
      <View style={styles.section.heading.container}>
        <Image src={TeamIcon} style={styles.section.heading.icon} />
        <Text style={styles.section.heading.text}>Ideal Team</Text>
      </View>
      <View style={styles.break} />
      {idealTeam?.map((idealTeamRow) => (
        <View key={idealTeamRow["Role"]}>
          <Text style={styles.section.boldText}>{idealTeamRow["Role"]}</Text>
          <Text style={styles.section.text}>
            Number of people: {idealTeamRow["Number of People"]}{" "}
          </Text>
          <Text style={styles.section.text}>
            Years of Experience: {idealTeamRow["Years of Experience"]}{" "}
          </Text>
          <Text style={styles.section.text}>
            Possible Skills Required: {idealTeamRow["Possible Skills Required"]}{" "}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default IdealTeam;
