import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section id="contatti" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-primary px-8 py-16 sm:px-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Pronto a fare il passo successivo?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Prenota una demo gratuita di 30 minuti con il nostro team. Ti mostriamo
            come Air Next può trasformare il tuo business in concreto.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:info@air-next.it"
              className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "gap-2")}
            >
              Prenota una Demo
              <ArrowRight size={16} />
            </Link>
            <Link
              href="tel:+390000000000"
              className={cn(
                buttonVariants({ size: "lg", variant: "ghost" }),
                "text-primary-foreground hover:text-primary-foreground hover:bg-white/10"
              )}
            >
              Chiamaci subito
            </Link>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/60">
            Risposta garantita entro 24h · Demo personalizzata · Zero impegno
          </p>
        </div>
      </div>
    </section>
  );
}
