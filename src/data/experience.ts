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
            "Zustand",
            "Tailwind CSS",
            "TanStack Table",
            "Zod",
            "Vitest",
            "React Testing Library",
            "Playwright",
            "React Grid Layout",
        ],
        points: [
            "Developed and enhanced frontend features for production web applications, including the EgenKit vessel fuel monitoring platform and RMS Admin.",
            "Built notification management features from UI implementation through API integration, including reusable components and automated tests.",
            "Integrated backend APIs into report settings and daily report generation workflows, developing and updating UI components to support different configurations.",
            "Migrated existing features to a new platform, including User Management, Roles & Permissions and Report Management, adapting implementations to a different architecture and design system.",
            "Improved maintainability and user experience by adopting Zustand for state management, introducing Zod validation, and proposing alternative UI designs.",
            "Enhanced the dashboard using React Grid Layout, allowing users to customise widget arrangements and resize dashboard components.",
            "Wrote unit and end-to-end tests using Vitest, React Testing Library and Playwright, and collaborated with engineers through code reviews and Git-based workflows.",
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