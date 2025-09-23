import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "en" | "fr";

type DictPair = { en: string; fr: string };

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (pair: DictPair) => string;
};

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("nbm_lang") as Lang) || "en");

  useEffect(() => {
    localStorage.setItem("nbm_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<I18nCtx>(() => ({
    lang,
    setLang,
    t: ({ en, fr }) => (lang === "fr" ? fr : en),
  }), [lang]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
