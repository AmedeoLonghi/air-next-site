import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Refrigerazione Industriale Aria Compressa | Chiller | Air-next",
  description:
    "Refrigerazione industriale per aria compressa e processi produttivi: chiller, free cooling, noleggio. Manutenzione su qualsiasi sistema installato.",
  openGraph: {
    title: "Refrigerazione Industriale Aria Compressa | Chiller | Air-next",
    description:
      "Refrigerazione industriale per aria compressa e processi produttivi: chiller, free cooling, noleggio. Manutenzione su qualsiasi sistema installato.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Refrigerazione Industriale: Chiller e Sistemi di Raffreddamento",
  description:
    "Fornitura, installazione e manutenzione di sistemi di refrigerazione industriale: chiller ad acqua e ad espansione diretta, free cooling, noleggio sistemi di raffreddamento per processi industriali.",
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
  serviceType: "Refrigerazione Industriale",
};

const sistemi = [
  {
    tipo: "Chiller ad espansione diretta (DX)",
    testo:
      "Il refrigerante circola direttamente nel circuito di raffreddamento del processo. Soluzione compatta, con minori componenti rispetto ai circuiti ad acqua. Adatta per piccole e medie potenze dove la distanza tra l'unità frigorifera e l'utenza è limitata e non è necessario un circuito di distribuzione secondario.",
  },
  {
    tipo: "Chiller ad acqua",
    testo:
      "Il circuito primario a refrigerante raffredda l'acqua di un circuito secondario che distribuisce il freddo al processo. Soluzione flessibile per medie e grandi potenze: il circuito d'acqua può alimentare più utenze in parallelo, gestire distanze significative e integrare serbatoi di accumulo termico per smorzare i picchi di domanda.",
  },
  {
    tipo: "Free cooling",
    testo:
      "Quando la temperatura esterna è sufficientemente bassa, il calore del circuito d'acqua è dissipato direttamente nell'aria senza necessità del compressore frigorifero. Riduce il consumo energetico nei mesi invernali e nelle stagioni intermedie. Integrato nei chiller come funzione automatica o come sezione separata.",
  },
];

const applicazioni = [
  {
    settore: "Stampi e pressofusione",
    testo:
      "Raffreddamento stampi per iniezione plastica, pressofusione alluminio e zinco. Il controllo della temperatura dello stampo influisce direttamente sul ciclo produttivo e sulla qualità dimensionale del pezzo.",
  },
  {
    settore: "Macchine utensili",
    testo:
      "Raffreddamento del fluido da taglio e degli organi di macchine utensili a controllo numerico. La temperatura del fluido influisce sulla precisione lavorativa e sulla durata degli utensili.",
  },
  {
    settore: "Processi chimici e farmaceutici",
    testo:
      "Raffreddamento reattori, condensatori e processi che richiedono temperatura controllata. Spesso con requisiti di precisione e documentazione del profilo termico.",
  },
  {
    settore: "Raffreddamento compressori",
    testo:
      "Chiller per aftercooler e sistemi di raffreddamento acqua nei compressori ad acqua. La temperatura di ingresso dell'aria al compressore influisce direttamente sul consumo energetico specifico.",
  },
];

export default function RefrigerazioneIndustriale() {
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
                Refrigerazione industriale
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Sistemi di raffreddamento per processi industriali
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                Chiller, free cooling e sistemi a circuito chiuso per raffreddamento
                di stampi, macchine utensili, processi chimici e centrali di
                compressori. Soluzioni in acquisto e a noleggio, con assistenza
                tecnica diretta e manutenzione su qualsiasi sistema installato.
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

        {/* ── Tipologie ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Tipologie di impianto
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {sistemi.map((s) => (
                <div
                  key={s.tipo}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3"
                >
                  <h3 className="font-semibold text-base">{s.tipo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.testo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Applicazioni ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Applicazioni
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {applicazioni.map((a) => (
                <div
                  key={a.settore}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3"
                >
                  <h3 className="font-semibold text-base">{a.settore}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.testo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Noleggio ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Noleggio sistemi di raffreddamento
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Il noleggio di chiller è utile in tre situazioni tipiche: copertura
                  di picchi stagionali di carico termico, sostituzione temporanea
                  di un impianto fermo per manutenzione straordinaria o guasto, e
                  raffreddamento di cantieri temporanei o installazioni sperimentali
                  dove l&apos;acquisto di un impianto fisso non è giustificato.
                </p>
                <p>
                  Le unità in noleggio sono disponibili in varie taglie e configurazioni.
                  L&apos;installazione è a carico nostro; il cliente si connette al circuito
                  esistente con un tempo di attivazione ridotto rispetto all&apos;acquisto
                  e all&apos;installazione di un impianto permanente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── F-Gas e manutenzione ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Refrigeranti, F-Gas e manutenzione
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Il Regolamento UE 517/2014 (F-Gas) prevede restrizioni progressive
                  all&apos;immissione sul mercato di refrigeranti con alto potenziale
                  di riscaldamento globale (GWP). I refrigeranti legacy come R-404A
                  e R-22 sono stati progressivamente limitati e richiederanno la
                  conversione degli impianti che li utilizzano.
                </p>
                <p>
                  La manutenzione degli impianti frigoriferi prevede: pulizia e verifica
                  delle batterie condensatore ed evaporatore, controllo del circuito
                  refrigerante secondo le prescrizioni F-Gas, verifica delle valvole
                  di espansione e dei dispositivi di sicurezza, analisi dell&apos;acqua nei
                  circuiti chiusi per il trattamento anticorrosivo e anticalcare.
                </p>
                <p>
                  Interveniamo su qualsiasi marca e modello di chiller installato.
                  Per impianti con refrigeranti legacy, valutiamo le opzioni di
                  conversione o sostituzione in funzione dell&apos;età e dello stato
                  dell&apos;impianto.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/ottimizza/audit-energetico"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1")}
                >
                  Come valutiamo il consumo della centrale a compressori
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 sm:py-28 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Raffreddamento di processo o sostituzione di un impianto esistente?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Valutiamo la situazione con un sopralluogo tecnico: carico termico
                richiesto, condizioni di installazione, refrigerante esistente e
                opzioni di intervento: acquisto, sostituzione o noleggio.
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
