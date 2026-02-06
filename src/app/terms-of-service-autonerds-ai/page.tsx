import { readFile } from "node:fs/promises";
import path from "node:path";

function normalizeLegalText(input: string) {
  return input
    .replace(/\r\n/g, "\n")
    .replace(/\n\s+/g, "\n")
    .replace(/\s+\n/g, "\n")
    .replace(/\s{2,}/g, " ")
    .replace(/\s*●\s*/g, "\n- ")
    .replace(/\s(?=\d+\.)/g, "\n\n")
    .trim();
}

export default async function TermsOfServiceAutonerdsAiPage() {
  const filePath = path.join(process.cwd(), "terms-of-service-autonerds-ai.md");
  const raw = await readFile(filePath, "utf8");
  const content = normalizeLegalText(raw);

  return (
    <main className="min-h-screen px-4 py-12">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          Terms of Service
        </h1>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="prose prose-invert max-w-none">
            <pre className="m-0 whitespace-pre-wrap font-sans leading-7">
              {content}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}
