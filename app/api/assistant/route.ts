import { NextResponse } from "next/server";
import { buildPortfolioContext, PORTFOLIO_SYSTEM_PROMPT } from "@/lib/assistant-context";

const GEMINI_ENDPOINT =
  "https://generativelanguage.googleapis.com/v1beta/interactions";

const MODEL = process.env.GEMINI_MODEL ?? "gemini-3.8-flash";

const MAX_MESSAGE_LENGTH = 800;
const MAX_HISTORY_TURNS = 8;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type InteractionStep = {
  type?: string;
  content?: { type?: string; text?: string }[] | string;
};

/** Extracts the model's text from an Interactions API response. */
function extractOutputText(payload: unknown): string {
  if (!payload || typeof payload !== "object") return "";

  const data = payload as {
    output_text?: string;
    steps?: InteractionStep[];
  };

  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  if (!Array.isArray(data.steps)) return "";

  return data.steps
    .flatMap((step) => {
      if (step.type && step.type !== "model_output") return [];
      if (typeof step.content === "string") return [step.content];
      return (step.content ?? [])
        .filter((part) => !part.type || part.type === "text")
        .map((part) => part.text ?? "");
    })
    .join("")
    .trim();
}

function isValidMessage(message: unknown): message is ChatMessage {
  if (!message || typeof message !== "object") return false;
  const candidate = message as ChatMessage;
  return (
    (candidate.role === "user" || candidate.role === "assistant") &&
    typeof candidate.content === "string" &&
    candidate.content.trim().length > 0
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "The assistant is not configured. Please email nafiulislameshan307@gmail.com instead.",
      },
      { status: 503 },
    );
  }

  let body: { messages?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const messages = Array.isArray(body.messages)
    ? body.messages.filter(isValidMessage).slice(-MAX_HISTORY_TURNS * 2)
    : [];

  const lastMessage = messages.at(-1);
  if (!lastMessage || lastMessage.role !== "user") {
    return NextResponse.json({ error: "No question provided." }, { status: 400 });
  }

  if (lastMessage.content.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Please keep questions under ${MAX_MESSAGE_LENGTH} characters.` },
      { status: 413 },
    );
  }

  const input = messages.map((message) => ({
    type: message.role === "user" ? "user_input" : "model_output",
    content: [{ type: "text", text: message.content.trim() }],
  }));

  try {
    const response = await fetch(GEMINI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        model: MODEL,
        store: false,
        system_instruction: `${PORTFOLIO_SYSTEM_PROMPT}${buildPortfolioContext()}`,
        input,
        generation_config: {
          max_output_tokens: 500,
          thinking_level: "low",
        },
      }),
      signal: AbortSignal.timeout(25_000),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Gemini request failed", response.status, detail.slice(0, 500));

      return NextResponse.json(
        {
          error:
            response.status === 429
              ? "The assistant is busy right now. Please try again in a moment."
              : "The assistant could not answer that. Please try again.",
        },
        { status: 502 },
      );
    }

    const payload = await response.json();
    const answer = extractOutputText(payload);

    if (!answer) {
      return NextResponse.json(
        { error: "The assistant returned an empty answer. Please rephrase." },
        { status: 502 },
      );
    }

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Gemini request error", error);
    return NextResponse.json(
      { error: "The assistant is unreachable right now. Please try again." },
      { status: 504 },
    );
  }
}
