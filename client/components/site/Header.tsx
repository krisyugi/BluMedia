import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

export function Header() {
  const { t, lang, setLang } = useI18n();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-primary to-primary/70" />
          <span className="text-lg font-extrabold tracking-tight">NewBlueMedia</span>
        </Link>
        <div className="flex flex-1 justify-center">
          <a href="#projects" className="pixel-btn transition-all duration-300 ease-in-out">
            <span className="relative z-10">{t({ en: "Content", fr: "Contenu" })}</span>
          </a>
        </div>
        <button
          onClick={() => setLang(lang === "en" ? "fr" : "en")}
          className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent"
          aria-label={t({ en: "Toggle language", fr: "Changer de langue" })}
        >
          {lang === "en" ? "FR" : "EN"}
        </button>
      </div>
    </header>
  );
}
