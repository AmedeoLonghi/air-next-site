import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Turbocompressori Centrifughi | Air-next",
  description:
    "Turbocompressori centrifughi per grandi portate di aria compressa oil-free. Tecnologia dinamica per impianti industriali ad alta intensità energetica.",
  openGraph: {
    title: "Turbocompressori Centrifughi | Air-next",
    description:
      "Turbocompressori centrifughi per grandi portate di aria compressa oil-free. Tecnologia dinamica per impianti industriali ad alta intensità energetica.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Turbocompressori Centrifughi",
  description:
    "Valutazione e installazione di turbocompressori centrifughi per grandi portate di aria compressa oil-free. Applicazioni industriali ad alta intensità energetica sopra i 200-400 kW.",
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
  serviceType: "Turbocompressori Centrifughi",
  keywords: [
    "turbocompressori centrifughi aria compressa",
    "turbocompressore industriale oil-free",
    "compressore centrifugo grandi portate",
  ],
};

export default function Turbocompressori() {
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
                Aria compressa · produzione · turbo
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Turbocompressori: compressione dinamica per grandi portate
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                I turbocompressori centrifughi operano secondo un principio fisico diverso da tutte
                le tecnologie volumetriche. Sono la scelta corretta quando le portate richieste
                superano il campo operativo ottimale dei compressori a vite, e quando il processo
                richiede aria oil-free certificata su volumi importanti.
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
                  Nei compressori volumetrici, la pressione si genera riducendo meccanicamente il
                  volume di una quantità d&apos;aria intrappolata. Nei turbocompressori, il meccanismo
                  è diverso: una girante in rotazione ad alta velocità imprime energia cinetica
                  all&apos;aria, che viene poi rallentata in un diffusore. La riduzione di velocità
                  converte l&apos;energia cinetica in energia di pressione, secondo il principio di
                  Bernoulli.
                </p>
                <p>
                  Il processo è continuo e non prevede parti in contatto diretto nella zona di
                  compressione, il che consente il funzionamento senza lubrificazione nella camera
                  di compressione e quindi aria intrinsecamente oil-free.
                </p>
                <p>
                  La portata volumetrica trattata è proporzionale alla velocità della girante e
                  alle sue dimensioni: per questa ragione i turbocompressori si esprimono al meglio
                  su grandi volumi, dove le macchine volumetriche diventano meno efficienti o
                  richiedono configurazioni multiple.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Configurazioni principali */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Configurazioni principali
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
                <h3 className="font-semibold text-base">Con moltiplicatore di giri</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Un motore a induzione a velocità relativamente bassa aziona giranti radiali tramite
                  una trasmissione a ingranaggi che ne moltiplica la velocità. I cuscinetti
                  idrodinamici garantiscono il sostentamento dell&apos;albero ad alta velocità. È la
                  configurazione più consolidata, adatta a grandi impianti dove la continuità del
                  servizio e la robustezza costruttiva hanno priorità assoluta. La regolazione della
                  portata avviene tipicamente tramite palette direttrici in ingresso o attraverso la
                  variazione della velocità del motore.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
                <h3 className="font-semibold text-base">Ad alta velocità</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In questa configurazione più recente, il motore aziona direttamente la girante
                  senza moltiplicatore di giri intermedio. Per sostenere le velocità elevate
                  necessarie, il motore utilizza tecnologia a magneti permanenti e i cuscinetti sono
                  di tipo magnetico attivo, che eliminano qualsiasi contatto meccanico tra le parti
                  in rotazione. L&apos;assenza del moltiplicatore semplifica la meccanica complessiva
                  e riduce i punti di manutenzione. La regolazione della portata avviene attraverso
                  la variazione di velocità del motore, rendendolo intrinsecamente un sistema a
                  velocità variabile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Campo applicativo */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Campo applicativo
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  I turbocompressori trovano applicazione dove convergono due condizioni: portate
                  elevate, tipicamente superiori ai 1.000-2.000 m&sup3;/h in condizioni standard, e
                  requisito di aria oil-free senza dipendere dalla qualità del trattamento a valle.
                </p>
                <p>
                  Le industrie chimiche, petrolchimiche e del gas naturale sono i settori storici
                  di riferimento per i grandi turbocompressori multistadio. Nel comparto dell&apos;aria
                  compressa industriale, i turbocompressori centrifughi trovano spazio nei grandi
                  impianti manifatturieri dove una singola macchina copre l&apos;intero fabbisogno
                  produttivo, tipicamente sopra i 200-400 kW di potenza installata, con portate
                  che i compressori a vite non riescono a coprire in modo economicamente efficiente
                  con un&apos;unica unità.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specificità operative */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Specificità operative
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  I turbocompressori sono macchine progettate per un campo operativo definito:
                  lavorano in modo ottimale in prossimità del punto di progetto. Quando la portata
                  richiesta si allontana significativamente dalla portata nominale, l&apos;efficienza
                  cala più rapidamente rispetto a un compressore volumetrico VSD.
                </p>
                <p>
                  Il fenomeno del pompaggio, che si verifica quando la portata scende sotto un
                  valore minimo, è una limitazione tecnica specifica di questa famiglia: sistemi di
                  controllo dedicati lo prevengono attraverso valvole di ricircolo o bypass.
                </p>
                <p>
                  Per questa ragione, i turbocompressori sono la scelta ottimale su impianti con
                  consumo stabile e continuativo, mentre su impianti con forte variabilità della
                  domanda la vite VSD rimane più adatta. La scelta non è di qualità ma di
                  compatibilità con il profilo operativo reale dell&apos;impianto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Manutenzione e affidabilità */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Manutenzione e affidabilità
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  L&apos;assenza di contatto meccanico nella zona di compressione e la semplicità
                  cinematica rispetto ai compressori volumetrici si traducono in una vita operativa
                  elevata con intervalli di manutenzione lunghi. Nelle configurazioni ad alta
                  velocità con cuscinetti magnetici, l&apos;eliminazione dell&apos;usura meccanica da
                  contatto riduce ulteriormente la necessità di interventi programmati.
                </p>
                <p>
                  I componenti critici restano le giranti, che lavorano a velocità periferiche
                  elevate e richiedono bilanciamento preciso, e i sistemi di tenuta dell&apos;albero.
                  Su installazioni di grande taglia, la manutenzione preventiva è gestita con
                  pianificazione pluriennale.
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
                Applicazioni ad alta portata e grandi impianti
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                La valutazione tecnica di un impianto con turbocompressori richiede un&apos;analisi
                del profilo di consumo e delle condizioni di installazione. Lavoriamo con
                specialisti del settore per le applicazioni più complesse.
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
