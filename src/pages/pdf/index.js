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
// Font.registerHyphenationCallback((word) => [word]);

function Pdf({ state }) {
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
          staffingNotes={state.staffingNotes}
          idealTeam={state.idealTeam}
          roleImportance={state.roleImportance}
          roleAssessment={state.roleAssessment}
          projectDescription={state.projectDescription}
        />
      ) : null,
    [loadPdf, state]
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
        download="Stffing Book.pdf"
        className="self-center bg-secondary hover:bg-secondary-transparent px-6 py-3 rounded-lg transition-all duration-300"
      >
        Export to PDF
      </a>
    </div>
  );
}

export default Pdf;
