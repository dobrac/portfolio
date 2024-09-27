import {TypographyH2} from "../../../components/ui/typography/typography-h2";
import {Section} from "./section";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

function EducationSection({title, school, dateFrom, dateTo, location, additionalInfo}: Readonly<{
  title: string,
  school: string,
  dateFrom: Date,
  dateTo?: Date,
  location: string
  additionalInfo?: React.ReactNode
}>) {
  const dateFromFormatted = dateFrom.toLocaleDateString('en-US', {month: 'short', year: 'numeric'});
  const dateToFormatted = dateTo?.toLocaleDateString('en-US', {month: 'short', year: 'numeric'}) ?? 'Present';

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {title}
          <div className="text-lg font-semibold">{school}</div>
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
        <EducationSection
          title="Master's degree, Web Engineering"
          school="Faculty of Information Technology, CTU"
          dateFrom={new Date(2021, 8)}
          dateTo={new Date(2024, 6)}
          location="Prague, Czech Republic"
          additionalInfo={
            <div className="flex flex-col gap-3">
              <p>
                Grade: GPA ~3.8
              </p>
              <p>
                Graduated, Master thesis title: &#34;Interactive web documentation for Protocol Buffers&#34;
              </p>
            </div>
          }
        />
        <EducationSection
          title="Study Abroad Program"
          school="RMIT University"
          dateFrom={new Date(2023, 1)}
          dateTo={new Date(2023, 5)}
          location="Melbourne, Australia"
        />
      </div>
    </Section>
  )
}