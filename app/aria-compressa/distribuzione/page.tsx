import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Impianti Distribuzione Aria Compressa | Air-next",
  description:
    "Progettazione e realizzazione di reti di distribuzione aria compressa. Riduzione delle perdite di carico, stabilizzazione della pressione, interventi su impianti esistenti.",
  openGraph: {
    title: "Impianti Distribuzione Aria Compressa | Air-next",
    description:
      "Progettazione e realizzazione di reti di distribuzione aria compressa. Riduzione delle perdite di carico, stabilizzazione della pressione, interventi su impianti esistenti.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Reti di Distribuzione Aria Compressa",
  description:
    "Progettazione e realizzazione di reti di distribuzione aria compressa: dimensionamento tubazioni, scelta materiali, riduzione perdite di carico, interventi su impianti esistenti.",
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
  serviceType: "Reti Distribuzione Aria Compressa",
};

const materiali = [
  {
    nome: "Acciaio zincato",
    testo:
      "Soluzione diffusa negli impianti storici. Resistente meccanicamente, ma soggetto a corrosione interna nel tempo: la ruggine si accumula nei punti di raccolta e può contaminare l'aria distribuita. Gli impianti in acciaio che superano un certo grado di degrado richiedono una sostituzione completa per garantire la qualità dell'aria.",
  },
  {
    nome: "Alluminio",
    testo:
      "Standard attuale per le nuove installazioni industriali. Leggero, facile da installare con sistemi a innesto, immune alla corrosione interna. I raccordi a compressione consentono ampliamenti e modifiche senza saldatura. Disponibile in varie sezioni da piccoli laboratori a centrali ad alta portata.",
  },
  {
    nome: "Polietilene (PE)",
    testo:
      "Utilizzato per reti con pressioni moderate e in ambienti dove la leggerezza e la resistenza chimica sono prioritarie. Non adatto per pressioni elevate o ambienti ad alta temperatura. Installazione rapida per tratti di distribuzione secondaria.",
  },
];

const topologie = [
  {
    nome: "Anello di distribuzione (ring main)",
    testo:
      "La rete forma un circuito chiuso attorno all'area servita. L'aria arriva all'utenza da due direzioni, stabilizzando la pressione in tutto l'anello e riducendo la sensibilità ai picchi di domanda localizzati. Soluzione preferita per impianti con utenze distribuite su ampia superficie o con profili di carico variabili.",
  },
  {
    nome: "Rete ramificata",
    testo:
      "Distribuisce l'aria da una linea principale verso diramazioni secondarie. Più semplice da installare ma più sensibile alle perdite di carico: le utenze in fondo alle diramazioni lunghe ricevono aria a pressione inferiore rispetto a quelle vicine alla centrale. Adatta per impianti compatti con utenze concentrate in zone definite.",
  },
];

export default function Distribuzione() {
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
                Aria compressa · distribuzione
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                La rete di distribuzione vale quanto la centrale di produzione
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                Una centrale ben dimensionata collegata a una rete sottodimensionata
                o degradata consegna all&apos;utenza pressione inferiore al necessario
                e costringe ad aumentare la pressione di uscita del compressore
                per compensare. Progettiamo e realizziamo reti di distribuzione
                dimensionate per la portata reale e intervenismo su impianti esistenti.
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

        {/* ── Perdite di carico ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Perdite di carico e costo energetico
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Ogni metro di tubazione, ogni raccordo, ogni valvola introduce una
                  resistenza al flusso che si traduce in una caduta di pressione.
                  La somma di queste perdite determina la pressione differenziale
                  tra la centrale e l&apos;utenza più lontana.
                </p>
                <p>
                  Quando la perdita di carico è elevata, il compressore deve
                  lavorare a pressione più alta per garantire la pressione minima
                  all&apos;utenza. Ogni bar di pressione aggiuntivo al compressore
                  corrisponde a un incremento proporzionale del consumo energetico.
                  Una rete mal dimensionata non è solo un problema di pressione:
                  è un costo energetico che si accumula per tutta la vita dell&apos;impianto.
                </p>
                <p>
                  La velocità del flusso nella tubazione è il parametro principale
                  di dimensionamento. Per contenere le perdite di carico nella rete
                  principale, la velocità dell&apos;aria non dovrebbe superare 6–8 m/s.
                  Nelle diramazioni verso le utenze si possono accettare velocità
                  più alte per tratti corti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Materiali ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Materiali per le reti di distribuzione
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {materiali.map((m) => (
                <div
                  key={m.nome}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3"
                >
                  <h3 className="font-semibold text-base">{m.nome}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.testo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Topologie ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Topologie di rete
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {topologie.map((t) => (
                <div
                  key={t.nome}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3"
                >
                  <h3 className="font-semibold text-base">{t.nome}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.testo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Interventi su impianti esistenti ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Interventi su reti esistenti
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  La maggior parte degli impianti industriali ha una rete che si è
                  estesa nel tempo per aggiunte successive: nuove linee, nuove utenze,
                  nuovi reparti. Il risultato è spesso una topologia non ottimale,
                  con tratti di diametro misto e percorsi più lunghi del necessario.
                </p>
                <p>
                  Prima di intervenire sulla centrale, valutiamo la rete: misuriamo
                  la pressione differenziale tra la centrale e le utenze critiche,
                  identifichiamo i tratti sotto-dimensionati e i punti di perdita
                  di carico anomala. Spesso una modifica limitata alla rete consente
                  di ridurre la pressione di uscita del compressore, con benefici
                  energetici immediati.
                </p>
                <p>
                  Interveniamo anche su reti in acciaio degradato: sostituzione di
                  tratti con perdite strutturali, chiusura di derivazioni non più
                  in uso, installazione di anello di ritorno per trasformare una rete
                  ramificata in anello chiuso.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/ottimizza/ricerca-perdite"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1")}
                >
                  Ricerca perdite sulla rete di distribuzione
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
                Nuova rete o intervento sull&apos;esistente?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Valutiamo la situazione con un sopralluogo tecnico: misura delle
                perdite di carico, analisi della topologia esistente e proposta
                di intervento basata sui dati rilevati.
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
