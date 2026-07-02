import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Analisi Qualità Aria Compressa ISO 8573 | Air-next",
  description:
    "Campionamento e analisi della qualità dell'aria compressa secondo ISO 8573-1: classi di purezza per particolato, umidità e contenuto d'olio. Per processi certificati in ambito farmaceutico, alimentare, elettronico e verniciatura industriale.",
  openGraph: {
    title: "Analisi Qualità Aria Compressa ISO 8573 | Air-next",
    description:
      "Campionamento e analisi della qualità dell'aria compressa secondo ISO 8573-1: classi di purezza per particolato, umidità e contenuto d'olio. Per processi certificati in ambito farmaceutico, alimentare, elettronico e verniciatura industriale.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Analisi Qualità Aria Compressa ISO 8573",
  description:
    "Campionamento in linea e analisi in laboratorio della qualità dell'aria compressa secondo ISO 8573-1. Determinazione delle classi di purezza per particolato, umidità e contenuto d'olio con report documentale.",
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
  serviceType: "Analisi Qualità Aria Compressa",
};

const contaminanti = [
  {
    codice: "Contaminante 1",
    nome: "Particolato",
    descrizione:
      "Polveri, particelle solide e liquide in sospensione nell'aria compressa. La norma definisce le classi per concentrazione massica (mg/m³ in condizioni di riferimento) e per distribuzione granulometrica.",
    classi: [
      { classe: "Classe 1", valore: "≤ 0,1 mg/m³" },
      { classe: "Classe 2", valore: "≤ 1 mg/m³" },
      { classe: "Classe 3", valore: "≤ 5 mg/m³" },
      { classe: "Classe 4", valore: "≤ 8 mg/m³" },
    ],
  },
  {
    codice: "Contaminante 2",
    nome: "Umidità",
    descrizione:
      "Il contenuto d'acqua si esprime come punto di rugiada in pressione (PDP). Determina il rischio di condensazione nella rete, corrosione, proliferazione batterica e compatibilità con le utenze pneumatiche.",
    classi: [
      { classe: "Classe 1", valore: "≤ −70 °C PDP" },
      { classe: "Classe 2", valore: "≤ −40 °C PDP" },
      { classe: "Classe 3", valore: "≤ −20 °C PDP" },
      { classe: "Classe 4", valore: "≤ +3 °C PDP" },
    ],
  },
  {
    codice: "Contaminante 3",
    nome: "Olio",
    descrizione:
      "Concentrazione totale di olio: aerosol, vapori e fase liquida. È il parametro più critico per i processi a contatto con il prodotto. La Classe 1 corrisponde a contenuti inferiori al limite di rilevabilità di molti strumenti.",
    classi: [
      { classe: "Classe 1", valore: "≤ 0,01 mg/m³" },
      { classe: "Classe 2", valore: "≤ 0,1 mg/m³" },
      { classe: "Classe 3", valore: "≤ 1 mg/m³" },
      { classe: "Classe 4", valore: "≤ 5 mg/m³" },
    ],
  },
];

const steps = [
  {
    n: "01",
    titolo: "Mappatura e punti di prelievo",
    testo:
      "Identifichiamo i punti di prelievo rappresentativi dell'aria effettivamente utilizzata nelle utenze critiche. Il campione deve riflettere la qualità dell'aria al punto d'uso, non all'uscita del compressore, dopo filtrazione, essiccazione e distribuzione in rete.",
  },
  {
    n: "02",
    titolo: "Campionamento in linea",
    testo:
      "Il campionamento avviene in pressione durante la normale attività produttiva. Il particolato è rilevato con contatore ottico portatile; il punto di rugiada è misurato in linea con igrometro a sensore capacitivo o a specchio raffreddato; l'olio è raccolto su tubi adsorbenti specifici per la successiva analisi in laboratorio.",
  },
  {
    n: "03",
    titolo: "Analisi in laboratorio e report ISO 8573-1",
    testo:
      "I campioni raccolti per il contenuto d'olio sono analizzati in laboratorio con metodo gravimetrico per la fase liquida e aerosol e con gascromatografia (GC-MS) per i vapori. Il report certifica la classe ISO 8573-1 rilevata per ciascun contaminante nella notazione X:Y:Z e confronta il dato con il requisito di processo dichiarato.",
  },
];

const applicazioni = [
  {
    settore: "Industria farmaceutica",
    testo:
      "Le norme GMP (Good Manufacturing Practice) e l'Allegato 1 della direttiva UE prevedono aria compressa documentata per ogni processo a contatto diretto o indiretto con il prodotto. La classe di purezza deve essere definita nella convalida del processo e verificata periodicamente.",
  },
  {
    settore: "Industria alimentare",
    testo:
      "Gli standard BRC, IFS e ISO 22000 richiedono il monitoraggio e la registrazione della qualità dell'aria compressa a contatto con alimenti, superfici a contatto e imballaggi primari. Il contenuto d'olio è il parametro più critico e il più contestato in sede di audit.",
  },
  {
    settore: "Elettronica e semiconduttori",
    testo:
      "Nei processi di assemblaggio, pulizia e incisione, il particolato trasportato dall'aria compressa compromette l'integrità delle superfici. Le specifiche di processo definiscono classi di contaminazione che devono essere verificate strumentalmente e registrate.",
  },
  {
    settore: "Verniciatura industriale",
    testo:
      "L'olio in sospensione nell'aria compressa produce difetti di adesione, crateri e distacchi nella finitura verniciata. La qualifica di un processo verniciante certificato (ISO 12944, Qualicoat, GSB) richiede documentazione della qualità dell'aria in ingresso all'impianto.",
  },
];

export default function AnalisiQualitaAria() {
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
                Analisi qualità aria compressa
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Quale classe di purezza eroga il tuo impianto?
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                La norma ISO 8573-1 definisce classi di purezza per tre categorie di
                contaminanti: particolato, umidità e olio. Se il tuo processo richiede
                una classe certificata, per un audit BRC, una qualifica GMP o una
                specifica di verniciatura, il dato deve venire dalla misura, non
                dal datasheet del filtro.
              </p>
              <div className="mt-10">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Richiedi un&apos;analisi
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ISO 8573: i tre contaminanti */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                ISO 8573-1: tre contaminanti, una classe per ciascuno
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                La qualità dell&apos;aria compressa si esprime con una notazione del tipo{" "}
                <span className="font-mono font-semibold text-foreground">X:Y:Z</span>,
                dove X è la classe per il particolato, Y per l&apos;umidità e Z per l&apos;olio.
                Una specifica tipica per processi alimentari è{" "}
                <span className="font-mono font-semibold text-foreground">1:2:1</span>.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {contaminanti.map((c) => (
                <div
                  key={c.nome}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-5"
                >
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                      {c.codice}
                    </p>
                    <h3 className="font-semibold text-base">{c.nome}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {c.descrizione}
                    </p>
                  </div>
                  <dl className="space-y-2 border-t border-border pt-4">
                    {c.classi.map((cl) => (
                      <div key={cl.classe} className="flex justify-between items-baseline gap-4">
                        <dt className="text-xs text-muted-foreground">{cl.classe}</dt>
                        <dd className="text-xs font-mono font-medium text-foreground">
                          {cl.valore}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Perché la qualità non si presume ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Perché il datasheet del filtro non è sufficiente
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Un filtro coalescente classificato per una certa efficienza garantisce
                  le prestazioni dichiarate alle condizioni di progetto: portata nominale,
                  elemento filtrante integro, pressione differenziale entro i limiti.
                  Nella pratica, un elemento saturo, una bypass aperta o un picco di
                  portata sono sufficienti a degradare la qualità dell&apos;aria ben al di
                  sotto delle aspettative.
                </p>
                <p>
                  L&apos;essiccatore influisce in modo determinante sul punto di rugiada, ma
                  le sue prestazioni effettive dipendono dal carico termico, dalla
                  temperatura dell&apos;aria in ingresso e dallo stato del letto adsorbente o
                  del circuito frigorigeno. Una macchina che funziona non è necessariamente
                  una macchina che rispetta la specifica.
                </p>
                <p>
                  Per un processo certificato, il valore della qualità dell&apos;aria non può
                  essere desunto dalla targhetta degli apparecchi di trattamento. Deve
                  essere misurato all&apos;utenza, nelle condizioni operative reali, con
                  strumentazione calibrata e metodi conformi alla norma. Solo in questo
                  modo il dato è utilizzabile in sede di audit o di qualifica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Metodologia ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-14">
              La metodologia
            </h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.n}>
                  <div className="text-5xl font-bold text-primary/15 mb-4 tabular-nums">
                    {step.n}
                  </div>
                  <h3 className="font-semibold text-base mb-3">{step.titolo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.testo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Processi che richiedono analisi documentata ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Processi in cui la qualità dell&apos;aria è un requisito certificato
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                In questi settori la classe di purezza dell&apos;aria compressa non è una
                preferenza tecnica: è una condizione di conformità al processo produttivo
                e agli standard applicabili.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {applicazioni.map((a) => (
                <div
                  key={a.settore}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3"
                >
                  <h3 className="font-semibold text-base">{a.settore}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {a.testo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA finale ── */}
        <section className="py-20 sm:py-28 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Il report ISO 8573-1 è disponibile in pochi giorni
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Il sopralluogo per il campionamento richiede alcune ore e non
                interrompe la produzione. Ricevi un report con la classe rilevata per
                ciascun contaminante, il confronto con il requisito di processo e,
                se presente una non conformità, l&apos;indicazione della causa tecnica.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Richiedi un&apos;analisi
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
