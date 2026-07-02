import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Compressori a Vite | Air-next",
  description:
    "Compressori a vite oil-injected e oil-free, monostadio e bistadio, a velocità fissa e variabile. Selezione basata sul profilo di portata reale, non sul catalogo.",
  openGraph: {
    title: "Compressori a Vite | Air-next",
    description:
      "Compressori a vite oil-injected e oil-free, monostadio e bistadio, a velocità fissa e variabile. Selezione basata sul profilo di portata reale, non sul catalogo.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Compressori a Vite Industriali",
  description:
    "Fornitura, installazione e manutenzione di compressori a vite oil-injected e oil-free, monostadio e bistadio, a velocità fissa e variabile. Selezione basata sul profilo di portata reale.",
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
  serviceType: "Compressori a Vite Industriali",
  keywords: [
    "compressori a vite industriali",
    "compressori a vite oil-free",
    "compressore vite bistadio VSD",
    "selezione compressore aria compressa",
  ],
};

export default function CompressioneVite() {
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
                Aria compressa · produzione · vite
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Compressori a vite: la tecnologia di riferimento per l&apos;industria
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                La compressione a vite rotativa è oggi la scelta dominante per impianti industriali
                di media e grande taglia, grazie alla continuità del flusso, all&apos;affidabilità in
                servizio continuativo e alla disponibilità in configurazioni che coprono range di
                portata e pressione molto ampi.
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

        {/* Principio di funzionamento */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Principio di funzionamento
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Due rotori elicoidali contrapposti ruotano in sincronismo all&apos;interno di un corpo
                cilindrico, comprimendo l&apos;aria in modo continuo attraverso la riduzione progressiva
                del volume intrappolato tra i rotori e il corpo macchina. A differenza del pistone
                alternativo, non ci sono fasi di inversione del moto: il flusso è continuo, la
                pressione è stabile, e l&apos;usura è distribuita in modo uniforme sulle superfici di
                rotazione. Questo rende il compressore a vite adatto al servizio continuativo S1,
                anche su più turni produttivi.
              </p>
            </div>
          </div>
        </section>

        {/* Oil-injected vs Oil-free */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Oil-injected vs oil-free
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
                <h3 className="font-semibold text-base">Oil-injected</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nei compressori a iniezione d&apos;olio, il lubrificante viene iniettato direttamente
                  nella camera di compressione, dove svolge tre funzioni: lubrifica i rotori e i
                  cuscinetti, raffredda l&apos;aria durante la compressione (abbassando significativamente
                  le temperature di mandata rispetto alla compressione a secco), e crea una tenuta
                  tra rotori e corpo macchina che migliora l&apos;efficienza volumetrica. L&apos;olio viene
                  poi separato dall&apos;aria compressa attraverso un separatore multistadio prima della
                  rete di distribuzione. La qualità dell&apos;aria prodotta dipende dall&apos;efficienza del
                  separatore e dalla presenza di filtri a valle: in un impianto di trattamento
                  adeguato, anche un compressore oil-injected può fornire aria di classe ISO 8573-1
                  idonea alla maggior parte delle applicazioni industriali.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
                <h3 className="font-semibold text-base">Oil-free</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nei compressori a vite oil-free, i rotori lavorano senza contatto tra le superfici
                  e senza lubrificante nella camera di compressione. La sincronizzazione è garantita
                  da ingranaggi esterni, i cuscinetti sono lubrificati in modo indipendente dalla
                  zona di compressione. L&apos;aria compressa prodotta non ha contatto con olio in nessuna
                  fase del processo, consentendo la certificazione in classe ISO 8573-1 Classe 0
                  senza dipendere dalla qualità del trattamento a valle. La gestione termica in
                  assenza di olio refrigerante richiede raffreddamento intermedio tra gli stadi di
                  compressione, da cui la configurazione bistadio tipica delle macchine oil-free di
                  potenza media e alta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Monostadio vs Bistadio */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Monostadio vs bistadio
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
                <h3 className="font-semibold text-base">Monostadio</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nella compressione monostadio, l&apos;aria viene portata dalla pressione atmosferica
                  alla pressione di mandata in un&apos;unica fase. È la configurazione standard per la
                  maggior parte degli impianti industriali fino a pressioni di esercizio di 10-13 bar.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
                <h3 className="font-semibold text-base">Bistadio</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  La compressione bistadio divide il processo in due stadi con raffreddamento
                  intermedio dell&apos;aria tra il primo e il secondo stadio. Il raffreddamento intermedio
                  riduce il lavoro complessivo di compressione perché l&apos;aria più fredda è più densa
                  e richiede meno energia per essere ulteriormente compressa. Il risultato pratico è
                  un&apos;efficienza isentropica più alta, dimostrata in campo su macchine bistadio a
                  velocità variabile con efficienza superiore all&apos;80%, con punte fino all&apos;86%. Su
                  impianti con pressioni di esercizio standard (7-10 bar) e profili di consumo
                  variabili, il bistadio VSD è la configurazione che offre il miglior rendimento
                  energetico complessivo, soprattutto nei regimi di carico parziale che
                  caratterizzano la maggior parte degli impianti industriali reali.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Velocità fissa vs VSD */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Velocità fissa vs VSD
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  La scelta tra velocità fissa e velocità variabile non è una questione della
                  macchina, ma di compatibilità con il profilo di consumo dell&apos;impianto. Un
                  compressore a velocità fissa dimensionato correttamente su un consumo stabile e
                  prossimo alla portata nominale può essere altrettanto efficiente di un VSD, con
                  il vantaggio di una meccanica più semplice e costi di acquisto inferiori.
                </p>
                <p>
                  Il VSD diventa la scelta tecnicamente corretta quando il consumo varia
                  significativamente durante la giornata o tra turni produttivi: in questi casi,
                  la capacità di adattare la velocità dei rotori alla domanda reale riduce i tempi
                  a vuoto, stabilizza la pressione di rete e abbassa il costo specifico dell&apos;aria
                  prodotta. Senza un profilo di consumo misurato, la scelta tra fisso e variabile
                  rimane una stima. Con i dati reali, diventa un calcolo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Criteri di selezione */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Criteri di selezione
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  La variabile determinante nella selezione di un compressore a vite è il profilo
                  di portata richiesto dall&apos;impianto, non la potenza installata. Due impianti con
                  la stessa potenza assorbita possono avere profili completamente diversi, uno con
                  consumo stabile su tre turni, l&apos;altro con picchi brevi e lunghi periodi a basso
                  carico, e richiedere configurazioni opposte.
                </p>
                <p>
                  La pressione di esercizio è il secondo parametro critico: anche variazioni di
                  0,5-1 bar rispetto al reale fabbisogno impattano significativamente sul consumo
                  energetico, perché ogni bar di pressione in eccesso richiede energia aggiuntiva
                  senza produrre lavoro utile. La riduzione della pressione di rete al minimo
                  realmente necessario è spesso l&apos;intervento a più alto rapporto beneficio/costo
                  in un impianto esistente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                La selezione parte dal profilo di consumo reale
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Senza dati strumentali, qualsiasi raccomandazione su potenza e configurazione resta
                una stima. Con un monitoraggio di una settimana, la scelta diventa un calcolo
                verificabile.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/ottimizza/audit-energetico"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Prenota un audit energetico
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
                >
                  Richiedi una valutazione
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
