import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Trattamento Aria Compressa | Filtrazione ed Essiccazione | Air-next",
  description:
    "Essiccatori e filtri per aria compressa. Selezione in base al punto di rugiada richiesto, al profilo di portata e all'applicazione finale. Ogni soluzione dimensionata sul dato reale.",
  openGraph: {
    title: "Trattamento Aria Compressa | Filtrazione ed Essiccazione | Air-next",
    description:
      "Essiccatori e filtri per aria compressa. Selezione in base al punto di rugiada richiesto, al profilo di portata e all'applicazione finale. Ogni soluzione dimensionata sul dato reale.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Trattamento Aria Compressa: Filtrazione ed Essiccazione",
  description:
    "Fornitura e installazione di essiccatori e sistemi di filtrazione per aria compressa. Selezione in funzione del punto di rugiada richiesto, della classe ISO 8573-1 e del profilo di portata reale.",
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
  serviceType: "Trattamento Aria Compressa",
};

function TechCard({
  items,
}: {
  items: { label: string; valore: string }[];
}) {
  return (
    <div className="mt-6 rounded-lg border border-border bg-muted/50 px-5 py-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
            {item.label}
          </p>
          <p className="text-sm font-semibold leading-snug">{item.valore}</p>
        </div>
      ))}
    </div>
  );
}

export default function Trattamento() {
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
                Aria compressa · trattamento
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Il trattamento dell&apos;aria compressa non è un accessorio: è la parte
                dell&apos;impianto che determina la qualità dell&apos;aria all&apos;utenza
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                Un compressore correttamente dimensionato e ben mantenuto produce aria satura
                di umidità e contaminata da particolato e tracce di olio. Il trattamento a
                valle definisce cosa arriva realmente al processo.
              </p>
              <div className="mt-10">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Richiedi una valutazione tecnica
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Essiccatori: introduzione + quattro tecnologie */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
              Essiccatori
            </h2>
            <div className="max-w-3xl space-y-5 text-muted-foreground leading-relaxed mb-16">
              <p>
                La scelta dell&apos;essiccatore dipende da un parametro tecnico preciso:
                il punto di rugiada in pressione (PDP) richiesto dall&apos;applicazione.
                Il PDP è la temperatura alla quale il vapore acqueo contenuto nell&apos;aria
                compressa inizia a condensarsi alla pressione di esercizio. Conoscerlo
                significa sapere esattamente fino a dove si deve asciugare l&apos;aria.
                Progettare senza questo dato significa indovinare, con tutte le conseguenze
                che ne derivano in termini di condensa nelle tubazioni, corrosione, e danni
                alle utenze pneumatiche.
              </p>
            </div>

            <div className="space-y-16">

              {/* Refrigerazione */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight mb-4">
                  Essiccatori a refrigerazione
                </h3>
                <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    L&apos;essiccatore a refrigerazione raffredda l&apos;aria compressa a pochi gradi
                    sopra lo zero, generalmente tra 2°C e 10°C PDP. A questa temperatura il
                    vapore acqueo condensa, viene separato da un apposito separatore e scaricato
                    automaticamente. L&apos;aria riscaldata per scambio termico interno esce
                    dall&apos;essiccatore senza rischio di condensa sulle tubazioni a valle.
                  </p>
                  <p>
                    È la tecnologia più diffusa per le applicazioni industriali generiche: funziona
                    su ciclo frigorifero chiuso, non consuma aria compressa per il suo funzionamento,
                    e non richiede materiali consumabili legati al processo di essiccazione. La
                    manutenzione si limita alla verifica periodica del ciclo frigorifero e alla
                    pulizia dello scambiatore, particolarmente critica in ambienti con aria di
                    aspirazione polverosa o oleosa dove i depositi riducono l&apos;efficienza di
                    scambio termico.
                  </p>
                </div>
                <TechCard
                  items={[
                    { label: "PDP ottenibile", valore: "+2 / +10°C" },
                    { label: "Consumo aria", valore: "Nessuno" },
                    { label: "Manutenzione principale", valore: "Verifica ciclo frigorifero, pulizia scambiatore" },
                  ]}
                />
              </div>

              {/* Adsorbimento rigenerazione a freddo */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight mb-4">
                  Essiccatori ad adsorbimento a rigenerazione a freddo
                </h3>
                <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Quando il processo richiede un punto di rugiada significativamente più basso
                    di quello ottenibile con la refrigerazione, si entra nel campo
                    dell&apos;adsorbimento. Gli essiccatori ad adsorbimento utilizzano un materiale
                    adsorbente, tipicamente gel di silice o allumina attivata, che trattiene
                    fisicamente le molecole di vapore acqueo mentre l&apos;aria compressa lo
                    attraversa. Lavorano in coppia di torri alternate: mentre una torre è in fase
                    di adsorbimento, l&apos;altra si rigenera.
                  </p>
                  <p>
                    Nella configurazione a rigenerazione a freddo, la rigenerazione avviene
                    utilizzando una frazione dell&apos;aria già essiccata, tipicamente il 15-20%
                    della portata trattata, che viene espansa a pressione atmosferica e fatta
                    fluire in controcorrente attraverso la torre esausta per strappare
                    l&apos;umidità accumulata. Questo consumo di aria di purga è il costo energetico
                    di questa tecnologia: non richiede energia termica, ma riduce la portata netta
                    disponibile all&apos;utenza.
                  </p>
                  <p>
                    Il PDP ottenibile scende fino a -40°C e in alcune configurazioni fino a -70°C.
                    La vita del materiale adsorbente in questa configurazione può arrivare a 5 anni
                    con una prefiltrazione adeguata e in assenza di contaminazione da olio:
                    l&apos;ingresso di olio nel letto adsorbente è la causa più comune di decadimento
                    anticipato delle prestazioni.
                  </p>
                </div>
                <TechCard
                  items={[
                    { label: "PDP ottenibile", valore: "Fino a -40 / -70°C" },
                    { label: "Consumo aria", valore: "15-20% della portata trattata" },
                    { label: "Manutenzione principale", valore: "Sostituzione adsorbente ogni 3-5 anni, valvole di commutazione" },
                  ]}
                />
              </div>

              {/* Adsorbimento rigenerazione a caldo */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight mb-4">
                  Essiccatori ad adsorbimento a rigenerazione a caldo
                </h3>
                <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    La variante a rigenerazione termica affronta il costo energetico della
                    rigenerazione a freddo con una soluzione diversa: invece di usare aria
                    compressa essiccata come agente rigenerante, usa calore esterno. Un
                    riscaldatore porta l&apos;aria di rigenerazione a temperature sufficienti a
                    desorbire l&apos;umidità dal letto adsorbente senza consumare portata utile in
                    modo significativo.
                  </p>
                  <p>
                    Esistono varianti con soffiante esterna che aspirano aria dall&apos;ambiente
                    e la riscaldano prima di immetterla nel letto, e varianti che sfruttano
                    il calore di compressione direttamente disponibile a monte, eliminando
                    il consumo di energia elettrica per il riscaldamento. In tutti i casi,
                    il ciclo di rigenerazione è più lento rispetto alla rigenerazione a freddo,
                    il che si riflette in dimensioni della macchina più generose e in un
                    investimento iniziale superiore.
                  </p>
                  <p>
                    In compenso, il costo operativo è inferiore su impianti con portate importanti
                    dove il 15-20% di aria di purga rappresenterebbe un onere energetico
                    significativo. La vita del materiale adsorbente in questa configurazione è
                    tipicamente di 2-3 anni, inferiore alla rigenerazione a freddo perché i cicli
                    termici accelerano il degrado meccanico delle particelle adsorbenti. Le valvole
                    di commutazione tra le torri sono il componente a maggior usura e richiedono
                    ispezione periodica.
                  </p>
                </div>
                <TechCard
                  items={[
                    { label: "PDP ottenibile", valore: "Fino a -40°C" },
                    { label: "Consumo aria", valore: "Ridotto o nullo" },
                    { label: "Manutenzione principale", valore: "Adsorbente ogni 2-3 anni, valvole di commutazione, elementi riscaldanti" },
                  ]}
                />
              </div>

              {/* Membrana */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight mb-4">
                  Essiccatori a membrana
                </h3>
                <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    La membrana è la tecnologia più semplice dal punto di vista costruttivo:
                    nessuna parte in movimento, nessun ciclo di commutazione, nessun materiale
                    consumabile nel senso tradizionale del termine. Il principio è la
                    permeazione selettiva: un fascio di fibre cave semipermeabili lascia passare
                    il vapore acqueo attraverso la parete delle fibre verso l&apos;esterno, mentre
                    le molecole di azoto e ossigeno, più grandi, continuano il loro percorso
                    all&apos;interno delle fibre fino all&apos;uscita.
                  </p>
                  <p>
                    Una piccola quota dell&apos;aria essiccata fluisce in controcorrente intorno
                    alle fibre come aria di spurgo, portando via l&apos;umidità permeata verso
                    l&apos;esterno. Il vantaggio è la semplicità: funziona senza energia elettrica,
                    senza automazione, senza parti soggette a usura meccanica ciclica. Il
                    limite è duplice: la portata trattabile è contenuta, rendendo la membrana
                    adatta principalmente a applicazioni localizzate o punti di prelievo
                    specifici; e le prestazioni di essiccazione degradano gradualmente nel
                    tempo con l&apos;invecchiamento delle fibre, in modo non sempre visibile senza
                    monitoraggio del PDP in uscita.
                  </p>
                  <p className="text-sm border-l-2 border-border pl-4">
                    Il degrado delle prestazioni di un essiccatore a membrana è misurabile
                    solo con strumentazione dedicata. Un&apos;analisi periodica del punto di
                    rugiada in linea è l&apos;unico modo per verificare che la membrana stia
                    ancora lavorando entro le specifiche.
                  </p>
                  <p>
                    Una prefiltrazione adeguata a monte della membrana è fondamentale: tracce
                    di olio o particolato fine danneggiano le fibre in modo irreversibile.
                  </p>
                </div>
                <TechCard
                  items={[
                    { label: "PDP ottenibile", valore: "Variabile, tipicamente fino a -40°C" },
                    { label: "Consumo aria", valore: "10-20% come aria di spurgo" },
                    { label: "Manutenzione principale", valore: "Sostituzione modulo membrana a fine vita, prefiltrazione critica" },
                  ]}
                />
              </div>

            </div>
          </div>
        </section>

        {/* Filtrazione */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
              Filtrazione
            </h2>
            <div className="max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
              <p>
                La filtrazione e l&apos;essiccazione sono complementari, non alternative.
                Un essiccatore a refrigerazione riduce l&apos;umidità ma non rimuove il
                particolato fine o le tracce di olio in aerosol. Un filtro coalescente a
                monte dell&apos;essiccatore protegge lo scambiatore interno dalla
                contaminazione; uno a valle garantisce che la condensa residua e le
                eventuali particelle non raggiungano l&apos;utenza. Per gli adsorbenti, la
                prefiltrazione prima del letto è una condizione di corretto funzionamento,
                non un&apos;opzione: l&apos;olio satura e avvelena il materiale adsorbente in modo
                irreversibile, e le particelle ne accelerano il degrado meccanico.
              </p>
              <p>
                La selezione della filtrazione corretta parte dalle stesse classi ISO 8573-1
                che definiscono il requisito qualitativo dell&apos;aria compressa finale. Ogni
                classe specifica limiti separati per particolato, umidità e contenuto di
                olio, e ciascuno dei tre parametri richiede una tecnologia di trattamento
                specifica. Progettare il sistema di trattamento senza avere il requisito
                ISO di destinazione significa non avere un criterio oggettivo di selezione.
              </p>
              <p>
                Verificare che il sistema di trattamento installato stia effettivamente
                producendo l&apos;aria alla classe richiesta è un passo separato dal
                dimensionamento iniziale: le prestazioni degli essiccatori degradano nel
                tempo, i filtri si saturano, e l&apos;aria di aspirazione cambia con le
                stagioni. L&apos;analisi della qualità dell&apos;aria in linea è lo strumento che
                chiude questo ragionamento.{" "}
                <Link
                  href="/ottimizza/analisi-qualita-aria"
                  className="text-primary underline underline-offset-2 hover:no-underline"
                >
                  Come funziona l&apos;analisi qualità aria in linea
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                La selezione parte dal requisito dell&apos;applicazione finale
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Il punto di rugiada richiesto, la classe ISO di purezza e il profilo di
                portata sono i tre parametri che determinano la tecnologia e il
                dimensionamento corretti. Con i dati dell&apos;impianto, la selezione è un
                calcolo, non una stima.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Richiedi una valutazione tecnica
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/ottimizza/analisi-qualita-aria"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
                >
                  Analisi qualità aria in linea
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
