import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

interface ChatMessage {
  id: string;
  name: string;
  text: string;
  ts: number;
}

const STORAGE_KEY = "nbm_messages";
const CHANNEL = "nbm_chat";

export default function Admin() {
  const { t } = useI18n();
  const [authed, setAuthed] = useState<boolean>(() => sessionStorage.getItem("nbm_admin_authed") === "1");
  const [pw, setPw] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch {
      return [];
    }
  });

  const bcRef = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    const bc = new BroadcastChannel(CHANNEL);
    bcRef.current = bc;
    bc.onmessage = (ev) => {
      if (ev?.data?.type === "message" && ev.data.message) {
        setMessages((prev) => {
          const next = [...prev, ev.data.message as ChatMessage];
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
          return next;
        });
      }
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const list = JSON.parse(e.newValue) as ChatMessage[];
          setMessages(list);
        } catch {}
      }
    };
    window.addEventListener("storage", onStorage);
    return () => {
      bc.close();
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const PASS = import.meta.env.VITE_ADMIN_PASSCODE as string | undefined;
    if (!PASS) {
      alert(t({
        en: "Admin passcode is not configured. Please provide one and I will set it.",
        fr: "Le mot de passe administrateur n'est pas configuré. Veuillez m'en fournir un et je le configurerai.",
      }));
      return;
    }
    if (pw === PASS) {
      sessionStorage.setItem("nbm_admin_authed", "1");
      setAuthed(true);
    } else {
      alert(t({ en: "Incorrect passcode.", fr: "Mot de passe incorrect." }));
    }
  }

  const sorted = useMemo(() => [...messages].sort((a, b) => a.ts - b.ts), [messages]);

  if (!authed) {
    return (
      <section className="container py-20">
        <div className="mx-auto max-w-sm rounded-xl border p-6">
          <h1 className="text-xl font-bold">{t({ en: "Admin", fr: "Admin" })}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {t({
              en: "Enter passcode to view incoming chat messages.",
              fr: "Entrez le mot de passe pour voir les messages de chat entrants.",
            })}
          </p>
          <form onSubmit={handleLogin} className="mt-4 grid gap-2">
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder={t({ en: "Passcode", fr: "Mot de passe" })}
              className="h-10 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <Button type="submit" className="justify-self-end">{t({ en: "Enter", fr: "Entrer" })}</Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">
            {t({
              en: "Note: The admin passcode must be set as VITE_ADMIN_PASSCODE.",
              fr: "Remarque : le mot de passe administrateur doit être défini comme VITE_ADMIN_PASSCODE.",
            })}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold">{t({ en: "Inbox", fr: "Boîte de réception" })}</h1>
          <p className="text-sm text-muted-foreground">{t({ en: "Newest at the bottom.", fr: "Plus récents en bas." })}</p>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            sessionStorage.removeItem("nbm_admin_authed");
            setAuthed(false);
          }}
        >
          {t({ en: "Sign out", fr: "Se déconnecter" })}
        </Button>
      </div>
      <div className="grid gap-3">
        {sorted.length === 0 && (
          <div className="rounded-md border p-4 text-sm text-muted-foreground">
            {t({ en: "No messages yet.", fr: "Aucun message pour le moment." })}
          </div>
        )}
        {sorted.map((m) => (
          <div key={m.id} className="rounded-md border p-4">
            <div className="flex items-center justify-between gap-2">
              <div className="font-semibold">{m.name || t({ en: "Anonymous", fr: "Anonyme" })}</div>
              <div className="text-xs text-muted-foreground">{new Date(m.ts).toLocaleString()}</div>
            </div>
            <div className="mt-1 text-sm whitespace-pre-wrap">{m.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
