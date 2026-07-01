import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { IeMotorChart } from "@/components/sections/ie-motor-chart";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Regolazione e Motori Elettrici per Compressori | Air-next",
  description:
    "Logiche di regolazione dei compressori aria compressa (ON/OFF, carico/vuoto, VSD) e classi di efficienza motori IE3, IE4, IE5. Guida tecnica alla selezione basata sul profilo di consumo reale.",
  openGraph: {
    title: "Regolazione e Motori Elettrici per Compressori | Air-next",
    description:
      "Logiche di regolazione dei compressori aria compressa (ON/OFF, carico/vuoto, VSD) e classi di efficienza motori IE3, IE4, IE5. Guida tecnica alla selezione basata sul profilo di consumo reale.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Regolazione e Motori Elettrici per Compressori Aria Compressa",
  description:
    "Logiche di regolazione (ON/OFF, carico/vuoto, modulante, VSD) e classi di efficienza motori IE3/IE4/IE5 per compressori aria compressa. Guida tecnica alla selezione basata sul profilo di consumo reale.",
  author: {
    "@type": "Organization",
    name: "Air-next",
    email: "info@air-next.it",
    telephone: "+390142578069",
  },
};

const regolazioneIntro = `Soft starter e regolazione della portata sono due cose diverse. Il primo riguarda l'avviamento del motore: riduce la corrente di spunto e rende più dolce la partenza elettrica. Una volta avviato, il compressore lavora secondo la propria logica di regolazione, indipendentemente dal tipo di avviamento installato.`;

const modalitaRegolazione = [
  {
    titolo: "ON/OFF",
    testo:
      "Il compressore parte quando la pressione scende sotto un valore minimo, si ferma al valore massimo. Regolazione semplice, adatta a piccole potenze e consumi discontinui con avviamenti orari contenuti. Su potenze più elevate o con richiesta frequente, i continui avvii e arresti stressano motore, contattori e gruppo vite.",
  },
  {
    titolo: "Carico/vuoto (load/unload)",
    testo:
      "Il sistema più diffuso sui compressori a vite tradizionali. Il motore resta acceso; quando la pressione raggiunge il valore massimo, la valvola di aspirazione chiude e il compressore smette di produrre aria ma continua ad assorbire energia, indicativamente tra il 20% e il 35% della potenza nominale a vuoto, a seconda della macchina. Logica robusta, ma penalizzante dal punto di vista energetico se la macchina passa molto tempo a vuoto.",
  },
  {
    titolo: "VSD: velocità variabile",
    testo:
      "La portata viene regolata variando il numero di giri del gruppo vite in funzione della richiesta reale. Riduce i cicli carico/vuoto, mantiene la pressione stabile, si adatta alla domanda variabile dello stabilimento.",
  },
];

const regolazioneChiusura = `Su impianti con più compressori, il salto di qualità spesso non sta nella singola macchina, ma nel farli lavorare correttamente insieme: regolazione a scorrimento, controllo master/slave, sequenziatori di centrale evitano che una macchina grande lavori male per coprire consumi bassi o variabili. Il dato che permette di scegliere la logica corretta è sempre il profilo reale di consumo: senza quello, anche una macchina corretta sulla carta rischia di non essere ottimizzata sul campo.`;

export default function RegolazioneMotori() {
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
                Aria compressa · produzione · regolazione e motori
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Regolazione e motori elettrici per compressori
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                La logica di regolazione e la classe di efficienza del motore determinano il consumo
                reale di un compressore, non solo il rendimento di targa. Una selezione corretta
                parte dal profilo di carico dell&apos;impianto.
              </p>
            </div>
          </div>
        </section>

        {/* Tecnologie di regolazione */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
              Tecnologie di regolazione
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">
              {regolazioneIntro}
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {modalitaRegolazione.map((m) => (
                <div
                  key={m.titolo}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-3"
                >
                  <h3 className="font-semibold text-base">{m.titolo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.testo}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-muted-foreground leading-relaxed max-w-3xl">
              {regolazioneChiusura}
            </p>
          </div>
        </section>

        {/* Motori elettrici */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
              Motore elettrico: la classe di efficienza non è solo una sigla
            </h2>
            <div className="max-w-3xl space-y-5 text-muted-foreground leading-relaxed mb-12">
              <p>
                La classe IE5 identifica un livello di efficienza, non un&apos;unica tecnologia
                costruttiva. Spesso è associata a motori sincroni a magneti permanenti, ma esistono
                soluzioni IE5 a riluttanza sincrona (SynRM) che raggiungono la stessa classe senza
                magneti permanenti. Si tratta di una tecnologia che combina le prestazioni dei motori
                a magneti permanenti con la semplicità costruttiva di un motore asincrono, senza
                utilizzo di terre rare.
              </p>
              <p>
                Il rendimento dichiarato di un motore è una fotografia a condizioni nominali. In un
                impianto reale, il compressore lavora a carichi variabili (turni produttivi, pause,
                picchi, consumi di fondo) e la differenza tra le classi si misura sul comportamento
                ai regimi parziali, non solo sul rendimento di targa. Un motore IE5, abbinato a
                inverter e regolazione della portata, contiene le perdite anche quando il compressore
                non lavora a pieno carico, condizione in cui la macchina opera per la maggior parte
                delle ore annue.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">

              {/* Grafico recharts (client component) */}
              <IeMotorChart />

              {/* Tabella */}
              <div className="rounded-xl border border-border bg-background overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      <th className="text-left px-4 py-3 font-semibold text-foreground w-16">Classe</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Tecnologia tipica</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Comportamento pratico</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-4 font-medium text-foreground align-top">IE3</td>
                      <td className="px-4 py-4 text-muted-foreground align-top">Motore asincrono induttivo</td>
                      <td className="px-4 py-4 text-muted-foreground align-top">Efficiente rispetto alle generazioni precedenti, perdite più marcate ai carichi parziali</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium text-foreground align-top">IE4</td>
                      <td className="px-4 py-4 text-muted-foreground align-top">Motore asincrono o sincrono ottimizzato</td>
                      <td className="px-4 py-4 text-muted-foreground align-top">Rendimento migliorato, perdite ridotte rispetto a IE3</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium text-primary align-top">IE5</td>
                      <td className="px-4 py-4 text-muted-foreground align-top">Sincrono a magneti permanenti (iPM) o a riluttanza sincrona (SynRM)</td>
                      <td className="px-4 py-4 text-muted-foreground align-top">Perdite minime, comportamento ottimale ai carichi parziali se abbinato a inverter</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

            <p className="mt-10 max-w-3xl text-muted-foreground leading-relaxed">
              Il vantaggio economico non si misura in punti percentuali di rendimento nominale,
              ma in kWh assorbiti in meno per produrre la stessa quantità di aria compressa,
              soprattutto nelle ore in cui l&apos;impianto lavora a carico variabile, che in un
              servizio continuo sono la maggioranza.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Profilo di carico non disponibile?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Il profilo reale di consumo è il dato che permette di scegliere la logica di
                regolazione e la taglia corretta. Un audit energetico lo restituisce in forma
                strumentale, con un campione rappresentativo del ciclo produttivo.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/ottimizza/audit-energetico"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Leggi come funziona l&apos;audit energetico
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
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
