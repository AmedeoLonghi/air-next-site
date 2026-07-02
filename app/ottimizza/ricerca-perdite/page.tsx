import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { LeakCalculator } from "@/components/sections/LeakCalculator";

export const metadata: Metadata = {
  title: "Ricerca Perdite Aria Compressa | Rilevamento con Ultrasuoni | Air-next",
  description:
    "Rilevamento strumentale delle dispersioni nella rete di distribuzione aria compressa. Quantificazione in litri al minuto e calcolo del costo energetico annuale per ogni punto di perdita.",
  openGraph: {
    title: "Ricerca Perdite Aria Compressa | Rilevamento con Ultrasuoni | Air-next",
    description:
      "Rilevamento strumentale delle dispersioni nella rete di distribuzione aria compressa. Quantificazione in litri al minuto e calcolo del costo energetico annuale per ogni punto di perdita.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ricerca Perdite Aria Compressa",
  description:
    "Rilevamento strumentale delle dispersioni nella rete di distribuzione aria compressa. Quantificazione in litri al minuto e calcolo del costo energetico annuale per ogni punto di perdita.",
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
  areaServed: ["Piemonte", "Lombardia", "Valle d'Aosta", "Liguria", "Emilia Romagna", "Toscana"],
  serviceType: "Ricerca Perdite Aria Compressa",
};

const casiReali = [
  {
    badge: "Ricerca perdite",
    settore: "Componentistica industriale",
    luogo: "Provincia di Novara",
    titolo: "15 dispersioni su rete di piccola taglia",
    metriche: [
      { label: "Dispersioni rilevate", value: "15" },
      { label: "Portata totale dispersa", value: "754,9 l/min" },
      { label: "Ore di funzionamento annue", value: "2.000 h" },
      { label: "Costo energetico delle perdite", value: "€ 2.943/anno" },
    ],
    testo:
      "Il rilievo ha evidenziato una presenza significativa di raccordi ad innesto rapido e tubazioni usurate, con dispersioni difficilmente identificabili senza strumentazione a causa dei continui flussi d'aria necessari al processo produttivo. Il report ha permesso di pianificare la sostituzione progressiva dei componenti deteriorati per priorità economica.",
  },
  {
    badge: "Ricerca perdite",
    settore: "Lavorazioni meccaniche e CNC",
    luogo: "Provincia di Alessandria",
    titolo: "19 dispersioni distribuite su tre aree produttive",
    metriche: [
      { label: "Dispersioni rilevate", value: "19" },
      { label: "Portata totale dispersa", value: "879,1 l/min" },
      { label: "Ore di funzionamento annue", value: "2.112 h" },
      { label: "Costo energetico delle perdite", value: "€ 3.280/anno" },
    ],
    testo:
      "Le dispersioni erano distribuite su tre aree distinte (magazzino, reparto plotter, produzione) con priorità differenziate. La classificazione per priorità economica ha consentito di pianificare gli interventi partendo dai punti con maggiore incidenza sul costo annuale, senza dover fermare tutte le aree contemporaneamente.",
  },
];

const steps = [
  {
    n: "01",
    titolo: "Rilievo sulla rete",
    testo:
      "Percorso sistematico di tutta la rete di distribuzione con tromba acustica a ultrasuoni. Identificazione e georeferenziazione di ogni punto di dispersione rilevato durante la normale attività produttiva, senza fermare l'impianto e senza modifiche alla rete.",
  },
  {
    n: "02",
    titolo: "Classificazione per priorità",
    testo:
      "Ogni perdita viene classificata per portata stimata e priorità di intervento (Alta / Media / Bassa) in base all'incidenza economica calcolata sulle ore di funzionamento e sul costo energia dell'impianto specifico.",
  },
  {
    n: "03",
    titolo: "Report con piano di intervento",
    testo:
      "Consegna di un report con elenco completo delle dispersioni per priorità, portata stimata per ciascuna, e costo annuale calcolato sui parametri reali dell'impianto. Il cliente decide quali punti affrontare e in quale ordine.",
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

        {/* Hero */}
        <section className="bg-background py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">
                Analisi e diagnosi · ricerca perdite
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Le perdite nella rete di distribuzione non si vedono. Si sentono con gli
                ultrasuoni e si misurano in euro.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                Una rete di distribuzione aria compressa perde mediamente tra il 20% e il
                30% dell&apos;aria prodotta. Questa dispersione non compare nei dati di
                produzione, non ferma il processo e non attiva nessun allarme. Si traduce
                direttamente in consumo energetico aggiuntivo del compressore, che lavora di
                più per compensare aria che non arriva mai all&apos;utenza.
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

        {/* Calcolatore */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Il costo delle perdite
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Il costo di una perdita dipende da tre variabili: la sua portata, le ore di
              funzionamento annue dell&apos;impianto e il prezzo dell&apos;energia elettrica.
              Il calcolatore stima il costo annuale in base a questi parametri, usando la
              relazione fisica tra portata d&apos;aria dispersa e potenza elettrica necessaria
              per produrla.
            </p>
            <LeakCalculator />
          </div>
        </section>

        {/* Perché non emergono */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Perché le perdite non emergono dai dati di produzione
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Un impianto con perdite significative nella rete di distribuzione ha un
                  comportamento apparentemente normale: il compressore mantiene la pressione,
                  le utenze funzionano, la produzione non si ferma. L&apos;unico segnale è un
                  consumo energetico del compressore più alto di quanto il profilo produttivo
                  giustificherebbe.
                </p>
                <p>
                  Questo segnale è quasi sempre invisibile perché manca un riferimento:
                  senza sapere quanto dovrebbe consumare l&apos;impianto in condizioni di rete
                  integra, è impossibile quantificare quanto sta consumando in eccesso per
                  compensare le dispersioni. Le perdite si accumulano nei raccordi ad innesto
                  rapido usurati, nelle valvole lasciate aperte su linee fuori produzione,
                  nelle connessioni pneumatiche deteriorate e nei soffi continui delle utenze
                  pneumatiche.
                </p>
                <p>
                  Su impianti con reti estese o con molte utenze pneumatiche, il numero di
                  punti di dispersione può essere elevato anche su impianti relativamente
                  giovani, perché l&apos;usura dei componenti di connessione è progressiva e non
                  lineare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Come funziona */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Rilevamento strumentale con tromba acustica a ultrasuoni
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">
              La ricerca perdite si esegue con strumentazione a ultrasuoni: un trasduttore
              rileva le emissioni acustiche ad alta frequenza generate dal flusso d&apos;aria
              turbolento che fuoriesce da ogni punto di dispersione. Ogni perdita
              identificata viene classificata per entità (portata stimata in l/min),
              localizzazione e priorità di intervento. Il rilievo avviene durante la normale
              attività produttiva, senza fermare l&apos;impianto e senza modifiche alla rete.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4"
                >
                  <div className="text-5xl font-bold text-primary/15 tabular-nums leading-none">
                    {step.n}
                  </div>
                  <h3 className="font-semibold text-base">{step.titolo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.testo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risultati da rilievi reali */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Risultati da rilievi reali
            </h2>
            <div className="space-y-6">
              {casiReali.map((c) => (
                <div
                  key={c.titolo}
                  className="rounded-xl border border-border bg-card p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="secondary">{c.badge}</Badge>
                    <span className="text-xs text-muted-foreground">{c.settore}</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">{c.luogo}</span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight mb-5">{c.titolo}</h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-6">
                    {c.metriche.map((m) => (
                      <div key={m.label}>
                        <dt className="text-xs text-muted-foreground mb-1">{m.label}</dt>
                        <dd className="text-sm font-semibold text-foreground">{m.value}</dd>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-5">
                    {c.testo}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Dati strumentali rilevati su impianti reali. Ragioni sociali e dati
              identificativi omessi per riservatezza.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Il costo delle perdite è misurabile prima di intervenire
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Il rilievo richiede mezza giornata su impianti di media dimensione e avviene
                senza fermare la produzione. Al termine hai la mappa completa delle
                dispersioni con il costo annuale calcolato sui parametri reali del tuo
                impianto.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Richiedi un sopralluogo
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/case-study"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
                >
                  Vedi tutti i casi studio
                  <ArrowRight size={16} />
                </Link>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Interveniamo in Piemonte, Lombardia, Valle d'Aosta, Liguria, Emilia Romagna e Toscana.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
