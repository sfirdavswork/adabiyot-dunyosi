import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "../components/Layout";
import { authors } from "../lib/data";
import { Headphones, BookMarked, Sparkles } from "lucide-react";

export const Route = createFileRoute("/mualliflar/$slug")({
  loader: ({ params }) => {
    const a = authors.find((x) => x.slug === params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Muallif"} — Adabiyot Olami` },
      { name: "description", content: loaderData?.short ?? "" },
      { property: "og:title", content: loaderData?.name ?? "Muallif" },
      { property: "og:image", content: loaderData?.image ?? "" },
    ],
    links: [{ rel: "canonical", href: `/mualliflar/${loaderData?.slug ?? ""}` }],
  }),
  component: AuthorDetail,
  notFoundComponent: () => (
    <PageShell>
      <div className="container-prose py-24 text-center">
        <h1 className="font-display text-3xl">Muallif topilmadi</h1>
        <Link to="/mualliflar" className="mt-4 inline-block text-[color:var(--gold)]">← Mualliflar</Link>
      </div>
    </PageShell>
  ),
});

function AuthorDetail() {
  const a = Route.useLoaderData();
  return (
    <PageShell>
      <article className="container-prose py-16">
        <Link to="/mualliflar" className="text-sm text-muted-foreground hover:text-foreground">
          ← Barcha mualliflar
        </Link>

        <header className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <img src={a.image} alt={a.name} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">{a.country}</p>
            <h1 className="mt-2 font-display text-4xl font-semibold leading-tight sm:text-5xl">{a.name}</h1>
            <p className="mt-2 text-muted-foreground">{a.years}</p>
            <p className="mt-5 text-lg text-muted-foreground">{a.short}</p>
            
          </div>
        </header>

        {/* YouTube biography */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold">Biografik video</h2>
          <div className="mt-4 aspect-video overflow-hidden rounded-2xl border border-border">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${a.youtubeId}`}
              title={`${a.name} biografiyasi`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold">Hayoti va ijodi</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{a.bio}</p>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <BookMarked className="h-4 w-4 text-[color:var(--gold)]" /> Mashhur asarlari
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {a.works.map((w: string) => <li key={w}>• {w}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <Sparkles className="h-4 w-4 text-[color:var(--gold)]" /> Qiziqarli faktlar
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {a.facts.map((f: string) => <li key={f}>• {f}</li>)}
              </ul>
            </div>
          </aside>
        </section>
      </article>
    </PageShell>
  );
}
