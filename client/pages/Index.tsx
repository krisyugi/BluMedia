import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export default function Index() {
  const { t } = useI18n();

  function openChat(e?: React.MouseEvent) {
    e?.preventDefault();
    window.dispatchEvent(new CustomEvent("open-chat"));
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_10%_10%,hsl(var(--primary)/0.12),transparent_60%),radial-gradient(60%_60%_at_90%_20%,hsl(var(--primary)/0.12),transparent_60%)]" />
        <div className="container grid gap-8 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
              {t({ en: "Short-form video marketing", fr: "Marketing vidéo court format" })}
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {t({
                en: "NewBlueMedia — short form content that turns views into customers.",
                fr: "NewBlueMedia — du contenu court qui transforme les vues en clients.",
              })}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              {t({
                en: "We make short videos for local small businesses that fill tables and book appointments — fast, affordable, and authentic.",
                fr: "Nous créons des vidéos courtes pour les petites entreprises locales qui remplissent les salles et génèrent des rendez-vous — rapide, abordable et authentique.",
              })}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button size="lg" className="shadow-sm" onClick={openChat}>
                {t({ en: "3 Weeks Free Trial", fr: "Essai gratuit de 3 semaines" })}
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#portfolio">{t({ en: "See our work", fr: "Voir notre travail" })}</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto h-72 w-full max-w-md rounded-2xl bg-gradient-to-br from-primary/15 via-primary/10 to-transparent p-2 ring-1 ring-border sm:h-96 md:ml-auto">
              <div className="grid h-full place-items-center rounded-xl bg-background shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.35)]">
                <div className="grid place-items-center rounded-lg border p-6 text-center">
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
          </div>
        </div>
        {/* Proof strip */}
        <div className="border-t bg-gradient-to-b from-transparent to-background/60">
          <div className="container grid gap-6 py-6 sm:grid-cols-3">
            {[
              {
                title: t({ en: "Short turnaround", fr: "Délai court" }),
                desc: t({ en: "Content ready in 48–72 hours.", fr: "Contenu prêt en 48–72 heures." }),
              },
              {
                title: t({ en: "Performance focus", fr: "Axé sur la performance" }),
                desc: t({ en: "Our videos drive real bookings & sales.", fr: "Nos vidéos génèrent de vraies réservations et ventes." }),
              },
              {
                title: t({ en: "Risk-free", fr: "Sans risque" }),
                desc: t({ en: "Try 3 weeks free, pay only if you’re satisfied.", fr: "Essayez 3 semaines gratuitement, payez seulement si vous êtes satisfait." }),
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border bg-background/60 p-4">
                <div className="text-sm font-semibold">{item.title} —</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t({ en: "Why local businesses choose NewBlueMedia", fr: "Pourquoi les entreprises locales choisissent NewBlueMedia" })}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t({
              en: "We create scroll-stopping short form videos for restaurants, gyms, beauty studios, and more. Our team handles ideation, on-site shooting, editing, captions, and a posting plan tailored to your budget. You get results first — we don’t ask for payment until after your 3-week free promo.",
              fr: "Nous créons des vidéos courtes et accrocheuses pour les restaurants, salles de sport, instituts de beauté et plus encore. Notre équipe gère l'idéation, le tournage sur site, le montage, les sous-titres et un plan de publication adapté à votre budget. Vous obtenez d'abord des résultats — nous ne demandons aucun paiement avant la promo gratuite de 3 semaines.",
            })}
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: t({ en: "Video Production", fr: "Production vidéo" }),
              body: t({ en: "On-site shoots, vertical edits, captions, and thumbnails — ready in 48–72 hours.", fr: "Tournages sur site, montages verticaux, sous-titres et miniatures — prêts en 48–72 heures." }),
            },
            {
              title: t({ en: "Growth Strategy", fr: "Stratégie de croissance" }),
              body: t({ en: "Hashtag strategy, posting cadence, trending hooks, and account optimization.", fr: "Stratégie de hashtags, cadence de publication, accroches tendance et optimisation du compte." }),
            },
            {
              title: t({ en: "Analytics & Boosting", fr: "Analytique et promotion" }),
              body: t({ en: "Weekly insights, content tests, and optional ad promotion to scale your best videos.", fr: "Analyses hebdomadaires, tests de contenu et promotion publicitaire optionnelle pour amplifier vos meilleures vidéos." }),
            },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border bg-background p-6 shadow-sm">
              <div className="mb-2 h-10 w-10 rounded-md bg-primary/10" />
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="container py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t({ en: "How It Works", fr: "Comment ça marche" })}</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { step: t({ en: "Step 1: Plan", fr: "Étape 1 : Planifier" }), desc: t({ en: "we audit your brand & map 6 video ideas.", fr: "nous auditons votre marque et cartographions 6 idées de vidéos." }) },
            { step: t({ en: "Step 2: Create", fr: "Étape 2 : Créer" }), desc: t({ en: "we film and edit vertical videos; you approve before posting.", fr: "nous filmons et montons des vidéos verticales ; vous approuvez avant la publication." }) },
            { step: t({ en: "Step 3: Launch", fr: "Étape 3 : Lancer" }), desc: t({ en: "we publish, monitor, and adjust to maximize engagement.", fr: "nous publions, surveillons et ajustons pour maximiser l'engagement." }) },
          ].map((s, i) => (
            <div key={s.step} className="rounded-xl border bg-background p-6">
              <div className="text-xs font-semibold text-primary">0{i + 1}</div>
              <div className="mt-2 font-semibold">{s.step}</div>
              <div className="text-sm text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="container py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t({ en: "Portfolio", fr: "Portfolio" })}</h2>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
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
          ].map((p) => (
            <a
              key={String(p.title)}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border transition hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={String(p.title)}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-muted-foreground">{p.type}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {[t({ en: "They filled our weekday tables in two weeks.", fr: "Ils ont rempli nos tables en semaine en deux semaines." }), t({ en: "Clients booked immediately after watching the videos.", fr: "Les clients ont réservé immédiatement après avoir regardé les vidéos." })].map((txt) => (
            <figure key={txt} className="rounded-2xl border bg-background p-6">
              <blockquote className="text-lg font-semibold">“{txt}”</blockquote>
              <figcaption className="mt-2 text-sm text-muted-foreground">
                {t({ en: "— Restaurant Client / Beauty Studio Owner", fr: "— Client restaurateur / Propriétaire de salon de beauté" })}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Offer Banner */}
      <section className="py-10">
        <div className="container">
          <div className="overflow-hidden rounded-2xl border bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 sm:p-10">
            <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight">
                  {t({ en: "Try us out for free — no upfront payment.", fr: "Essayez-nous gratuitement — aucun paiement initial." })}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {t({ en: "Get 3 weeks of short form content for free. See the results first, then decide if you want to continue.", fr: "Obtenez 3 semaines de contenu court gratuitement. Voyez d'abord les résultats, puis décidez si vous souhaitez continuer." })}
                </p>
              </div>
              <Button size="lg" className="justify-self-start sm:justify-self-end" onClick={openChat}>
                {t({ en: "Claim your 3 Weeks Free Trial", fr: "Profitez de l'essai gratuit de 3 semaines" })}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Chat */}
      <section id="contact" className="container py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t({ en: "Let’s get started — it’s free.", fr: "Commençons — c'est gratuit." })}
          </h2>
          <div className="mt-4 grid gap-2 text-muted-foreground">
            <p>{t({ en: "💬 Chat live with us right here on the site (chat bubble bottom right).", fr: "💬 Discutez en direct avec nous ici sur le site (bulle de chat en bas à droite)." })}</p>
            <p>
              {t({ en: "📞 Prefer a quick call? Reach us at", fr: "📞 Vous préférez un appel rapide ? Joignez-nous au" })}
              <a href="tel:4388807214" className="ml-1 font-semibold text-foreground underline-offset-4 hover:underline">
                438-880-7214
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
