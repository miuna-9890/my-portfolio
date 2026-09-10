export interface Project {
    title: string;
    category: string;
    description: string;
    stack: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        title: "Power Instruments Dashboard",
        category: "Frontend Engineering",
        description:
            "Contributed production frontend features to the EgenKit vessel fuel monitoring platform. Developed notification management features from UI to API integration, including reusable components and comprehensive unit and end-to-end tests. Integrated backend APIs into Report Settings and built reusable UI components. Migrated an existing feature to the new platform architecture by redesigning the UI, replacing Redux with Zustand, and introducing Zod schema validation.",
        stack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Redux",
            "Zustand",
            "Zod",
            "TanStack Table",
            "Vitest",
            "React Testing Library",
            "Playwright",
        ],
    },

    {
        title: "PeerPrep",
        category: "Full-Stack",
        description:
            "Developed the Question Service and Question Attempt History Service for a collaborative coding interview platform using a microservices architecture. Designed the question database schema and built REST APIs for creating and retrieving coding questions. Implemented attempt history tracking to persist users' coding attempts and allow them to resume previous attempts, and built the frontend interface for viewing attempt history.",
        stack: [
            "React",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Prisma",
            "Docker",
        ],
        link: "https://github.com/CS3219-AY2526Sem1/cs3219-ay2526s1-project-g10",
    },

    {
        title: "Personal Portfolio",
        category: "Frontend",
        description:
            "Designed and developed a responsive personal portfolio to showcase software engineering projects, technical skills, frontend experience, and artwork. Built reusable React components and interactive UI elements using TypeScript and Tailwind CSS. Integrated the Gemini API to create an AI-powered chatbot that allows visitors to explore my projects, experience, and skills, and deployed the application online.",
        stack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "Gemini API",
        ],
        link: "https://my-portfolio-seven-omega-wujhu5thvk.vercel.app/",
    },

    {
        title: "NextStep SuperApp",
        category: "UI/UX Design",
        description:
            "Designed an academic planning platform to help university students organise modules, coursework, and their academic journey. Worked through the complete UI/UX design process, from user research and problem definition to information architecture and wireframing. Created interactive prototypes and high-fidelity designs in Figma, then conducted usability testing and refined the design based on user feedback.",
        stack: [
            "Figma",
            "UX Research",
            "Information Architecture",
            "Wireframing",
            "Prototyping",
            "Usability Testing",
        ],
        link: "https://10mithuna.wixsite.com/nextstep",
    },

    {
        title: "E-Commerce Platform Testing",
        category: "Testing",
        description:
            "Designed and implemented the testing module for a full-stack e-commerce application, covering unit, integration, and end-to-end testing. Developed backend controller tests using Jest and MongoMemoryServer to validate API behaviour, and built frontend tests with React Testing Library and Playwright to verify critical user workflows and interactions.",
        stack: [
            "Jest",
            "React Testing Library",
            "Playwright",
            "MongoDB",
            "MongoMemoryServer",
        ],
        link: "https://github.com/cs4218/cs4218-2520-ecom-project-cs4218-2520-team19",
    },

    {
        title: "Cher",
        category: "Software Engineering",
        description:
            "Enhanced an address book application as part of a team software engineering project. Developed batch deletion functionality to allow users to remove multiple contacts efficiently and implemented advanced filtering options for easier contact management. Collaborated through GitHub, contributed to feature planning and code reviews, and tested features to maintain software quality.",
        stack: [
            "Java",
            "JavaFX",
            "JUnit",
            "Git",
            "GitHub",
        ],
        link: "https://github.com/AY2425S1-CS2103T-W13-1/tp",
    },

    {
        title: "EmoteX",
        category: "Software Engineering",
        description:
            "Developed an interactive chatbot and task management application as an individual software engineering project. Designed an Inside Out-inspired user interface using JavaFX to create a more engaging user experience. Implemented core task management functionality including adding, deleting, updating, and searching tasks, while using GitHub for version control throughout development.",
        stack: [
            "Java",
            "JavaFX",
            "Git",
            "GitHub",
        ],
        link: "https://github.com/miuna9890/ip",
    },

    {
        title: "LingoCard",
        category: "Mobile Development",
        description:
            "Built a language learning mobile application as a personal project to explore full-stack application development. Developed the mobile interface using React Native and integrated Supabase as the backend. Implemented features for language quizzes and flashcards, along with user authentication and backend data management.",
        stack: [
            "React Native",
            "Supabase",
            "JavaScript",
            "Git",
            "GitHub",
        ],
        link: "https://github.com/miuna9890/Lingo-Main",
    },
];