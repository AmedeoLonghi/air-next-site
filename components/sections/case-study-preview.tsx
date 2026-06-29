import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    settore: "Industria alimentare",
    titolo:
      "Audit su impianto a vite: inefficienza di regolazione identificata e corretta con sostituzione mirata del compressore",
    luogo: "Provincia di Alessandria",
    tag: "Audit energetico",
  },
  {
    settore: "Metalmeccanica",
    titolo:
      "Ricerca perdite ultrasoniche: rete di distribuzione risanata, pressione di esercizio stabilizzata",
    luogo: "Provincia di Vercelli",
    tag: "Ricerca perdite",
  },
];

export function CaseStudyPreview() {
  return (
    <section className="py-20 sm:py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Case study</h2>
            <p className="mt-2 text-muted-foreground">
              Risultati documentati, con dati reali.
            </p>
          </div>
          <Link
            href="/case-study"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1 self-start sm:self-auto shrink-0"
            )}
          >
            Tutti i case study
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <Card key={cs.titolo} className="border border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{cs.tag}</Badge>
                  <span className="text-xs text-muted-foreground">{cs.settore}</span>
                </div>
                <h3 className="font-semibold text-base leading-snug mb-3">{cs.titolo}</h3>
                <p className="text-sm text-muted-foreground">{cs.luogo}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
