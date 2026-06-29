import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contatti | Air-next",
  description:
    "Contatta Air-next per impianti aria compressa, refrigerazione industriale e gas tecnici. Risposta entro 24 ore con valutazione tecnica preliminare.",
  openGraph: {
    title: "Contatti | Air-next",
    description:
      "Contatta Air-next per impianti aria compressa, refrigerazione industriale e gas tecnici. Risposta entro 24 ore con valutazione tecnica preliminare.",
  },
};

const areaServita = [
  "Piemonte",
  "Lombardia",
  "Liguria",
  "Emilia Romagna",
  "Toscana",
];

export default function Contatti() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero minimo ── */}
        <section className="bg-background pt-20 sm:pt-28 pb-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">
                Contatti
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
                Parliamo del tuo impianto
              </h1>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Descrivi il contesto, il problema o quello che vuoi ottimizzare.
                Rispondo entro 24 ore con una valutazione tecnica preliminare,
                senza impegno.
              </p>
            </div>
          </div>
        </section>

        {/* ── Form + contatti ── */}
        <ContactForm />

        {/* ── Area geografica ── */}
        <section className="py-16 sm:py-20 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-lg font-semibold mb-4">Area di intervento</h2>
                <ul className="space-y-2">
                  {areaServita.map((r) => (
                    <li key={r} className="text-sm text-muted-foreground">
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Per interventi su impianti particolarmente rilevanti valutiamo
                  richieste anche al di fuori di quest&apos;area.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-4">Disponibilità</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Disponibile dal lunedì al venerdì su appuntamento. Per richieste
                  urgenti — guasti, fermi impianto — contattaci direttamente per
                  telefono.
                </p>
                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="font-medium text-foreground">Telefono</dt>
                    <dd className="mt-0.5">
                      <a
                        href="tel:+390142578069"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +39 0142 578069
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-foreground">Email</dt>
                    <dd className="mt-0.5">
                      <a
                        href="mailto:info@air-next.it"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        info@air-next.it
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-foreground">Sede operativa</dt>
                    <dd className="mt-0.5 text-muted-foreground">
                      Casale Monferrato (AL)
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-foreground">P.IVA</dt>
                    <dd className="mt-0.5 text-muted-foreground">01765720055</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
