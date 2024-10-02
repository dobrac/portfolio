import {TypographyH2} from "../../../components/ui/typography/typography-h2";
import {Section} from "./section";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {data, Experience} from "../../../config/data";

function ExperienceSection({name, title, dateFrom, dateTo, location, points}: Readonly<Experience>) {
  const dateFromFormatted = dateFrom.toLocaleDateString('en-US', {month: 'short', year: 'numeric'});
  const dateToFormatted = dateTo?.toLocaleDateString('en-US', {month: 'short', year: 'numeric'}) ?? 'Present';

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {name}
          <div className="text-lg font-semibold">{title}</div>
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
        {data.experiences.map((experience, index) => (
          <ExperienceSection key={index} {...experience} />
        ))}
      </div>
    </Section>
  )
}