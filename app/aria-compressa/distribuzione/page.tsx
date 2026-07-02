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

const perditeDiametro = [
  { diametro: "1 mm", portata: "1,2 l/min" },
  { diametro: "2 mm", portata: "5,0 l/min" },
  { diametro: "3 mm", portata: "11,1 l/min" },
  { diametro: "5 mm", portata: "30,9 l/min" },
  { diametro: "8 mm", portata: "79,0 l/min" },
  { diametro: "10 mm", portata: "123,8 l/min" },
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

        {/* ── Perdite di carico e costo energetico ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Perdite di carico e costo energetico
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Una perdita di carico lungo la rete non è solo un problema di portata: è un costo
                energetico diretto. Per garantire la pressione corretta al punto di utilizzo più
                lontano o più critico, il compressore deve lavorare a una pressione di mandata
                superiore a quella realmente necessaria, per compensare quello che si perde lungo
                il percorso. L&apos;aumento di consumo energetico per ogni bar di pressione in eccesso
                si attesta, secondo dati di settore convergenti, tra il 7% e l&apos;8%. Una rete
                sottodimensionata o con troppe curve strette non produce solo un problema di
                prestazione a valle: si traduce direttamente in un compressore che lavora a una
                pressione più alta di quanto servirebbe, con un costo energetico che si somma ora
                per ora, tutto l&apos;anno.
              </p>
            </div>
          </div>
        </section>

        {/* ── Configurazione di rete ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Configurazione di rete
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le reti di distribuzione che progettiamo seguono la configurazione ad anello chiuso:
                ogni punto di prelievo riceve aria da due direzioni, la caduta di pressione lungo la
                rete resta più uniforme, e i tratti a fondo cieco dove la condensa ristagna vengono
                eliminati alla radice. È una scelta progettuale, non un&apos;opzione da valutare caso
                per caso.
              </p>
            </div>
          </div>
        </section>

        {/* ── Materiali e giunzioni ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Materiali e giunzioni
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  La scelta del materiale e della tecnologia di giunzione incide sui costi di
                  installazione, sulla manutenibilità futura della rete e sulla qualità
                  dell&apos;aria trattata.
                </p>
                <p>
                  I raccordi a pressare si installano a freddo con una pinza dedicata, senza
                  saldatura: la tenuta si ottiene per deformazione meccanica del raccordo sul tubo.
                  La velocità di posa e l&apos;assenza di fiamma libera li rendono adatti dove i tempi
                  di installazione sono stretti o l&apos;ambiente ha vincoli antincendio.
                </p>
                <p>
                  Le tubazioni saldate restano la soluzione più affidabile sul lungo periodo: la
                  giunzione diventa parte integrante del tubo, senza punti di potenziale cedimento
                  meccanico nel tempo. Richiedono saldatore qualificato e un collaudo di tenuta
                  prima della messa in esercizio, ha senso quando la rete è definitiva e non
                  prevede modifiche frequenti.
                </p>
                <p>
                  I raccordi componibili in alluminio usano un sistema modulare a incastro, senza
                  saldatura né filettatura. Il vantaggio reale non è il costo di acquisto, più alto
                  dell&apos;acciaio nero a parità di diametro, ma la possibilità di modificare la rete
                  nel tempo, aggiungendo o spostando derivazioni senza fermare l&apos;impianto.
                </p>
                <p>
                  Gli innesti rapidi per polietilene si usano interrati o dove serve resistenza
                  chimica e leggerezza, con tenuta a compressione o elettrosaldatura a seconda del
                  diametro e delle condizioni di posa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Quanto costa una perdita, per dimensione ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-10">
                Quanto costa una perdita, per dimensione
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-12 font-semibold">Diametro perdita</th>
                      <th className="text-left py-3 font-semibold">Portata dispersa a 6 bar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {perditeDiametro.map((r) => (
                      <tr key={r.diametro}>
                        <td className="py-3 pr-12 font-medium text-foreground">{r.diametro}</td>
                        <td className="py-3 text-muted-foreground">{r.portata}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                La portata dispersa cresce in modo non lineare con il diametro: una perdita da 5 mm
                non è cinque volte peggiore di una da 1 mm, ma quasi trenta volte peggiore. Il costo
                annuale dipende anche da pressione di esercizio, ore di funzionamento e prezzo
                dell&apos;energia.
              </p>
              <Link
                href="/ottimizza/ricerca-perdite"
                className={cn(buttonVariants({ size: "lg" }), "gap-2")}
              >
                Calcola il costo delle tue perdite
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Interventi su reti esistenti ── */}
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
