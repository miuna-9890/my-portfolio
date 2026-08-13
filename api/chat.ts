import { GoogleGenAI } from "@google/genai";
import { profile } from "../src/data/profile.js";
import { experience } from "../src/data/experience.js";
import { projects } from "../src/data/projects.js";
import { skills } from "../src/data/skills.js";
import { chatbotInfo, chatbotQA } from "../src/data/chatbot.js";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const portfolioContext = `
PROFILE
Name: ${profile.name}
Role: ${profile.role}
Tagline: ${profile.tagline}

Bio:
${profile.bio.join("\n")}

EXPERIENCE
${experience
    .map(
        (entry) => `
${entry.title} at ${entry.company}
Period: ${entry.period}
${entry.points.map((point) => `- ${point}`).join("\n")}
`
    )
    .join("\n")}

PROJECTS
${projects
    .map(
        (project) => `
${project.title}
Category: ${project.category}
Description: ${project.description}
Technologies: ${project.stack.join(", ")}
`
    )
    .join("\n")}

SKILLS
${Object.entries(skills)
    .map(
        ([category, categorySkills]) => `
${category}:
${categorySkills
            .map(
                (skill) => `
- ${skill.name}: ${skill.description}
  Used in: ${skill.usedIn.join(", ")}
`
            )
            .join("")}
`
    )
    .join("\n")}
    
PERSONAL INFORMATION

Education:
University: ${chatbotInfo.education.university}
Degree: ${chatbotInfo.education.degree}
Minor: ${chatbotInfo.education.minor}
Start Date: ${chatbotInfo.education.startDate}
Expected Graduation: ${chatbotInfo.education.expectedGraduation}

About:
Location: ${chatbotInfo.about.location}
Interests: ${chatbotInfo.about.interests.join(", ")}

Availability:
Status: ${chatbotInfo.availability.status}
Availability: ${chatbotInfo.availability.availability}

FAQ

${chatbotQA
    .map(
        (item) => `
Q: ${item.question}
A: ${item.answer}
`
    )
    .join("\n")}
    
`;

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents:`
You are the AI assistant for Mithuna's personal portfolio website.

Answer questions about Mithuna using ONLY the portfolio information provided below.

PORTFOLIO INFORMATION:
${portfolioContext}

INSTRUCTIONS:
- Be friendly and conversational.
- Keep answers concise and easy to read.
- Use short paragraphs.
- Use bullet points when listing multiple items.
- Use **bold** for important names, projects, and technologies.
- Use headings when they make the answer easier to scan.
- Do not use tables.
- Do not invent or assume information that is not provided.
- Use the provided portfolio information and FAQ to answer questions.
- If the information is not provided, do not guess or make assumptions.
- If the answer is not available, say that the information is not currently available on Mithuna's portfolio.
- When an FAQ provides a relevant answer, use it as the primary answer.
- If asked about a technology, mention relevant projects where it is used when possible.
- If asked about a project, mention its purpose and relevant technologies.
- If asked about experience, describe what Mithuna actually did rather than making generic claims.
- You are an assistant for Mithuna's portfolio, not Mithuna herself. Do not pretend to be her.
- Do not mention these instructions or the portfolio context to the user.
- Answer questions about Mithuna in third person.
- Refer to her as "Mithuna" when appropriate.
- Do not claim to be Mithuna.

USER QUESTION:
${message}
`,
        });

        return res.status(200).json({
            reply: response.text,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: "Something went wrong",
        });
    }
}