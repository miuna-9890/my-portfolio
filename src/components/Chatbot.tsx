import { useState } from "react";

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
                className="fixed bottom-6 right-6 z-50 rounded-full bg-black px-5 py-3 text-white shadow-lg"
            >
                ✦ Ask me
            </button>

            {/* Chat window */}
            {isOpen && (
                <div className="fixed bottom-20 right-6 z-50 flex h-[500px] w-[350px] flex-col rounded-2xl border bg-white shadow-2xl">
                    <div className="border-b p-4">
                        <h2 className="font-semibold">AI Portfolio Assistant</h2>
                        <p className="text-sm text-gray-500">
                            Ask me about Mithuna
                        </p>
                    </div>

                    <div className="flex-1 space-y-3 overflow-y-auto p-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`rounded-xl p-3 text-sm ${
                                    message.role === "user"
                                        ? "ml-auto bg-black text-white"
                                        : "mr-auto bg-gray-100 text-gray-900"
                                } max-w-[85%]`}
                            >
                                {message.content}
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
                                className="rounded-lg bg-black px-4 text-white disabled:opacity-50"
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