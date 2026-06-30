import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Zap, Search, ArrowRight } from "lucide-react";

const servizi = [
  {
    icon: Zap,
    titolo: "Audit Energetico",
    descrizione:
      "Misurazione dei consumi reali del compressore, analisi del profilo di carico e calcolo del risparmio ottenibile con intervento documentato.",
    href: "/ottimizza/audit-energetico",
  },
  {
    icon: Search,
    titolo: "Ricerca Perdite",
    descrizione:
      "Rilevamento con ultrasuoni delle perdite nella rete di distribuzione. Quantificazione in kWh e stima del costo annuo degli sprechi.",
    href: "/ottimizza/ricerca-perdite",
  },
];

export function Ottimizza() {
  return (
    <section id="ottimizza" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Se il tuo impianto consuma più del necessario, partiamo da qui.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Prima di qualsiasi proposta commerciale, misuriamo. Due servizi di analisi
            che restituiscono dati oggettivi e un piano di intervento giustificato dai numeri.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {servizi.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.titolo}
                href={s.href}
                className="group flex gap-4 rounded-xl border border-border bg-background p-6 transition-colors hover:bg-muted/60"
              >
                <div className="mt-0.5 shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="mb-1.5">
                    <h3 className="font-semibold text-foreground">{s.titolo}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.descrizione}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/ottimizza/audit-energetico"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            Prenota un audit energetico
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
