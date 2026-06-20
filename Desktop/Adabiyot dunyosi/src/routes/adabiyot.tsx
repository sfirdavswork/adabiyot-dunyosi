import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "../components/Layout";

export const Route = createFileRoute("/adabiyot")({
  head: () => ({
    meta: [
      { title: "Adabiyot haqida — Adabiyot Olami" },
      {
        name: "description",
        content:
          "Adabiyotning tarixi, ahamiyati, o‘zbek va jahon adabiyotiga umumiy nazar.",
      },
      { property: "og:title", content: "Adabiyot haqida" },
      { property: "og:url", content: "/adabiyot" },
    ],
    links: [{ rel: "canonical", href: "/adabiyot" }],
  }),
  component: AdabiyotPage,
});

function AdabiyotPage() {
  return (
    <PageShell>
      <section className="container-prose py-16">
        <SectionHeader
          eyebrow="Bilim manbai"
          title="Adabiyot haqida"
          description="Insoniyat ma’naviy xazinasining qalbi — adabiyot olamiga sayohat."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <article className="prose-card">
            <img
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200&auto=format&fit=crop"
              alt="Adabiyot tarixi"
              className="aspect-[16/10] w-full rounded-2xl object-cover"
            />
            <h3 className="mt-6 font-display text-2xl font-semibold">Adabiyot tarixi</h3>
            <p className="mt-3 text-muted-foreground">
              Adabiyot insoniyat tarixi bilan bir vaqtda paydo bo‘lgan. Qadimgi
              Shumer, Misr va Hind sivilizatsiyalaridan boshlangan yozma adabiyot
              asrlar davomida turli shakl va janrlarni vujudga keltirdi. O‘zbek
              adabiyoti esa Mahmud Koshg‘ariy, Yusuf Xos Hojib, Alisher Navoiy
              kabi buyuk siymolar bilan jahonga tanildi.
            </p>
          </article>

          <article className="prose-card">
            <img
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop"
              alt="Adabiyot ahamiyati"
              className="aspect-[16/10] w-full rounded-2xl object-cover"
            />
            <h3 className="mt-6 font-display text-2xl font-semibold">Adabiyotning ahamiyati</h3>
            <p className="mt-3 text-muted-foreground">
              Adabiyot — bu shunchaki so‘zlar majmui emas. U insonni tarbiyalaydi,
              tafakkurni boyitadi, qalbni nozik tuyg‘ular bilan to‘ldiradi.
              Yaxshi asar o‘quvchini boshqalarni tushunishga, hayotni chuqurroq
              his etishga o‘rgatadi.
            </p>
          </article>

          <article className="prose-card">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop"
              alt="O‘zbek adabiyoti"
              className="aspect-[16/10] w-full rounded-2xl object-cover"
            />
            <h3 className="mt-6 font-display text-2xl font-semibold">O‘zbek adabiyoti</h3>
            <p className="mt-3 text-muted-foreground">
              O‘zbek adabiyoti — mumtoz va zamonaviy yo‘nalishlarni o‘zida
              mujassam etgan boy meros. Navoiy, Bobur, Cho‘lpon, Qodiriy,
              Oybek, Erkin Vohidov, Abdulla Oripov — bularning har biri o‘ziga
              xos olamni yaratgan.
            </p>
          </article>

          <article className="prose-card">
            <img
              src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1200&auto=format&fit=crop"
              alt="Jahon adabiyoti"
              className="aspect-[16/10] w-full rounded-2xl object-cover"
            />
            <h3 className="mt-6 font-display text-2xl font-semibold">Jahon adabiyoti</h3>
            <p className="mt-3 text-muted-foreground">
              Shekspir, Tolstoy, Dostoyevskiy, Tagor, Aytmatov, Markes —
              jahon adabiyotining cho‘qqilari. Ular yaratgan asarlar millat va
              chegaralardan ustun bo‘lib, butun insoniyatga xizmat qiladi.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
