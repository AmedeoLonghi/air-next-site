import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6 gap-1.5">
            <span>Novità</span>
            <ChevronRight size={12} />
            <span className="font-normal">Scopri la nostra nuova piattaforma</span>
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Trasforma il tuo business{" "}
            <span className="text-primary">con soluzioni digitali</span>{" "}
            su misura
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Air Next accompagna le aziende nella trasformazione digitale con consulenza
            strategica, sviluppo software e integrazione di processi. Risultati misurabili,
            sin dal primo giorno.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contatti"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              Richiedi una Demo gratuita
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#case-study"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Vedi i Case Study
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Nessuna carta di credito richiesta · Setup in 48h · Supporto dedicato
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-5xl rounded-2xl border border-border bg-muted/40 aspect-video flex items-center justify-center">
          <p className="text-muted-foreground text-sm">[ Screenshot / Demo del prodotto ]</p>
        </div>
      </div>
    </section>
  );
}
