import React from "react";
import { Document, Page, Text } from "@react-pdf/renderer";
import styles from "./styles";

function PdfDocument({ staffingNotes }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text>Hi</Text>
      </Page>
    </Document>
  );
}

export default PdfDocument;
