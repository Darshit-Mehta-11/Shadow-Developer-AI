import html2pdf from "html2pdf.js";

const DownloadReport = () => {

  const downloadPDF = () => {

    const element =
      document.getElementById("report-section");

    const options = {

      margin: 0.3,

      filename: "shadow-ai-report.pdf",

      image: {
        type: "jpeg",
        quality: 1
      },

      html2canvas: {
        scale: 3,
        useCORS: true
      },

      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait"
      }

    };

    html2pdf()
      .set(options)
      .from(element)
      .save();

  };

  return (

    <button
      onClick={downloadPDF}
      className="
        bg-cyan-400
        hover:bg-cyan-300
        text-black
        px-8
        py-4
        rounded-2xl
        font-bold
        transition-all
        hover:scale-105
      "
    >

      Download AI Report

    </button>

  );

};

export default DownloadReport;