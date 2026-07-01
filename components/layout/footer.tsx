import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const servizi = [
  { label: "Aria Compressa", href: "/aria-compressa" },
  { label: "Refrigerazione Industriale", href: "/refrigerazione-industriale" },
  { label: "Gas Tecnici", href: "/gas-tecnici" },
];

const ottimizza = [
  { label: "Audit Energetico", href: "/ottimizza/audit-energetico" },
  { label: "Ricerca Perdite", href: "/ottimizza/ricerca-perdite" },
  { label: "Conformità Normativa", href: "/ottimizza/conformita-normativa" },
  { label: "Analisi Qualità Aria", href: "/ottimizza/analisi-qualita-aria" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <div className="px-1">
                <img src="/logo.svg" alt="Air-next" width="131" height="30" className="h-[30px] w-auto" />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Soluzioni tecniche per aria compressa, gas tecnici e refrigerazione industriale.
              Indipendenti dai marchi, orientati ai dati.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Servizi</h3>
            <ul className="space-y-3">
              {servizi.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Analisi e Diagnosi</h3>
            <ul className="space-y-3">
              {ottimizza.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@air-next.it" className="hover:text-foreground transition-colors">
                  info@air-next.it
                </a>
              </li>
              <li>
                <a href="tel:+390142578069" className="hover:text-foreground transition-colors">
                  +39 0142 578069
                </a>
              </li>
              <li>Casale Monferrato (AL)</li>
            </ul>
          </div>

        </div>

        <Separator className="my-8" />

        <p className="text-sm text-muted-foreground">
          © 2025 Air-next di Longhi Amedeo · P.IVA 01765720055
        </p>
      </div>
    </footer>
  );
}
