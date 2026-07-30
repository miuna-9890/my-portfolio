export interface ExperienceEntry {
    title: string;
    company: string;
    period: string;
    points: string[];
}

export const experience: ExperienceEntry[] = [
    {
        title: "Software Engineering Intern",
        company: "Your Current Company",
        period: "2026 — Present",
        points: [
            "Built a reusable admin tools feature with dialogs and validation",
            "Added unit test coverage for validation and submission logic",
        ],
    },
    {
        title: "Software Engineering Intern",
        company: "Previous Company",
        period: "2025",
        points: [
            "First bullet point about what you did",
            "Second bullet point",
        ],
    },
];