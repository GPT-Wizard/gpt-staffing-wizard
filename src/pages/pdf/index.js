import React, { useEffect, useMemo, useState } from "react";
import { Font, usePDF } from "@react-pdf/renderer";
import BitterBold from "../../assets/fonts/Bitter-Bold.ttf";
import InterRegular from "../../assets/fonts/Inter-Regular.otf";
import InterSemiBold from "../../assets/fonts/Inter-SemiBold.otf";
import InterBold from "../../assets/fonts/Inter-Bold.otf";
import PdfDocument from "../../components/pdf";

Font.register({
  family: "bitter",
  fonts: [{ src: BitterBold, fontWeight: "bold" }],
});
Font.register({
  family: "inter",
  fonts: [
    { src: InterRegular },
    { src: InterSemiBold, fontWeight: "semibold" },
    { src: InterBold, fontWeight: "bold" },
  ],
});
Font.registerHyphenationCallback((word) => [word]);

function Pdf({ staffingNotes, idealTeam, roleImportance, roleAssessment }) {
  const [loadPdf, setLoadPdf] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadPdf(true);
    }, 100);
  }, []);

  const document = useMemo(
    () =>
      loadPdf ? (
        <PdfDocument
          staffingNotes={staffingNotes}
          idealTeam={idealTeam}
          roleImportance={roleImportance}
          roleAssessment={roleAssessment}
        />
      ) : null,
    [loadPdf, staffingNotes, idealTeam, roleImportance, roleAssessment]
  );
  const [instance, update] = usePDF({ document });

  useEffect(() => {
    if (document) {
      update();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document]);

  return (
    <div>
      <a
        href={instance?.url}
        download="Storybus.pdf"
        className="self-center bg-black-transparent hover:bg-secondary px-6 py-3 rounded-lg transition-all duration-300"
      >
        Export to PDF
      </a>
    </div>
  );
}

export default Pdf;
