import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Air-next | Aria compressa, gas tecnici e refrigerazione industriale",
  description:
    "Soluzioni tecniche per impianti aria compressa, refrigerazione industriale e gas tecnici. Approccio indipendente dai marchi, basato su misura strumentale e dati reali.",
  openGraph: {
    title: "Air-next | Aria compressa, gas tecnici e refrigerazione industriale",
    description:
      "Soluzioni tecniche per impianti aria compressa, refrigerazione industriale e gas tecnici. Approccio indipendente dai marchi, basato su misura strumentale e dati reali.",
  },
};
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { MacroAree } from "@/components/sections/macro-aree";
import { Ottimizza } from "@/components/sections/ottimizza";
import { CaseStudyPreview } from "@/components/sections/case-study-preview";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MacroAree />
        <Ottimizza />
        <CaseStudyPreview />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
