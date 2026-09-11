export interface Project {
    title: string;
    category: string;
    description: string;
    overview: string;

    context: string;
    role: string;

    stack: string[];
    link?: {
        label: string;
        href: string;
    };
    contributions: string[];
    decisions: {
        title: string;
        description: string;
    }[];
    challenges: string[];
    learned: string[];
    images?: {
        src: string;
        caption: string;
    }[];
    visualFallback?: {
        label: string;
        description: string;
    };
}

export const projects: Project[] = [
    {
        title: "Power Instruments Internship",
        category: "Frontend Engineering",
        description:
            "Contributed production frontend features to the EgenKit vessel fuel monitoring platform. " +
            "Developed notification management features from UI to API integration, including reusable components and comprehensive unit and end-to-end tests. " +
            "Integrated backend APIs into Report Creation feature and built reusable UI components. " +
            "Migrated an existing feature to the new platform architecture by redesigning the UI, replacing Redux with Zustand, and introducing Zod schema validation.",
        overview:
            "A production vessel fuel-monitoring platform where I worked on frontend features, API integration, testing, and migration to a newer application architecture.",
        context: "Frontend Engineering Internship",
        role: "Frontend Engineering Intern",
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

        contributions: [
            "Developed notification management features from UI implementation through API integration.",
            "Built reusable components for notification and report settings workflows.",
            "Integrated backend APIs for report settings and daily report generation.",
            "Migrated an existing feature to the new platform architecture with a redesigned UI.",
            "Replaced Redux state management with Zustand and introduced Zod schema validation.",
            "Implemented unit and end-to-end tests using Vitest, React Testing Library, and Playwright.",
        ],

        decisions: [
            {
                title: "Redux → Zustand",
                description:
                    "Migrated feature-level state management from Redux to Zustand to align with the architecture of the newer platform and simplify state management.",
            },
            {
                title: "Reusable Components",
                description:
                    "Extracted common UI patterns into reusable components to improve consistency and reduce duplication across features.",
            },
            {
                title: "Zod Validation",
                description:
                    "Introduced Zod schemas to validate data and provide a clearer, safer contract when working with API responses.",
            },
            {
                title: "Automated Testing",
                description:
                    "Added unit and end-to-end tests to verify component behaviour and critical user workflows before changes were merged.",
            },
        ],

        challenges: [
            "Understanding an unfamiliar production codebase and following its existing architectural patterns.",
            "Migrating existing functionality while preserving its original behaviour.",
            "Coordinating frontend state, API requests, and UI states across multiple components.",
            "Ensuring redesigned components remained consistent with the new platform design system.",
        ],

        learned: [
            "How to work effectively within a large existing codebase.",
            "How architectural decisions affect maintainability and future development.",
            "The importance of reusable components when building production interfaces.",
            "How automated testing provides confidence when modifying existing functionality.",
        ],
        visualFallback: {
            label: "Production Work",
            description:
                "Visual details from this project aren't publicly available. The case study focuses on the engineering work, architecture, and implementation decisions.",
        },
    },

    {
        title: "PeerPrep",
        category: "Full-Stack",
        description:
            "Developed the Question Service and Question Attempt History Service for a collaborative coding interview platform using a microservices architecture. Designed the question database schema and built REST APIs for creating and retrieving coding questions. Implemented attempt history tracking to persist users' coding attempts and allow them to resume previous attempts, and built the frontend interface for viewing attempt history.",
        overview:
            "A collaborative coding interview platform built with microservices, where I worked across question management, attempt persistence, APIs, and the frontend.",
        context: "NUS CS3219T",
        role: "Full-stack Developer",
        stack: [
            "React",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Prisma",
            "Docker",
        ],

        contributions: [
            "Led development of the Question Service and Question Attempt History Service.",
            "Designed the database schema for coding questions and user attempts.",
            "Built REST APIs for creating and retrieving coding questions.",
            "Implemented persistent attempt history so users could resume previous attempts.",
            "Developed the frontend interface for viewing previous question attempts.",
            "Integrated the services into the wider microservices architecture.",
        ],

        decisions: [
            {
                title: "Microservices",
                description:
                    "Separated question management and attempt history into independent services so each responsibility could be developed and maintained independently.",
            },
            {
                title: "Persistent Attempts",
                description:
                    "Stored coding attempts in the database instead of relying only on temporary client state, allowing users to return to previous attempts.",
            },
            {
                title: "PostgreSQL + Prisma",
                description:
                    "Used PostgreSQL for structured relational data and Prisma to provide a type-safe and maintainable database access layer.",
            },
        ],

        challenges: [
            "Designing a schema that could represent questions, users, and their historical attempts.",
            "Persisting incomplete attempts so users could return to them later.",
            "Integrating independently developed services into the larger application.",
            "Keeping frontend and backend behaviour consistent as the feature evolved.",
        ],

        learned: [
            "How to design APIs around clearly defined service responsibilities.",
            "How database design influences application architecture.",
            "How frontend and backend components work together to support persistent user workflows.",
        ],

        images: [
            {
                src: "/projects/peerprep/question-page.png",
                caption: "Coding question interface",
            },
            {
                src: "/projects/peerprep/attempt-history.png",
                caption: "Question attempt history",
            },
        ],

        link: {
            label: "Github",
            href: "https://github.com/CS3219-AY2526Sem1/cs3219-ay2526s1-project-g10"
        },
    },

    {
        title: "Personal Portfolio",
        category: "Frontend",
        description:
            "Designed and developed a responsive personal portfolio to showcase software engineering projects, technical skills, frontend experience, and artwork. Built reusable React components and interactive UI elements using TypeScript and Tailwind CSS. Integrated the Gemini API to create an AI-powered chatbot that allows visitors to explore my projects, experience, and skills, and deployed the application online.",
        overview:
            "A personal portfolio combining my software engineering work with my graphite and charcoal artwork, with an AI chatbot for exploring my experience.",
        context: "Personal Project",
        role: "Designer & Developer",
        stack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "Gemini API",
        ],

        contributions: [
            "Designed and developed the portfolio from the ground up.",
            "Built reusable React and TypeScript components for different sections.",
            "Created an interactive skills section to present technical experience.",
            "Integrated the Gemini API to build an AI-powered portfolio chatbot.",
            "Designed the visual identity around a graphite, charcoal, and paper-inspired aesthetic.",
            "Deployed the portfolio using Vercel.",
        ],

        decisions: [
            {
                title: "Component-Based Architecture",
                description:
                    "Structured the portfolio using reusable React components so individual sections could be developed and maintained independently.",
            },
            {
                title: "Graphite-Inspired Design",
                description:
                    "Used a charcoal, paper, and sanguine visual system to connect my software engineering work with my graphite and charcoal artwork.",
            },
            {
                title: "AI-Powered Chatbot",
                description:
                    "Integrated Gemini to give visitors an interactive way to explore my experience and projects rather than relying solely on static content.",
            },
        ],

        challenges: [
            "Creating a portfolio that felt visually distinctive without distracting from the actual content.",
            "Designing reusable components while the portfolio was still evolving.",
            "Making the chatbot useful while keeping responses grounded in my actual portfolio information.",
            "Balancing interactive features with a clean and responsive user experience.",
        ],

        learned: [
            "How visual design decisions can reinforce a personal brand.",
            "How to structure a React application around reusable components.",
            "How to integrate an external AI API into a frontend application.",
            "How to design a user experience around both content and interaction.",
        ],

        images: [
            {
                src: "/projects/portfolio/home.png",
                caption: "Portfolio landing page",
            },
            {
                src: "/projects/portfolio/skills.png",
                caption: "Interactive skills section",
            },
            {
                src: "/projects/portfolio/chatbot.png",
                caption: "AI-powered portfolio chatbot",
            },
        ],

    },

    {
        title: "NextStep SuperApp",
        category: "UI/UX Design",
        description:
            "Designed an academic planning platform to help university students organise modules, coursework, and their academic journey. Worked through the complete UI/UX design process, from user research and problem definition to information architecture and wireframing. Created interactive prototypes and high-fidelity designs in Figma, then conducted usability testing and refined the design based on user feedback.",
        overview:
            "An academic planning experience designed to help university students organise their modules and navigate their academic journey through a user-centred design process.",
        context: "NUS UI/UX Project",
        role: "UI/UX Figma Designer",
        stack: [
            "Figma",
            "UX Research",
            "Information Architecture",
            "Wireframing",
            "Prototyping",
            "Usability Testing",
        ],

        contributions: [
            "Conducted user research to understand students' academic planning difficulties.",
            "Defined the key user problems and requirements for the application.",
            "Designed the information architecture and navigation structure.",
            "Created wireframes and interactive prototypes in Figma.",
            "Developed high-fidelity UI designs for the core workflows.",
            "Conducted usability testing and iterated on the designs based on feedback.",
        ],

        decisions: [
            {
                title: "User-Centred Design",
                description:
                    "Used user research and usability testing throughout the design process to ensure that the proposed solution addressed actual student needs.",
            },
            {
                title: "Information Architecture",
                description:
                    "Structured academic information around the tasks students perform most frequently so important information could be accessed without unnecessary navigation.",
            },
            {
                title: "Iterative Prototyping",
                description:
                    "Used progressively higher-fidelity prototypes to test ideas early before committing to the final visual design.",

            },
        ],

        challenges: [
            "Identifying the most important problems among the many aspects of university academic planning.",
            "Organising a large amount of academic information without overwhelming users.",
            "Balancing functionality with a simple and approachable interface.",
            "Turning usability feedback into concrete design improvements.",
        ],

        learned: [
            "How to translate user research into design requirements.",
            "How information architecture affects usability.",
            "The value of testing designs with users before finalising them.",
            "How to iterate on a design based on evidence rather than assumptions.",
        ],

        images: [
            {
                src: "/projects/nextstep/home.png",
                caption: "NextStep module planning",
            },
            {
                src: "/projects/nextstep/planner.png",
                caption: "Academic planning interface",
            },
            {
                src: "/projects/nextstep/graduation.png",
                caption: "Interactive Figma prototype",
            },
        ],

        link: {
            label: "View Figma Prototype",
            href: "https://www.figma.com/design/sJzqTLwafJhnXnoSAna6ZM/CS3240?node-id=26-7&p=f",
        },
    },

    {
        title: "E-Commerce Platform Testing",
        category: "Testing",
        description:
            "Designed and implemented the testing module for a full-stack e-commerce application, covering unit, integration, and end-to-end testing. Developed backend controller tests using Jest and MongoMemoryServer to validate API behaviour, and built frontend tests with React Testing Library and Playwright to verify critical user workflows and interactions.",
        overview:
            "A testing-focused project covering the full testing stack of an e-commerce application, from backend controllers and database interactions to end-to-end user workflows.",
        context: "NUS Software Engineering Project",
        role: "Test Engineer",
        stack: [
            "Jest",
            "React Testing Library",
            "Playwright",
            "MongoDB",
            "MongoMemoryServer",
        ],

        contributions: [
            "Designed the overall testing strategy for the application.",
            "Implemented backend controller tests using Jest.",
            "Used MongoMemoryServer to test database interactions in isolation.",
            "Built frontend component and interaction tests using React Testing Library.",
            "Implemented end-to-end tests using Playwright for critical user workflows.",
            "Covered unit, integration, and end-to-end testing scenarios.",
        ],

        decisions: [
            {
                title: "Testing Pyramid",
                description:
                    "Used different levels of testing to validate individual units, interactions between components, and complete user workflows.",
            },
            {
                title: "In-Memory Database",
                description:
                    "Used MongoMemoryServer to create an isolated database environment for backend tests without relying on a shared external database.",
            },
            {
                title: "Playwright E2E Testing",
                description:
                    "Used Playwright to verify important workflows from the user's perspective across the frontend and backend.",
            },
        ],

        challenges: [
            "Designing meaningful test cases rather than only testing the happy path.",
            "Keeping database-dependent tests isolated and repeatable.",
            "Testing asynchronous frontend behaviour and user interactions.",
            "Balancing comprehensive coverage with maintainable test code.",
        ],

        learned: [
            "How different testing levels complement one another.",
            "How to isolate backend tests from external database dependencies.",
            "How to test real user workflows rather than individual functions alone.",
            "How good test coverage can make refactoring safer.",
        ],

        link: {
            label: "Github",
            href: "https://github.com/cs4218/cs4218-2520-ecom-project-cs4218-2520-team19"
        },

        visualFallback: {
            label: "Testing Project",
            description:
                "This project focused on automated testing across backend, frontend, database, and end-to-end workflows.",
        },
    },

    {
        title: "Cher",
        category: "Software Engineering",
        description:
            "Enhanced an address book application as part of a team software engineering project. Developed batch deletion functionality to allow users to remove multiple contacts efficiently and implemented advanced filtering options for easier contact management. Collaborated through GitHub, contributed to feature planning and code reviews, and tested features to maintain software quality.",
        overview:
            "An address book application enhanced with batch operations and advanced filtering, developed collaboratively within a team software engineering project.",
        context: "NUS CS2103T",
        role: "Software Engineer",
        stack: [
            "Java",
            "JavaFX",
            "JUnit",
            "Git",
            "GitHub",
        ],

        contributions: [
            "Implemented batch deletion for removing multiple contacts efficiently.",
            "Developed advanced filtering functionality for contact management.",
            "Worked within an existing Java codebase and followed established architecture.",
            "Participated in feature planning and GitHub-based code reviews.",
            "Tested implemented features to maintain software quality.",
        ],

        decisions: [
            {
                title: "Batch Operations",
                description:
                    "Implemented batch deletion to reduce repetitive user actions when managing multiple contacts.",
            },
            {
                title: "Advanced Filtering",
                description:
                    "Added filtering options to help users quickly locate relevant contacts instead of manually searching through the entire address book.",
            },
            {
                title: "Existing Architecture",
                description:
                    "Extended the existing application architecture rather than introducing unnecessary structural changes, keeping the team's codebase consistent.",
            },
        ],

        challenges: [
            "Understanding an existing codebase and contributing without breaking existing functionality.",
            "Ensuring batch operations behaved correctly for different selections.",
            "Integrating new filtering behaviour with existing contact management features.",
        ],

        learned: [
            "How to contribute effectively to a shared codebase.",
            "How code reviews improve maintainability and catch issues early.",
            "How to design features around user workflows rather than isolated functionality.",
        ],

        link: {
            label: "Github",
            href: "https://github.com/AY2425S1-CS2103T-W13-1/tp"
        },

        visualFallback: {
            label: "Cli Desktop Application",
            description:
                "Visual details from this project aren't available now. Will be added soon",
        },
    },

    {
        title: "EmoteX",
        category: "Software Engineering",
        description:
            "Developed an interactive chatbot and task management application as an individual software engineering project. Designed an Inside Out-inspired user interface using JavaFX to create a more engaging user experience. Implemented core task management functionality including adding, deleting, updating, and searching tasks, while using GitHub for version control throughout development.",
        overview:
            "An interactive task management application inspired by Inside Out, combining a themed JavaFX interface with chatbot-based task management.",
        context: "NUS Individual Project",
        role: "Software Developer",
        stack: [
            "Java",
            "JavaFX",
            "Git",
            "GitHub",
        ],

        contributions: [
            "Designed and developed the application independently.",
            "Created an Inside Out-inspired JavaFX user interface.",
            "Implemented task creation, deletion, updating, and searching.",
            "Developed chatbot interactions for managing tasks.",
            "Used GitHub for version control throughout development.",
        ],

        decisions: [
            {
                title: "Themed User Interface",
                description:
                    "Used an Inside Out-inspired visual theme to make the task management application more engaging and memorable.",
            },
            {
                title: "Command-Based Interaction",
                description:
                    "Designed task management around clear user commands to keep interactions predictable and easy to understand.",
            },
        ],

        challenges: [
            "Designing both the application functionality and interface independently.",
            "Creating a consistent visual theme while maintaining usability.",
            "Handling different task operations and user inputs reliably.",
        ],

        learned: [
            "How to take an application from an idea to a working implementation independently.",
            "How UI design can influence the personality of an application.",
            "How to structure task management logic around different user actions.",
        ],

        images: [
            {
                src: "/projects/emotex/home.png",
                caption: "EmoteX interface",
            },
            {
                src: "/projects/emotex/tasks.png",
                caption: "Task management interface",
            },
        ],

        link: {
            label: "Github",
            href: "https://github.com/miuna9890/ip",
        }
    },

    {
        title: "LingoCard",
        category: "Mobile Development",
        description:
            "Built a language learning mobile application as a personal project to explore full-stack application development. Developed the mobile interface using React Native and integrated Supabase as the backend. Implemented features for language quizzes and flashcards, along with user authentication and backend data management.",
        overview:
            "A mobile language-learning application combining flashcards, quizzes, authentication, and persistent user data to support vocabulary practice.",
        context: "Personal Project",
        role: "Mobile Developer",
        stack: [
            "React Native",
            "Supabase",
            "JavaScript",
            "Git",
            "GitHub",
        ],

        contributions: [
            "Designed and developed the mobile application independently.",
            "Built the mobile interface using React Native.",
            "Integrated Supabase as the backend service.",
            "Implemented flashcard-based language learning.",
            "Developed language quizzes for interactive practice.",
            "Implemented user authentication and backend data management.",
        ],

        decisions: [
            {
                title: "React Native",
                description:
                    "Used React Native to explore cross-platform mobile development while building on familiar React concepts.",
            },
            {
                title: "Supabase",
                description:
                    "Selected Supabase to provide authentication, database functionality, and backend services without building a backend from scratch.",
            },
            {
                title: "Multiple Learning Modes",
                description:
                    "Combined flashcards and quizzes to give users different ways to practise and reinforce vocabulary.",
            },
        ],

        challenges: [
            "Learning mobile development while building the application independently.",
            "Connecting the mobile frontend to persistent backend data.",
            "Managing authentication and user-specific data.",
            "Designing learning interactions that were simple enough for repeated use.",
        ],

        learned: [
            "How mobile development differs from traditional web development.",
            "How to integrate a backend-as-a-service into an application.",
            "How authentication and user-specific data work together.",
            "How personal projects can be used to explore unfamiliar technologies.",
        ],

        images: [
            {
                src: "/projects/lingocard/home.png",
                caption: "LingoCard home screen",
            },
            {
                src: "/projects/lingocard/reminder.png",
                caption: "Reminders",
            },
            {
                src: "/projects/lingocard/edit.png",
                caption: "Edit reminders",
            },
        ],

        link: {
            label: "Github",
            href: "https://github.com/miuna9890/Lingo-Main"
        },
    },
];