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
    "Essiccatori e filtri per aria compressa. Soluzioni per ogni classe di purezza ISO 8573, dimensionate sul profilo di portata e sull'applicazione finale.",
  openGraph: {
    title: "Trattamento Aria Compressa | Filtrazione ed Essiccazione | Air-next",
    description:
      "Essiccatori e filtri per aria compressa. Soluzioni per ogni classe di purezza ISO 8573, dimensionate sul profilo di portata e sull'applicazione finale.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Trattamento Aria Compressa — Filtrazione ed Essiccazione",
  description:
    "Fornitura e installazione di essiccatori e sistemi di filtrazione per aria compressa. Selezione in funzione della classe di purezza ISO 8573 richiesta dall'applicazione.",
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
  serviceType: "Trattamento Aria Compressa",
};

const essiccatori = [
  {
    tipo: "A refrigerazione",
    pdp: "Punto di rugiada: ≤ +3 °C (ISO 8573-1 Classe 4)",
    testo:
      "Il flusso d'aria è raffreddato fino a circa +3 °C da un circuito frigorifero integrato. A quella temperatura l'umidità condensa e viene drenata prima che l'aria torni alla temperatura ambiente. Soluzione adeguata per la maggior parte delle applicazioni industriali che non richiedono basse temperature ambientali o processi con specifiche di purezza più stringenti. Consumo elettrico limitato rispetto agli essiccatori ad adsorbimento.",
  },
  {
    tipo: "Ad adsorbimento — rigenerazione a freddo",
    pdp: "Punto di rugiada: da −20 °C a −70 °C (ISO 8573-1 Classi 1–3)",
    testo:
      "Due colonne di materiale adsorbente (gel di silice, allumina attivata, setacci molecolari) alternano cicli di adsorbimento e rigenerazione. La colonna satura si rigenera utilizzando una quota dell'aria già essiccata — tipicamente il 15 % della portata trattata — che spazza l'adsorbente a pressione ridotta eliminando l'umidità desorbita. Soluzione semplice, senza sorgenti di calore esterne. Il consumo di aria per la rigenerazione aumenta il consumo energetico specifico dell'essiccatore.",
  },
  {
    tipo: "Ad adsorbimento — rigenerazione a caldo",
    pdp: "Punto di rugiada: da −20 °C a −70 °C (ISO 8573-1 Classi 1–3)",
    testo:
      "Il principio è lo stesso della rigenerazione a freddo, ma la colonna satura viene riscaldata esternamente (resistenza elettrica o vapore) prima dello spurgo. Il calore accelera il desorbimento e riduce drasticamente il consumo di aria compressa per la rigenerazione (tipicamente sotto il 2 % contro il 15 % del ciclo a freddo). Il ciclo è più lungo e l'impianto più complesso, ma il costo energetico della rigenerazione è trascurabile. Indicato per portate elevate in cui la perdita del 15 % di aria avrebbe un impatto economico significativo.",
  },
  {
    tipo: "A membrana",
    pdp: "Punto di rugiada: tipicamente −20 °C a +10 °C (ISO 8573-1 Classi 3–5)",
    testo:
      "L'aria compressa percorre un fascio di fibre cave polimeriche semipermeabili. Le molecole d'acqua migrano selettivamente attraverso la parete della fibra verso una corrente di spurgo esterna, mentre l'aria essiccata prosegue all'uscita. Nessuna parte in movimento, nessun consumo elettrico per il processo di separazione. Adatto a installazioni in zone classificate, ambienti remoti o dove la manutenzione periodica è difficoltosa. Le prestazioni dipendono dalla portata di spurgo, dalla temperatura e dalla pressione operativa.",
  },
];

const filtri = [
  {
    tipo: "Prefiltro",
    classe: "Rimozione particelle grossolane e acqua libera",
    testo:
      "Primo stadio di filtrazione. Rimuove particelle di grandi dimensioni, acqua in sospensione e aerosol grossolani prima dell'essiccatore. Protegge gli stadi di filtrazione successivi e prolunga la vita dell'elemento dell'essiccatore.",
  },
  {
    tipo: "Coalescente",
    classe: "ISO 8573-1: Classi 1–2 particolato e olio aerosol",
    testo:
      "Elementi filtranti in fibra di borosilicato o similari che aggregano le goccioline di aerosol (olio e acqua) in gocce più grandi che scendono per gravità. Efficienza fino a 0,01 mg/m³ per i modelli di classe 1. Installato a valle dell'essiccatore.",
  },
  {
    tipo: "A carbone attivo",
    classe: "ISO 8573-1: Classe 1 vapori d'olio",
    testo:
      "Rimuove i vapori d'olio che attraversano i filtri coalescenti. Indispensabile per applicazioni alimentari, farmaceutiche e dove l'odore è un requisito. Il carbone attivo ha una capacità di adsorbimento finita: richiede sostituzione periodica programmata.",
  },
  {
    tipo: "Sterile / particolato fine",
    classe: "ISO 8573-1: Classe 1 particolato — per applicazioni critiche",
    testo:
      "Eliminazione di particelle submicrometriche e microorganismi. Richiesto in processi farmaceutici, medicali e alimentari dove la purezza microbiologica è un requisito di processo o di certificazione.",
  },
];

export default function Trattamento() {
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
                Aria compressa — trattamento
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Filtrazione ed essiccazione dimensionate sulla classe di purezza richiesta
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                L&apos;aria compressa in uscita dal compressore contiene sempre umidità,
                olio e particolato. La quantità da rimuovere dipende dall&apos;applicazione.
                Selezioniamo essiccatori e filtri in funzione della classe ISO 8573-1
                richiesta dal processo, dimensionati sulla portata reale dell&apos;impianto.
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

        {/* ── Essiccatori ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Essiccatori
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {essiccatori.map((e) => (
                <div
                  key={e.tipo}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4"
                >
                  <div>
                    <h3 className="font-semibold text-base">{e.tipo}</h3>
                    <p className="text-xs font-mono font-medium text-primary mt-1">{e.pdp}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.testo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Filtrazione ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Sistemi di filtrazione
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {filtri.map((f) => (
                <div
                  key={f.tipo}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3"
                >
                  <div>
                    <h3 className="font-semibold text-base">{f.tipo}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{f.classe}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.testo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Criteri di selezione ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Come selezioniamo il treno di trattamento
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Il punto di partenza è la classe di purezza richiesta dall&apos;utenza
                  più critica dell&apos;impianto, espressa nella notazione ISO 8573-1
                  X:Y:Z (particolato : umidità : olio). Da quella classe si risale
                  alla combinazione essiccatore + filtri necessaria per ottenerla.
                </p>
                <p>
                  Il dimensionamento del trattamento si fa alla portata effettiva
                  in pressione — non alla portata atmosferica equivalente. Un errore
                  comune è utilizzare filtri ed essiccatori dimensionati su portate
                  superiori alla reale, che lavorano così ben al di sotto del punto
                  ottimale, o il contrario: apparecchi sottodimensionati con perdite
                  di carico eccessive che obbligano ad aumentare la pressione al
                  compressore.
                </p>
                <p>
                  Un essiccatore che funziona non è necessariamente un essiccatore
                  che rispetta la specifica. Le prestazioni di un essiccatore
                  frigorifero dipendono dal carico termico e dalla temperatura di
                  ingresso; quelle di un rigenerativo dipendono dallo stato del
                  materiale adsorbente. Se il processo richiede una classe documentata,
                  il punto di rugiada va misurato in linea, non desunto dalla targhetta.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/ottimizza/analisi-qualita-aria"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1")}
                >
                  Analisi qualità aria compressa ISO 8573
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Manutenzione ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Manutenzione programmata
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Gli elementi filtranti hanno una vita operativa definita in ore
                  di funzionamento e dipendente dal livello di contaminazione
                  dell&apos;aria in ingresso. Un elemento intasato genera una perdita
                  di carico che si traduce in pressione ridotta all&apos;utenza o in
                  pressione aumentata al compressore — in ogni caso in consumo
                  energetico inutile.
                </p>
                <p>
                  La manutenzione dell&apos;essiccatore frigorifero prevede pulizia
                  del condensatore, verifica del circuito refrigerante e controllo
                  delle valvole di drenaggio automatico. Per gli essiccatori
                  ad adsorbimento: verifica del ciclo di rigenerazione, controllo
                  delle valvole direzionali e sostituzione del materiale adsorbente
                  a fine vita.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 sm:py-28 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Hai un requisito di purezza da soddisfare?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Partendo dalla classe ISO 8573-1 richiesta, valutiamo il treno
                di trattamento necessario e il dimensionamento corretto per la
                portata del tuo impianto.
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
