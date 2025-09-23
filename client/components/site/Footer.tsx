import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-8 py-10 md:grid-cols-2 md:gap-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-primary to-primary/70" />
            <span className="text-lg font-extrabold tracking-tight">NewBlueMedia</span>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Short form content that turns views into customers.
          </p>
          <div className="flex gap-3 text-sm text-muted-foreground">
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-accent"
            >
              <span>TikTok</span>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-accent"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="grid gap-2 md:justify-self-end md:text-right">
          <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground md:justify-end">
            <Link to="/services" className="hover:text-foreground">
              Services
            </Link>
            <Link to="/portfolio" className="hover:text-foreground">
              Portfolio
            </Link>
            <Link to="/about" className="hover:text-foreground">
              About
            </Link>
            <Link to="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">© 2025 NewBlueMedia — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
