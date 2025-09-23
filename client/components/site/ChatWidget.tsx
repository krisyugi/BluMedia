import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";

interface ChatMessage {
  id: string;
  name: string;
  text: string;
  ts: number;
}

const STORAGE_KEY = "nbm_messages";
const CHANNEL = "nbm_chat";

export function ChatWidget() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const taRef = useRef<HTMLTextAreaElement | null>(null);
  const bcRef = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    const bc = new BroadcastChannel(CHANNEL);
    bcRef.current = bc;
    return () => bc.close();
  }, []);

  useEffect(() => {
    const handler = () => {
      setOpen(true);
      setTimeout(() => taRef.current?.focus(), 0);
    };
    window.addEventListener("open-chat", handler);
    return () => window.removeEventListener("open-chat", handler);
  }, []);

  function sendToAdmin(msg: ChatMessage) {
    try {
      const list: ChatMessage[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      list.push(msg);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {}
    bcRef.current?.postMessage({ type: "message", message: msg });
  }

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) {
      toast(t({ en: "Please enter a message", fr: "Veuillez saisir un message" }));
      return;
    }
    const payload: ChatMessage = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: name.trim(),
      text: message.trim(),
      ts: Date.now(),
    };
    sendToAdmin(payload);
    toast.success(t({ en: "Message sent! We'll be in touch shortly.", fr: "Message envoyé ! Nous vous répondrons rapidement." }));
    setMessage("");
    setName("");
    setOpen(false);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-[92vw] max-w-sm rounded-xl border bg-background p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <div className="font-semibold">{t({ en: "Live chat", fr: "Chat en direct" })}</div>
            <button className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>
              {t({ en: "Close", fr: "Fermer" })}
            </button>
          </div>
          <p className="mb-3 text-sm text-muted-foreground">
            {t({ en: "Chat with us here. We usually reply within minutes.", fr: "Discutez avec nous ici. Nous répondons généralement en quelques minutes." })}
          </p>
          <form onSubmit={handleSend} className="grid gap-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t({ en: "Your name", fr: "Votre nom" })}
              className="h-10 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              ref={taRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t({ en: "Tell us about your business", fr: "Parlez-nous de votre entreprise" })}
              rows={4}
              className="rounded-md border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <Button type="submit" className="justify-self-end">{t({ en: "Send", fr: "Envoyer" })}</Button>
          </form>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={t({ en: "Open chat", fr: "Ouvrir le chat" })}
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
