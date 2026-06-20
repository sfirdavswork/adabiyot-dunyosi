import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "../components/Layout";
import { news } from "../lib/data";

export const Route = createFileRoute("/yangiliklar")({
  head: () => ({
    meta: [
      { title: "Yangiliklar — Adabiyot Olami" },
      { name: "description", content: "Adabiyot va ta’lim sohasidagi so‘nggi xabarlar." },
      { property: "og:title", content: "Yangiliklar" },
      { property: "og:url", content: "/yangiliklar" },
    ],
    links: [{ rel: "canonical", href: "/yangiliklar" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <PageShell>
      <section className="container-prose py-16">
        <SectionHeader eyebrow="Yangiliklar" title="Adabiy xabarlar" description="Eng so‘nggi voqealar, tadbirlar va e’lonlar." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <article key={n.id} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-[var(--shadow-card)]">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={n.image} alt={n.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground">{new Date(n.date).toLocaleDateString("uz-UZ")}</p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{n.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{n.excerpt}</p>
                <Link to="/yangiliklar/$id" params={{ id: n.id }} className="mt-4 inline-flex text-sm font-medium text-[color:var(--gold)]">
                  Batafsil →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
