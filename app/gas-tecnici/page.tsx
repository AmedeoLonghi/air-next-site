import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Generatori Azoto e Ossigeno On-site | Air-next",
  description:
    "Generatori di azoto e ossigeno on-site con tecnologia PSA. Produzione autonoma di gas tecnici con purezza controllata e costi operativi documentati.",
  openGraph: {
    title: "Generatori Azoto e Ossigeno On-site | Air-next",
    description:
      "Generatori di azoto e ossigeno on-site con tecnologia PSA. Produzione autonoma di gas tecnici con purezza controllata e costi operativi documentati.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Generatori Azoto e Ossigeno On-site — Tecnologia PSA",
  description:
    "Fornitura e installazione di generatori on-site di azoto e ossigeno con tecnologia PSA. Produzione autonoma di gas tecnici con purezza controllata.",
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
  serviceType: "Generatori Gas Tecnici PSA",
};

const vantaggi = [
  {
    voce: "Continuità di fornitura",
    bombole: "Dipendente da consegne — rischio di interruzione in caso di ritardi logistici o picchi di consumo",
    generatore: "Produzione continua direttamente dall'aria compressa dell'impianto",
  },
  {
    voce: "Costo per m³",
    bombole: "Alto costo unitario, penalizzato dal costo del trasporto e dalla quota cauzione delle bombole",
    generatore: "Costo variabile legato al consumo elettrico del compressore e del generatore — strutturalmente inferiore a volumi significativi",
  },
  {
    voce: "Gestione logistica",
    bombole: "Stoccaggio bombole, tenuta del registro di carico/scarico, coordinamento con il fornitore",
    generatore: "Nessuno stoccaggio di gas ad alta pressione, nessun processo di riordino",
  },
  {
    voce: "Purezza",
    bombole: "Certificata dal fornitore per lotto",
    generatore: "Monitorabile in continuo con analizzatore integrato o esterno",
  },
];

const applicazioniAzoto = [
  {
    nome: "Packaging alimentare (MAP)",
    testo: "Atmosfera modificata per l'estensione della shelf-life. L'azoto sostituisce l'ossigeno nell'imballaggio, rallentando l'ossidazione. Purezza tipicamente richiesta: 99,5–99,9%.",
  },
  {
    nome: "Taglio laser",
    testo: "Gas ausiliario per taglio di acciaio inox e alluminio. L'azoto previene l'ossidazione del bordo di taglio. Purezza richiesta: da 99,5% a 99,99% in funzione del materiale e dello spessore.",
  },
  {
    nome: "Saldatura TIG/MIG",
    testo: "Gas di protezione per applicazioni specifiche. L'azoto è utilizzato in miscele o puro per determinati materiali in alternativa all'argon.",
  },
  {
    nome: "Inerting serbatoi e tubazioni",
    testo: "Creazione di atmosfera inerte per prevenire l'ossidazione o la formazione di atmosfere esplosive in serbatoi, reattori e condotte. La purezza richiesta dipende dal livello di inerting necessario.",
  },
  {
    nome: "Pressurizzazione e leak testing",
    testo: "Test di tenuta su componenti e circuiti con gas inerte a pressione. L'azoto è utilizzato per la sua inertezza e la facilità di rilevamento con strumentazione dedicata.",
  },
];

const applicazioniOssigeno = [
  {
    nome: "Taglio plasma e ossicombustione",
    testo: "Arricchimento dell'aria per taglio plasma o come comburente in bruciatori a ossicombustione. Purezza: 90–95%.",
  },
  {
    nome: "Ozonizzatori per trattamento acque",
    testo: "Produzione di ozono per disinfezione e trattamento di acque industriali o reflue. L'ossigeno ad alta concentrazione aumenta la resa degli ozonizzatori.",
  },
  {
    nome: "Arricchimento di combustione",
    testo: "Aumento del tenore di ossigeno nell'aria comburente per migliorare l'efficienza termica di bruciatori industriali e ridurre la formazione di NOx.",
  },
];

export default function GasTecnici() {
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
                Gas tecnici
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Azoto e ossigeno prodotti on-site con tecnologia PSA
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                Un generatore PSA produce azoto o ossigeno direttamente dall&apos;aria
                compressa dell&apos;impianto, con purezza controllata e continuità di
                fornitura. Rispetto alle bombole, elimina la dipendenza logistica
                e riduce il costo per m³ a partire da volumi di consumo significativi.
              </p>
              <div className="mt-10">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Richiedi un&apos;analisi di fattibilità
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tecnologia PSA ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Come funziona la tecnologia PSA
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  PSA (Pressure Swing Adsorption) è un processo di separazione
                  molecolare dell&apos;aria compressa. Il principio sfrutta la diversa
                  affinità dei gas dell&apos;aria (azoto, ossigeno, argon) per il materiale
                  adsorbente contenuto in due colonne pressurizzate alternate.
                </p>
                <p>
                  <strong className="text-foreground">Generatori di azoto:</strong> il materiale adsorbente è la zeolite. L&apos;ossigeno e
                  gli altri gas vengono trattenuti mentre l&apos;azoto attraversa la
                  colonna. La purezza ottenibile va dal 95% al 99,999% N₂ in
                  funzione della velocità di flusso e della configurazione del sistema.
                </p>
                <p>
                  <strong className="text-foreground">Generatori di ossigeno:</strong> processo analogo con materiale adsorbente
                  differente (zeolite tipo 5A o CMS). In questo caso è l&apos;azoto a
                  essere trattenuto e l&apos;ossigeno a passare. La purezza raggiungibile
                  con sistemi PSA standard è tipicamente 90–95% O₂ — sufficiente
                  per la maggior parte delle applicazioni tecniche industriali.
                </p>
                <p>
                  Entrambi i sistemi richiedono aria compressa a monte di qualità
                  adeguata: l&apos;impianto PSA non funziona correttamente con aria
                  contenente olio o umidità elevata. Il treno di trattamento a monte
                  è parte integrante del dimensionamento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Confronto con bombole ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Generatore on-site vs fornitura in bombole
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-6 font-semibold w-1/4"></th>
                    <th className="text-left py-3 pr-6 font-semibold text-muted-foreground">Bombole e cisterne</th>
                    <th className="text-left py-3 font-semibold text-primary">Generatore on-site</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {vantaggi.map((v) => (
                    <tr key={v.voce}>
                      <td className="py-4 pr-6 font-medium text-foreground align-top">{v.voce}</td>
                      <td className="py-4 pr-6 text-muted-foreground align-top">{v.bombole}</td>
                      <td className="py-4 text-foreground align-top">{v.generatore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Il generatore on-site diventa conveniente a partire da consumi che
              giustificano il costo dell&apos;investimento iniziale. Il dimensionamento
              corretto e l&apos;analisi del break-even rispetto alla fornitura attuale
              è il punto di partenza dell&apos;analisi di fattibilità.
            </p>
          </div>
        </section>

        {/* ── Applicazioni azoto ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Applicazioni — Azoto
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {applicazioniAzoto.map((a) => (
                <div
                  key={a.nome}
                  className="rounded-xl border border-border bg-card p-5 flex flex-col gap-2"
                >
                  <h3 className="font-semibold text-sm">{a.nome}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.testo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Applicazioni ossigeno ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Applicazioni — Ossigeno
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {applicazioniOssigeno.map((a) => (
                <div
                  key={a.nome}
                  className="rounded-xl border border-border bg-card p-5 flex flex-col gap-2"
                >
                  <h3 className="font-semibold text-sm">{a.nome}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.testo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Dimensionamento ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Dimensionamento e requisiti dell&apos;impianto a monte
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Il generatore si dimensiona su tre parametri: portata di gas
                  richiesta in m³/h, purezza minima accettabile e profilo di consumo
                  (continuo, ciclico, con picchi). Un serbatoio buffer a valle del
                  generatore assorbe le variazioni di domanda senza richiedere una
                  macchina sovradimensionata per i soli picchi.
                </p>
                <p>
                  L&apos;impianto di aria compressa a monte deve garantire portata e
                  pressione adeguate alle condizioni di processo del generatore PSA —
                  in genere tra 6 e 10 bar di pressione in ingresso. La qualità
                  dell&apos;aria compressa è determinante: olio e umidità degradano il
                  materiale adsorbente riducendone la resa e la vita operativa.
                  Il treno di trattamento (essiccatore + filtri) fa parte del
                  sistema e va dimensionato insieme al generatore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Vale la pena passare a un generatore on-site?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                L&apos;analisi di fattibilità parte dal consumo attuale in bombole,
                dalla purezza necessaria e dal profilo di consumo. Calcoliamo il
                dimensionamento del generatore, il costo di esercizio e il confronto
                con la fornitura attuale.
              </p>
              <div className="mt-8">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Richiedi un&apos;analisi di fattibilità
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
