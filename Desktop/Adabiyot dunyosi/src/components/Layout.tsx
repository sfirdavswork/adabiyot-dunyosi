import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Moon, Sun, BookOpen, Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Bosh sahifa" },
  { to: "/adabiyot", label: "Adabiyot haqida" },
  { to: "/mualliflar", label: "Mualliflar" },
  { to: "/materiallar", label: "8-9 sinf" },
  { to: "/topshiriqlar", label: "Topshiriqlar" },
  { to: "/yangiliklar", label: "Yangiliklar" },
  { to: "/sayt", label: "Sayt haqida" },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return (
    <button
      onClick={toggle}
      aria-label="Mavzu almashtirish"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-accent"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-prose grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--gradient-gold)] text-gold-foreground shadow-[var(--shadow-card)]">
            <BookOpen className="h-5 w-5" />
          </span>
          <span className="truncate font-display text-xl font-semibold tracking-tight">
            Adabiyot <span className="text-[color:var(--gold)]">Olami</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menyu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-card lg:hidden">
          <div className="container-prose flex flex-col py-2">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground data-[status=active]:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-prose grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--gradient-gold)] text-gold-foreground">
              <BookOpen className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold">Adabiyot Olami</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            O‘zbekiston o‘quvchilari va o‘qituvchilari uchun milliy adabiy
            ta’lim portali.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Bo‘limlar</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {navItems.slice(0, 4).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-foreground">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Ta’lim</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {navItems.slice(4).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-foreground">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Aloqa</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>xojayeva.mohinur@gmail.com</li>
            <li>Toshkent sh., O‘zbekiston</li>
            <li>+998 94 160 83 38</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-prose py-4 text-xs text-muted-foreground">
          Muallif: Xo'jayeva Mohinur
          © {new Date().getFullYear()} Adabiyot Olami. Barcha huquqlar himoyalangan.

        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
