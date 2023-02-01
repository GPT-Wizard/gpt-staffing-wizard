import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#1C1B1F",
    padding: "40px",
    fontFamily: "inter",
    color: "#ffffff",
  },
  footer: {
    fontFamily: "inter",
    fontWeight: "semibold",
    color: "#666666",
    position: "absolute",
    bottom: "15px",
    right: "40px",
    fontSize: "8px",
  },
  colors: {
    tumericYellow: {
      color: "#cc850a",
    },
    flamingoPink: {
      color: "#f2617a",
    },
    jadeGreen: {
      color: "#6B9E78",
    },
    amethystPurple: {
      color: "#634F7D",
    },
    sapphireBlue: {
      color: "#47A1AD",
    },
    flamingoPinkBg: {
      backgroundColor: "#f2617a",
    },
    waveBlueBg: {
      backgroundColor: "#003d4f",
    },
  },
});

export default styles;
