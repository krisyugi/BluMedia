import { useI18n } from "@/lib/i18n";

export default function Portfolio() {
  const { t } = useI18n();

  const items = [
    {
      title: t({ en: "L’appro MTL", fr: "L’appro MTL" }),
      type: t({ en: "Restaurant", fr: "Restaurant" }),
      link: "https://www.tiktok.com/@lappro_mtl",
      img: "https://unavatar.io/tiktok/lappro_mtl",
    },
    {
      title: t({ en: "Minceur Idéal", fr: "Minceur Idéal" }),
      type: t({ en: "Beauty studio", fr: "Institut de beauté" }),
      link: "https://www.tiktok.com/@minceur.ideal",
      img: "https://unavatar.io/tiktok/minceur.ideal",
    },
    {
      title: t({ en: "Chef Makk", fr: "Chef Makk" }),
      type: t({ en: "Chef / Creator", fr: "Chef / Créateur" }),
      link: "https://www.tiktok.com/@chefmakk",
      img: "https://unavatar.io/tiktok/chefmakk",
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
          <a
            key={String(p.title)}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-2xl border transition hover:shadow-md"
          >
            <img src={p.img} alt={String(p.title)} className="aspect-square w-full object-cover" loading="lazy" />
            <div className="p-5">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-muted-foreground">{p.type}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
