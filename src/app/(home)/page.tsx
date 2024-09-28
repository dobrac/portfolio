import {IntroductionPart} from "./parts/introduction";
import {ExperiencePart} from "./parts/experience";
import {EducationPart} from "./parts/education";
import {ProjectsPart} from "./parts/projects";
import {TypographySmall} from "../../components/ui/typography/typography-small";
import {AwardsPart} from "./parts/awards";
import ContactForm from "./parts/contact-form";
import {SkillsPart} from "./parts/skills";

export default function Home() {
  return (
    <div
      className="grid min-h-screen">
      <main className="flex flex-col items-start">
        <IntroductionPart/>
        <SkillsPart/>
        <ProjectsPart/>
        <ExperiencePart/>
        <AwardsPart/>
        <EducationPart/>
        <ContactForm/>
      </main>
      <footer className="flex flex-col items-center justify-center my-4 gap-2">
        <TypographySmall>
          Built with Next.js and Tailwind CSS.{' '}
          <a href="https://github.com/dobrac/portfolio">Source code</a>
          .
        </TypographySmall>
        <TypographySmall>
          Jakub Dobry &copy; {new Date().getFullYear()}
        </TypographySmall>
      </footer>
    </div>
  );
}
