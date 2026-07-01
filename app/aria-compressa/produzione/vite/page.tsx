import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Compressori a Vite | Air-next",
  description:
    "Compressori a vite lubrificati e a secco per applicazioni industriali. Selezione basata su portata reale, profilo di carico e classe di purezza dell'aria richiesta.",
  openGraph: {
    title: "Compressori a Vite | Air-next",
    description:
      "Compressori a vite lubrificati e a secco per applicazioni industriali. Selezione basata su portata reale, profilo di carico e classe di purezza dell'aria richiesta.",
  },
};

export default function CompressioneVite() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-background py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">
                Aria compressa · produzione · vite
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Compressori a vite
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                Contenuto in fase di sviluppo.
              </p>
              <div className="mt-10">
                <Link
                  href="/aria-compressa/produzione"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1")}
                >
                  Torna alle tipologie di compressori
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
