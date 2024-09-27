import {IntroductionPart} from "./parts/introduction";
import {ExperiencePart} from "./parts/experience";
import {EducationPart} from "./parts/education";
import {ProjectsPart} from "./parts/projects";
import {TypographySmall} from "../../components/ui/typography/typography-small";

export default function Home() {
  return (
    <div
      className="grid min-h-screen">
      <main className="flex flex-col items-start">
        <IntroductionPart/>
        <ExperiencePart/>
        <ProjectsPart/>
        <EducationPart/>
      </main>
      <footer className="flex flex-col items-center justify-center my-4 gap-2">
        <TypographySmall>Built with Next.js and Tailwind CSS.</TypographySmall>
        <TypographySmall>
          Jakub Dobry &copy; {new Date().getFullYear()}
        </TypographySmall>
      </footer>
    </div>
  );
}
