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
            related: ["TypeScript", "Redux", "Tailwind CSS"],
        },
        {
            name: "TypeScript",
            icon: "📘",
            subtitle: "Language",
            description:
                "Developed type-safe React applications with improved maintainability and developer experience.",
            usedIn: [
                "PeerPrep",
                "Power Instruments Internship",
                "Portfolio Website",
            ],
            related: ["React", "Next.js"],
        },
        {
            name: "Tailwind CSS",
            icon: "🎨",
            subtitle: "CSS Framework",
            description:
                "Designed responsive interfaces using utility-first styling and reusable design patterns.",
            usedIn: [
                "Portfolio Website",
                "NextStep SuperApp",
                "Power Instruments Internship",
            ],
            related: ["React", "Figma"],
        },
        {
            name: "Redux",
            icon: "🗂️",
            subtitle: "State Management",
            description:
                "Managed shared application state across complex frontend applications.",
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
            subtitle: "Runtime",
            description:
                "Developed backend services and REST APIs using Express and Node.js.",
            usedIn: ["PeerPrep"],
            related: ["Express.js", "Prisma"],
        },
        {
            name: "Express.js",
            icon: "🚀",
            subtitle: "Backend Framework",
            description:
                "Built RESTful APIs and handled routing for backend microservices.",
            usedIn: ["PeerPrep"],
            related: ["Node.js", "REST APIs"],
        },
        {
            name: "Prisma",
            icon: "🔷",
            subtitle: "ORM",
            description:
                "Managed database schemas and queries with a type-safe ORM.",
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
                "Designed relational schemas and stored application data efficiently.",
            usedIn: ["PeerPrep"],
            related: ["Prisma", "Supabase"],
        },
        {
            name: "Supabase",
            icon: "🟢",
            subtitle: "Backend Platform",
            description:
                "Used PostgreSQL through Supabase for authentication and database management.",
            usedIn: ["PeerPrep"],
            related: ["PostgreSQL"],
        },
        {
            name: "MongoDB",
            icon: "🍃",
            subtitle: "NoSQL Database",
            description:
                "Worked with document-based databases during coursework and testing.",
            usedIn: ["E-commerce Project"],
            related: ["Node.js"],
        },
        {
            name: "Redis",
            icon: "🔴",
            subtitle: "Caching",
            description:
                "Used Redis for caching and improving application performance.",
            usedIn: ["PeerPrep"],
            related: ["RabbitMQ"],
        },
    ],

    Testing: [
        {
            name: "Jest",
            icon: "🃏",
            subtitle: "Unit Testing",
            description:
                "Wrote unit tests for backend controllers and frontend components.",
            usedIn: ["E-commerce Project"],
            related: ["React Testing Library"],
        },
        {
            name: "React Testing Library",
            icon: "🧪",
            subtitle: "Frontend Testing",
            description:
                "Created integration tests to verify user interactions and UI behaviour.",
            usedIn: ["E-commerce Project"],
            related: ["Jest"],
        },
        {
            name: "Playwright",
            icon: "🎭",
            subtitle: "End-to-End Testing",
            description:
                "Automated user flows including authentication and checkout processes.",
            usedIn: ["E-commerce Project"],
            related: ["Jest"],
        },
        {
            name: "JMeter",
            icon: "📈",
            subtitle: "Performance Testing",
            description:
                "Performed stress testing and analysed system performance under heavy loads.",
            usedIn: ["E-commerce Project"],
            related: [],
        },
    ],

    Tools: [
        {
            name: "Git",
            icon: "🌿",
            subtitle: "Version Control",
            description:
                "Collaborated on team projects using Git branching and pull request workflows.",
            usedIn: [
                "All Projects",
            ],
            related: ["GitHub"],
        },
        {
            name: "Docker",
            icon: "🐳",
            subtitle: "Containerization",
            description:
                "Containerized applications and managed multi-service environments with Docker Compose.",
            usedIn: ["PeerPrep"],
            related: ["RabbitMQ"],
        },
        {
            name: "RabbitMQ",
            icon: "📨",
            subtitle: "Message Queue",
            description:
                "Implemented asynchronous communication between microservices.",
            usedIn: ["PeerPrep"],
            related: ["Docker"],
        },
        {
            name: "Figma",
            icon: "🎨",
            subtitle: "UI Design",
            description:
                "Designed wireframes, prototypes, and user interfaces before development.",
            usedIn: [
                "NextStep SuperApp",
                "Portfolio Website",
            ],
            related: ["Tailwind CSS"],
        },
    ],
};