import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "../components/Layout";
import { authors, news } from "../lib/data";
import hero from "../assets/hero.jpg";
import {
  ArrowRight,
  Users,
  Headphones,
  GraduationCap,
  Sparkles,
  Newspaper,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adabiyot Olami — Bosh sahifa" },
      {
        name: "description",
        content:
          "O‘zbek va jahon adabiyotini birlashtirgan zamonaviy ta’lim portali. Mualliflar, sinf materiallari va interaktiv topshiriqlar.",
      },
      { property: "og:title", content: "Adabiyot Olami" },
      { property: "og:description", content: "O‘zbek va jahon adabiyoti milliy ta’lim portali." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const quickCards = [
  {
    to: "/mualliflar",
    icon: Users,
    title: "Mualliflar",
    desc: "O‘zbek va jahon adiblarining hayoti va ijodi.",
  },
  {
    to: "/materiallar",
    icon: GraduationCap,
    title: "8-9 Sinf Materiallari",
    desc: "Darslar, tahlillar, taqdimotlar va PDF resurslar.",
  },
  {
    to: "/topshiriqlar",
    icon: Sparkles,
    title: "Interaktiv Topshiriqlar",
    desc: "Testlar va adabiy krossvordlar bilan bilim sinovi.",
  },
] as const;

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${hero})` }}
        />
        <div className="absolute inset-0 -z-10 bg-[var(--gradient-warm)]" />
        <div className="container-prose grid gap-10 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
              Milliy adabiy ta’lim portali
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              So‘z san’atining
              <br />
              <span className="gold-underline">olamiga</span> xush kelibsiz
            </h1>

            <p className="mt-1 text-base font-medium">
              Loyiha muallifi: Xo‘jayeva Mohinur
            </p>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              “Adabiyot Olami” — o‘quvchilar va o‘qituvchilar uchun yaratilgan
              zamonaviy portal. O‘zbek va jahon adabiyotining eng yaxshi
              namunalarini bir joydan toping.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/mualliflar"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-90"
              >
                Mualliflarni o‘rganish <ArrowRight className="h-4 w-4" />
              </Link>
              
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[5/6] overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
              <img src={hero} alt="Adabiyot olami" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:block">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Bugun
              </p>
              <p className="mt-1 font-display text-lg">
                “Kitob — eng sodiq do‘st”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="container-prose py-16">
        <SectionHeader
          eyebrow="Tezkor navigatsiya"
          title="Nimadan boshlaymiz?"
          description="Sizni qiziqtirgan bo‘limni tanlang va o‘rganishni boshlang."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickCards.map(({ to, icon: Icon, title, desc }) => (
            <Link
              key={to}
              to={to}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-gold)] text-gold-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--gold)]">
                Ochish <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED AUTHORS */}
      <section className="container-prose py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
              Mualliflar
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Tanlangan adiblar
            </h2>
          </div>
          <Link
            to="/mualliflar"
            className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            Barchasini ko‘rish →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {authors.map((a) => (
            <Link
              key={a.slug}
              to="/mualliflar/$slug"
              params={{ slug: a.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{a.name}</h3>
                <p className="text-xs text-muted-foreground">{a.years} · {a.country}</p>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{a.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="container-prose py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">
              Yangiliklar
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              So‘nggi adabiy xabarlar
            </h2>
          </div>
          <Link to="/yangiliklar" className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline-flex">
            Barchasi →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {news.map((n) => (
            <article
              key={n.id}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={n.image} alt={n.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Newspaper className="h-3.5 w-3.5" />
                  {new Date(n.date).toLocaleDateString("uz-UZ")}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                  {n.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  {n.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
