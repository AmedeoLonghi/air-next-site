"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const servizi = [
  "Audit Energetico",
  "Ricerca Perdite",
  "Conformità Normativa",
  "Analisi Qualità Aria",
  "Aria Compressa",
  "Refrigerazione Industriale",
  "Gas Tecnici",
  "Altro",
];

const inputClass =
  "w-full rounded-lg border border-input bg-card px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // CRM integration — provider da definire
    setSubmitted(true);
  }

  return (
    <section id="contatti" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Parliamo del tuo impianto
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Descrivi il contesto, il problema o quello che vuoi ottimizzare.
              Rispondo entro 24 ore con una valutazione tecnica preliminare, senza impegno.
            </p>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="font-medium text-foreground">Email</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  <a href="mailto:info@air-next.it" className="hover:text-foreground transition-colors">
                    info@air-next.it
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Telefono</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  <a href="tel:+390142578069" className="hover:text-foreground transition-colors">
                    +39 0142 578069
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Sede</dt>
                <dd className="mt-0.5 text-muted-foreground">Casale Monferrato (AL)</dd>
              </div>
            </dl>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-xl border border-border bg-muted/40 p-10 text-center">
                <p className="font-semibold text-lg mb-2">Richiesta inviata</p>
                <p className="text-sm text-muted-foreground">
                  Ti rispondo entro 24 ore con una valutazione tecnica.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-1.5" htmlFor="nome">
                      Nome <span className="text-destructive">*</span>
                    </label>
                    <input id="nome" name="nome" type="text" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" htmlFor="azienda">
                      Azienda <span className="text-destructive">*</span>
                    </label>
                    <input id="azienda" name="azienda" type="text" required className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-1.5" htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input id="email" name="email" type="email" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" htmlFor="telefono">
                      Telefono
                    </label>
                    <input id="telefono" name="telefono" type="tel" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="servizio">
                    Servizio di interesse
                  </label>
                  <select id="servizio" name="servizio" className={inputClass}>
                    <option value="">Seleziona...</option>
                    {servizi.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="messaggio">
                    Descrizione del problema o dell&apos;impianto
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Invia richiesta
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
