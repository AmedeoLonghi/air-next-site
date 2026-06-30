"use client";

import { useEffect } from "react";

// TODO: configurazione Trustpilot
// 1. Crea o accedi al profilo aziendale su business.trustpilot.com
// 2. Vai su Integrazioni → TrustBox Widgets → copia il "Business Unit ID"
// 3. Sostituisci il valore di BUSINESS_UNIT_ID qui sotto
// 4. Scegli il template preferito su trustpilot.com/widgets e aggiorna TEMPLATE_ID
//    Esempi template comuni:
//      MicroReviewCount:  "5419b6ffb0d04a076446a9af"
//      Slider:            "54ad5defc6454f065c28af8b"
//      MiniCarousel:      "539adbd6dec7e10e686debee"
//    Lista completa: https://support.trustpilot.com/hc/en-us/articles/115011421468
const BUSINESS_UNIT_ID = "TODO_inserisci_business_unit_id";
const TEMPLATE_ID = "54ad5defc6454f065c28af8b"; // Slider — cambiare se necessario
const LOCALE = "it-IT";

export function Trustpilot() {
  useEffect(() => {
    // Carica lo script Trustpilot se non è già presente
    if (!document.querySelector('script[src*="widget.trustpilot.com"]')) {
      const script = document.createElement("script");
      script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      script.async = true;
      document.head.appendChild(script);
    } else {
      // Se lo script è già caricato, reinizializza i widget
      if (typeof window !== "undefined" && (window as Window & { Trustpilot?: { loadFromElement: (el: Element) => void } }).Trustpilot) {
        const tp = (window as Window & { Trustpilot?: { loadFromElement: (el: Element) => void } }).Trustpilot;
        const widget = document.querySelector(".trustpilot-widget");
        if (tp && widget) tp.loadFromElement(widget);
      }
    }
  }, []);

  return (
    <section className="py-20 sm:py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Cosa dicono i nostri clienti
          </h2>
        </div>

        {/* Widget Trustpilot — si autogestisce se non ci sono ancora recensioni */}
        <div
          className="trustpilot-widget"
          data-locale={LOCALE}
          data-template-id={TEMPLATE_ID}
          data-businessunit-id={BUSINESS_UNIT_ID}
          data-style-height="140px"
          data-style-width="100%"
          data-theme="light"
        >
          <a
            href={`https://it.trustpilot.com/review/${BUSINESS_UNIT_ID}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
}
