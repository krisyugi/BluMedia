import { Link } from "react-router-dom";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 text-muted-foreground">
          This page is a placeholder. Tell me what you want here and I’ll build it next.
        </p>
        <div className="mt-6 text-sm">
          <Link to="/" className="text-primary underline-offset-4 hover:underline">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
