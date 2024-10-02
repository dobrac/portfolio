import {data, WithHeader} from "../../config/data";

function SectionHeader(header: WithHeader) {
  const dateFromFormatted = header.dateFrom.toLocaleDateString('en-US', {month: 'short', year: 'numeric'});
  const dateToFormatted = header.dateTo?.toLocaleDateString('en-US', {month: 'short', year: 'numeric'}) ?? 'Present';

  return (
    <div className="flex justify-between">
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
  return (
    <div className="flex flex-col items-stretch m-10 gap-10">
      <div className="self-center flex flex-col items-center gap-3 w-5/6">
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
        <div className="grid gap-4">
          {data.experiences.map((experience) => (
            <div key={experience.title} className="grid gap-3">
              <SectionHeader {...experience}/>
              <ul className="list-disc ml-12 marker:text-2xl">
                {experience.points.map((point) => (
                  <li key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="font-bold text-center">
          Leadership & Activities
        </div>
        <div className="grid gap-4">
          {data.experiences.slice(1, 2).map((experience) => (
            <div key={experience.title} className="grid gap-3">
              <SectionHeader {...experience}/>
              <ul className="list-disc ml-12 marker:text-2xl">
                {experience.points.map((point) => (
                  <li key={point}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="font-bold text-center">
          Education
        </div>
        <div className="grid gap-4">
          {data.educations.map((education, index) => (
            <div key={index} className="grid gap-3">
              <SectionHeader {...education}/>
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
  )
}