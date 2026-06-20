import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "../components/Layout";
import { Target, BookOpen, Users, Mail } from "lucide-react";

export const Route = createFileRoute("/sayt")({
  head: () => ({
    meta: [
      { title: "Sayt haqida — Adabiyot Olami" },
      { name: "description", content: "“Adabiyot Olami” loyihasining maqsadi va ta’limiy yo‘nalishlari." },
      { property: "og:title", content: "Sayt haqida" },
      { property: "og:url", content: "/sayt" },
    ],
    links: [{ rel: "canonical", href: "/sayt" }],
  }),
  component: SaytPage,
});

const goals = [
  { icon: Target, title: "Maqsad", text: "O‘quvchilarda adabiyotga muhabbat uyg‘otish va mustaqil o‘rganish ko‘nikmasini shakllantirish." },
  { icon: BookOpen, title: "Ta’limiy yo‘nalish", text: "8-9-sinf dasturiga mos materiallar, tahlillar va interaktiv topshiriqlar." },
  { icon: Users, title: "Kim uchun?", text: "O‘quvchilar, o‘qituvchilar, ota-onalar va adabiyot ixlosmandlari uchun." },
];

function SaytPage() {
  return (
    <PageShell>
      <section className="container-prose py-16">
        <SectionHeader eyebrow="Loyiha haqida" title="Sayt haqida" description="“Adabiyot Olami” — milliy ta’lim sohasiga xizmat qiluvchi mustaqil portal." />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {goals.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gradient-gold)] text-gold-foreground">
                <g.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{g.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{g.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="font-display text-2xl font-semibold">Loyiha haqida</h3>
            <p className="mt-3 text-muted-foreground">
              “Adabiyot Olami” o‘zbek o‘quvchilari uchun yaratilgan bepul ta’lim
              platformasi bo‘lib, u mualliflar biografiyalari, asarlar tahlili
              va interaktiv mashqlarni o‘zida jamlagan. Loyiha
              o‘qituvchilarning dars o‘tish jarayonini soddalashtirish va
              o‘quvchilarning mustaqil o‘rganishini rag‘batlantirishga
              yo‘naltirilgan.
            </p>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Xabaringiz uchun rahmat!"); }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
              <Mail className="h-5 w-5 text-[color:var(--gold)]" /> Bog‘lanish
            </h3>
            <div className="mt-4 grid gap-3">
              <input required placeholder="Ismingiz" className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
              <input required type="email" placeholder="Email" className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
              <textarea required placeholder="Xabaringiz" rows={4} className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
              <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                Yuborish
              </button>
            </div>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
