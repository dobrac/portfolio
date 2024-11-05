export interface Introduction {
  name: string;
  position: string;
  city: string;
  languages: Skill[];
  interests: Skill[]
}

export interface WithFullHeader {
  name: string;
  title: string;
  location?: string;
  dateFrom: Date,
  dateTo?: Date | null,
}

export interface WithLiteHeader {
  title: string;
  name?: string;
}

export type WithHeader = WithFullHeader | WithLiteHeader

export interface Experience extends WithFullHeader {
  pointsLong: string[]
  pointsShort?: string[]
}

export interface Education extends WithFullHeader {
  additionalInfo?: string
}

export interface Award extends WithFullHeader {
  additionalInfo?: string
}

export interface SkillCategory {
  name: string,
  skills: Skill[]
}

export interface Skill {
  name: string,
  level?: string,
  description?: string
}

export enum TechSkillLevel {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced"
}

const introduction: Introduction = {
  name: "Jakub Dobry",
  position: "Software Engineer",
  city: "Prague, Czech Republic",
  languages: [
    {
      name: "Czech",
      level: "Native"
    },
    {
      name: "English",
      level: "B2-C1"
    }
  ],
  interests: [
    {
      name: "Sailing",
      level: "Competitively"
    }
  ]
}

const experiences: Experience[] = [
  {
    name: "Software Engineer",
    title: "JetBrains",
    dateFrom: new Date(2019, 6),
    location: "Prague, Czech Republic",
    pointsLong: [
      "Architected and implemented core components of a new product from the ground up, delivering critical features that enhance user experience.",
      "Took ownership of technical decision-making and design for new features, successfully solving complex technical challenges that improved system performance.",
      "Leveraging TypeScript with Next.js and Node.js, as well as LLMs, to achieve the best user experience.",
    ],
    pointsShort: [
      "Working on a new product from the ground up, delivering critical features that enhance user experience.",
      "Taking ownership of technical decision-making and design for new features, successfully solving complex technical challenges.",
    ]
  },
  {
    name: "Lead Software Engineer & Founder",
    title: "QPlay.cz",
    dateFrom: new Date(2014, 11),
    dateTo: new Date(2024, 2),
    location: "Remote",
    pointsLong: [
      "Led a team of 50 people and was the lead developer of 5 people.",
      "Created distributed load balancing and own Kubernetes cluster, improving system stability and reliability.",
      "Developed an internal ticketing system and customer portal, streamlining operations and processing over 100/day tickets.",
      "Managed a high-traffic server infrastructure, ensuring smooth operation and a positive experience for thousands of users daily.",
      "Used Java to achieve stability and robustness and many other technologies and languages.",
      "Handled 2+ mil. users, 10K per day, 2500 concurrently."
    ],
    pointsShort: [
      "Led a team of 50 people and was the lead developer of 5 people.",
      "Handled 2+ mil. users, 10K per day, 2500 concurrently."
    ]
  },
  {
    name: "Frontend Developer",
    title: "net-inout s.r.o.",
    dateFrom: new Date(2018, 4),
    dateTo: new Date(2021, 11),
    location: "Remote",
    pointsLong: [
      "Co-created the architecture and developed a frontend part for a system for managing attendance, emphasizing usability and feature completeness.",
      "Designed the UX and UI for the system, achieving an intuitive interface.",
    ],
  },
  {
    name: "Maintainer, Developer",
    title: "Survival-Games.cz",
    dateFrom: new Date(2013, 0),
    dateTo: new Date(2014, 10),
    location: "Remote",
    pointsLong: [
      "Created and managed a game server infrastructure from scratch, initially leveraging existing plugins to meet user needs and ensure system functionality.",
      "Scaled the server to handle 500 concurrent players and supported thousands of daily users, maintaining a high level of performance and stability.",
    ],
  }
]

const educations: Education[] = [
  {
    name: "Master's degree, Computer Science",
    title: "Czech Technical University in Prague",
    dateFrom: new Date(2021, 8),
    dateTo: new Date(2024, 6),
    location: "Prague, Czech Republic",
    additionalInfo: `GPA: 1.15/1.0 (CZE) | 3.8/4.0, Thesis: 'Interactive web documentation for Protocol Buffers'`
  },
  {
    name: "Study Abroad Program",
    title: "RMIT University",
    dateFrom: new Date(2023, 1),
    dateTo: new Date(2023, 5),
    location: "Melbourne, Australia"
  }
]

const skills: SkillCategory[] = [
  {
    name: "Technical Languages",
    skills: [
      {
        name: "Typescript",
        description: "Frontend and backend of websites",
        level: TechSkillLevel.Advanced
      },
      {
        name: "Javascript",
        description: "Frontend and backend of websites",
        level: TechSkillLevel.Advanced
      },
      {
        name: "Kotlin",
        description: "Frontend, backend, infrastructure, Minecraft plugins",
        level: TechSkillLevel.Advanced
      },
      {
        name: "Java",
        description: "Backend, infrastructure, Minecraft plugins",
        level: TechSkillLevel.Advanced
      },
      {
        name: "HTML",
        description: "Websites",
        level: TechSkillLevel.Advanced
      },
      {
        name: "CSS/SCSS",
        description: "Websites",
        level: TechSkillLevel.Advanced
      },
      {
        name: "C/C++",
        description: "Many projects at school",
        level: TechSkillLevel.Intermediate
      },
      {
        name: "Bash",
        description: "Scripts for managing bare metal servers",
        level: TechSkillLevel.Intermediate
      },
      {
        name: "C#",
        description: "Backend for payment system",
        level: TechSkillLevel.Intermediate
      },
      {
        name: "Python",
        description: "School projects, data analysis, ML",
        level: TechSkillLevel.Intermediate
      },
      {
        name: "Go",
        description: "High performance server",
        level: TechSkillLevel.Beginner
      },
      {
        name: "Ruby",
        description: "School project and semester of basics",
        level: TechSkillLevel.Beginner
      },
      {
        name: "Swift",
        description: "Mobile application developed at school",
        level: TechSkillLevel.Beginner
      }
    ]
  },
  {
    name: "Frameworks",
    skills: [
      {
        name: "Next.js",
        description: "Frontend of websites"
      },
      {
        name: "React.js",
        description: "Frontend of websites"
      },
      {
        name: "Nuxt.js",
        description: "Frontend of websites"
      },
      {
        name: "Vue.js",
        description: "Frontend of websites"
      },
      {
        name: "Node.js",
        description: "Backend and scripts"
      },
      {
        name: "Spring",
        description: "Backend of websites"
      },
      {
        name: "Ktor",
        description: "Backend of websites"
      },
      {
        name: "Exposed",
        description: "ORM for Kotlin"
      }
    ]
  },
  {
    name: "Infrastructure and others",
    skills: [
      {
        name: "LLMs",
        description: "Usage in JetBrains project"
      },
      {
        name: "SQL",
        description: "Databases, MySQL, PostgreSQL, MSSQL"
      },
      {
        name: "NoSQL",
        description: "Redis, DragonflyDB"
      },
      {
        name: "Docker",
        description: "Deployment, local development, testing"
      },
      {
        name: "Kubernetes",
        description: "Deployment, production hosting"
      },
      {
        name: "Bare Metal",
        description: "Management, security, monitoring"
      },
      {
        name: "AWS/GCP",
        description: "Architecture, management, monitoring"
      },
      {
        name: "Elastic",
        description: "Monitoring, search"
      },
      {
        name: "Grafana/Kibana",
        description: "Monitoring, alerting"
      },
      {
        name: "Firebase",
        description: "Firestore, auth, storage, cloud functions"
      },
      {
        name: "Figma",
        description: "Designing mainly UX, but also UI for websites"
      },
      {
        name: "Distributed Systems",
        description: "Minecraft server QPlay.cz"
      },
      {
        name: "High Availability",
        description: "Minecraft server QPlay.cz"
      },
      {
        name: "Reliability",
        description: "Minecraft server QPlay.cz"
      },
      {
        name: "Optimization",
        description: "Minecraft server QPlay.cz"
      },
      // {
      //   name: "Advanced Algorithms",
      //   description: "School projects"
      // }
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      {
        name: "Team Management",
        description: "QPlay.cz organization"
      },
      {
        name: "Planning",
        description: "QPlay.cz organization"
      },
      {
        name: "Written Communication",
        description: "QPlay.cz organization"
      },
      {
        name: "Conflict Resolution",
        description: "QPlay.cz organization"
      }
    ]
  }
]

const awards: Award[] = [
  {
    title: "Athlete of the Year",
    name: "Czech Technical University in Prague",
    dateFrom: new Date(2019, 0),
    dateTo: null,
    additionalInfo: "Fourth place in the absolute ranking."
  },
  {
    title: "Mathematical Olympiad Cat. A",
    name: "Gymnazium, Plzen, Mikulasske nam. 23",
    dateFrom: new Date(2017, 0),
    dateTo: new Date(2018, 0),
    additionalInfo: "Successful solver of the regional round."
  },
  {
    title: "Rector's Award",
    name: "University of West Bohemia",
    dateFrom: new Date(2017, 0),
    dateTo: null,
    additionalInfo: "Excellent school results and sports results."
  },
  {
    title: "Physics Olympiad Cat. D",
    name: "Gymnazium, Plzen, Mikulasske nam. 23",
    dateFrom: new Date(2014, 0),
    dateTo: new Date(2015, 0),
    additionalInfo: "Successful solver of the regional round."
  }
]

export const data = {
  introduction,
  experiences,
  educations,
  skills,
  awards
}