import { useI18n } from "@/lib/i18n";

export default function Portfolio() {
  const { t } = useI18n();

  const items = [
    {
      title: t({ en: "L’appro MTL", fr: "L’appro MTL" }),
      type: t({ en: "Restaurant", fr: "Restaurant" }),
      link: "https://www.tiktok.com/@lappro_mtl",
      img: "https://unavatar.io/tiktok/lappro_mtl",
      summary: t({
        en: "Short-form food prep and menu highlight clips designed to boost local orders.",
        fr: "Clips courts de préparation et de mise en avant du menu pour stimuler les commandes locales.",
      }),
      results: [
        t({ en: "Consistent daily posting cadence and trending hooks.", fr: "Cadence de publication quotidienne cohérente et accroches tendance." }),
        t({ en: "Improved local visibility and order intent.", fr: "Visibilité locale améliorée et intention de commande accrue." }),
      ],
    },
    {
      title: t({ en: "Minceur Idéal", fr: "Minceur Idéal" }),
      type: t({ en: "Beauty studio", fr: "Institut de beauté" }),
      link: "https://www.tiktok.com/@minceur.ideal",
      img: "https://unavatar.io/tiktok/minceur.ideal",
      summary: t({
        en: "Behind-the-scenes and results-focused shorts to encourage bookings.",
        fr: "Vidéos courtes des coulisses et axées sur les résultats pour encourager les réservations.",
      }),
      results: [
        t({ en: "Clear CTAs and caption strategy for conversions.", fr: "CTA clairs et stratégie de légendes pour les conversions." }),
        t({ en: "Higher engagement on service highlights.", fr: "Engagement accru sur les mises en avant de services." }),
      ],
    },
    {
      title: t({ en: "Chef Makk", fr: "Chef Makk" }),
      type: t({ en: "Chef / Creator", fr: "Chef / Créateur" }),
      link: "https://www.tiktok.com/@chefmakk",
      img: "https://unavatar.io/tiktok/chefmakk",
      summary: t({
        en: "Recipe-style reels and kitchen moments to grow local audience.",
        fr: "Reels de recettes et moments en cuisine pour développer l'audience locale.",
      }),
      results: [
        t({ en: "Hook-first edits and optimized posting times.", fr: "Montages axés sur l'accroche et horaires de publication optimisés." }),
        t({ en: "Steady increase in discovery and saves.", fr: "Augmentation régulière de la découverte et des enregistrements." }),
      ],
    },
  ];

  return (
    <section className="container py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t({ en: "Our Content", fr: "Notre contenu" })}</h1>
        <p className="mt-2 text-muted-foreground">{t({ en: "A few examples of short-form work.", fr: "Quelques exemples de contenus courts." })}</p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {items.map((p) => (
          <div key={String(p.title)} className="group overflow-hidden rounded-2xl border bg-background transition hover:shadow-md">
            <a href={p.link} target="_blank" rel="noreferrer" className="block">
              <img src={p.img} alt={String(p.title)} className="aspect-square w-full object-cover" loading="lazy" />
            </a>
            <div className="p-5">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-muted-foreground">{p.type}</div>
              <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {p.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {t({ en: "View details", fr: "Voir les détails" })}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
