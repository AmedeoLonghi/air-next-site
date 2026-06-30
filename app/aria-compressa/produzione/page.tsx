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
    nome: "A vite",
    sottotitolo: "rotary screw",
    testo:
      "Due rotori a profilo elicoidale riducono progressivamente il volume dell'aria, comprimendola. La tecnologia più diffusa in ambito industriale per continuità di servizio e ampia disponibilità di taglie. Disponibili con iniezione d'olio e a secco. I lubrificati richiedono separazione olio/aria a valle; i modelli a secco sono indicati per processi sensibili alla contaminazione.",
  },
  {
    n: "02",
    nome: "Scroll",
    sottotitolo: "spirale eccentrica",
    testo:
      "Due spirali eccentriche — una fissa, una orbitante — comprimono l'aria per riduzione progressiva del volume delle camere. Oil-free per costruzione, silenzioso, adatto a taglie ridotte. Applicazioni tipiche: laboratori, medicale, processi con requisiti di purezza che escludono la gestione del circuito olio.",
  },
  {
    n: "03",
    nome: "Centrifugo",
    sottotitolo: "turbocompressore",
    testo:
      "La compressione avviene per effetto centrifugo tramite giranti ad alta velocità. Oil-free per definizione, indicato per portate elevate con pressioni moderate. Non è una tecnologia comune nel manifatturiero di media taglia: si trova in impianti di grande dimensione dove le portate richieste superano le capacità delle macchine volumetriche.",
  },
];

const regolazioni = [
  {
    n: "01",
    nome: "ON/OFF",
    varianti: [
      {
        label: "Senza soft start",
        testo:
          "Il compressore si avvia direttamente al raggiungimento della soglia minima di pressione e si arresta al raggiungimento della massima. La corrente di spunto all'avvio è elevata. Adatto a profili di carico molto stabili con cicli di avvio/arresto poco frequenti.",
      },
      {
        label: "Con soft start",
        testo:
          "La rampa di avvio è controllata elettronicamente per limitare la corrente di spunto. Riduce lo stress meccanico ed elettrico ai transitori, consentendo cicli di accensione/spegnimento più frequenti rispetto all'avvio diretto. Il comportamento in regime è identico all'ON/OFF tradizionale.",
      },
    ],
  },
  {
    n: "02",
    nome: "VSD — variazione di velocità con inverter",
    varianti: [
      {
        label: "Modulazione continua",
        testo:
          "Un inverter di frequenza adatta la velocità in tempo reale al fabbisogno della rete. La portata segue la domanda con continuità, mantenendo la pressione stabile entro una banda stretta senza cicli di avvio/arresto. Tecnologia efficace per profili di carico variabili: il risparmio energetico è significativo rispetto all'ON/OFF quando il carico medio è inferiore al 70–80% della portata nominale.",
      },
    ],
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

        {/* ── Hero ── */}
        <section className="bg-background py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">
                Aria compressa — produzione
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

        {/* ── Tipologie ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
              Tipologie di compressori
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {tipologie.map((t) => (
                <div
                  key={t.nome}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3"
                >
                  <div className="text-4xl font-bold text-primary/15 tabular-nums leading-none mb-1">
                    {t.n}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">{t.nome}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wide">{t.sottotitolo}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.testo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tecnologie di regolazione ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-14">
              Tecnologie di regolazione
            </h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {regolazioni.map((r) => (
                <div key={r.n}>
                  <div className="text-5xl font-bold text-primary/15 mb-4 tabular-nums">
                    {r.n}
                  </div>
                  <h3 className="font-semibold text-lg mb-5">{r.nome}</h3>
                  <div className="space-y-5">
                    {r.varianti.map((v) => (
                      <div key={v.label} className="pl-4 border-l-2 border-border">
                        <p className="text-sm font-medium text-foreground mb-1">{v.label}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{v.testo}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Motori elettrici ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">
              Motori elettrici: classe di efficienza e comportamento reale
            </h2>
            <div className="max-w-3xl space-y-5 text-muted-foreground leading-relaxed mb-12">
              <p>
                La classe IE5 identifica il livello di efficienza del motore, non una tecnologia
                costruttiva unica. Nella pratica applicativa dei compressori di ultima generazione,
                soprattutto sulle macchine a velocità variabile con motore sincrono a magneti
                permanenti (iPM), l&apos;IE5 è spesso associato a questa tecnologia, anche se esistono
                soluzioni IE5 basate su motori a riluttanza sincrona senza magneti permanenti.
              </p>
              <p>
                Il rendimento dichiarato di un motore rappresenta una fotografia a condizioni nominali
                definite. In un impianto aria compressa reale, il compressore lavora a carichi
                variabili — turni produttivi, pause, picchi, consumi di fondo — e la differenza tra
                le classi non si misura solo sul rendimento di picco, ma sul comportamento ai regimi
                parziali. Un motore IE5 iPM abbinato a inverter e regolazione della portata contiene
                le perdite elettriche e meccaniche anche quando il compressore non lavora a pieno
                carico, condizione in cui la macchina opera per la maggior parte delle ore annue.
              </p>
            </div>

            {/* Grafico + Tabella */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">

              {/* Grafico a barre */}
              <div className="rounded-xl border border-border bg-background p-6">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
                  Perdite energetiche residue (IE3 = 100)
                </p>
                <div className="space-y-5">
                  {/* IE3 */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">IE3</span>
                      <span className="text-sm tabular-nums text-muted-foreground">100</span>
                    </div>
                    <div className="h-8 w-full rounded bg-muted overflow-hidden">
                      <div className="h-full rounded bg-foreground/20" style={{ width: "100%" }} />
                    </div>
                  </div>
                  {/* IE4 */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">IE4</span>
                      <span className="text-sm tabular-nums text-muted-foreground">~77</span>
                    </div>
                    <div className="h-8 w-full rounded bg-muted overflow-hidden">
                      <div className="h-full rounded bg-primary/40" style={{ width: "77%" }} />
                    </div>
                  </div>
                  {/* IE5 */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">IE5</span>
                      <span className="text-sm tabular-nums text-muted-foreground">~60</span>
                    </div>
                    <div className="h-8 w-full rounded bg-muted overflow-hidden">
                      <div className="h-full rounded bg-primary" style={{ width: "60%" }} />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted-foreground italic">
                  Valori indicativi a scopo illustrativo del principio di riduzione delle perdite tra classi.
                </p>
              </div>

              {/* Tabella */}
              <div className="rounded-xl border border-border bg-background overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      <th className="text-left px-4 py-3 font-semibold text-foreground w-16">Classe</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Tecnologia tipica</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Impatto pratico</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-4 font-medium text-foreground align-top">IE3</td>
                      <td className="px-4 py-4 text-muted-foreground align-top">Motore asincrono tradizionale</td>
                      <td className="px-4 py-4 text-muted-foreground align-top">Base efficiente, perdite più elevate ai carichi parziali</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium text-foreground align-top">IE4</td>
                      <td className="px-4 py-4 text-muted-foreground align-top">Motore asincrono o sincrono ottimizzato</td>
                      <td className="px-4 py-4 text-muted-foreground align-top">Rendimento migliorato, perdite ridotte rispetto a IE3</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium text-primary align-top">IE5</td>
                      <td className="px-4 py-4 text-muted-foreground align-top">Sincrono a magneti permanenti (iPM) o riluttanza sincrona</td>
                      <td className="px-4 py-4 text-muted-foreground align-top">Perdite minime, comportamento ottimale ai carichi parziali se abbinato a inverter</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

            <p className="mt-10 max-w-3xl text-muted-foreground leading-relaxed">
              Il vantaggio economico non si misura in punti percentuali di rendimento del motore,
              ma in kWh assorbiti in meno per produrre la stessa quantità di aria compressa,
              soprattutto nelle ore in cui l&apos;impianto lavora a carico variabile — che in un
              servizio continuo sono la maggioranza.
            </p>
          </div>
        </section>

        {/* ── Come selezioniamo ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
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

        {/* ── Manutenzione e ricambi ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Manutenzione programmata e ricambi multimarca
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  La manutenzione programmata segue le frequenze definite dal
                  costruttore in funzione delle ore di funzionamento e delle
                  condizioni ambientali di installazione. Gli interventi tipici
                  includono la sostituzione dei filtri aria e dei separatori
                  olio/aria, il controllo del sistema di raffreddamento,
                  la verifica delle valvole e la sostituzione dell&apos;olio lubrificante
                  nelle macchine iniettate.
                </p>
                <p>
                  Interveniamo su qualsiasi marca installata. Non siamo vincolati
                  a un costruttore, il che ci consente di valutare il miglior
                  rapporto qualità/prezzo tra ricambi originali ed equivalenti
                  certificati, senza dover proporre la sostituzione della macchina
                  quando il problema è risolvibile con un ricambio.
                </p>
                <p>
                  Per impianti che richiedono revisioni straordinarie — sostituzione
                  rotori, revisione valvole, pulizia intercooler — gestiamo l&apos;intervento
                  direttamente o coordinandoci con i centri assistenza costruttore
                  in funzione del tipo di macchina e della garanzia.
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
