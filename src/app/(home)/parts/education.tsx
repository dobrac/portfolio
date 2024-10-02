import {TypographyH2} from "../../../components/ui/typography/typography-h2";
import {Section} from "./section";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {data, Education} from "../../../config/data";

function EducationSection({
                            name,
                            title,
                            dateFrom,
                            dateTo,
                            location,
                            additionalInfo
                          }: Readonly<Omit<Education, "additionalInfo"> & { additionalInfo?: React.ReactNode }>) {
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
      <CardContent className="text-sm text-muted-foreground">
        {additionalInfo}
      </CardContent>
    </Card>
  )
}

export function EducationPart() {
  return (
    <Section id="education">
      <TypographyH2>Education</TypographyH2>

      <div className="flex flex-col gap-5 mt-5">
        {data.educations.map((education, index) => (
          <EducationSection key={index} {...education} additionalInfo={(
            <div>
              {education.additionalInfo?.split('\n').map((line, index) => (
                <p key={index}>
                  {line}&nbsp;
                </p>
              ))}
            </div>
          )}/>
        ))}
      </div>
    </Section>
  )
}