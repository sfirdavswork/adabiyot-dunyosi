import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageShell, SectionHeader } from "../components/Layout";
import { quiz } from "../lib/data";
import { CheckCircle2, XCircle, RefreshCw, Puzzle, BrainCircuit } from "lucide-react";

export const Route = createFileRoute("/topshiriqlar")({
  head: () => ({
    meta: [
      { title: "Interaktiv topshiriqlar — Adabiyot Olami" },
      { name: "description", content: "Adabiy testlar va bilim sinovlari." },
      { property: "og:title", content: "Interaktiv topshiriqlar" },
      { property: "og:url", content: "/topshiriqlar" },
    ],
    links: [{ rel: "canonical", href: "/topshiriqlar" }],
  }),
  component: Interactive,
});

function Interactive() {
  return (
    <PageShell>
      <section className="container-prose py-16">
        <SectionHeader eyebrow="Bilim sinovi" title="Interaktiv topshiriqlar" description="Testlar orqali bilimlaringizni mustahkamlang." />

        <div className="mt-10">
          <Quiz />
        </div>
      </section>
    </PageShell>
  );
}

function Quiz() {
  const [allAnswers, setAllAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [questions, setQuestions] = useState(() => pickRandom(quiz, 10));

  useEffect(() => {
    // pick new random set on mount
    setQuestions(pickRandom(quiz, 10));
  }, []);

  const score = questions.reduce((acc, q, i) => acc + (allAnswers[i] === q.answer ? 1 : 0), 0);

  function reset() {
    setAllAnswers({});
    setSubmitted(false);
    setQuestions(pickRandom(quiz, 10));
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[color:var(--gold)]">Natija</p>
          <p className="mt-2 font-display text-5xl font-semibold">{score} / {questions.length}</p>
          <p className="mt-2 text-muted-foreground">
            {score === questions.length ? "Ajoyib! Mukammal natija." : "Yaxshi urinish. Quyida to‘g‘ri javoblarni ko‘ring."}
          </p>
          <button
            onClick={reset}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
          >
            <RefreshCw className="h-4 w-4" /> Qaytadan
          </button>
        </div>
        <div className="mt-8 space-y-4">
          {questions.map((q, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-5">
              <p className="font-medium">{i + 1}. {q.q}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {q.options.map((o, j) => {
                  const correct = j === q.answer;
                  const chosen = allAnswers[i] === j;
                  return (
                    <div
                      key={j}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                        correct
                          ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10"
                          : chosen
                          ? "border-destructive bg-destructive/10"
                          : "border-border"
                      }`}
                    >
                      {correct ? <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)]" /> :
                        chosen ? <XCircle className="h-4 w-4 text-destructive" /> : <span className="h-4 w-4" />}
                      {o}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      {questions.map((q, i) => (
        <div key={i} className="rounded-2xl border border-border bg-card p-5">
          <p className="font-medium">{i + 1}. {q.q}</p>
          <div className="mt-3 grid gap-2">
            {q.options.map((o, j) => (
              <label
                key={j}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 text-sm transition ${
                  allAnswers[i] === j ? "border-[color:var(--gold)] bg-secondary" : "border-border hover:bg-accent"
                }`}
              >
                <input
                  type="radio"
                  name={`q-${i}`}
                  checked={allAnswers[i] === j}
                  onChange={() => setAllAnswers({ ...allAnswers, [i]: j })}
                  className="h-4 w-4 accent-[color:var(--gold)]"
                />
                {o}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={() => setSubmitted(true)}
        disabled={Object.keys(allAnswers).length !== questions.length}
        className="w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground disabled:opacity-50"
      >
        Natijani ko‘rish
      </button>
    </div>
  );
}

// pick up to n random items from array
function pickRandom<T>(arr: T[], n: number) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(n, copy.length));
}
