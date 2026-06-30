import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Compressori a Pistoni Oil-Free e Lubrificati | Air-next",
  description:
    "Compressori a pistoni per applicazioni industriali e di processo, lubrificati e oil-free. Tecnologie dedicate per settori che richiedono aria certificata priva di olio.",
  openGraph: {
    title: "Compressori a Pistoni Oil-Free e Lubrificati | Air-next",
    description:
      "Compressori a pistoni per applicazioni industriali e di processo, lubrificati e oil-free. Tecnologie dedicate per settori che richiedono aria certificata priva di olio.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Compressori a Pistoni Oil-Free e Lubrificati",
  description:
    "Fornitura e installazione di compressori a pistoni lubrificati e oil-free per applicazioni dentali, medicali e di processo industriale. Selezione basata sul ciclo di lavoro reale.",
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
  serviceType: "Compressori a Pistoni",
  keywords: [
    "compressori a pistoni oil-free",
    "compressore dentale oil-free",
    "compressore medicale aria compressa",
    "compressori a pistoni industriali",
  ],
};

export default function Pistoni() {
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
                Aria compressa — produzione — pistoni
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Compressori a pistoni: semplicità costruttiva, applicazioni specifiche
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                Tecnologia matura e affidabile, disponibile in versione lubrificata e oil-free.
                La scelta tra le due dipende dal requisito di purezza dell&apos;aria richiesto
                dal processo a valle, non da una preferenza generica.
              </p>
              <div className="mt-10">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Richiedi una valutazione
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Principio di funzionamento ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Principio di funzionamento
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Il compressore a pistoni comprime l&apos;aria tramite il movimento alternativo
                di uno o più pistoni all&apos;interno di cilindri, esattamente come un motore
                a combustione interna ma in funzione inversa. È la tecnologia di compressione
                più datata e meccanicamente più semplice tra quelle volumetriche, e proprio per
                questo resta diffusa dove servono potenze contenute, ingombri ridotti, o requisiti
                di purezza dell&apos;aria che altre tecnologie non garantiscono in modo nativo.
              </p>
            </div>
          </div>
        </section>

        {/* ── Lubrificati vs Oil-free ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Lubrificati e oil-free: due categorie con applicazioni distinte
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
                <h3 className="font-semibold text-base">Compressori lubrificati</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nei modelli lubrificati, l&apos;olio assolve sia funzione lubrificante che di
                  raffreddamento tra pistone e cilindro. Soluzione economica e robusta per
                  applicazioni industriali generiche, dove la presenza di tracce d&apos;olio
                  nell&apos;aria compressa non è un problema di processo.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
                <h3 className="font-semibold text-base">Compressori oil-free</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nei modelli oil-free, pistoni e cuscinetti utilizzano materiali autolubrificanti
                  — spesso a base di PTFE o fibra di carbonio — che eliminano la necessità di olio
                  nella camera di compressione. L&apos;aria prodotta è certificabile in classe 0
                  secondo ISO 8573-1: il livello di purezza più alto previsto dallo standard, senza
                  tracce rilevabili di olio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Dentale e medicale ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Dove la purezza dell&apos;aria è un requisito, non un&apos;opzione
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Studi dentistici, cliniche, laboratori e strutture sanitarie richiedono aria
                  compressa priva di contaminazione oleosa per ragioni igienico-sanitarie dirette:
                  l&apos;aria alimenta strumentazione a contatto con il paziente. In questo
                  segmento, i compressori a pistoni oil-free rappresentano la tecnologia di
                  riferimento per affidabilità, costo di esercizio contenuto e cicli di lavoro
                  adeguati all&apos;attività ambulatoriale — semi-intensivi per piccoli studi,
                  continui per strutture con più postazioni operative.
                </p>
                <p>
                  Le gamme dedicate a questo settore, come quelle prodotte da Gentilin — azienda
                  italiana specializzata, riferimento storico nel comparto healthcare — offrono
                  compressori oil-free classe 0 con essiccatore ad adsorbimento integrato, cabinet
                  insonorizzati per il comfort acustico in ambiente clinico, e cicli di lavoro
                  differenziati per intensità d&apos;uso: dalla singola postazione fino a strutture
                  con più riuniti operativi contemporaneamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Processo industriale ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Oltre il dentale: processo alimentare e farmaceutico
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                La stessa logica di purezza dell&apos;aria si applica a settori industriali con
                requisiti normativi di processo: produzione alimentare, farmaceutica,
                laboratoristica. Qui i compressori a pistoni oil-free in classe 0 vengono
                dimensionati per cicli di lavoro più intensivi, spesso in configurazione S1
                (servizio continuo) senza necessità di stop termici di raffreddamento — una
                caratteristica che distingue le gamme di processo da quelle pensate per uso
                ambulatoriale.
              </p>
            </div>
          </div>
        </section>

        {/* ── Criteri di scelta ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Criteri di scelta
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                La selezione tra lubrificato e oil-free dipende da un solo criterio: se
                l&apos;aria compressa entra in contatto diretto o indiretto con il prodotto,
                il paziente, o un processo sensibile alla contaminazione, l&apos;oil-free è
                l&apos;unica opzione tecnicamente corretta. Per applicazioni generiche di officina,
                utensileria pneumatica, o processi non critici, il lubrificato resta una soluzione
                affidabile a costo di acquisto inferiore.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Valutazione tecnica per applicazioni dentali, medicali o di processo
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Selezioniamo la tecnologia e il dimensionamento corretto in base al ciclo di
                lavoro reale della tua struttura, non sul catalogo. Multimarca, indipendenti
                da un singolo costruttore.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Richiedi una valutazione
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/aria-compressa/produzione"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
                >
                  Tutte le tipologie di compressori
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
