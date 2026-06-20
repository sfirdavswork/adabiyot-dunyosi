import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "../components/Layout";
import { news } from "../lib/data";

export const Route = createFileRoute("/yangiliklar/$id")({
  loader: ({ params }) => {
    const item = news.find((n) => n.id === params.id);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Yangilik"} — Adabiyot Olami` },
      { name: "description", content: loaderData?.excerpt ?? "Yangilik" },
    ],
  }),
  component: NewsDetail,
  notFoundComponent: () => (
    <PageShell>
      <div className="container-prose py-24 text-center">
        <h1 className="font-display text-3xl">Yangilik topilmadi</h1>
      </div>
    </PageShell>
  ),
});

function NewsDetail() {
  const n = Route.useLoaderData();
  return (
    <PageShell>
      <article className="container-prose max-w-3xl py-16">
        <Link to="/yangiliklar" className="text-sm text-muted-foreground hover:text-foreground">
          ← Barcha yangiliklar
        </Link>
        <p className="mt-6 text-xs uppercase tracking-widest text-[color:var(--gold)]">
          {new Date(n.date).toLocaleDateString("uz-UZ")}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight">{n.title}</h1>
        <img src={n.image} alt={n.title} className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover" />
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{n.excerpt}</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">{n.body}</p>
      </article>
    </PageShell>
  );
}
