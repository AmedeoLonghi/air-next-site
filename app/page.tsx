import { Navbar } from "@/components/layout/navbar";
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
