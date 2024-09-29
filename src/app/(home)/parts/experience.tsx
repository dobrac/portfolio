import {TypographyH2} from "../../../components/ui/typography/typography-h2";
import {Section} from "./section";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

function ExperienceSection({title, company, dateFrom, dateTo, location, points}: Readonly<{
  title: string,
  company: string,
  dateFrom: Date,
  dateTo?: Date,
  location: string,
  points: string[]
}>) {
  const dateFromFormatted = dateFrom.toLocaleDateString('en-US', {month: 'short', year: 'numeric'});
  const dateToFormatted = dateTo?.toLocaleDateString('en-US', {month: 'short', year: 'numeric'}) ?? 'Present';

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {title}
          <div className="text-lg font-semibold">{company}</div>
        </CardTitle>
        <CardDescription>
          <div className="w-full flex justify-between">
            <div className="text-muted-foreground">{dateFromFormatted} - {dateToFormatted}</div>
            <div className="text-muted-foreground">{location}</div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc">
          {points.map((point, index) => <li key={index} className="my-3">{point}</li>)}
        </ul>
      </CardContent>
    </Card>
  )
}

export function ExperiencePart() {
  return (
    <Section id="experience">
      <TypographyH2>Experience</TypographyH2>

      <div className="flex flex-col gap-5 mt-5">
        <ExperienceSection
          title="Software Developer"
          company="JetBrains s.r.o."
          dateFrom={new Date(2019, 6)}
          location="Prague, Czech Republic"
          points={[
            "Designing UI/UX, architecting, and implementing a new product from the ground up as part of a 5-person team.",
            "Frequently taking the lead in designing new features, making key technical decisions, and solving complex technical challenges.",
            "Demonstrated strong communication skills by collaborating effectively with team members and providing support to ensure task completion.",
            "Currently leveraging TypeScript with Next.js and Node.js for full stack development; previously developed both frontend and backend using Kotlin."
          ]}
        />

        <ExperienceSection
          title="Owner & Lead Software Developer"
          company="QPlay.cz"
          dateFrom={new Date(2014, 11)}
          dateTo={new Date(2024, 2)}
          location="Fully Remote"
          points={[
            "Led a team of 50 people and was the lead developer of 5 people.",
            "Designed and implemented distributed dynamic servers load balancing, internal ticket system, user customer portal, automatic deployment, performance, scalability, monitoring, managed own Kubernetes cluster, and more.",
            "Used various technologies and languages, but mainly the Java language.",
            "Successfully handled 2+ mil. users, 10K per day, 2500 concurrently."
          ]}
        />

        <ExperienceSection
          title="Frontend Developer"
          company="net-inout s.r.o."
          dateFrom={new Date(2018, 4)}
          dateTo={new Date(2021, 11)}
          location="Fully Remote"
          points={[
            "Co-created the architecture and developed a frontend part for a system for managing attendance.",
            "My main focus was on the usability and completeness of the features."
          ]}
        />

        <ExperienceSection
          title="Maintainer, Developer"
          company="Survival-Games.cz"
          dateFrom={new Date(2013, 0)}
          dateTo={new Date(2014, 10)}
          location="Fully Remote"
          points={[
            "Built and managed the server from the beginning. Initially only using existing solutions (plugins).",
            "Achieved 500 concurrent players. Thousands of users per day.",
            "Later on, this was my first motivation for learning programming, so I learned Java."
          ]}
        /></div>
    </Section>
  )
}