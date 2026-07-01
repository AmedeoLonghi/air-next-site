import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// TODO: Elfsight Google Reviews — integrazione
// 1. Crea un account su elfsight.com (piano gratuito disponibile)
// 2. Vai su "My Applications" e crea un widget "Google Reviews"
// 3. Copia l'App ID dal codice embed (formato: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
// 4. Aggiungi lo script Elfsight in app/layout.tsx:
//    import Script from "next/script"
//    <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
// 5. Sostituisci il div placeholder qui sotto con:
//    <div className="elfsight-app-TUO_APP_ID" data-elfsight-app-lazy></div>

export function Trustpilot() {
  return (
    <section className="py-20 sm:py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Cosa dicono i nostri clienti
          </h2>
        </div>

        {/* TODO: sostituire con il div del widget Elfsight una volta configurato l'account */}
        {/* <div className="elfsight-app-TUO_APP_ID" data-elfsight-app-lazy></div> */}
        <div className="rounded-xl border border-border bg-card p-10 flex items-center justify-center text-sm text-muted-foreground min-h-[120px]">
          Widget Google Reviews (Elfsight) — da configurare
        </div>

        <div className="mt-6">
          {/* TODO: sostituire # con il link diretto alla pagina Google Business di Air-next */}
          <Link
            href="#"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1")}
          >
            Lascia una recensione su Google
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
