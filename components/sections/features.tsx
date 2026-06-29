import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Zap, Shield, BarChart3, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Implementazione Rapida",
    description:
      "Dalla firma del contratto all'operatività in meno di 48 ore. Il nostro processo collaudato elimina i tempi morti.",
  },
  {
    icon: Shield,
    title: "Sicurezza Enterprise",
    description:
      "Infrastruttura conforme GDPR, certificata ISO 27001, con backup automatici e uptime garantito al 99.9%.",
  },
  {
    icon: BarChart3,
    title: "Analisi e Reporting",
    description:
      "Dashboard in tempo reale con KPI personalizzati. Prendi decisioni basate sui dati, non sulle intuizioni.",
  },
  {
    icon: Headphones,
    title: "Supporto Dedicato",
    description:
      "Un account manager dedicato, disponibile dal lunedì al venerdì. Risposta garantita entro 4 ore lavorative.",
  },
];

export function Features() {
  return (
    <section id="servizi" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tutto ciò di cui hai bisogno, in un&apos;unica piattaforma
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Smetti di gestire decine di strumenti separati. Air Next centralizza i tuoi
            processi aziendali e li ottimizza automaticamente.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border border-border">
                <CardHeader className="pb-3">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
