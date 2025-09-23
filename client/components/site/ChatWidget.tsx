import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) {
      toast("Please enter a message");
      return;
    }
    toast.success("Message sent! We'll be in touch shortly.");
    setMessage("");
    setName("");
    setOpen(false);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-[92vw] max-w-sm rounded-xl border bg-background p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <div className="font-semibold">Live chat</div>
            <button className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <p className="mb-3 text-sm text-muted-foreground">
            Chat with us right here. We usually reply within minutes.
          </p>
          <form onSubmit={handleSend} className="grid gap-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="h-10 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              rows={4}
              className="rounded-md border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <Button type="submit" className="justify-self-end">Send</Button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M21 12c0 4.418-4.03 8-9 8-1.1 0-2.16-.18-3.14-.5L3 21l1.52-4.07C4.19 15.96 4 15 4 14c0-4.418 4.03-8 9-8s8 3.582 8 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="9" cy="12" r="1" fill="currentColor" />
          <circle cx="13" cy="12" r="1" fill="currentColor" />
          <circle cx="17" cy="12" r="1" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}
