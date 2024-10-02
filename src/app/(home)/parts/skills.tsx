import {TypographyH2} from "../../../components/ui/typography/typography-h2";
import {Section} from "./section";
import {Badge} from "../../../components/ui/badge";
import {TypographySmall} from "../../../components/ui/typography/typography-small";
import {TypographyH3} from "../../../components/ui/typography/typography-h3";
import {data, Skill} from "../../../config/data";

function SkillSection({name, description}: Readonly<Skill>) {
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

        {data.skills.map((category) => (
          <div key={category.name}>
            <TypographyH3>{category.name}</TypographyH3>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 mt-3">
              {category.skills.map((skill) => (
                <SkillSection key={skill.name} {...skill}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}