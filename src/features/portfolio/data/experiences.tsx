import {
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  LightbulbIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "iit-madras",
    companyName: "Indian Institute of Technology Madras",
    companyLogo: "https://assets.chanhdai.com/images/companies/iitm.svg",
    companyWebsite: "https://www.iitm.ac.in/",
    positions: [
      {
        id: "1",
        title: "Student (BS in Data Science & Applications)",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Full-time",
        icon: <GraduationCapIcon />,
        description:
          "Pursuing Bachelor of Science in Data Science and Applications. Learning foundations of data science, programming, and mathematics.",
        skills: ["Data Science", "Python", "Mathematics", "Statistics"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "template-experience",
    companyName: "Company Name",
    companyLogo: "https://assets.chanhdai.com/images/companies/placeholder.svg",
    companyWebsite: "https://example.com",
    positions: [
      {
        id: "1",
        title: "Position Title",
        employmentPeriod: {
          start: "01.2026",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: "- Responsibility 1\n- Responsibility 2",
        skills: ["Skill 1", "Skill 2"],
      },
    ],
  },
]
