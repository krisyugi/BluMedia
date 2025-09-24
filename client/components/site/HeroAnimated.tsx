import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function HeroAnimated() {
  const { t } = useI18n();

  const lines = [
    t({ en: "Short-form content", fr: "Contenu court" }),
    t({ en: "that turns views", fr: "qui transforme les vues" }),
    t({ en: "into customers.", fr: "en clients." }),
  ];

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const line = {
    hidden: { y: "100%" },
    show: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  function openChat(e?: React.MouseEvent) {
    e?.preventDefault();
    window.dispatchEvent(new CustomEvent("open-chat"));
  }

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_10%_10%,hsl(var(--primary)/0.12),transparent_60%),radial-gradient(60%_60%_at_90%_20%,hsl(var(--primary)/0.12),transparent_60%)]" />
      <div className="container grid gap-8 py-20 md:grid-cols-12 md:gap-10 md:py-28">
        <div className="md:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            NewBlueMedia
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-4 space-y-3 sm:space-y-4"
          >
            {lines.map((txt, idx) => (
              <div key={idx} className="overflow-hidden">
                <motion.h1
                  variants={line}
                  className="leading-[1.05] text-[clamp(2rem,7vw,4.5rem)] font-extrabold tracking-tight"
                >
                  {txt}
                </motion.h1>
              </div>
            ))}
          </motion.div>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            {t({
              en: "We make short videos for local small businesses — fast, affordable, and authentic.",
              fr: "Nous créons des vidéos courtes pour les petites entreprises locales — rapides, abordables et authentiques.",
            })}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button size="lg" className="shadow-sm" onClick={openChat}>
              {t({ en: "3 Weeks Free Trial", fr: "Essai gratuit de 3 semaines" })}
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#portfolio">{t({ en: "See some of our work", fr: "Voir quelques exemples de notre travail" })}</a>
            </Button>
          </div>
        </div>
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-md md:ml-auto"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-primary/40 via-primary/20 to-primary/10 p-[2px] shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.5)] ring-1 ring-primary/20">
              <div className="grid h-60 place-items-center rounded-3xl bg-background/80 backdrop-blur-xl sm:h-72">
                <div className="grid place-items-center rounded-xl border p-6 text-center shadow-sm">
                  <span className="text-sm font-semibold text-primary">
                    {t({ en: "Lightning-fast delivery (48–72h)", fr: "Livraison ultra-rapide (48–72h)" })}
                  </span>
                  <span className="mt-1 text-xs text-muted-foreground">
                    {t({
                      en: "Professional on-site production • Cinematic vertical edits • Brand-ready captions",
                      fr: "Production professionnelle sur site • Montages verticaux cinématographiques • Sous-titres prêts pour la marque",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
