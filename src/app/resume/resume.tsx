"use client"
import {pdf, PDFViewer} from "@react-pdf/renderer";
import {ResumeDocument} from "../pdf/resume";
import {saveAs} from "file-saver";
import {Button} from "../../components/ui/button";


export interface ResumeProps {
  email?: string
  phone?: string
}

export default function Resume({email, phone}: ResumeProps) {
  const generatePdfDocument = async () => {
    const blob = await pdf((
      <ResumeDocument email={email} phone={phone}/>
    )).toBlob();
    saveAs(blob, "Jakub_Dobry-Resume.pdf");
  };

  return (
    <div className="relative">
      <Button onClick={generatePdfDocument} className="absolute left-0 top-0 z-40">Download</Button>
      <PDFViewer width="100%" height="100%" className="absolute h-dvh">
        <ResumeDocument email={email} phone={phone}/>
      </PDFViewer>
    </div>
  )
}