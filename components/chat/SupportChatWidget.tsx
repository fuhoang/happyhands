"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { getSupportReply, type SupportChatReply } from "@/lib/support-chat";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
  links?: SupportChatReply["links"];
  prompts?: string[];
};

const starterPrompts = [
  "What services do you offer?",
  "How do I get a quote?",
  "How can I contact Happy Hands?",
  "How do I apply as a cleaner?",
];

const initialMessage: ChatMessage = {
  id: 1,
  role: "assistant",
  text:
    "Hi, I am the Happy Hands support assistant. I can help with services, quotes, contact details, recruitment, and case studies.",
  prompts: starterPrompts,
};

export default function SupportChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);

  const nextId = useMemo(() => messages.length + 1, [messages.length]);

  function appendReply(prompt: string) {
    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt) {
      return;
    }

    const reply = getSupportReply(trimmedPrompt);

    setMessages((current) => [
      ...current,
      { id: nextId, role: "user", text: trimmedPrompt },
      { id: nextId + 1, role: "assistant", text: reply.text, links: reply.links },
    ]);
    setInput("");
    setOpen(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    appendReply(input);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-1rem)] flex-col items-end gap-3 sm:bottom-6 sm:right-6 sm:max-w-[calc(100vw-3rem)]">
      {open ? (
        <div className="max-h-[min(80vh,42rem)] w-[min(24rem,calc(100vw-1rem))] overflow-hidden rounded-xl border border-[#d5e7d5] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:w-[min(24rem,calc(100vw-3rem))]">
          <div className="flex items-start justify-between gap-4 bg-[linear-gradient(135deg,#006600,#008000)] px-5 py-4 text-white">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/78">
                AI support
              </p>
              <h2 className="mt-1 text-lg font-black">Happy Hands Assistant</h2>
              <p className="mt-1 text-sm leading-6 text-white/82">
                Quick answers about services, quotes, contact, and cleaner jobs.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12 transition hover:bg-white/20"
              aria-label="Close support chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-[min(52vh,26rem)] space-y-4 overflow-y-auto bg-[#f7fbf7] px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={message.role === "user" ? "ml-auto max-w-[85%]" : "max-w-[88%]"}
              >
                <div
                  className={
                    message.role === "user"
                      ? "rounded-2xl rounded-br-md bg-[#008000] px-4 py-3 text-sm leading-6 text-white shadow-[0_12px_24px_rgba(0,128,0,0.16)]"
                      : "rounded-2xl rounded-bl-md border border-[#dbeadb] bg-white px-4 py-3 text-sm leading-6 text-[#1f2a1f] shadow-[0_10px_24px_rgba(20,51,22,0.06)]"
                  }
                >
                  {message.text}
                </div>

                {message.links?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {message.links.map((link) =>
                      link.href.startsWith("/") ? (
                        <Link
                          key={`${message.id}-${link.href}`}
                          href={link.href}
                          className="inline-flex rounded-full border border-[#cfe4cf] bg-white px-3 py-2 text-xs font-black text-[#008000] transition hover:border-[#008000] hover:text-[#006600]"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          key={`${message.id}-${link.href}`}
                          href={link.href}
                          className="inline-flex rounded-full border border-[#cfe4cf] bg-white px-3 py-2 text-xs font-black text-[#008000] transition hover:border-[#008000] hover:text-[#006600]"
                        >
                          {link.label}
                        </a>
                      )
                    )}
                  </div>
                ) : null}

                {message.prompts?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {message.prompts.map((prompt) => (
                      <button
                        key={`${message.id}-${prompt}`}
                        type="button"
                        onClick={() => appendReply(prompt)}
                        className="inline-flex rounded-full border border-[#cfe4cf] bg-white px-3 py-2 text-xs font-black text-[#008000] transition hover:border-[#008000] hover:text-[#006600]"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="border-t border-[#dbeadb] bg-white px-4 py-4">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <div className="relative flex-1">
                <Sparkles className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5f7d5f]" />
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about services, quotes, or jobs"
                  className="h-12 w-full rounded-full border border-[#d5e7d5] bg-[#f7fbf7] pl-10 pr-4 text-sm text-[#163316] outline-none transition focus:border-[#008000] focus:bg-white"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#008000] text-white shadow-[0_12px_24px_rgba(0,128,0,0.18)] transition hover:bg-[#006600]"
                aria-label="Send chat message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#006600,#008000)] text-white shadow-[0_20px_45px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5"
        aria-label={open ? "Hide support chat" : "Open support chat"}
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  );
}
