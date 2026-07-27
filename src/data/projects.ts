export interface Project {
    title: string;
    category: string;
    description: string;
    stack: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        title: "PeerPrep",
        category: "Full-Stack",
        description:
            "A collaborative technical interview preparation platform built with a microservice architecture. Developed scalable backend services, REST APIs, and responsive frontend features to support question management and interview practice.",
        stack: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
            "Docker",
            "Redis",
            "RabbitMQ",
        ],
        link: "https://github.com/miuna-9890/PeerPrep", // replace if different
    },

    {
        title: "NextStep SuperApp",
        category: "Frontend",
        description:
            "An academic planning platform that helps students organize modules and coursework through an intuitive and responsive user interface. Focused on designing reusable components and creating a seamless user experience.",
        stack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Redux",
            "Figma",
        ],
        // link:
    },

    {
        title: "Power Instruments Dashboard",
        category: "Frontend",
        description:
            "Developed production features for a vessel fuel consumption monitoring platform during my internship. Built reusable React components, improved existing interfaces, and implemented comprehensive unit and end-to-end tests.",
        stack: [
            "React",
            "TypeScript",
            "Redux",
            "Tailwind CSS",
            "Playwright",
            "Jest",
        ],
        // Private project
    },

    {
        title: "E-Commerce Testing Suite",
        category: "Testing",
        description:
            "Implemented comprehensive testing for a full-stack e-commerce application, covering unit, integration, end-to-end, and performance testing to improve software reliability and quality.",
        stack: [
            "React",
            "Node.js",
            "MongoDB",
            "Jest",
            "React Testing Library",
            "Playwright",
            "JMeter",
        ],
        // link:
    },

    {
        title: "Personal Portfolio",
        category: "Frontend",
        description:
            "A responsive portfolio website showcasing my software engineering projects, technical skills, and design philosophy through a clean, minimalist interface built from scratch.",
        stack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
        ],
        link: "https://your-portfolio-link.com",
    },
];
