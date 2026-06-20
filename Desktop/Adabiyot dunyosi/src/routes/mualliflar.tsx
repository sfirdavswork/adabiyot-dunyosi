import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "../components/Layout";
import { authors } from "../lib/data";

export const Route = createFileRoute("/mualliflar")({
  head: () => ({
    meta: [
      { title: "Mualliflar — Adabiyot Olami" },
      { name: "description", content: "O‘zbek va jahon adabiyotining taniqli adiblari biografiyasi." },
      { property: "og:title", content: "Mualliflar" },
      { property: "og:url", content: "/mualliflar" },
    ],
    links: [{ rel: "canonical", href: "/mualliflar" }],
  }),
  component: AuthorsLayout,
});

function AuthorsLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/mualliflar/$slug");
  if (isChild) return <Outlet />;

  return (
    <PageShell>
      <section className="container-prose py-16">
        <SectionHeader eyebrow="Mualliflar" title="Adiblar olami" description="Har bir muallif — bir olam. Ularning hayoti va ijodi bilan tanishing." />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {authors.map((a) => (
            <Link
              key={a.slug}
              to="/mualliflar/$slug"
              params={{ slug: a.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={a.image} alt={a.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold">{a.name}</h3>
                <p className="text-xs text-muted-foreground">{a.years} · {a.country}</p>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{a.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
