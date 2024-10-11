export interface Introduction {
  name: string;
  position: string;
  city: string;
  languages: Skill[];
  interests: Skill[]
}

export interface WithHeader {
  name: string;
  title: string;
  location: string;
  dateFrom: Date,
  dateTo?: Date,
}

export interface Experience extends WithHeader {
  points: string[]
}

export interface Education extends WithHeader {
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
      level: "Professional"
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
    name: "Software Developer",
    title: "JetBrains s.r.o.",
    dateFrom: new Date(2019, 6),
    location: "Prague, Czech Republic",
    points: [
      "Architected and implemented core components of a new product (not released yet) from the ground up, delivering critical features that enhance user experience.",
      "Took ownership of technical decision-making and design for new features, successfully solving complex technical challenges that improved system performance.",
      // "Collaborating effectively with team members and providing support to ensure task completion.",
      "Leveraging TypeScript with Next.js and Node.js, but also LLMs to achieve the best user experience.",
    ]
  },
  {
    name: "Owner & Lead Software Developer",
    title: "QPlay.cz",
    dateFrom: new Date(2014, 11),
    dateTo: new Date(2024, 2),
    location: "Remote",
    points: [
      "Led a team of 50 people and was the lead developer of 5 people.",
      "Created distributed load balancing and own Kubernetes cluster, improving system stability and reliability.",
      "Developed an internal ticketing system and customer portal, streamlining operations and processing over 100/day tickets.",
      "Managed a high-traffic server infrastructure, ensuring smooth operation and a positive experience for thousands of users daily.",
      "Used Java to achieve stability and robustness and many other technologies and languages.",
      "Handled 2+ mil. users, 10K per day, 2500 concurrently."
    ]
  },
  {
    name: "Frontend Developer",
    title: "net-inout s.r.o.",
    dateFrom: new Date(2018, 4),
    dateTo: new Date(2021, 11),
    location: "Remote",
    points: [
      "Co-created the architecture and developed a frontend part for a system for managing attendance, emphasizing usability and feature completeness.",
      "Designed the UX and UI for the system, achieving an intuitive interface.",
    ]
  },
  {
    name: "Maintainer, Developer",
    title: "Survival-Games.cz",
    dateFrom: new Date(2013, 0),
    dateTo: new Date(2014, 10),
    location: "Remote",
    points: [
      "Created and managed a game server infrastructure from scratch, initially leveraging existing plugins to meet user needs and ensure system functionality.",
      "Scaled the server to handle 500 concurrent players and supported thousands of daily users, maintaining a high level of performance and stability.",
    ]
  }
]

const educations: Education[] = [
  {
    name: "Master's degree, Web Engineering",
    title: "Czech Technical University in Prague",
    dateFrom: new Date(2021, 8),
    dateTo: new Date(2024, 6),
    location: "Prague, Czech Republic",
    additionalInfo: `Grade: GPA ~3.8, Graduated, Thesis title: 'Interactive web documentation for Protocol Buffers'`
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
        level: "Advanced"
      },
      {
        name: "Javascript",
        description: "Frontend and backend of websites",
        level: "Advanced"
      },
      {
        name: "Kotlin",
        description: "Frontend, backend, infrastructure, Minecraft plugins",
        level: "Advanced"
      },
      {
        name: "Java",
        description: "Backend, infrastructure, Minecraft plugins",
        level: "Advanced"
      },
      {
        name: "HTML",
        description: "Websites",
        level: "Advanced"
      },
      {
        name: "CSS/SCSS",
        description: "Websites",
        level: "Advanced"
      },
      {
        name: "C/C++",
        description: "Many projects at school",
        level: "Intermediate"
      },
      {
        name: "Bash",
        description: "Scripts for managing bare metal servers",
        level: "Intermediate"
      },
      {
        name: "C#",
        description: "Backend for payment system",
        level: "Intermediate"
      },
      {
        name: "Go",
        description: "High performance server",
        level: "Beginner"
      },
      {
        name: "Ruby",
        description: "School project and semester of basics",
        level: "Beginner"
      },
      {
        name: "Python",
        description: "School projects, data analysis, ML",
        level: "Intermediate"
      },
      {
        name: "Swift",
        description: "Mobile application developed at school",
        level: "Beginner"
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
      {
        name: "Advanced Algorithms",
        description: "School projects"
      }
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

export const data = {
  introduction,
  experiences,
  educations,
  skills
}