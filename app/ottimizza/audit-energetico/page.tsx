import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Audit Energetico Compressori | Air-next",
  description:
    "Monitoraggio strumentale dei consumi reali di impianti aria compressa. Profilo di carico, simulazione annuale, scenari di ottimizzazione con risparmio quantificato.",
  openGraph: {
    title: "Audit Energetico Compressori | Air-next",
    description:
      "Monitoraggio strumentale dei consumi reali di impianti aria compressa. Profilo di carico, simulazione annuale, scenari di ottimizzazione con risparmio quantificato.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit Energetico Compressori",
  description:
    "Monitoraggio strumentale dei consumi reali di impianti aria compressa: profilo di carico, simulazione energetica annuale e scenari di ottimizzazione con risparmio quantificato.",
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
  serviceType: "Audit Energetico",
};

const steps = [
  {
    n: "01",
    titolo: "Installazione strumentazione",
    testo:
      "Installiamo i data logger sulla linea principale senza modifiche all'impianto e senza interruzioni della produzione. Il monitoraggio inizia in automatico.",
  },
  {
    n: "02",
    titolo: "Acquisizione dati",
    testo:
      "Rileviamo portata, pressione e consumo energetico con campionamento al minuto per 7 giorni consecutivi. Il campione copre l'intero ciclo produttivo settimanale: ore di punta, carichi ridotti, fermate notturne, weekend.",
  },
  {
    n: "03",
    titolo: "Analisi e report",
    testo:
      "Elaboriamo il profilo di carico reale, calcoliamo il costo energetico annuale per estrapolazione su 48 settimane e sviluppiamo scenari di ottimizzazione con risparmio quantificato in kWh ed euro. Ogni affermazione del report è supportata da un dato strumentale.",
  },
];

const auditData = [
  {
    settore: "Componentistica industriale",
    luogo: "Provincia di Alessandria",
    impianto: "2 compressori scroll da 22 kW — capacità totale 7,4 m³/min",
    metriche: [
      { label: "Portata media rilevata", value: "0,269 m³/min — 3,6% della capacità installata" },
      { label: "Distribuzione carico", value: "43,4% del tempo sotto il 25% · 53,9% tra 25% e 50%" },
      { label: "Costo energetico annuale stimato", value: "€ 13.676" },
      { label: "Risparmio con ottimizzazione", value: "€ 7.229/anno — riduzione 52,8%" },
    ],
  },
  {
    settore: "Automazione industriale",
    luogo: "Provincia di Novara",
    impianto: "1 compressore VSD da 160 kW — produzione continua lun–sab",
    metriche: [
      { label: "Portata media rilevata", value: "16,5–18 m³/min · consumo domenicale residuo 6,5 m³/min" },
      { label: "Distribuzione carico", value: "49% del tempo tra 50–75% della capacità · 28% oltre il 75%" },
      { label: "Costo energetico annuale stimato", value: "€ 107.640" },
      { label: "Risparmio con configurazione modulare", value: "€ 20.280/anno — riduzione 18,9%" },
    ],
  },
  {
    settore: "Lavorazioni meccaniche",
    luogo: "Provincia di Alessandria",
    impianto: "1 compressore VSD da 37 kW — produzione su tre turni",
    metriche: [
      { label: "Portata media rilevata", value: "2,3–2,7 m³/min · 98,5% del tempo in carico attivo" },
      { label: "Distribuzione carico", value: "79,1% del tempo nel range 25–50% della capacità" },
      { label: "Costo energetico annuale stimato", value: "€ 35.771" },
      { label: "Risparmio con tecnologia IE5", value: "fino a € 8.677/anno — riduzione 24,3%" },
    ],
  },
];

export default function AuditEnergetico() {
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
                Audit energetico compressori
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Quanto consuma realmente il tuo impianto aria compressa?
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                La risposta non si stima. Si misura. Installiamo strumentazione sulla linea
                di alimentazione, rileviamo portate e consumi per 7 giorni consecutivi,
                consegniamo il profilo reale dell&apos;impianto con simulazione del costo
                energetico annuale.
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

        {/* ── Metodologia ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
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

        {/* ── Cosa emerge dai dati ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Tre condizioni ricorrenti negli impianti che monitoriamo
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Il sovradimensionamento della centrale rispetto al fabbisogno reale è la
                  condizione più comune. Un compressore che raggiunge rapidamente la pressione
                  di rete e resta poi in scarico per lunghi periodi assorbe energia senza
                  produrre aria utile — una perdita che non compare su nessun indicatore di
                  produzione ma si legge direttamente in bolletta.
                </p>
                <p>
                  La seconda condizione riguarda i consumi fuori orario produttivo: richieste
                  d&apos;aria presenti durante fermate, notti e weekend indicano perdite distribuite
                  sulla rete che, su una centrale di media taglia, possono tradursi in migliaia
                  di euro annui.
                </p>
                <p>
                  La terza è la filosofia di centrale: una singola macchina di grande potenza
                  che segue l&apos;intero profilo produttivo lavora per molte ore in modulazione ai
                  carichi intermedi, condizione in cui il rendimento specifico è lontano dal
                  punto ottimale. Nessuna di queste condizioni è identificabile senza misura strumentale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Dati da impianti monitorati ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Risultati da audit recenti
              </h2>
              <p className="mt-3 text-muted-foreground">
                Dati strumentali rilevati su impianti reali. Nomi aziendali omessi per riservatezza.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {auditData.map((item) => (
                <div
                  key={item.settore + item.luogo}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-6"
                >
                  <div>
                    <h3 className="font-semibold text-base">{item.settore}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.luogo}</p>
                    <p className="text-xs text-muted-foreground border-t border-border mt-4 pt-4">
                      {item.impianto}
                    </p>
                  </div>
                  <dl className="space-y-4">
                    {item.metriche.map((m) => (
                      <div key={m.label}>
                        <dt className="text-xs text-muted-foreground">{m.label}</dt>
                        <dd className="text-sm font-medium mt-0.5 text-foreground">
                          {m.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA finale ── */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Dati dell&apos;impianto disponibili in 7 giorni
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Il sopralluogo per l&apos;installazione della strumentazione richiede circa un&apos;ora.
                Non è necessario fermare la produzione. Al termine del monitoraggio ricevi il
                report completo con profilo di carico reale, simulazione
                energetica annuale e scenari di intervento.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
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
