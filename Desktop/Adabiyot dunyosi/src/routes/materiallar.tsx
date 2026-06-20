import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, SectionHeader } from "../components/Layout";
import { materials } from "../lib/data";
import { FileText, BookOpen, Presentation, Download } from "lucide-react";

export const Route = createFileRoute("/materiallar")({
  head: () => ({
    meta: [
      { title: "8-9 sinf materiallari — Adabiyot Olami" },
      { name: "description", content: "Adabiyotdan 8 va 9-sinf darslari, tahlillar, taqdimotlar va PDF resurslari." },
      { property: "og:title", content: "8-9 sinf materiallari" },
      { property: "og:url", content: "/materiallar" },
    ],
    links: [{ rel: "canonical", href: "/materiallar" }],
  }),
  component: MaterialsPage,
});

const iconFor = (t: string) =>
  t === "PDF" ? Download : t === "Taqdimot" ? Presentation : t === "Tahlil" ? FileText : BookOpen;

function MaterialsPage() {
  const [grade, setGrade] = useState<"8" | "9">("8");
  return (
    <PageShell>
      <section className="container-prose py-16">
        <SectionHeader eyebrow="Ta’limiy resurslar" title="8-9 sinf materiallari" description="O‘qituvchilar va o‘quvchilar uchun batafsil dars materiallari." />

        <div className="mt-10 flex justify-center gap-2">
          {(["8", "9"] as const).map((g) => (
            <button
              key={g}
              onClick={() => setGrade(g)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                grade === g
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-card)]"
                  : "border border-border bg-card text-muted-foreground hover:bg-accent"
              }`}
            >
              {g}-sinf
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {materials[grade].map((m) => {
            const Icon = iconFor(m.type);
            return (
              <div key={m.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--gradient-gold)] text-gold-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-widest text-[color:var(--gold)]">{m.type}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold leading-snug">{m.title}</h3>
                  <button 
                    onClick={() => window.open(m.file, "_blank")}
                    className="mt-3 text-sm font-medium text-muted-foreground hover:text-foreground">
                    Ochish →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
