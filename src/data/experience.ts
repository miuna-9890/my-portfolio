export interface ExperienceEntry {
    title: string;
    company: string;
    period: string;
    technologies: string[];
    points: string[];
}

export const experience: ExperienceEntry[] = [
    {
        title: "Frontend Engineering Intern",
        company: "Power Instruments Pte Ltd",
        period: "Jul. 2026 — Present",
        technologies: [
            "React",
            "TypeScript",
            "Redux",
            "Tailwind CSS",
            "Vitest",
            "React Testing Library",
            "Playwright",
        ],
        points: [
            "Developed and enhanced frontend features for the EgenKit vessel fuel monitoring platform using React, TypeScript, Redux, and Tailwind CSS.",
            "Built notification management features from UI to API integration, creating reusable components.",
            "Developed unit and end-to-end tests using Vitest, React Testing Library, and Playwright alongside feature development to ensure reliability and prevent regressions.",
            "Enhanced the report settings feature by integrating backend APIs with the frontend, modifying existing components and building new UI components, while adding tests throughout development.",
            "Collaborated with engineers in an Agile environment using Git-based workflows, participating in code reviews and incorporating pull request feedback.",
        ],
    },
    {
        title: "Software Engineering Intern",
        company: "Integro Technologies Pte Ltd",
        period: "May 2025 — Aug. 2025",
        technologies: [
            "SQL",
            "Oracle",
            "PostgreSQL",
        ],
        points: [
            "Developed SQL scripts to combine data from multiple database tables and extract data into importable scripts for internal applications.",
            "Created stored procedures in Oracle and PostgreSQL to support data import and processing workflows.",
            "Tested and debugged SQL scripts and stored procedures to ensure correct data extraction and processing.",
        ],
    },
];