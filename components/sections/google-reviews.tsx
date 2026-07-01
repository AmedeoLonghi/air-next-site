import Script from "next/script";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function GoogleReviews() {
  return (
    <section className="py-20 sm:py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Cosa dicono i nostri clienti
          </h2>
        </div>

        {/* TODO: sostituire con widget Elfsight reale dopo aver creato account su elfsight.com/google-reviews e collegato il profilo Google Business Air-next */}
        <div className="elfsight-app-INSERISCI-ID-WIDGET"></div>
        <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />

        <div className="mt-6 flex flex-col gap-2">
          <Link
            href="https://g.page/r/Cb50mEbXK_5KEBI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            Hai lavorato con noi? Lascia una recensione su Google
            <ExternalLink size={13} />
          </Link>
          <p className="text-xs text-muted-foreground">
            Le recensioni sono verificate da Google.
          </p>
        </div>
      </div>
    </section>
  );
}
