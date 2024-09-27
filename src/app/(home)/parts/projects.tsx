import {TypographyH2} from "../../../components/ui/typography/typography-h2";
import {Section} from "./section";
import {Badge} from "../../../components/ui/badge";
import Image from "next/image";
import {Skeleton} from "@/components/ui/skeleton";

function ProjectCard({title, imageUrl, description, technologies, link}: Readonly<{
  title: string,
  imageUrl?: string,
  description: string,
  technologies: string[],
  link: string
}>) {
  return (
    <div className="flex flex-col gap-3 break-inside-avoid-column py-4">
      <a
        href={link}
        target="_blank"
        className="text-xl font-semibold grid gap-2"
      >
        <div className="h-40 w-full relative">
          {imageUrl ?
            <Image
              src={imageUrl}
              alt={title + " preview"}
              fill={true}
              sizes="100vw"
              className="rounded object-top"
            />
            : <Skeleton className="w-full h-full"/>
          }
        </div>
        {title}
      </a>
      <p>{description}</p>
      <div className="flex gap-3 flex-wrap">
        {technologies.map((technology, index) => (
          <Badge key={index} variant="outline">{technology}</Badge>
        ))}
      </div>
    </div>
  )
}

export function ProjectsPart() {
  return (
    <Section id="projects">
      <TypographyH2>Projects</TypographyH2>

      <div className="mt-5 gap-4 columns-2">
        <ProjectCard
          title="QPlay.cz"
          imageUrl="/images/projects/qplay-cz.png"
          description="Frontpage of the Minecraft server."
          technologies={["Next.js"]}
          link="https://qplay.cz"
        />
        <ProjectCard
          title="Info QPlay.cz"
          imageUrl="/images/projects/qplay-info.png"
          description="User portal for the Minecraft server. Includes user profile, statistics, tickets, and more."
          technologies={["Next.js", "Spring", "Typescript", "Java", "PostgreSQL", "Redis"]}
          link="https://info.qplay.cz"
        />
        <ProjectCard
          title="Personal Website"
          description="My personal website, built with Next.js and Tailwind CSS."
          technologies={["Next.js", "Tailwind CSS"]}
          link="https://dobrac.dev"
        />
      </div>
    </Section>
  )
}