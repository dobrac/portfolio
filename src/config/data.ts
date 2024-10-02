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
      "Designing UI/UX, architecting, and implementing a new product from the ground up as part of a 5-person team.",
      "Frequently taking the lead in designing new features, making key technical decisions, and solving complex technical challenges.",
      "Demonstrated strong communication skills by collaborating effectively with team members and providing support to ensure task completion.",
      "Currently leveraging TypeScript with Next.js and Node.js for full stack development; previously developed both frontend and backend using Kotlin."
    ]
  },
  {
    name: "Owner & Lead Software Developer",
    title: "QPlay.cz",
    dateFrom: new Date(2014, 11),
    dateTo: new Date(2024, 2),
    location: "Fully Remote",
    points: [
      "Led a team of 50 people and was the lead developer of 5 people.",
      "Designed and implemented distributed dynamic servers load balancing, internal ticket system, user customer portal, automatic deployment, performance, scalability, monitoring, managed own Kubernetes cluster, and more.",
      "Used various technologies and languages, but mainly the Java language.",
      "Successfully handled 2+ mil. users, 10K per day, 2500 concurrently."
    ]
  },
  {
    name: "Frontend Developer",
    title: "net-inout s.r.o.",
    dateFrom: new Date(2018, 4),
    dateTo: new Date(2021, 11),
    location: "Fully Remote",
    points: [
      "Co-created the architecture and developed a frontend part for a system for managing attendance.",
      "My main focus was on the usability and completeness of the features."
    ]
  },
  {
    name: "Maintainer, Developer",
    title: "Survival-Games.cz",
    dateFrom: new Date(2013, 0),
    dateTo: new Date(2014, 10),
    location: "Fully Remote",
    points: [
      "Built and managed the server from the beginning. Initially only using existing solutions (plugins).",
      "Achieved 500 concurrent players. Thousands of users per day.",
      "Later on, this was my first motivation for learning programming, so I learned Java."
    ]
  }
]

const educations: Education[] = [
  {
    name: "Master's degree, Web Engineering",
    title: "Faculty of Information Technology, CTU",
    dateFrom: new Date(2021, 8),
    dateTo: new Date(2024, 6),
    location: "Prague, Czech Republic",
    additionalInfo: `Grade: GPA ~3.8
    Graduated, Master thesis title: 'Interactive web documentation for Protocol Buffers'`
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
        description: "Frontend and backend of websites"
      },
      {
        name: "Javascript",
        description: "Frontend and backend of websites"
      },
      {
        name: "Kotlin",
        description: "Frontend, backend, infrastructure, Minecraft plugins"
      },
      {
        name: "Java",
        description: "Backend, infrastructure, Minecraft plugins"
      },
      {
        name: "HTML",
        description: "Websites"
      },
      {
        name: "CSS/SCSS",
        description: "Websites"
      },
      {
        name: "C/C++",
        description: "Many projects at school"
      },
      {
        name: "Bash",
        description: "Scripts for managing bare metal servers"
      },
      {
        name: "C#",
        description: "Backend for payment system"
      },
      {
        name: "Go",
        description: "High performance server"
      },
      {
        name: "Ruby",
        description: "School project and semester of basics"
      },
      {
        name: "Python",
        description: "School projects, data analysis, ML"
      },
      {
        name: "Swift",
        description: "Mobile application developed at school"
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
    name: "Soft",
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