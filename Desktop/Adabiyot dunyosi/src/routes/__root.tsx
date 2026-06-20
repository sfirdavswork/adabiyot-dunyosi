import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Sahifa topilmadi</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Siz qidirayotgan sahifa mavjud emas yoki ko‘chirilgan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold">Sahifa yuklanmadi</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Xatolik yuz berdi. Sahifani yangilab ko‘ring yoki bosh sahifaga qayting.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Qayta urinish
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition hover:bg-accent"
          >
            Bosh sahifa
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Adabiyot Olami — O‘zbek va jahon adabiyoti portali" },
      {
        name: "description",
        content:
          "Adabiyot Olami — o‘quvchilar va o‘qituvchilar uchun adabiyot, mualliflar, 8-9 sinf materiallari va interaktiv topshiriqlar portali.",
      },
      { name: "author", content: "Adabiyot Olami" },
      { property: "og:title", content: "Adabiyot Olami — O‘zbek va jahon adabiyoti portali" },
      { property: "og:description", content: "Adabiyot Dunyosi is a modern Uzbek literature educational website for students and teachers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Adabiyot Olami — O‘zbek va jahon adabiyoti portali" },
      { name: "description", content: "Adabiyot Dunyosi is a modern Uzbek literature educational website for students and teachers." },
      { name: "twitter:description", content: "Adabiyot Dunyosi is a modern Uzbek literature educational website for students and teachers." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a6bec581-9a23-43ea-9b27-fe484f761f69/id-preview-3e337284--a104b6e4-10f6-401e-b0ab-d5ac83afc777.lovable.app-1781903960787.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a6bec581-9a23-43ea-9b27-fe484f761f69/id-preview-3e337284--a104b6e4-10f6-401e-b0ab-d5ac83afc777.lovable.app-1781903960787.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="uz">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
