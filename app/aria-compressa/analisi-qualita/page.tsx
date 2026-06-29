import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Analisi Qualità Aria Compressa | Air-next",
  description:
    "Analisi della qualità dell'aria compressa in linea per processi produttivi che richiedono classi di purezza certificate secondo ISO 8573.",
  openGraph: {
    title: "Analisi Qualità Aria Compressa | Air-next",
    description:
      "Analisi della qualità dell'aria compressa in linea per processi produttivi che richiedono classi di purezza certificate secondo ISO 8573.",
  },
};

const effetti = [
  {
    titolo: "Contaminazione del prodotto",
    testo:
      "In processi a contatto diretto — packaging alimentare, riempimento, soffiatura — l'olio e il particolato nell'aria compressa raggiungono il prodotto. L'effetto può essere invisibile durante la produzione e emergere in fase di controllo qualità o in seguito a contestazioni dal cliente.",
  },
  {
    titolo: "Usura accelerata delle utenze pneumatiche",
    testo:
      "Acqua in sospensione e particolato abradono le superfici interne di cilindri, valvole e utensili pneumatici. Il degrado è graduale: non si manifesta con guasti improvvisi ma con derive di precisione e riduzione della vita operativa degli attuatori.",
  },
  {
    titolo: "Corrosione nelle reti metalliche",
    testo:
      "L'umidità nell'aria compressa innesca la corrosione all'interno delle tubazioni in acciaio, producendo particelle di ossido di ferro che circolano nella rete. Il problema si amplifica nel tempo: l'acciaio corroso produce più contaminanti dell'acciaio integro.",
  },
  {
    titolo: "Non conformità in sede di audit",
    testo:
      "BRC, IFS, GMP e altri standard certificativi prevedono la documentazione della qualità dell'aria compressa a contatto con il prodotto. Un audit che trova un registro di verifiche mancante o scaduto è un'osservazione di non conformità con impatto diretto sulla certificazione.",
  },
];

export default function AnalisiQualita() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="bg-background py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">
                Aria compressa — qualità dell&apos;aria
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                La qualità dell&apos;aria compressa è un parametro di processo
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                In molti processi produttivi l&apos;aria compressa entra in contatto
                diretto o indiretto con il prodotto, con le superfici di lavorazione
                o con gli strumenti. In questi casi la qualità dell&apos;aria non è solo
                un requisito di conformità normativa: è un parametro operativo che
                influisce sulla qualità finale del prodotto.
              </p>
            </div>
          </div>
        </section>

        {/* ── Effetti sulla produzione ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Cosa succede quando la qualità dell&apos;aria non è verificata
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {effetti.map((e) => (
                <div
                  key={e.titolo}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3"
                >
                  <h3 className="font-semibold text-base">{e.titolo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.testo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ISO 8573 introduzione ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Lo standard di riferimento: ISO 8573-1
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  La norma ISO 8573-1 definisce le classi di purezza dell&apos;aria
                  compressa per tre categorie di contaminanti: particolato, umidità
                  (espressa come punto di rugiada in pressione) e olio. La qualità
                  si esprime nella notazione X:Y:Z dove ogni numero indica la classe
                  per ciascun contaminante.
                </p>
                <p>
                  La specifica di qualità dipende dall&apos;applicazione: un processo
                  alimentare a contatto diretto richiede in genere una classe 1:2:1,
                  mentre un impianto pneumatico generico può operare su classi meno
                  stringenti. Il punto critico è che la classe deve essere misurata,
                  non solo dichiarata dall&apos;apparecchio di trattamento.
                </p>
                <p>
                  Il servizio di analisi qualità prevede campionamento in linea
                  durante la normale produzione, analisi in laboratorio per il contenuto
                  d&apos;olio e report con la classe ISO 8573-1 rilevata per ogni
                  contaminante. Il risultato è un documento utilizzabile in sede
                  di audit e come base per le decisioni di intervento sull&apos;impianto.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/ottimizza/analisi-qualita-aria"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Scopri il servizio completo
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
                >
                  Richiedi un&apos;analisi
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
