import React from "react";
import { View, Image, Text } from "@react-pdf/renderer";
import styles from "./styles";
import TwLogo from "../../assets/images/tw-logo.png";
import GptLogo from "../../assets/images/gpt-logo.png";

function Header() {
  return (
    <View>
      <View style={styles.header.container}>
        <Image src={TwLogo} style={styles.header.twLogo} />
        <Image src={GptLogo} style={styles.header.gptLogo} />
      </View>
      <View style={styles.title.container}>
        <Text style={styles.title.text}>Staffing</Text>
        <Text style={styles.title.text}>Book</Text>
      </View>
    </View>
  );
}

export default Header;
