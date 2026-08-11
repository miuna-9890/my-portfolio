export interface Skill {
    name: string;
    icon: string;
    subtitle: string;
    description: string;
    usedIn: string[];
    related: string[];
}

export type SkillCategory =
    | "Frontend"
    | "Backend"
    | "Database"
    | "Testing"
    | "Tools";

export const skills: Record<SkillCategory, Skill[]> = {
    Frontend: [
        {
            name: "React",
            icon: "⚛️",
            subtitle: "UI Library",
            description:
                "Built reusable components, interactive dashboards, and responsive user interfaces across multiple projects.",
            usedIn: [
                "PeerPrep",
                "Power Instruments Internship",
                "Portfolio Website",
            ],
            related: ["JavaScript", "TypeScript", "Redux"],
        },
        {
            name: "JavaScript",
            icon: "🟨",
            subtitle: "Programming Language",
            description:
                "Built interactive web applications and implemented frontend functionality using modern JavaScript.",
            usedIn: [
                "PeerPrep",
                "Power Instruments Internship",
                "Portfolio Website",
            ],
            related: ["React", "TypeScript", "Vite"],
        },
        {
            name: "TypeScript",
            icon: "📘",
            subtitle: "Programming Language",
            description:
                "Developed type-safe React applications with improved maintainability and developer experience.",
            usedIn: [
                "PeerPrep",
                "Power Instruments Internship",
                "Portfolio Website",
            ],
            related: ["React", "JavaScript", "Redux"],
        },
        {
            name: "Tailwind CSS",
            icon: "🎨",
            subtitle: "CSS Framework",
            description:
                "Designed responsive interfaces using utility-first styling and reusable design patterns.",
            usedIn: [
                "Portfolio Website",
                "Power Instruments Internship",
            ],
            related: ["React", "Figma"],
        },
        {
            name: "Redux",
            icon: "🗂️",
            subtitle: "State Management",
            description:
                "Managed shared application state across complex React applications.",
            usedIn: [
                "Power Instruments Internship",
            ],
            related: ["React", "TypeScript"],
        },
    ],

    Backend: [
        {
            name: "Node.js",
            icon: "🟢",
            subtitle: "Backend Runtime",
            description:
                "Built backend services and APIs using Node.js for the PeerPrep application.",
            usedIn: ["PeerPrep"],
            related: ["Express.js", "Prisma"],
        },
        {
            name: "Express.js",
            icon: "🚀",
            subtitle: "Backend Framework",
            description:
                "Built REST APIs and handled backend routing and request processing using Express.js.",
            usedIn: ["PeerPrep"],
            related: ["Node.js", "Prisma"],
        },
        {
            name: "Prisma",
            icon: "🔷",
            subtitle: "ORM",
            description:
                "Used Prisma as a type-safe ORM to interact with the database without writing raw SQL queries.",
            usedIn: ["PeerPrep"],
            related: ["PostgreSQL", "Node.js"],
        },
    ],
    Database: [
        {
            name: "PostgreSQL",
            icon: "🐘",
            subtitle: "Relational Database",
            description:
                "Worked with PostgreSQL to store and manage relational application data across professional and personal projects.",
            usedIn: [
                "PeerPrep",
                "Integro Tech Internship",
            ],
            related: ["Prisma", "Supabase"],
        },
        {
            name: "Supabase",
            icon: "🟢",
            subtitle: "Backend Platform",
            description:
                "Used Supabase with PostgreSQL to manage application data and support different services in PeerPrep.",
            usedIn: ["PeerPrep"],
            related: ["PostgreSQL", "Prisma"],
        },
        {
            name: "MongoDB",
            icon: "🍃",
            subtitle: "NoSQL Database",
            description:
                "Worked with MongoDB while developing and testing software for a system built on a document-based database.",
            usedIn: ["Software Testing Project"],
            related: ["Jest", "Node.js"],
        },
    ],

    Testing: [
        {
            name: "Vitest",
            icon: "🧪",
            subtitle: "Unit Testing",
            description:
                "Wrote unit tests for frontend functionality and components during my Power Instruments internship.",
            usedIn: ["Power Instruments Internship"],
            related: ["React Testing Library", "Playwright"],
        },
        {
            name: "Playwright",
            icon: "🎭",
            subtitle: "End-to-End Testing",
            description:
                "Created end-to-end tests to verify complete user workflows and application behaviour.",
            usedIn: [
                "Power Instruments Internship",
                "Software Testing Project",
            ],
            related: ["Vitest", "Jest"],
        },
        {
            name: "Jest",
            icon: "🃏",
            subtitle: "Testing Framework",
            description:
                "Wrote automated tests for an e-commerce platform as part of a software testing project.",
            usedIn: ["Software Testing Project"],
            related: ["Playwright"],
        },
        {
            name: "JMeter",
            icon: "📈",
            subtitle: "Non-Functional Testing",
            description:
                "Performed non-functional and performance testing to evaluate system behaviour under different loads.",
            usedIn: ["Software Testing Project"],
            related: ["Jest", "Playwright"],
        },
    ],

    Tools: [
        {
            name: "Git",
            icon: "🌿",
            subtitle: "Version Control",
            description:
                "Used Git for version control, branching, and collaboration across individual and team projects.",
            usedIn: ["All Projects"],
            related: ["GitHub"],
        },
        {
            name: "GitHub",
            icon: "🐙",
            subtitle: "Code Collaboration",
            description:
                "Used GitHub to host repositories, collaborate with teammates, and manage development workflows.",
            usedIn: ["Most Projects"],
            related: ["Git"],
        },
        {
            name: "Jira",
            icon: "🔵",
            subtitle: "Project Management",
            description:
                "Used Jira to track tasks, manage development work, and collaborate within an agile team.",
            usedIn: ["Integro Tech Internship"],
            related: ["Git", "GitHub"],
        },
        {
            name: "Figma",
            icon: "🎨",
            subtitle: "UI Design",
            description:
                "Created wireframes and interface designs to plan and communicate user experiences before development.",
            usedIn: [
                "NextStep SuperApp",
            ],
            related: ["React", "Tailwind CSS"],
        },
        {
            name: "Claude",
            icon: "🤖",
            subtitle: "AI-Assisted Development",
            description:
                "Used AI-assisted development to support coding, debugging, test writing, and software development workflows.",
            usedIn: ["Power Instruments Internship", "Personal Projects"],
            related: ["TypeScript", "React", "Vitest", "Playwright"],
        },
    ],
};