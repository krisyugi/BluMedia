import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_10%_10%,hsl(var(--primary)/0.12),transparent_60%),radial-gradient(60%_60%_at_90%_20%,hsl(var(--primary)/0.12),transparent_60%)]" />
        <div className="container grid gap-8 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
              Short-form video marketing
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              NewBlueMedia — short form content that turns views into customers.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              We make short videos for local small businesses that fill tables and book appointments — fast, affordable, and authentic.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button size="lg" className="shadow-sm" asChild>
                <a href="#contact">Start your 3 free weeks</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#portfolio">See our work</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto h-72 w-full max-w-md rounded-2xl bg-gradient-to-br from-primary/15 via-primary/10 to-transparent p-2 ring-1 ring-border sm:h-96 md:ml-auto">
              <div className="grid h-full place-items-center rounded-xl bg-background shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.35)]">
                <div className="grid place-items-center rounded-lg border p-6 text-center">
                  <span className="text-sm font-semibold text-primary">48–72 hour turnaround</span>
                  <span className="mt-1 text-xs text-muted-foreground">On-site shoots • Vertical edits • Captions</span>
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
                title: "Short turnaround",
                desc: "Content ready in 48–72 hours.",
              },
              {
                title: "Performance focus",
                desc: "Our videos drive real bookings & sales.",
              },
              {
                title: "Risk-free",
                desc: "Try 3 weeks free, pay only if you’re satisfied.",
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
            Why local businesses choose NewBlueMedia
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We create scroll-stopping short form videos for restaurants, gyms, beauty studios, and more. Our team handles ideation, on-site shooting, editing, captions, and a posting plan tailored to your budget. You get results first — we don’t ask for payment until after your 3-week free promo.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Video Production",
              body:
                "On-site shoots, vertical edits, captions, and thumbnails — ready in 48–72 hours.",
            },
            {
              title: "Growth Strategy",
              body:
                "Hashtag strategy, posting cadence, trending hooks, and account optimization.",
            },
            {
              title: "Analytics & Boosting",
              body:
                "Weekly insights, content tests, and optional ad promotion to scale your best videos.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border bg-background p-6 shadow-sm"
            >
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
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            How It Works
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              step: "Step 1: Plan",
              desc: "we audit your brand & map 6 video ideas.",
            },
            {
              step: "Step 2: Create",
              desc: "we film and edit vertical videos; you approve before posting.",
            },
            {
              step: "Step 3: Launch",
              desc: "we publish, monitor, and adjust to maximize engagement.",
            },
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
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Portfolio
          </h2>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "L’appro MTL",
              handle: "@lappro_mtl",
              desc: "Food prep videos that boosted daily orders.",
            },
            {
              title: "Minceur Idéal",
              handle: "@minceur.ideal",
              desc: "Behind-the-scenes clips that drove client sign-ups.",
            },
            {
              title: "Chef Makk",
              handle: "@chefmakk",
              desc: "Recipe-style shorts that hit thousands of local views.",
            },
          ].map((p) => (
            <div key={p.title} className="overflow-hidden rounded-2xl border">
              <div className="h-40 w-full bg-gradient-to-br from-primary/20 to-primary/5" />
              <div className="p-5">
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-muted-foreground">{p.handle}</div>
                <div className="mt-2 text-sm text-muted-foreground">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            "They filled our weekday tables in two weeks.",
            "Clients booked immediately after watching the videos.",
          ].map((t) => (
            <figure key={t} className="rounded-2xl border bg-background p-6">
              <blockquote className="text-lg font-semibold">“{t}”</blockquote>
              <figcaption className="mt-2 text-sm text-muted-foreground">
                — Restaurant Client / Beauty Studio Owner
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
                  Try us out for free — no upfront payment.
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Get 3 weeks of short form content for free. See the results first, then decide if you want to continue.
                </p>
              </div>
              <Button size="lg" className="justify-self-start sm:justify-self-end" asChild>
                <a href="#contact">Claim your 3 free weeks</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Chat */}
      <section id="contact" className="container py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let’s get started — it’s free.
          </h2>
          <div className="mt-4 grid gap-2 text-muted-foreground">
            <p>💬 Chat live with us right here on the site (chat bubble bottom right).</p>
            <p>
              📞 Prefer a quick call? Reach us at
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
