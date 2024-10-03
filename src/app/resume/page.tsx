"use client"
import {Button} from "../../components/ui/button";
import {pdf, PDFViewer} from '@react-pdf/renderer';
import {saveAs} from "file-saver";
import {ResumeDocument} from "../pdf/resume";
import dynamic from "next/dynamic";

const PDFViewerClient = dynamic(() => Promise.resolve(PDFViewer), {
  ssr: false,
});

export default function Resume() {
  const generatePdfDocument = async () => {
    const blob = await pdf((
      <ResumeDocument/>
    )).toBlob();
    saveAs(blob, "Jakub_Dobry-Resume.pdf");
  };

  return (
    <>
      <Button onClick={generatePdfDocument}>Download</Button>
      <PDFViewerClient width="100%" height="900px">
        <ResumeDocument/>
      </PDFViewerClient>
    </>
  )
}