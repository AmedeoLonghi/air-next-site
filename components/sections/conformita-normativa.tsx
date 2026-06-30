import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, FileCheck } from "lucide-react";

const pilastri = [
  { codice: "DM 329/2004", descrizione: "Messa in servizio e utilizzo delle attrezzature in pressione" },
  { codice: "D.Lgs. 81/2008 art. 71", descrizione: "Obblighi di verifica periodica delle attrezzature di lavoro" },
  { codice: "D.Lgs. 26/2016 (PED)", descrizione: "Direttiva attrezzature in pressione — recepimento italiano" },
];

export function ConformitaNormativa() {
  return (
    <section className="py-20 sm:py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          <div>
            <div className="flex items-start gap-4 mb-4">
              <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <FileCheck className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Le attrezzature in pressione hanno obblighi normativi precisi
              </h2>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Compressori, serbatoi e reti di distribuzione rientrano negli obblighi del DM 329/2004
              e del D.Lgs. 81/2008. Verifiche periodiche, denunce INAIL, documentazione tecnica:
              un quadro che richiede competenze specifiche per essere gestito correttamente.
              Coordiniamo il percorso di conformità con gli enti preposti, occupandoci della parte
              tecnica e della documentazione di impianto.
            </p>
            <div className="mt-8">
              <Link
                href="/ottimizza/conformita-normativa"
                className={cn(buttonVariants({ size: "lg" }), "gap-2")}
              >
                Parliamo della conformità del tuo impianto
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Quadro normativo di riferimento
            </p>
            {pilastri.map((p) => (
              <div
                key={p.codice}
                className="rounded-xl border border-border bg-background p-5"
              >
                <p className="font-semibold text-sm text-foreground">{p.codice}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.descrizione}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
