"use client";

import { useState } from "react";
import { SendHorizonal } from "lucide-react";

// Define the message type
type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data: { reply: string } = await res.json();
      const botMessage: Message = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col h-screen text-white w-full mx-auto">
      <h1 className="text-white py-5 font-bold text-[30px] px-5">
        Aaryan LLM - Gemini
      </h1>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xl px-5 py-6 rounded-lg ${
              msg.sender === "user"
                ? "ml-auto bg-[#2A2A72]"
                : "mr-auto bg-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="mr-auto max-w-xl py-2 rounded-lg text-gray-400 animate-pulse">
            Aaryan is typing...
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 px-4 py-5 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="p-5 bg-[#2A2A72] rounded-lg text-white"
          >
            <SendHorizonal size={20} />
          </button>
        </div>
      </div>
    </main>
  );
}
