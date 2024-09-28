import {TypographyH2} from "../../../components/ui/typography/typography-h2";
import {Section} from "./section";
import {Badge} from "../../../components/ui/badge";
import {TypographySmall} from "../../../components/ui/typography/typography-small";
import {TypographyH3} from "../../../components/ui/typography/typography-h3";

function Skill({name, description}: Readonly<{
  name: string,
  description?: string
}>) {
  return (
    <div className="flex gap-2 items-baseline">
      <Badge>
        {name}
      </Badge>
      {description && (
        <div
          className="text-muted-foreground text-sm text-wrap text-justify break-words hyphens-auto"
        >
          {description}
        </div>
      )}
    </div>
  )
}

export function SkillsPart() {
  return (
    <Section id="skills">
      <div className="grid gap-6">
        <TypographyH2>Skills</TypographyH2>
        <TypographySmall>
          I have experience with a wide range of technologies and tools. Here are some of them and my experience with
          their usage.
          I am always eager to learn new things and improve my knowledge.
        </TypographySmall>

        <div>
          <TypographyH3>Languages</TypographyH3>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 mt-3">
            <Skill name="Typescript" description="Frontend and backend of websites"/>
            <Skill name="Javascript" description="Frontend and backend of websites"/>
            <Skill name="Kotlin" description="Frontend, backend, infrastructure, Minecraft plugins"/>
            <Skill name="Java" description="Backend, infrastructure, Minecraft plugins"/>
            <Skill name="HTML" description="Websites"/>
            <Skill name="CSS, SCSS" description="Websites"/>
            <Skill name="C/C++" description="Many projects at school"/>
            <Skill name="Bash" description="Scripts for managing bare metal servers"/>
            <Skill name="C#" description="Backend for payment system"/>
            <Skill name="Go" description="High performance server"/>
            <Skill name="Ruby" description="School project and semester of basics"/>
            <Skill name="Python" description="School projects, data analysis, ML"/>
            <Skill name="Swift" description="Mobile application developed at school"/>
          </div>
        </div>

        <div>
          <TypographyH3>Frameworks</TypographyH3>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 mt-3">
            <Skill name="Next.js" description="Frontend of websites"/>
            <Skill name="React.js" description="Frontend of websites"/>
            <Skill name="Nuxt.js" description="Frontend of websites"/>
            <Skill name="Vue.js" description="Frontend of websites"/>
            <Skill name="Node.js" description="Backend and scripts"/>
            <Skill name="Spring" description="Backend of websites"/>
            <Skill name="Ktor" description="Backend of websites"/>
            <Skill name="Exposed" description="ORM for Kotlin"/>
          </div>
        </div>

        <div>
          <TypographyH3>Infrastructure and others</TypographyH3>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 mt-3">
            <Skill name="SQL" description="Databases, MySQL, PostgreSQL, MSSQL"/>
            <Skill name="NoSQL" description="Redis, DragonflyDB"/>
            <Skill name="Docker" description="Deployment, local development, testing"/>
            <Skill name="Kubernetes" description="Deployment, production hosting"/>
            <Skill name="Bare Metal" description="Management, security, monitoring"/>
            <Skill name="AWS, GCP" description="Architecture, management, monitoring"/>
            <Skill name="Elastic, Grafana" description="Monitoring, deployment, search"/>
            <Skill name="Firebase" description="Firestore, auth, storage, cloud functions"/>
            <Skill name="Distributed Systems" description="Minecraft server QPlay.cz"/>
            <Skill name="High Availability" description="Minecraft server QPlay.cz"/>
            <Skill name="Reliability" description="Minecraft server QPlay.cz"/>
            <Skill name="Optimization" description="Minecraft server QPlay.cz"/>
            <Skill name="Advanced Algoritmization" description="School projects"/>
          </div>
        </div>

        <div>
          <TypographyH3>Soft</TypographyH3>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 mt-3">
            <Skill name="Team Management" description="QPlay.cz organization"/>
            <Skill name="Planning" description="QPlay.cz organization"/>
            <Skill name="Written Communication" description="QPlay.cz organization"/>
            <Skill name="Conflict Resolution" description="QPlay.cz organization"/>
          </div>
        </div>
      </div>
    </Section>
  )
}