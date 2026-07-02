import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Compressori Scroll Oil-Free | Air-next",
  description:
    "Compressori scroll oil-free per applicazioni che richiedono aria certificata priva di olio. Silenziosità, assenza di pulsazioni, servizio continuativo senza stop termici.",
  openGraph: {
    title: "Compressori Scroll Oil-Free | Air-next",
    description:
      "Compressori scroll oil-free per applicazioni che richiedono aria certificata priva di olio. Silenziosità, assenza di pulsazioni, servizio continuativo senza stop termici.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Compressori Scroll Oil-Free",
  description:
    "Fornitura e installazione di compressori scroll oil-free per applicazioni medicali, dentali, farmaceutiche e di laboratorio. Aria certificata ISO 8573-1 Classe 0, bassa rumorosità, portate contenute.",
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
  serviceType: "Compressori Scroll Oil-Free",
  keywords: [
    "compressori scroll oil-free",
    "compressore scroll dentale",
    "compressore oil-free silenzioso",
    "compressore scroll medicale",
  ],
};

export default function CompressioneScroll() {
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
                Aria compressa · produzione · scroll
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Compressori scroll: oil-free nativo, flusso continuo, bassa rumorosità
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                La tecnologia scroll produce aria compressa oil-free in modo strutturale, senza
                dipendere dalla qualità del trattamento a valle. Una scelta specifica per applicazioni
                dove la contaminazione da olio è inaccettabile e l&apos;ambiente di installazione
                richiede livelli acustici contenuti.
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

        {/* Principio di funzionamento */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Principio di funzionamento
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Il compressore scroll utilizza due spirali interagenti, una fissa e una che compie
                  un movimento orbitale attorno alla prima. Il movimento orbitale della spirale mobile
                  intrappola l&apos;aria sul lato esterno, la comprime progressivamente verso il centro
                  e la espelle attraverso un&apos;apertura assiale nella spirale fissa.
                </p>
                <p>
                  Non c&apos;è contatto metallo-metallo tra le spirali durante la compressione: le
                  superfici lavorano con una tolleranza controllata che consente la compressione
                  senza lubrificazione. Questo elimina strutturalmente la necessità di olio nella
                  camera di compressione, rendendo lo scroll una tecnologia oil-free per natura
                  costruttiva, non per aggiunta di filtri o separatori.
                </p>
                <p>
                  Il flusso prodotto è continuo e privo di pulsazioni, a differenza del pistone
                  alternativo che genera picchi di pressione ciclici.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Caratteristiche operative */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Caratteristiche operative
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Lo scroll lavora a regime di velocità costante, con ciclo on/off come logica di
                  regolazione. Non prevede modalità carico/vuoto: quando non produce aria, si ferma
                  completamente, eliminando i consumi improduttivi tipici del funzionamento a vuoto
                  dei compressori a vite tradizionali.
                </p>
                <p>
                  Le unità modulari con più elementi scroll in parallelo consentono una gestione più
                  fine della portata: il controllore attiva o disattiva gli elementi in funzione
                  della domanda, avvicinando il comportamento a quello di un sistema a portata
                  variabile pur mantenendo la semplicità costruttiva del singolo elemento a velocità
                  fissa.
                </p>
                <p>
                  Il numero ridotto di parti in movimento, l&apos;assenza di contatto tra componenti in
                  compressione e la semplicità del ciclo termico si traducono in una vita operativa
                  elevata e in costi di manutenzione contenuti rispetto ad altre tecnologie oil-free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Livello acustico */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Livello acustico
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Lo scroll è tra le tecnologie di compressione più silenziose disponibili.
                L&apos;assenza di contatto metallo-metallo, il movimento orbitale fluido e
                l&apos;eliminazione delle pulsazioni producono livelli acustici tipicamente inferiori
                ai 65 dB(A), confrontabili con l&apos;ambiente di un ufficio. Questo rende lo scroll
                adatto all&apos;installazione in ambienti dove la rumorosità è un vincolo operativo
                reale: ambulatori dentistici e medici, laboratori, ambienti di lavoro con presenza
                continua di personale, o locali non dedicati esclusivamente alla sala compressori.
              </p>
            </div>
          </div>
        </section>

        {/* Applicazioni */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Applicazioni
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Le applicazioni tipiche dello scroll sono quelle dove convergono tre requisiti:
                  aria oil-free in classe 0 secondo ISO 8573-1, installazione in ambienti
                  acusticamente sensibili, e portate contenute nell&apos;ordine dei 100-1.000 litri
                  al minuto.
                </p>
                <p>
                  Il settore medicale e odontoiatrico è l&apos;ambito di riferimento storico:
                  strumentazione a contatto con il paziente, requisiti igienico-sanitari stringenti,
                  ambienti con personale presente. Il settore alimentare e farmaceutico richiede gli
                  stessi standard di purezza su impianti spesso di dimensioni maggiori, dove lo
                  scroll in configurazione modulare multi-elemento copre portate più elevate
                  mantenendo le caratteristiche oil-free e la silenziosità.
                </p>
                <p>
                  I laboratori di analisi e ricerca, l&apos;elettronica di precisione e la verniciatura
                  industriale di qualità completano il quadro applicativo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Confronto con altre tecnologie oil-free */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Confronto con altre tecnologie oil-free
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
                <h3 className="font-semibold text-base">Scroll vs pistone oil-free</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rispetto al pistone oil-free, lo scroll offre flusso senza pulsazioni, livello
                  acustico inferiore e manutenzione più semplice, a fronte di un range di portata
                  più limitato e un costo unitario generalmente più alto.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
                <h3 className="font-semibold text-base">Scroll vs vite oil-free</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rispetto alla vite oil-free, lo scroll ha una meccanica più semplice e non
                  richiede raffreddamento intermedio, ma è limitato a potenze contenute: oltre i
                  15-22 kW, la vite oil-free bistadio diventa la scelta tecnicamente più
                  appropriata per continuità del servizio e gestione della temperatura di
                  compressione.
                </p>
              </div>
            </div>
            <p className="mt-8 max-w-3xl text-muted-foreground leading-relaxed">
              La scelta dello scroll è corretta quando il profilo applicativo rientra nel suo campo
              operativo ottimale: portate basse o medie, ambienti sensibili al rumore, requisiti
              oil-free certificati. Al di fuori di questo campo, altre tecnologie offrono soluzioni
              più efficienti.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Verifica se lo scroll è la tecnologia giusta per la tua applicazione
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                La selezione dipende dal profilo di portata, dal requisito di purezza e
                dall&apos;ambiente di installazione. Con i dati corretti, la scelta è diretta.
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
                  Torna alle tipologie di compressori
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
