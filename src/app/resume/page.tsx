"use client"
import {Button} from "../../components/ui/button";
import {pdf, PDFViewer} from '@react-pdf/renderer';
import {saveAs} from "file-saver";
import {ResumeDocument} from "../pdf/resume";
import dynamic from "next/dynamic";
import {useSearchParams} from "next/navigation";

const PDFViewerClient = dynamic(() => Promise.resolve(PDFViewer), {
  ssr: false,
});

export default function Resume() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email") ?? undefined
  const phone = searchParams.get("phone") ?? undefined

  const generatePdfDocument = async () => {
    const blob = await pdf((
      <ResumeDocument email={email} phone={phone}/>
    )).toBlob();
    saveAs(blob, "Jakub_Dobry-Resume.pdf");
  };

  return (
    <div className="relative">
      <Button onClick={generatePdfDocument} className="absolute left-0 top-0 z-40">Download</Button>
      <PDFViewerClient width="100%" height="100%" className="absolute h-dvh">
        <ResumeDocument email={email} phone={phone}/>
      </PDFViewerClient>
    </div>
  )
}