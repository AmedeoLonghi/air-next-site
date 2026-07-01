import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Compressori Aria Compressa | Fornitura e Manutenzione | Air-next",
  description:
    "Fornitura, installazione e manutenzione di compressori aria compressa multimarca. Selezione basata su profilo di portata reale, non su catalogo.",
  openGraph: {
    title: "Compressori Aria Compressa | Fornitura e Manutenzione | Air-next",
    description:
      "Fornitura, installazione e manutenzione di compressori aria compressa multimarca. Selezione basata su profilo di portata reale, non su catalogo.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fornitura e Manutenzione Compressori Aria Compressa",
  description:
    "Fornitura, installazione e manutenzione di compressori aria compressa multimarca. Selezione basata sul profilo di portata e carico reale.",
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
  serviceType: "Compressori Aria Compressa",
};

const tipologie = [
  {
    n: "01",
    nome: "Compressori a vite",
    sottotitolo: "rotary screw",
    testo:
      "La tecnologia volumetrica più diffusa nell'industria. Disponibile con iniezione d'olio e a secco, copre un'ampia gamma di portate e pressioni per servizio continuo.",
    href: "/aria-compressa/produzione/vite",
  },
  {
    n: "02",
    nome: "Compressori a pistoni",
    sottotitolo: "reciprocating",
    testo:
      "Tecnologia oil-free per processi che escludono la contaminazione oleosa. Applicazioni tipiche: dentale, medicale, farmaceutico, alimentare.",
    href: "/aria-compressa/produzione/pistoni",
  },
  {
    n: "03",
    nome: "Compressori scroll",
    sottotitolo: "spirale eccentrica",
    testo:
      "Oil-free per costruzione, silenzioso, adatto a taglie ridotte. Per laboratori, medicale e processi con requisiti di purezza che escludono il circuito olio.",
    href: "/aria-compressa/produzione/scroll",
  },
  {
    n: "04",
    nome: "Turbocompressori",
    sottotitolo: "centrifugo",
    testo:
      "Compressione centrifuga oil-free per portate elevate. Indicato per grandi impianti dove le portate richieste superano le capacità delle macchine volumetriche.",
    href: "/aria-compressa/produzione/turbo",
  },
];

export default function Produzione() {
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
                Aria compressa · produzione
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Compressori selezionati sul profilo di carico reale
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                La taglia e la tecnologia di regolazione di un compressore determinano
                il consumo energetico per tutta la vita operativa della macchina.
                Selezioniamo in funzione del profilo di portata effettivo, non della
                taglia massima stimata. Fornitura, installazione e manutenzione
                multimarca.
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

        {/* Tipologie di compressori */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Tipologie di compressori
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Ogni tecnologia di compressione ha un campo applicativo ottimale. La scelta dipende
              dalla portata richiesta, dalla classe di purezza dell&apos;aria, dal profilo di carico
              e dai vincoli di installazione, non dalla disponibilità a magazzino.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {tipologie.map((t) => (
                <Link
                  key={t.nome}
                  href={t.href}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3 transition-colors hover:bg-muted/60"
                >
                  <div className="text-4xl font-bold text-primary/15 tabular-nums leading-none mb-1">
                    {t.n}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">{t.nome}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wide">{t.sottotitolo}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t.testo}</p>
                  <div className="flex items-center gap-1 text-sm font-medium text-primary mt-1">
                    Approfondisci
                    <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Regolazione e motori — introduzione compatta */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Regolazione e motori elettrici
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Le logiche di regolazione dei compressori non sono equivalenti tra loro.
                  Un compressore può funzionare in ON/OFF, carico/vuoto, con parzializzazione
                  della portata o con variazione della velocità tramite inverter (VSD). La
                  differenza non è solo tecnica: la logica di regolazione determina quanta energia
                  si consuma nelle ore in cui il compressore non lavora a pieno carico, condizione
                  che in un impianto reale è la maggioranza del tempo operativo.
                </p>
                <p>
                  La classe di efficienza del motore elettrico incide sul comportamento ai carichi
                  parziali, non solo sul rendimento di targa. Un motore IE5 abbinato a regolazione
                  VSD contiene le perdite anche quando il compressore lavora a metà portata; un
                  motore IE3 su macchina ON/OFF le accumula ogni volta che la macchina si ferma e
                  riparte. La scelta corretta dipende dal profilo di consumo reale dell&apos;impianto.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/aria-compressa/produzione/regolazione-motori"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1")}
                >
                  Approfondimento tecnico su regolazione e motori
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Manutenzione */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Manutenzione: programmata e revisione gruppo
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Un compressore a vite è una macchina con parti in movimento sottoposte a usura
                controllata. La distinzione rilevante non è tra ordinaria e straordinaria, ma tra
                manutenzione programmata su intervalli definiti e revisione del gruppo compressore,
                che interviene su componenti a vita utile più lunga ma con impatto critico
                sull&apos;affidabilità dell&apos;impianto.
              </p>

              <div className="space-y-10">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Manutenzione programmata</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Gli interventi seguono intervalli di ore macchina o calendario, indipendentemente
                    dalle condizioni apparenti dei componenti. Includono la sostituzione del kit filtri
                    (filtro aspirazione, filtro olio, separatore olio-aria), il cambio olio o la
                    verifica del livello secondo la viscosità e il tipo indicati dal costruttore,
                    l&apos;ispezione delle cinghie di trasmissione dove presenti, la verifica delle
                    valvole di minima pressione e sicurezza, la pulizia dei radiatori e dei sistemi
                    di raffreddamento. Il rispetto degli intervalli non è una formalità: un separatore
                    saturo aumenta la perdita di carico interna e riduce l&apos;efficienza; un filtro
                    olio degradato compromette la lubrificazione del gruppo vite. L&apos;effetto non è
                    immediato, ma si accumula sulle ore di esercizio fino a generare guasti evitabili.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Revisione gruppo compressore</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I cuscinetti del gruppo vite e del motore elettrico sono componenti a usura
                    controllata con vita utile definita in ore macchina, tipicamente nell&apos;ordine
                    delle 16.000-24.000 ore secondo il tipo di macchina e il regime di lavoro. La loro
                    sostituzione non è un intervento straordinario: è un intervento programmato su
                    componenti critici, con una logica identica alla manutenzione ordinaria ma su scala
                    temporale più lunga. Un cuscinetto del gruppo vite che supera la vita utile nominale
                    non cede in modo prevedibile: può cedere in modo repentino, trascinando nel guasto i
                    rotori, l&apos;albero e il corpo del compressore. Il costo di una revisione preventiva
                    dei cuscinetti è una frazione del costo di ricostruzione o sostituzione del gruppo
                    vite. È su questo tipo di valutazione che si misura la differenza tra una gestione
                    tecnica dell&apos;impianto e una gestione a guasto.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1")}
                >
                  Pianifica la manutenzione del tuo impianto
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Come selezioniamo */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Come selezioniamo la macchina
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  La selezione parte dal profilo di portata reale dell&apos;impianto.
                  Se non è disponibile una misura strumentale precedente, il punto
                  di partenza è un audit energetico: un periodo di monitoraggio
                  con strumentazione dedicata restituisce il profilo orario di portata e
                  consumo su un campione rappresentativo del ciclo produttivo.
                  La durata del monitoraggio varia in base al processo produttivo:
                  tipicamente una settimana, ma può estendersi fino a 45 giorni per
                  cicli produttivi con variabilità stagionale o produzioni non continue.
                </p>
                <p>
                  Dal profilo si ricava la portata media, la portata di punta e la
                  variabilità del carico. Queste tre grandezze determinano la taglia
                  nominale e la tecnologia di regolazione più adatta: un profilo
                  molto variabile richiede un VSD; un profilo stabile con poche
                  variazioni può essere servito efficacemente anche da una macchina
                  on/off correttamente dimensionata.
                </p>
                <p>
                  Il sovradimensionamento è la condizione più comune che incontriamo.
                  Un compressore di grande potenza che serve un impianto con fabbisogno
                  ridotto lavora per la maggior parte del tempo in scarico o a
                  velocità minima, assorbendo energia senza produrre aria utile.
                  Non c&apos;è tecnologia di regolazione che compensi un dimensionamento
                  sbagliato.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/ottimizza/audit-energetico"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1")}
                >
                  Leggi come funziona l&apos;audit energetico
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Compressore da sostituire o da ottimizzare?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Possiamo partire da un sopralluogo tecnico per valutare le condizioni
                dell&apos;impianto esistente, oppure da un audit energetico se hai bisogno
                di dati strumentali per giustificare l&apos;investimento.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Richiedi un sopralluogo
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/ottimizza/audit-energetico"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
                >
                  Parti dall&apos;audit energetico
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
