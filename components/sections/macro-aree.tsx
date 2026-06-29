import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Wind, Thermometer, FlaskConical } from "lucide-react";

const aree = [
  {
    icon: Wind,
    titolo: "Aria Compressa",
    descrizione:
      "Compressori, trattamento, distribuzione e analisi qualità. Fornitura, manutenzione e ricambi multimarca per qualsiasi taglia di impianto.",
    href: "/aria-compressa",
  },
  {
    icon: Thermometer,
    titolo: "Refrigerazione Industriale",
    descrizione:
      "Sistemi di raffreddamento e chiller per processi industriali. Soluzioni in acquisto e a noleggio, con assistenza tecnica diretta.",
    href: "/refrigerazione-industriale",
  },
  {
    icon: FlaskConical,
    titolo: "Gas Tecnici",
    descrizione:
      "Generatori di azoto e ossigeno on-site. Purezza controllata, eliminazione delle bombole, costi operativi documentati e prevedibili.",
    href: "/gas-tecnici",
  },
];

export function MacroAree() {
  return (
    <section className="py-20 sm:py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Le nostre aree di competenza
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Tre settori, un unico interlocutore tecnico. Indipendente dai marchi,
            orientato ai risultati del tuo processo.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {aree.map((area) => {
            const Icon = area.icon;
            return (
              <Card key={area.titolo} className="flex flex-col">
                <CardHeader className="pb-3">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{area.titolo}</h3>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {area.descrizione}
                  </p>
                  <Link
                    href={area.href}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "self-start gap-1"
                    )}
                  >
                    Scopri l&apos;offerta
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
