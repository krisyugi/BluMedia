import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { HeroAnimated } from "@/components/site/HeroAnimated";
import { InViewHeading } from "@/components/site/InViewHeading";
import { InViewFadeUp } from "@/components/site/InViewFadeUp";

export default function Index() {
  const { t } = useI18n();

  function openChat(e?: React.MouseEvent) {
    e?.preventDefault();
    window.dispatchEvent(new CustomEvent("open-chat"));
  }

  const services = [
    {
      title: t({ en: "Video Production", fr: "Production vidéo" }),
      body: t({
        en: "On-site shoots, vertical edits, captions, and thumbnails — ready in 48–72 hours.",
        fr: "Tournages sur site, montages verticaux, sous-titres et miniatures — prêts en 48–72 heures.",
      }),
      icon: (
        <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M16 10l5-3v10l-5-3z" />
          <circle cx="9.5" cy="12" r="2.5" />
        </svg>
      ),
    },
    {
      title: t({ en: "Growth Strategy", fr: "Stratégie de croissance" }),
      body: t({
        en: "Hashtag strategy, posting cadence, trending hooks, and account optimization.",
        fr: "Stratégie de hashtags, cadence de publication, accroches tendance et optimisation du compte.",
      }),
      icon: (
        <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M7 15l4-4 3 3 5-6" />
          <circle cx="7" cy="15" r=".5" />
          <circle cx="11" cy="11" r=".5" />
          <circle cx="14" cy="14" r=".5" />
          <circle cx="19" cy="8" r=".5" />
        </svg>
      ),
    },
    {
      title: t({ en: "Analytics & Boosting", fr: "Analytique et promotion" }),
      body: t({
        en: "Weekly insights, content tests, and optional ad promotion to scale your best videos.",
        fr: "Analyses hebdomadaires, tests de contenu et promotion publicitaire optionnelle pour amplifier vos meilleures vidéos.",
      }),
      icon: (
        <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="14" rx="2" />
          <path d="M7 13V9" />
          <path d="M12 13V7" />
          <path d="M17 13V11" />
          <path d="M3 19h18" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Animated Hero (on load, mobile too) */}
      <HeroAnimated />

      {/* Why Choose Us */}
      <div className="border-t bg-gradient-to-b from-transparent to-background/60">
        <div className="container py-10">
          <div className="mx-auto max-w-3xl text-center">
            <InViewHeading tag="h2" className="text-2xl font-extrabold tracking-tight">{t({ en: "Why Choose Us", fr: "Pourquoi nous choisir" })}</InViewHeading>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
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
                desc: t({ en: "Try 3 weeks free, pay only if you're satisfied.", fr: "Essayez 3 semaines gratuitement, payez seulement si vous êtes satisfait." }),
              },
            ].map((item, i) => (
              <InViewFadeUp key={String(item.title)} delay={i * 0.05}>
                <div className="rounded-2xl border bg-background p-6 shadow-sm">
                  <div className="text-sm">
                    <span className="font-semibold">{item.title}:</span>{" "}
                    <span className="text-muted-foreground">{item.desc}</span>
                  </div>
                </div>
              </InViewFadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <section id="about" className="container py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <InViewHeading tag="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t({ en: "Why local businesses choose NewBlueMedia", fr: "Pourquoi les entreprises locales choisissent NewBlueMedia" })}
          </InViewHeading>
          <InViewFadeUp>
            <p className="mt-4 text-lg text-muted-foreground">
              {t({
                en: "We create scroll-stopping short form videos for restaurants, gyms, beauty studios, and more. Our team handles ideation, on-site shooting, editing, captions, and a posting plan tailored to your budget. You get results first — we don’t ask for payment until after your 3-week free promo.",
                fr: "Nous créons des vidéos courtes et accrocheuses pour les restaurants, salles de sport, instituts de beauté et plus encore. Notre équipe gère l'idéation, le tournage sur site, le montage, les sous-titres et un plan de publication adapté à votre budget. Vous obtenez d'abord des résultats — nous ne demandons aucun paiement avant la promo gratuite de 3 semaines.",
              })}
            </p>
          </InViewFadeUp>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((card, i) => (
            <InViewFadeUp key={String(card.title)} delay={i * 0.06}>
              <div className="rounded-2xl border bg-background p-6 shadow-sm">
                <div className="mb-2">{card.icon}</div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
              </div>
            </InViewFadeUp>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="container py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <InViewHeading tag="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t({ en: "How It Works", fr: "Comment ça marche" })}</InViewHeading>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { step: t({ en: "Step 1: Plan", fr: "Étape 1 : Planifier" }), desc: t({ en: "we audit your brand & map video ideas.", fr: "nous auditons votre marque et cartographions des idées de vidéos." }) },
            { step: t({ en: "Step 2: Create", fr: "Étape 2 : Créer" }), desc: t({ en: "we film and edit vertical videos; you approve before posting.", fr: "nous filmons et montons des vidéos verticales ; vous approuvez avant la publication." }) },
            { step: t({ en: "Step 3: Launch", fr: "Étape 3 : Lancer" }), desc: t({ en: "we publish, monitor, and adjust to maximize engagement.", fr: "nous publions, surveillons et ajustons pour maximiser l'engagement." }) },
          ].map((s, i) => (
            <InViewFadeUp key={s.step} delay={i * 0.06}>
              <div className="rounded-xl border bg-background p-6">
                <div className="text-xs font-semibold text-primary">0{i + 1}</div>
                <div className="mt-2 font-semibold">{s.step}</div>
                <div className="text-sm text-muted-foreground">{s.desc}</div>
              </div>
            </InViewFadeUp>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="projects" className="container py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <InViewHeading tag="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t({ en: "Portfolio", fr: "Portfolio" })}</InViewHeading>
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
          ].map((p, i) => (
            <InViewFadeUp key={String(p.title)} delay={i * 0.06}>
              <a
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
            </InViewFadeUp>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {[t({ en: "Clients quickly see the impact of our videos on their visibility.", fr: "Les clients constatent rapidement l'impact de nos vidéos sur leur visibilité." }), t({ en: "NewBlueMedia’s videos attract attention and increase local engagement.", fr: "Les vidéos de NewBlueMedia attirent l'attention et augmentent l'engagement local." })].map((txt, i) => (
            <InViewFadeUp key={txt} delay={i * 0.06}>
              <figure className="rounded-2xl border bg-background p-6">
                <blockquote className="text-lg font-semibold">“{txt}”</blockquote>
              </figure>
            </InViewFadeUp>
          ))}
        </div>
      </section>

      {/* Offer Banner */}
      <section className="py-10">
        <div className="container">
          <InViewFadeUp>
            <div className="overflow-hidden rounded-2xl border bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 sm:p-10">
              <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto]">
                <div>
                  <InViewHeading tag="h3" className="text-2xl font-extrabold tracking-tight">
                    {t({ en: "Try us out for free — no upfront payment.", fr: "Essayez-nous gratuitement — aucun paiement initial." })}
                  </InViewHeading>
                  <p className="mt-2 text-muted-foreground">
                    {t({ en: "Get 3 weeks of short form content for free. See the results first, then decide if you want to continue.", fr: "Obtenez 3 semaines de contenu court gratuitement. Voyez d'abord les résultats, puis décidez si vous souhaitez continuer." })}
                  </p>
                </div>
                <Button size="lg" className="justify-self-start sm:justify-self-end" onClick={openChat}>
                  {t({ en: "Claim your 3 Weeks Free Trial", fr: "Profitez de l'essai gratuit de 3 semaines" })}
                </Button>
              </div>
            </div>
          </InViewFadeUp>
        </div>
      </section>

      {/* Contact & Chat */}
      <section id="contact" className="container py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <InViewHeading tag="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t({ en: "Let’s get started — it’s free.", fr: "Commençons — c'est gratuit." })}
          </InViewHeading>
          <InViewFadeUp>
            <div className="mt-4 grid gap-2 text-muted-foreground">
              <p>{t({ en: "Send us a message", fr: "Envoyez-nous un message" })}</p>
              <p>
                {t({ en: "📞 Prefer a quick call? Reach us at", fr: "📞 Vous préférez un appel rapide ? Joignez-nous au" })}
                <a href="tel:4388807214" className="ml-1 font-semibold text-foreground underline-offset-4 hover:underline">
                  438-880-7214
                </a>
                .
              </p>
            </div>
          </InViewFadeUp>
        </div>
      </section>
    </div>
  );
}
