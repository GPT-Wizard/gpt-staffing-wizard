import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#1C1B1F",
    padding: "40px",
    fontFamily: "inter",
    color: "#ffffff",
  },
  header: {
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    twLogo: {
      height: "32px",
    },
    gptLogo: {
      height: "45px",
    },
  },
  title: {
    container: {
      marginTop: "400px",
    },
    text: {
      fontSize: "72px",
      fontFamily: "bitter",
    },
  },
  section: {
    container: {
      marginTop: "50px",
    },
    heading: {
      container: {
        flexDirection: "row",
        alignItems: "center",
        gap: "17.5px",
      },
      icon: {
        width: "28px",
      },
      text: {
        fontFamily: "bitter",
        fontSize: "18px",
      },
    },
    text: {
      fontSize: "12px",
      textAlign: "justify",
    },
    boldText: {
      fontSize: "12px",
      fontWeight: "semibold",
      marginTop: "5px",
      marginBottom: "5px",
    },
  },
  break: {
    width: "100%",
    height: "24px",
    display: "block",
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
