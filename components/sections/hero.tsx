import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            Aria compressa, gas tecnici e refrigerazione industriale.{" "}
            <span className="text-primary">Con un approccio che parte dai dati.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
            Air-next seleziona e ottimizza impianti industriali in base a misure oggettive:
            pressioni, portate, profilo orario, dispersioni. Nessuna dipendenza di marchio,
            nessuna stima: solo dati verificati sul campo.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/ottimizza/audit-energetico"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              Prenota un audit energetico
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/case-study"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Vedi i casi studio
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Casale Monferrato (AL) · Piemonte · Lombardia · Liguria · Emilia Romagna · Toscana
          </p>
        </div>
      </div>
    </section>
  );
}
