import {TypographyH2} from "../../../components/ui/typography/typography-h2";
import {Section} from "./section";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

function AwardSection({title, school, dateFrom, dateTo, additionalInfo}: Readonly<{
  title: string,
  school: string,
  dateFrom: Date,
  dateTo?: Date,
  additionalInfo?: React.ReactNode
}>) {
  const dateFromFormatted = dateFrom.toLocaleDateString('en-US', {year: 'numeric'});
  const dateToFormatted = dateTo?.toLocaleDateString('en-US', {year: 'numeric'});

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {title} ({dateFromFormatted}{dateToFormatted ? ` - ${dateToFormatted}` : ""})
        </CardTitle>
        <CardDescription>
          {school}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {additionalInfo}
      </CardContent>
    </Card>
  )
}

export function AwardsPart() {
  return (
    <Section id="awards">
      <TypographyH2>Awards</TypographyH2>

      <div className="flex flex-col gap-5 mt-5">
        <AwardSection
          title="Mathematical Olympiad Cat. A"
          school="Gymnazium, Plzen, Mikulasske nam. 23"
          dateFrom={new Date(2017, 0)}
          dateTo={new Date(2018, 0)}
          additionalInfo="Successful solver of the regional round."
        />
        <AwardSection
          title="Physics Olympiad Cat. D"
          school="Gymnazium, Plzen, Mikulasske nam. 23"
          dateFrom={new Date(2014, 0)}
          dateTo={new Date(2015, 0)}
          additionalInfo="Successful solver of the regional round."
        />
        <AwardSection
          title="Rector's Award"
          school="University of West Bohemia"
          dateFrom={new Date(2017, 0)}
          additionalInfo="Excellent school results and sports results."
        />
        <AwardSection
          title="Athlete of the Year"
          school="Czech Technical University in Prague"
          dateFrom={new Date(2019, 0)}
          additionalInfo="Fourth place in the absolute ranking."
        />
      </div>
    </Section>
  )
}