"use client"
import {data, WithHeader} from "../../config/data";
import {Button} from "../../components/ui/button";
// @ts-expect-error html2pdf.js does not support Typescript
import html2pdf from "html2pdf.js";
import {cn} from "@/lib/utils";
import React from "react";

function SectionHeader(header: WithHeader & { skipMargin?: boolean }) {
  const dateFromFormatted = header.dateFrom.toLocaleDateString('en-US', {month: 'short', year: 'numeric'});
  const dateToFormatted = header.dateTo?.toLocaleDateString('en-US', {month: 'short', year: 'numeric'}) ?? 'Present';

  const {skipMargin = false} = header;

  return (
    <div className={cn("flex justify-between", skipMargin ? "" : "mb-5")}>
      <div>
        <div className="font-bold">
          {header.title}
        </div>
        <div className="font-bold">
          {header.name}
        </div>
      </div>
      <div className="text-right">
        <div>
          {header.location}
        </div>
        <div>
          {dateFromFormatted} - {dateToFormatted}
        </div>
      </div>
    </div>)
}

export default function Resume() {
  const downloadPdf = async () => {
    const element = document.getElementById('resume');
    if (!element) {
      return
    }
    const opt = {
      image: {type: 'jpeg', quality: 0.98},
      html2canvas: {scale: 4},
      jsPDF: {unit: 'in', format: 'a4', orientation: 'portrait'}
    };

    const pdf = await html2pdf()
      .set(opt)
      .from(element)
      .toPdf()
      .get('pdf')

    window.open(pdf.output('bloburl'), '_blank');
  }

  return (
    <>
      <Button onClick={downloadPdf}>Download</Button>
      <div id="resume" className="flex flex-col items-stretch m-10 gap-4 text-sm">
        <div className="self-center flex flex-col items-center gap-2 w-5/6">
          <div className="font-bold">
            {data.introduction.name}
          </div>
          <hr className="w-full border-black"/>
          <div>
            email • phone • {data.introduction.city} • linkedin.com/in/jakub-dobry
          </div>
        </div>
        <div>
          <div className="font-bold text-center">
            Experience
          </div>
          <div className="grid gap-3">
            {data.experiences.slice(0, 3).map((experience) => (
              <div key={experience.title}>
                <SectionHeader {...experience}/>
                <div className="ml-6">
                  {experience.points.map((point) => (
                    <div key={point} className="flex gap-2 align-baseline">
                      <div className="align-middle" style={{fontSize: "24px"}}>
                        •
                      </div>
                      <div>
                        {point}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*     <div>
        <div className="font-bold text-center">
          Leadership & Activities
        </div>
        <div className="grid gap-3">
          {data.experiences.slice(1, 2).map((experience) => (
            <div key={experience.title}>
              <SectionHeader {...experience}/>
              <ul className="list-disc ml-8 marker:text-2xl">
                {experience.points.map((point) => (
                  <li key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>*/}
        <div>
          <div className="font-bold text-center">
            Education
          </div>
          <div className="grid gap-3">
            {data.educations.map((education, index) => (
              <div key={index}>
                <SectionHeader {...education} skipMargin/>
                <div>
                  {education.additionalInfo?.split("\n")?.map((point) => (
                    <p key={point}>
                      {point}&nbsp;
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="font-bold text-center">
            Skills & Interests
          </div>
          <div>
            {[
              ...data.skills,
              {name: "Languages", skills: data.introduction.languages},
              {
                name: "Interests",
                skills: data.introduction.interests
              }
            ].map((category) => (
              <div key={category.name}>
              <span className="font-bold text-nowrap mr-1">
                {category.name}:
              </span>
                <span>
                {category.skills.map(it => `${it.name}${it.level ? ` [${it.level}]` : ""}`).join(", ")}
              </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}