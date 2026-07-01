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

        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div className="elfsight-app-7584c086-14d2-4c75-a8ce-3ae07db0ce73" data-elfsight-app-lazy></div>

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
