"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpFromLine, Sparkles, Xmark } from "@gravity-ui/icons";
import { siteConfig } from "@/utils/site";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  "What has Nafiul built with React?",
  "Is he available for an internship?",
  "Which project should I look at first?",
];

const GREETING =
  "Hi — I can answer questions about Nafiul's background, skills and projects, using only what is on this site.";

/**
 * Floating portfolio assistant. Talks to /api/assistant, which holds the
 * Gemini key server-side. Degrades to a clear message when unconfigured.
 */
export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: GREETING },
  ]);

  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  const send = async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || isLoading) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];

    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(1) }),
      });

      const data = await response.json().catch(() => ({}));

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            response.ok && data.answer
              ? data.answer
              : (data.error ?? "Something went wrong. Please try again."),
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: `I could not reach the server. You can email ${siteConfig.email} instead.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="portfolio-assistant-panel"
        aria-label={isOpen ? "Close portfolio assistant" : "Ask about Nafiul"}
        className="fixed right-4 bottom-4 z-50 inline-flex h-12 items-center gap-2 rounded-full border border-accent/30 bg-surface px-4 text-sm font-medium text-slate-200 shadow-lg shadow-black/40 transition-colors hover:border-accent/60 hover:text-white sm:right-6 sm:bottom-6"
      >
        {isOpen ? (
          <Xmark className="size-4" aria-hidden="true" />
        ) : (
          <Sparkles className="size-4 text-accent" aria-hidden="true" />
        )}
        <span className="hidden sm:inline">
          {isOpen ? "Close" : "Ask about Nafiul"}
        </span>
      </button>

      {isOpen ? (
        <div
          id="portfolio-assistant-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Portfolio assistant"
          className="fixed inset-x-3 bottom-20 z-50 flex h-[min(34rem,calc(100dvh-7rem))] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/50 sm:inset-x-auto sm:right-6 sm:bottom-24 sm:w-95"
        >
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <Sparkles className="size-4 text-accent" aria-hidden="true" />
            <p className="text-sm font-medium text-white">Portfolio assistant</p>
            <p className="ml-auto font-mono text-[10px] text-slate-600">
              Answers from this site only
            </p>
          </div>

          <div
            ref={logRef}
            className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-4"
            aria-live="polite"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-accent px-3 py-2 text-sm text-base"
                    : "mr-auto max-w-[90%] rounded-xl rounded-bl-sm bg-surface-raised px-3 py-2 text-sm leading-relaxed text-slate-300"
                }
              >
                {message.content}
              </div>
            ))}

            {isLoading ? (
              <div className="mr-auto rounded-xl bg-surface-raised px-3 py-2 text-sm text-slate-500">
                Thinking…
              </div>
            ) : null}

            {messages.length === 1 ? (
              <ul className="mt-2 flex flex-wrap gap-2">
                {SUGGESTIONS.map((suggestion) => (
                  <li key={suggestion}>
                    <button
                      type="button"
                      onClick={() => send(suggestion)}
                      className="rounded-full border border-line px-3 py-1.5 text-left text-xs text-slate-400 transition-colors hover:border-accent/40 hover:text-white"
                    >
                      {suggestion}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-line p-3"
          >
            <label htmlFor="assistant-input" className="sr-only">
              Ask a question
            </label>
            <input
              id="assistant-input"
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={800}
              placeholder="Ask about his skills or projects…"
              className="min-w-0 flex-1 rounded-lg border border-line bg-base px-3 py-2 text-sm text-white placeholder:text-slate-600 focus:border-accent/60"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send question"
              className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent text-base transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowUpFromLine className="size-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
