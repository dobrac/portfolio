import {TypographyH1} from "../../../components/ui/typography/typography-h1";
import {TypographyLead} from "../../../components/ui/typography/typography-lead";
import {TypographySmall} from "../../../components/ui/typography/typography-small";
import Image from "next/image";
import Introduction from "../../markdown/introduction.mdx";
import {Section} from "./section";
import {data} from "../../../config/data";

export function IntroductionPart() {
  return (
    <Section>
      <div className="w-full flex gap-10 items-center justify-center flex-col md:flex-row">
        <div>
          <TypographyH1 className="text-nowrap">{data.introduction.name}</TypographyH1>
          <TypographyLead>
            {data.introduction.position}
          </TypographyLead>
          <TypographySmall>
            {data.introduction.city}, willing to relocate
          </TypographySmall>

          <div className="mt-5 flex gap-5">
            <a href="/resume" target="_blank">
              <Image
                src="/images/cv.svg"
                alt="CV icon"
                className="dark:invert"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.linkedin.com/in/jakub-dobry/" target="_blank">
              <Image
                src="/images/linkedin.svg"
                alt="LinkedIn logo"
                className="invert dark:invert-0"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.github.com/dobrac" target="_blank">
              <Image
                src="/images/github.svg"
                alt="GitHub logo"
                className="invert dark:invert-0"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        <Image
          src="/images/profile_picture.jpeg"
          alt={`${data.introduction.name} selfie`}
          className="rounded-full w-32 h-32"
          width="200"
          height="200"
          sizes="100vw"
          style={{width: '200px', height: 'auto'}}
          priority
        />
      </div>
      <Introduction/>
    </Section>
  )
}