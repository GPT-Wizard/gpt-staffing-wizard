import React from "react";
import { View, Image } from "@react-pdf/renderer";
import styles from "./styles";
import TwLogo from "../../assets/images/tw-logo.png";
import GptLogo from "../../assets/images/gpt-logo.png";

function Header() {
  return (
    <View style={styles.header.container}>
      <Image src={TwLogo} style={styles.header.twLogo} />
      <Image src={GptLogo} style={styles.header.gptLogo} />
    </View>
  );
}

export default Header;
