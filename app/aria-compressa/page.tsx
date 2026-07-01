import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Settings, Filter, Network, Microscope, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Impianti Aria Compressa | Air-next",
  description:
    "Produzione, trattamento, distribuzione e analisi qualità dell'aria compressa. Fornitura, manutenzione e ricambi su qualsiasi macchina installata.",
  openGraph: {
    title: "Impianti Aria Compressa | Air-next",
    description:
      "Produzione, trattamento, distribuzione e analisi qualità dell'aria compressa. Fornitura, manutenzione e ricambi su qualsiasi macchina installata.",
  },
};

const sottopagine = [
  {
    icon: Settings,
    titolo: "Produzione",
    descrizione:
      "Compressori a vite, scroll e centrifughi. Selezione basata sul profilo di portata reale, non sul catalogo. Tecnologie di regolazione on/off, modulante, VSD e motori a magneti permanenti IE5. Manutenzione programmata e ricambi su qualsiasi macchina installata.",
    href: "/aria-compressa/produzione",
  },
  {
    icon: Filter,
    titolo: "Trattamento",
    descrizione:
      "Essiccatori a refrigerazione e ad adsorbimento, filtri coalescenti e a carbone attivo. Selezione in funzione della classe di purezza ISO 8573 richiesta dall'applicazione. Manutenzione programmata degli elementi filtranti.",
    href: "/aria-compressa/trattamento",
  },
  {
    icon: Network,
    titolo: "Distribuzione",
    descrizione:
      "Progettazione e realizzazione di reti in acciaio, alluminio e polietilene. Dimensionamento delle tubazioni per contenere le perdite di carico. Anelli di distribuzione, punti di prelievo e interventi su reti esistenti.",
    href: "/aria-compressa/distribuzione",
  },
  {
    icon: Microscope,
    titolo: "Analisi Qualità Aria",
    descrizione:
      "Campionamento in linea e analisi in laboratorio secondo ISO 8573-1. Per processi che richiedono una classe di purezza certificata: farmaceutico, alimentare, elettronico, verniciatura industriale.",
    href: "/aria-compressa/analisi-qualita",
  },
];

export default function AriaCompressa() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="bg-background py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">
                Aria compressa
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Competenza tecnica sull&apos;intero ciclo dell&apos;aria compressa
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                Dalla centrale di produzione alla rete di distribuzione, dall&apos;essiccatore
                all&apos;utenza finale. Non siamo vincolati a nessun costruttore: selezioniamo
                la tecnologia più adatta al profilo operativo reale dell&apos;impianto.
              </p>
            </div>
          </div>
        </section>

        {/* ── Le quattro aree ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Le quattro aree di intervento
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {sottopagine.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.titolo}
                    href={s.href}
                    className="group flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/60"
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
                        Approfondisci
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Approccio tecnico indipendente */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Indipendenza di marca, selezione per parametri
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Un rivenditore monomarca propone le soluzioni del proprio catalogo.
                  Il problema è che il catalogo non cambia in funzione del tuo impianto:
                  sei tu ad adattarti alla gamma disponibile.
                </p>
                <p>
                  Il nostro approccio è inverso: si parte dai parametri operativi reali
                  (portata, pressione, profilo orario, qualità richiesta) e si
                  seleziona la tecnologia più adatta tra costruttori diversi. Il
                  risultato è un impianto dimensionato per il fabbisogno effettivo,
                  non per il margine di sicurezza del catalogo.
                </p>
                <p>
                  Lo stesso vale per la manutenzione: interveniamo su qualsiasi marca
                  già installata, con ricambi originali o equivalenti selezionati per
                  qualità e compatibilità.
                </p>
              </div>
              <div className="mt-10">
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
