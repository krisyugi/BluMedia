import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-primary to-primary/70" />
          <span className="text-lg font-extrabold tracking-tight">NewBlueMedia</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.href}
              to={n.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground",
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="shadow-sm">
            <a href={pathname === "/" ? "#contact" : "/#contact"}>
              Start your 3 free weeks
            </a>
          </Button>
        </div>
        <button
          className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="container grid gap-2 py-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                to={n.href}
                className="rounded-md px-2 py-2 text-sm hover:bg-accent"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Button asChild onClick={() => setOpen(false)}>
              <a href={pathname === "/" ? "#contact" : "/#contact"}>Start your 3 free weeks</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
