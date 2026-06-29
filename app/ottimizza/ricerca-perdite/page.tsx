import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ricerca Perdite Aria Compressa | Air-next",
  description:
    "Rilevamento con ultrasuoni delle perdite nella rete di distribuzione aria compressa. Quantificazione in kWh e stima del costo annuo degli sprechi con report strumentale.",
  openGraph: {
    title: "Ricerca Perdite Aria Compressa | Air-next",
    description:
      "Rilevamento con ultrasuoni delle perdite nella rete di distribuzione aria compressa. Quantificazione in kWh e stima del costo annuo degli sprechi con report strumentale.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ricerca Perdite Aria Compressa",
  description:
    "Rilevamento con ultrasuoni delle perdite nella rete di distribuzione aria compressa. Quantificazione in kWh e stima del costo annuo degli sprechi con report strumentale.",
  provider: {
    "@type": "LocalBusiness",
    name: "Air-next",
    email: "info@air-next.it",
    telephone: "+390142578069",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casale Monferrato",
      addressRegion: "AL",
      addressCountry: "IT",
    },
  },
  areaServed: ["Piemonte", "Lombardia", "Liguria", "Emilia-Romagna", "Toscana"],
  serviceType: "Ricerca Perdite",
};

const steps = [
  {
    n: "01",
    titolo: "Rilevamento con ultrasuoni",
    testo:
      "Utilizziamo strumentazione a ultrasuoni per identificare ogni punto di dispersione sulla rete, indipendentemente dalle dimensioni della perdita. Il rilevamento avviene durante la normale attività produttiva senza interruzioni.",
  },
  {
    n: "02",
    titolo: "Classificazione e quantificazione",
    testo:
      "Ogni perdita identificata viene classificata per entità, localizzazione e accessibilità. Stimiamo il volume d'aria disperso e lo convertiamo in kWh e costo energetico annuale al prezzo dell'energia del cliente.",
  },
  {
    n: "03",
    titolo: "Report e piano di intervento",
    testo:
      "Il report finale elenca tutte le perdite per priorità di intervento, con il costo annuale di ciascuna e il risparmio cumulativo ottenibile dalla loro eliminazione. Il cliente decide quali affrontare e in quale ordine.",
  },
];

export default function RicercaPerdite() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="bg-background py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">
                Ricerca perdite aria compressa
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Quanto costa la tua rete di distribuzione aria compressa?
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                Le perdite nei raccordi, nelle valvole e nelle tubazioni non sono visibili.
                Si sentono con gli ultrasuoni e si quantificano in kWh. Rileviamo ogni punto
                di dispersione, lo classifichiamo per priorità e calcoliamo il costo annuo
                degli sprechi.
              </p>
              <div className="mt-10">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Richiedi un sopralluogo
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Il problema ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Perché le perdite non emergono dai dati di produzione
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Un impianto aria compressa perde mediamente tra il 20% e il 30% dell&apos;aria
                  prodotta attraverso la rete di distribuzione. Questa dispersione non compare
                  su nessun indicatore di processo: il compressore continua a produrre, la
                  pressione si mantiene, la produzione non si ferma.
                </p>
                <p>
                  L&apos;unico effetto visibile è il consumo energetico del compressore, che rimane
                  più alto del necessario senza una causa apparente. Le perdite si accumulano
                  nei punti di connessione, nei raccordi rapidi usurati, nelle valvole lasciate
                  aperte, nei soffi continui delle utenze pneumatiche.
                </p>
                <p>
                  Su una rete di media dimensione, anche perdite apparentemente modeste
                  mantengono attivo ciclicamente un compressore che altrimenti si fermerebbe,
                  con un costo che si somma ora per ora per tutto l&apos;anno.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Metodologia ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-14">
              La metodologia
            </h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.n}>
                  <div className="text-5xl font-bold text-primary/15 mb-4 tabular-nums">
                    {step.n}
                  </div>
                  <h3 className="font-semibold text-base mb-3">{step.titolo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.testo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cosa emerge dai rilievi ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Quello che troviamo quasi sempre
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  I raccordi rapidi sono la fonte più comune di dispersione: si usurano nel
                  tempo e vengono sostituiti raramente perché il degrado è graduale e non causa
                  problemi immediati alla produzione.
                </p>
                <p>
                  Valvole di intercettazione lasciate aperte su linee non più in uso mantengono
                  in pressione tratti di rete inutili, con perdite continue che nessuno ha
                  motivo di cercare.
                </p>
                <p>
                  I soffi di scarico continuo — utilizzati per pulire pezzi o azionare utenze
                  pneumatiche — consumano volumi d&apos;aria significativi e spesso possono essere
                  sostituiti con soluzioni più efficienti.
                </p>
                <p>
                  In molti casi il costo annuale delle perdite supera il costo dell&apos;intervento
                  di riparazione: il ritorno sull&apos;investimento si misura in settimane, non in anni.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA finale ── */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Il costo delle perdite è misurabile prima di intervenire
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Il sopralluogo richiede mezza giornata su impianti di media dimensione.
                Al termine hai la mappa completa delle dispersioni con il costo annuale
                di ciascuna.
              </p>
              <div className="mt-8">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Richiedi un sopralluogo
                  <ArrowRight size={16} />
                </Link>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Interveniamo in Piemonte, Lombardia, Liguria, Emilia Romagna e Toscana.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
