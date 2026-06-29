import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Caso Studio | Impianti Aria Compressa | Air-next",
  description:
    "Risultati documentati da interventi reali su impianti aria compressa industriali. Dati strumentali, risparmio quantificato, analisi tecniche.",
  openGraph: {
    title: "Caso Studio | Impianti Aria Compressa | Air-next",
    description:
      "Risultati documentati da interventi reali su impianti aria compressa industriali. Dati strumentali, risparmio quantificato, analisi tecniche.",
  },
};

const caseStudies = [
  {
    settore: "Componentistica industriale",
    luogo: "Provincia di Alessandria",
    tag: "Audit energetico",
    titolo: "Impianto sovradimensionato al 96%: centrale da 44 kW sostituita con soluzione da 14 kW",
    impianto: "2 compressori scroll da 22 kW — capacità totale 7,4 m³/min",
    metriche: [
      { label: "Portata media rilevata", value: "0,269 m³/min — 3,6% della capacità installata" },
      { label: "Distribuzione carico", value: "43,4% del tempo sotto il 25% · 53,9% tra 25% e 50%" },
      { label: "Costo energetico annuale stimato", value: "€ 13.676" },
      { label: "Risparmio con ottimizzazione", value: "€ 7.229/anno — riduzione 52,8%" },
    ],
    analisi:
      "Con una portata media di 0,269 m³/min su una capacità installata di 7,4 m³/min, i compressori lavoravano quasi esclusivamente in scarico, assorbendo energia senza produrre aria utile. La soluzione ha previsto la sostituzione della centrale con un compressore VSD da 14 kW dimensionato sul profilo di portata reale.",
  },
  {
    settore: "Automazione industriale",
    luogo: "Provincia di Novara",
    tag: "Audit energetico",
    titolo: "Centrale monoblocco da 160 kW: risparmio di €20.280/anno con configurazione modulare",
    impianto: "1 compressore VSD da 160 kW — produzione continua lun–sab",
    metriche: [
      { label: "Portata media rilevata", value: "16,5–18 m³/min · consumo domenicale residuo 6,5 m³/min" },
      { label: "Distribuzione carico", value: "49% del tempo tra 50–75% della capacità · 28% oltre il 75%" },
      { label: "Costo energetico annuale stimato", value: "€ 107.640" },
      { label: "Risparmio con configurazione modulare", value: "€ 20.280/anno — riduzione 18,9%" },
    ],
    analisi:
      "Il profilo di carico mostrava un picco produttivo durante i giorni lavorativi e un consumo residuo domenicale di 6,5 m³/min (perdite di rete). La macchina da 160 kW, ottimizzata per il picco, lavorava in condizioni di scarsa efficienza durante il 49% del tempo. La configurazione modulare con una macchina base più una di supporto per i picchi ha consentito di ridurre il consumo medio senza perdere la copertura del picco.",
  },
];

export default function CaseStudy() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="bg-background py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">
                Caso studio
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Risultati documentati da impianti reali
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                Ogni caso è documentato con i dati strumentali rilevati, il profilo
                di consumo e il risparmio quantificato. I nomi aziendali sono omessi
                per riservatezza. Le metriche sono quelle dei report originali.
              </p>
            </div>
          </div>
        </section>

        {/* ── Casi studio ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {caseStudies.map((cs) => (
                <div
                  key={cs.titolo}
                  className="rounded-xl border border-border bg-card p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="secondary">{cs.tag}</Badge>
                    <span className="text-xs text-muted-foreground">{cs.settore}</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">{cs.luogo}</span>
                  </div>

                  <h2 className="text-xl font-bold tracking-tight mb-1">{cs.titolo}</h2>
                  <p className="text-xs text-muted-foreground border-b border-border pb-5 mb-6">
                    {cs.impianto}
                  </p>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
                    {cs.metriche.map((m) => (
                      <div key={m.label}>
                        <dt className="text-xs text-muted-foreground mb-1">{m.label}</dt>
                        <dd className="text-sm font-medium text-foreground">{m.value}</dd>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-5">
                    {cs.analisi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Prossimi casi ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
                Altri casi in arrivo
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I casi studio vengono aggiunti man mano che gli interventi completati
                dispongono di dati strumentali verificati e autorizzazione alla
                pubblicazione. Non pubblichiamo sintesi qualitative: ogni caso
                riportato ha un profilo di consumo rilevato e un risparmio calcolato.
              </p>
              <div className="mt-8">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Descrivi il tuo impianto
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA verso audit ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Il tuo impianto ha un profilo di consumo reale
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                L&apos;audit energetico produce gli stessi dati che vedi in questi casi:
                profilo di carico orario, costo energetico annuale e scenari di
                ottimizzazione con risparmio quantificato. In 7 giorni.
              </p>
              <div className="mt-8">
                <Link
                  href="/ottimizza/audit-energetico"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
                >
                  Come funziona l&apos;audit energetico
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
