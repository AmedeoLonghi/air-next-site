import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Microscope } from "lucide-react";

const settori = [
  {
    nome: "Farmaceutico",
    descrizione: "Aria compressa a contatto con il prodotto o con superfici critiche: classe ISO 8573-1 documentata per GMP e audit di qualità.",
  },
  {
    nome: "Alimentare",
    descrizione: "Contatto diretto o indiretto con alimenti: purezza microbiologica e assenza di olio richieste per conformità HACCP.",
  },
  {
    nome: "Elettronica",
    descrizione: "Particolato e umidità residua compromettono le lavorazioni su PCB e componenti sensibili: la classe di purezza va misurata, non stimata.",
  },
  {
    nome: "Verniciatura industriale",
    descrizione: "Olio e umidità nell'aria compressa causano difetti di adesione e aspetto: analisi preventiva evita scarti e rilavorazioni.",
  },
];

export function QualitaAria() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          <div>
            <div className="flex items-start gap-4 mb-4">
              <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Microscope className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Il tuo processo richiede aria certificata?
              </h2>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Farmaceutico, alimentare, elettronica, verniciatura industriale: alcuni processi
              produttivi richiedono classi di purezza dell&apos;aria compressa documentate, non solo
              presunte. Analizziamo particolato, umidità e contenuto di olio secondo ISO 8573-1
              e consegniamo un report con la classe effettivamente misurata.
            </p>
            <div className="mt-8">
              <Link
                href="/ottimizza/analisi-qualita-aria"
                className={cn(buttonVariants({ size: "lg" }), "gap-2")}
              >
                Richiedi un&apos;analisi qualità aria
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Settori applicativi
            </p>
            {settori.map((s) => (
              <div
                key={s.nome}
                className="rounded-xl border border-border bg-background p-5"
              >
                <p className="font-semibold text-sm text-foreground">{s.nome}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.descrizione}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
