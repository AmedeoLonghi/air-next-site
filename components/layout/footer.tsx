import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Prodotto: [
    { label: "Funzionalità", href: "#servizi" },
    { label: "Case Study", href: "#case-study" },
    { label: "Prezzi", href: "#prezzi" },
    { label: "Roadmap", href: "#" },
  ],
  Azienda: [
    { label: "Chi Siamo", href: "#chi-siamo" },
    { label: "Blog", href: "#" },
    { label: "Carriere", href: "#" },
    { label: "Contatti", href: "#contatti" },
  ],
  Legale: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Termini di Servizio", href: "/termini" },
    { label: "Cookie Policy", href: "/cookie" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-1 font-semibold text-lg mb-4">
              <span className="text-primary">Air</span>
              <span>Next</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Soluzioni digitali su misura per far crescere il tuo business.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <a href="mailto:info@air-next.it" className="hover:text-foreground transition-colors">
                info@air-next.it
              </a>
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
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
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Air Next S.r.l. — P.IVA 00000000000</p>
          <p>Fatto con ❤️ in Italia</p>
        </div>
      </div>
    </footer>
  );
}
