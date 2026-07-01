import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { IeMotorChart } from "@/components/sections/ie-motor-chart";
import { CompressorCalculator } from "@/components/sections/compressor-calculator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Compressori Aria Compressa | Fornitura e Manutenzione | Air-next",
  description:
    "Fornitura, installazione e manutenzione di compressori aria compressa. Interveniamo su qualsiasi macchina installata. Selezione basata su profilo di portata reale, non su catalogo.",
  openGraph: {
    title: "Compressori Aria Compressa | Fornitura e Manutenzione | Air-next",
    description:
      "Fornitura, installazione e manutenzione di compressori aria compressa. Interveniamo su qualsiasi macchina installata. Selezione basata su profilo di portata reale, non su catalogo.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fornitura e Manutenzione Compressori Aria Compressa",
  description:
    "Fornitura, installazione e manutenzione di compressori aria compressa su qualsiasi macchina installata. Selezione basata sul profilo di portata e carico reale.",
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
    nome: "Compressori a vite",
    sottotitolo: "rotary screw",
    testo:
      "La tecnologia volumetrica più diffusa nell'industria. Disponibile con iniezione d'olio e a secco, copre un'ampia gamma di portate e pressioni per servizio continuo.",
    href: "/aria-compressa/produzione/vite",
  },
  {
    nome: "Compressori a pistoni",
    sottotitolo: "reciprocating",
    testo:
      "Tecnologia oil-free per processi che escludono la contaminazione oleosa. Applicazioni tipiche: dentale, medicale, farmaceutico, alimentare.",
    href: "/aria-compressa/produzione/pistoni",
  },
  {
    nome: "Compressori scroll",
    sottotitolo: "spirale eccentrica",
    testo:
      "Oil-free per costruzione, silenzioso, adatto a taglie ridotte. Per laboratori, medicale e processi con requisiti di purezza che escludono il circuito olio.",
    href: "/aria-compressa/produzione/scroll",
  },
  {
    nome: "Turbocompressori",
    sottotitolo: "centrifugo",
    testo:
      "Compressione centrifuga oil-free per portate elevate. Indicato per grandi impianti dove le portate richieste superano le capacità delle macchine volumetriche.",
    href: "/aria-compressa/produzione/turbo",
  },
];

const manutenzione = [
  {
    ore: "4.000 h",
    label: "Intervento base",
    testo:
      "Sostituzione kit filtri, cambio olio, verifica valvole di minima e massima pressione, pulizia sistema di raffreddamento. Eseguito secondo le prescrizioni del costruttore per ogni modello installato.",
  },
  {
    ore: "8.000 h",
    label: "Intervento completo",
    testo:
      "Tutto quanto previsto a 4.000 h, integrato con le voci aggiuntive indicate dal costruttore per questo intervallo. Le lavorazioni specifiche variano in base al modello e al regime di lavoro della macchina.",
  },
  {
    ore: "25.000-30.000 h",
    label: "Revisione gruppo",
    testo:
      "Sostituzione cuscinetti del gruppo vite e del motore elettrico, verifica dei giochi tra rotori, ispezione meccanica completa. Intervento che previene il cedimento del gruppo vite, il componente più critico e costoso dell'impianto.",
  },
];

const auditCards = [
  {
    settore: "Componentistica industriale",
    luogo: "Provincia di Alessandria",
    risparmio: "€ 7.229/anno",
    riduzione: "52,8%",
    testo:
      "Centrale da 44 kW sovradimensionata al 96% della capacità. Portata media rilevata: 0,269 m³/min su 7,4 m³/min installati. Sostituita con compressore VSD da 14 kW dimensionato sul profilo reale.",
  },
  {
    settore: "Automazione industriale",
    luogo: "Provincia di Novara",
    risparmio: "€ 20.280/anno",
    riduzione: "18,9%",
    testo:
      "Centrale monoblocco da 160 kW con consumo domenicale residuo di 6,5 m³/min (perdite di rete). Ottimizzata con configurazione modulare basata sul profilo di carico orario rilevato su ciclo produttivo completo.",
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
                taglia massima stimata. Interveniamo su qualsiasi macchina installata.
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

        {/* Manutenzione */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Manutenzione
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Gli interventi seguono intervalli di ore macchina definiti dal costruttore.
              Il rispetto degli intervalli non è una formalità: un separatore saturo o un
              filtro olio degradato generano guasti evitabili che si accumulano silenziosamente
              sulle ore di esercizio.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {manutenzione.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3"
                >
                  <div className="text-3xl font-bold text-primary leading-none">{m.ore}</div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{m.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.testo}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground max-w-3xl">
              Gli intervalli e le lavorazioni specifiche sono definiti dal costruttore per ogni
              modello. Il piano di manutenzione applicato è quello ufficiale della macchina
              installata.
            </p>
            <div className="mt-8">
              <Link
                href="/contatti"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1")}
              >
                Pianifica la manutenzione del tuo impianto
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Regolazione e motori — layout 50/50 */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">

              {/* Colonna sinistra: testo + bottone */}
              <div>
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

              {/* Colonna destra: grafico */}
              <div>
                <IeMotorChart />
              </div>

            </div>
          </div>
        </section>

        {/* Come selezioniamo + Cosa emerge — sezione unificata 7/12 + 5/12 */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">

              {/* Colonna sinistra 7/12: testo metodologia + card audit */}
              <div className="lg:col-span-7">
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

                {/* Card audit impilate */}
                <div className="mt-10 flex flex-col gap-5">
                  {auditCards.map((c) => (
                    <div
                      key={c.settore}
                      className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3"
                    >
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.settore}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{c.luogo}</p>
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-primary leading-none">{c.risparmio}</span>
                        <span className="ml-2 text-sm text-muted-foreground">riduzione {c.riduzione}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.testo}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-muted-foreground">
                  Dati strumentali rilevati su impianti reali. Ragioni sociali omesse per riservatezza.
                </p>
              </div>

              {/* Colonna destra 5/12: contesto + CTA, sticky */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <h3 className="text-lg font-bold tracking-tight mb-5">
                  Cosa emerge quando si misurano gli impianti
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  I dati che seguono provengono da audit strumentali su impianti reali,
                  monitorati per sette giorni consecutivi con acquisizione continua di
                  portata, pressione e consumo energetico. Non sono stime: sono profili
                  di carico rilevati su impianti in esercizio.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/ottimizza/audit-energetico"
                    className={cn(buttonVariants({ size: "sm" }), "gap-1 justify-center sm:justify-start")}
                  >
                    Prenota un audit energetico
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/case-study"
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1 justify-center sm:justify-start")}
                  >
                    Vedi tutti i casi studio
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Calcolatore profilo energetico */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Stima il profilo energetico del tuo impianto
            </h2>
            <CompressorCalculator ctaContext="produzione" />
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
