import {TypographyH2} from "../../../components/ui/typography/typography-h2";
import {Section} from "./section";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Award, data} from "../../../config/data";

function AwardSection({title, name, dateFrom, dateTo, additionalInfo}: Readonly<Award>) {
  const dateFromFormatted = dateFrom.toLocaleDateString('en-US', {year: 'numeric'});
  const dateToFormatted = dateTo?.toLocaleDateString('en-US', {year: 'numeric'});

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {title} ({dateFromFormatted}{dateToFormatted ? ` - ${dateToFormatted}` : ""})
        </CardTitle>
        <CardDescription>
          {name}
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
        {data.awards.map((award, index) => (
          <AwardSection key={index} {...award}/>
        ))}
      </div>
    </Section>
  )
}