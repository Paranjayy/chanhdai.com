import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    "id": "current-company",
    "companyName": "Your Current Company",
    "companyLogo": "https://via.placeholder.com/100x100.png?text=Logo",
    "companyWebsite": "https://yourcompany.com",
    "isCurrentEmployer": true,
    "positions": [
      {
        "id": "position-1",
        "title": "Your Job Title",
        "employmentPeriod": {
          "start": "01.2024"
        },
        "employmentType": "Full-time",
        "icon": "code",
        "description": "Description of your role and responsibilities.",
        "skills": [
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind CSS"
        ],
        "isExpanded": true
      }
    ]
  },
  {
    "id": "previous-company",
    "companyName": "Previous Company",
    "companyLogo": "https://via.placeholder.com/100x100.png?text=Logo2",
    "companyWebsite": "https://previouscompany.com",
    "positions": [
      {
        "id": "position-2",
        "title": "Previous Position",
        "employmentPeriod": {
          "start": "01.2022",
          "end": "12.2023"
        },
        "employmentType": "Full-time",
        "icon": "code",
        "description": "Description of what you did in this role.",
        "skills": [
          "JavaScript",
          "Node.js",
          "Express",
          "MongoDB"
        ]
      }
    ]
  },
  {
    "id": "education",
    "companyName": "Education",
    "positions": [
      {
        "id": "education-1",
        "title": "Your University",
        "employmentPeriod": {
          "start": "09.2018",
          "end": "06.2022"
        },
        "icon": "education",
        "description": "- Degree in Computer Science\n- Relevant coursework and achievements",
        "skills": [
          "Computer Science",
          "Algorithms",
          "Data Structures"
        ]
      }
    ]
  }
];
