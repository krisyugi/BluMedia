export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-6 py-10 md:grid-cols-2 md:gap-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-primary to-primary/70" />
            <span className="text-lg font-extrabold tracking-tight">NewBlueMedia</span>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Short form content that turns views into customers.
          </p>
        </div>
        <div className="md:justify-self-end md:text-right">
          <p className="text-sm text-muted-foreground">© 2025 NewBlueMedia — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
