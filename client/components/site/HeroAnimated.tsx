import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { InViewFadeUp } from "@/components/site/InViewFadeUp";

export function HeroAnimated() {
  const { t } = useI18n();

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
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_12%_8%,rgba(232,240,255,0.65),transparent_60%),radial-gradient(60%_60%_at_88%_12%,rgba(232,240,255,0.55),transparent_60%),radial-gradient(50%_40%_at_50%_0%,rgba(232,240,255,0.4),transparent_65%)]" />
      <div className="container grid gap-8 py-20 md:grid-cols-12 md:gap-10 md:py-28">
        <div className="md:col-span-10">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            NewBlueMedia
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-4 space-y-3 sm:space-y-4"
          >
            {/* Line 1 with clickable word */}
            <div className="overflow-hidden">
              <motion.h1
                variants={line}
                className="leading-[1.05] text-[clamp(2rem,7vw,4.5rem)] font-extrabold tracking-tight"
              >
                <span className="align-middle">
                  {t({ en: "Short-form ", fr: "" })}
                </span>
                <span className="align-middle">
                  {t({ en: "content", fr: "Contenu" })}
                </span>
                <span className="align-middle">
                  {t({ en: "", fr: " court" })}
                </span>
              </motion.h1>
            </div>
            {/* Line 2 */}
            <div className="overflow-hidden">
              <motion.h1
                variants={line}
                className="leading-[1.05] text-[clamp(2rem,7vw,4.5rem)] font-extrabold tracking-tight"
              >
                {t({ en: "that turns views", fr: "qui transforme les vues" })}
              </motion.h1>
            </div>
            {/* Line 3 */}
            <div className="overflow-hidden">
              <motion.h1
                variants={line}
                className="leading-[1.05] text-[clamp(2rem,7vw,4.5rem)] font-extrabold tracking-tight"
              >
                {t({ en: "into customers.", fr: "en clients." })}
              </motion.h1>
            </div>
          </motion.div>

          <InViewFadeUp>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              {t({
                en: "We make short videos for local small businesses — fast, affordable, and authentic.",
                fr: "Nous créons des vidéos courtes pour les petites entreprises locales — rapides, abordables et authentiques.",
              })}
            </p>
          </InViewFadeUp>

          {/* Cleaner integrated info text (previously in right box) */}
          <InViewFadeUp>
            <div className="mt-5 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {t({
                  en: "Lightning-fast delivery (48–72h)",
                  fr: "Livraison ultra-rapide (48–72h)",
                })}
              </span>
              <span>
                {" "}
                •{" "}
                {t({
                  en: "Professional on-site production • Cinematic vertical edits • Brand-ready captions",
                  fr: "Production professionnelle sur site • Montages verticaux cinématographiques • Sous-titres prêts pour la marque",
                })}
              </span>
            </div>
          </InViewFadeUp>

          <InViewFadeUp>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button size="lg" className="shadow-sm" onClick={openChat}>
                {t({
                  en: "3 Weeks Free Trial",
                  fr: "Essai gratuit de 3 semaines",
                })}
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/portfolio">
                  {t({ en: "Our Content", fr: "Notre contenu" })}
                </a>
              </Button>
            </div>
          </InViewFadeUp>
        </div>
      </div>
    </section>
  );
}
