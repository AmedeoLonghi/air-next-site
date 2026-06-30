import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Zap, Search, FileCheck, Microscope, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Analisi e Diagnosi impianti aria compressa | Air-next",
  description:
    "Quattro servizi di analisi strumentale per impianti aria compressa: audit energetico, ricerca perdite, conformità normativa, analisi qualità aria.",
  openGraph: {
    title: "Analisi e Diagnosi impianti aria compressa | Air-next",
    description:
      "Quattro servizi di analisi strumentale per impianti aria compressa: audit energetico, ricerca perdite, conformità normativa, analisi qualità aria.",
  },
};

const servizi = [
  {
    icon: Zap,
    titolo: "Audit Energetico",
    descrizione:
      "Monitoraggio strumentale dei consumi reali con strumentazione dedicata. La durata varia in base al processo produttivo: tipicamente una settimana, ma può estendersi fino a 45 giorni per cicli con variabilità stagionale. Il profilo di carico, il costo energetico annuale e gli scenari di ottimizzazione emergono dai dati, non dalle stime.",
    href: "/ottimizza/audit-energetico",
  },
  {
    icon: Search,
    titolo: "Ricerca Perdite",
    descrizione:
      "Rilevamento con ultrasuoni di ogni punto di dispersione sulla rete di distribuzione. Ogni perdita identificata è classificata per entità e convertita in kWh e costo annuale al prezzo dell'energia del cliente.",
    href: "/ottimizza/ricerca-perdite",
  },
  {
    icon: FileCheck,
    titolo: "Conformità Normativa",
    descrizione:
      "Censimento delle attrezzature in pressione, verifica della documentazione esistente e piano di adeguamento a DM 329/2004, D.Lgs. 81/2008 e Direttiva PED. Supporto operativo per denuncia INAIL e verifiche periodiche.",
    href: "/ottimizza/conformita-normativa",
  },
  {
    icon: Microscope,
    titolo: "Analisi Qualità Aria",
    descrizione:
      "Campionamento in linea e analisi in laboratorio secondo ISO 8573-1. Il report certifica la classe di purezza rilevata per particolato, umidità e olio. Indispensabile per processi farmaceutici, alimentari ed elettronici.",
    href: "/ottimizza/analisi-qualita-aria",
  },
];

export default function Ottimizza() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="bg-background py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">
                Analisi e Diagnosi
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Prima misuriamo. Poi valutiamo.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                Quattro servizi di analisi strumentale indipendenti da qualsiasi proposta
                commerciale. Ogni intervento restituisce dati oggettivi sull&apos;impianto:
                consumi reali, dispersioni quantificate, stato documentale, qualità
                dell&apos;aria. Da quei dati si costruisce il piano di intervento.
              </p>
            </div>
          </div>
        </section>

        {/* ── Il metodo ── */}
        <section className="py-16 sm:py-20 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl mb-6">
                Dati prima delle decisioni
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  La maggior parte degli interventi su impianti aria compressa è proposta
                  senza una misura preliminare. Il risultato è che la soluzione è
                  costruita su stime, non su dati: il compressore è sostituito prima di
                  sapere quanto consuma, le perdite sono riparate senza sapere quante ce
                  ne sono, la filtrazione è aggiornata senza conoscere la qualità corrente.
                </p>
                <p>
                  I quattro servizi di questa sezione partono dalla misura. Ogni analisi
                  produce un documento con dati strumentali che il cliente può usare per
                  valutare autonomamente gli interventi opportuni, indipendentemente da
                  chi li esegue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── I quattro servizi ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              I quattro servizi
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {servizi.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.titolo}
                    href={s.href}
                    className="group flex gap-4 rounded-xl border border-border bg-background p-6 transition-colors hover:bg-muted/60"
                  >
                    <div className="mt-0.5 shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{s.titolo}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {s.descrizione}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                        Scopri il servizio
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Non sai da dove partire?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                L&apos;audit energetico è il punto di ingresso più comune: misura i consumi
                reali e identifica le aree di intervento prioritarie. Da lì si valuta
                se servano anche ricerca perdite o analisi della qualità dell&apos;aria.
              </p>
              <div className="mt-8">
                <Link
                  href="/ottimizza/audit-energetico"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Inizia dall&apos;audit energetico
                  <ArrowRight size={16} />
                </Link>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Oppure contattaci per descrivere il tuo impianto: valutiamo insieme
                quale servizio è più utile nel tuo caso.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
