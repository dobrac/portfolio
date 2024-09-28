import {TypographyH2} from "../../../components/ui/typography/typography-h2";
import {Section} from "./section";
import {Badge} from "../../../components/ui/badge";
import Image from "next/image";
import {Skeleton} from "@/components/ui/skeleton";
import {cn} from "../../../lib/utils";

function ProjectCard({title, imageUrl, imageFull, description, technologies, link}: Readonly<{
  title: string,
  imageUrl?: string,
  imageFull?: boolean,
  description: string,
  technologies: string[],
  link?: string
}>) {
  return (
    <div className="flex flex-col gap-3 break-inside-avoid-column">
      <a
        href={link}
        target="_blank"
        className="text-xl font-semibold grid gap-2"
      >
        <div className="h-52 w-full relative border drop-shadow">
          {imageUrl ?
            <Image
              src={imageUrl}
              alt={title + " preview"}
              fill={true}
              sizes="100vw"
              className={cn("rounded object-top", imageFull ? "object-contain" : "object-cover")}
            />
            : <Skeleton className="w-full h-full"/>
          }
        </div>
        {title}
      </a>
      <p className="text-pretty text-justify break-words hyphens-auto">{description}</p>
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

      <div className="mt-5 grid gap-x-16 gap-y-12 grid-cols-1 md:grid-cols-2">
        <ProjectCard
          title="QPlay.cz"
          imageUrl="/images/projects/qplay-cz.png"
          description="Frontpage of the Minecraft server."
          technologies={["Next.js", "SCSS"]}
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
          title="Host QPlay.cz"
          imageUrl="/images/projects/qplay-host.png"
          description="Management portal for individual Minecraft server instances. Website contains server info, management, and logs.
           The backend is made of automatic server deployment, load balancing and planning."
          technologies={["Next.js", "Typescript", "Redis", "Java", "PostgreSQL"]}
        />
        <ProjectCard
          title="Minecraft Plugins"
          imageUrl="/images/projects/spigot.png"
          imageFull
          description="Developing Minecraft Plugins mainly for the server QPlay.cz. Including minigames, server management, players routing betwee nservers, friend and party system, login, and more."
          technologies={["Java", "Maven", "Spigot", "Kotlin", "Gradle", "Redis", "PostgreSQL"]}
        />
        <ProjectCard
          title="Kubernetes Cluster"
          imageUrl="/images/projects/kubernetes.svg"
          imageFull
          description="Running production Kubernetes cluster with multiple services and heavy traffic. Supporting not only QPlay.cz, ESTIMAS, but also other projects, including build pipelines."
          technologies={["RKE2", "Microk8s", "Helm", "Docker"]}
        />
        <ProjectCard
          title="Bare Metal Servers Management"
          imageUrl="/images/projects/baremetal.png"
          imageFull
          description="Management of 10 concurrent bare metal servers. Includes management, monitoring, security."
          technologies={["VMWare", "Grafana", "Elastic", "Prometheus", "Proxmox", "Bash"]}
        />
        <ProjectCard
          title="gRPCFlair"
          imageUrl="/images/projects/grpcflair.png"
          description="Tool to help you understand and interact with gRPC(-Web) services. You can use it to explore the service's endpoints and make requests to them, browse types and enums, and preview options."
          technologies={["Next.js", "Typescript", "gRPC", "gRPC-Web", "Protobuf", "Node.js", "Jest"]}
          link="https://github.com/dobrac/grpcflair"
        />
        <ProjectCard
          title="RS 500 International"
          imageUrl="/images/projects/rs500-international.png"
          description="Presentation website for the RS 500 International Sailing Class Association."
          technologies={["Next.js", "Typescript", "WordPress"]}
        />
        <ProjectCard
          title="ESTIMAS Frontpage"
          imageUrl="/images/projects/estimas-cz.png"
          description="Frontpage of the time tracking software ESTIMAS."
          technologies={["Next.js"]}
          link="https://estimas.cz"
        />
        <ProjectCard
          title="ESTIMAS Software"
          imageUrl="/images/projects/estimas.png"
          description="Time tracking software ESTIMAS. Includes time tracking, time planning, absences, user management, projects, tasks."
          technologies={["Vue.js", "Nuxt.js", "Javascript"]}
          link="https://estimas.cz"
        />
      </div>
    </Section>
  )
}