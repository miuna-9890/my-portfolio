import { useState } from "react";
import ReactMarkdown from "react-markdown";

type Message = {
    role: "user" | "bot";
    content: string;
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    const [messages, setMessages] = useState<Message[]>([
        {
            role: "bot",
            content:
                "Hi! I'm Mithuna's AI portfolio assistant. Ask me about her projects, skills, experience, or artwork!",
        },
    ]);

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userMessage = input.trim();

        setInput("");

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: userMessage,
            },
        ]);

        setLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: userMessage,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setMessages((prev) => [
                ...prev,
                {
                    role: "bot",
                    content: data.reply,
                },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "bot",
                    content: "Sorry, I couldn't answer that right now.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Chat button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 rounded-full bg-sanguine px-5 py-3 text-paper shadow-lg hover:bg-sanguine-dim hover:cursor-pointer"
            >
                ✦ Ask me
            </button>

            {/* Chat window */}
            {isOpen && (
                <div className="fixed bottom-20 right-6 z-50 flex h-[500px] w-[350px] flex-col rounded-2xl border bg-paper shadow-2xl">
                    <div className="border-b border-graphite p-4">
                        <h2 className="font-semibold text-charcoal">
                            ✏️ AI Portfolio Assistant
                        </h2>
                        <p className="text-sm text-graphite-light">
                            Ask me about Mithuna
                        </p>
                    </div>

                    <div className="flex-1 space-y-3 overflow-y-auto p-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`rounded-xl p-3 text-sm ${
                                    message.role === "user"
                                        ? "ml-auto bg-charcoal text-white"
                                        : "mr-auto bg-gray-100 text-gray-900"
                                } max-w-[85%]`}
                            >
                                <ReactMarkdown
                                    components={{
                                        p: ({ children }) => (
                                            <p className="mb-2 last:mb-0">{children}</p>
                                        ),

                                        strong: ({ children }) => (
                                            <strong className="font-semibold">{children}</strong>
                                        ),

                                        ul: ({ children }) => (
                                            <ul className="mb-2 ml-4 list-disc space-y-1">
                                                {children}
                                            </ul>
                                        ),

                                        ol: ({ children }) => (
                                            <ol className="mb-2 ml-4 list-decimal space-y-1">
                                                {children}
                                            </ol>
                                        ),

                                        li: ({ children }) => <li>{children}</li>,

                                        h1: ({ children }) => (
                                            <h1 className="mb-2 text-base font-semibold">
                                                {children}
                                            </h1>
                                        ),

                                        h2: ({ children }) => (
                                            <h2 className="mb-2 text-base font-semibold">
                                                {children}
                                            </h2>
                                        ),

                                        h3: ({ children }) => (
                                            <h3 className="mb-1 font-semibold">
                                                {children}
                                            </h3>
                                        ),
                                    }}
                                >
                                    {message.content}
                                </ReactMarkdown>
                            </div>
                        ))}

                        {loading && (
                            <div className="mr-auto rounded-xl bg-gray-100 p-3 text-sm">
                                Thinking...
                            </div>
                        )}
                    </div>

                    <div className="border-t p-3">
                        <div className="flex gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        sendMessage();
                                    }
                                }}
                                placeholder="Ask something..."
                                className="flex-1 rounded-lg border px-3 py-2 text-sm outline-none"
                            />

                            <button
                                onClick={sendMessage}
                                disabled={loading}
                                className="rounded-lg bg-charcoal px-4 text-white disabled:opacity-50"
                            >
                                ↑
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}