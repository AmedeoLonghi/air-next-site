import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Conformità Normativa Attrezzature in Pressione | Air-next",
  description:
    "Verifica di conformità per compressori, serbatoi e attrezzature in pressione: DM 329/2004, D.Lgs. 81/2008, Direttiva PED 2014/68/UE. Denuncia INAIL, verifiche periodiche, documentazione.",
  openGraph: {
    title: "Conformità Normativa Attrezzature in Pressione | Air-next",
    description:
      "Verifica di conformità per compressori, serbatoi e attrezzature in pressione: DM 329/2004, D.Lgs. 81/2008, Direttiva PED 2014/68/UE. Denuncia INAIL, verifiche periodiche, documentazione.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Conformità Normativa Attrezzature in Pressione",
  description:
    "Verifica documentale e operativa della conformità di compressori, serbatoi e attrezzature in pressione alle normative vigenti: DM 329/2004, D.Lgs. 81/2008, Direttiva PED 2014/68/UE.",
  provider: {
    "@type": "LocalBusiness",
    name: "Air-next",
    email: "info@air-next.it",
    telephone: "+390142578069",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casale Monferrato",
      addressRegion: "AL",
      addressCountry: "IT",
    },
  },
  areaServed: ["Piemonte", "Lombardia", "Liguria", "Emilia-Romagna", "Toscana"],
  serviceType: "Conformità Normativa",
};

const normative = [
  {
    sigla: "DM 329/2004",
    titolo: "Messa in servizio e verifiche periodiche",
    testo:
      "Disciplina la denuncia di messa in servizio all'INAIL, la prima verifica e le verifiche periodiche per compressori, serbatoi, recipienti in pressione e insiemi. Frequenze e procedure variano in funzione del tipo di attrezzatura e del fluido contenuto.",
  },
  {
    sigla: "D.Lgs. 81/2008",
    titolo: "Obblighi del datore di lavoro",
    testo:
      "L'articolo 71 impone di verificare la conformità delle attrezzature alle disposizioni di legge, di sottoporle alle verifiche periodiche obbligatorie e di tenere la documentazione disponibile per gli organi di vigilanza.",
  },
  {
    sigla: "D.Lgs. 26/2016",
    titolo: "Direttiva PED: marcatura CE",
    testo:
      "Recepisce la Direttiva 2014/68/UE. Definisce le categorie di rischio da I a IV, i moduli di valutazione della conformità e gli obblighi di dichiarazione CE e marcatura per le attrezzature che superano le soglie previste.",
  },
];

const steps = [
  {
    n: "01",
    titolo: "Censimento attrezzature",
    testo:
      "Identifichiamo compressori, serbatoi, recipienti, essiccatori e insiemi presenti nell'impianto. Verifichiamo quali rientrano nel campo di applicazione del DM 329/2004 in funzione di pressione, volume e tipo di fluido.",
  },
  {
    n: "02",
    titolo: "Verifica documentale",
    testo:
      "Controlliamo dichiarazioni CE di conformità, libretti di impianto, registro delle verifiche e scadenze. Identifichiamo le attrezzature non denunciate, quelle con documentazione incompleta e quelle con verifiche periodiche scadute.",
  },
  {
    n: "03",
    titolo: "Piano di adeguamento",
    testo:
      "Elaboriamo un piano con le non conformità rilevate, le azioni necessarie e le priorità in funzione del rischio. Distinguiamo gli interventi urgenti (attrezzature non denunciate o con verifiche scadute) da quelli programmabili.",
  },
  {
    n: "04",
    titolo: "Supporto operativo",
    testo:
      "Assistiamo nella denuncia a INAIL per le attrezzature non ancora registrate, coordiniamo con gli organismi abilitati per le verifiche periodiche e aggiorniamo il libretto di impianto. Forniamo uno scadenzario per il mantenimento nel tempo.",
  },
];

export default function ConformitaNormativa() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="bg-background py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">
                Conformità normativa
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] leading-tight">
                Le tue attrezzature in pressione sono in regola?
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl">
                Compressori, serbatoi e recipienti in pressione sono soggetti a
                obblighi precisi: denuncia di messa in servizio, prima verifica INAIL
                e verifiche periodiche con frequenza definita per legge. La mancanza
                di documentazione o verifiche scadute espone il datore di lavoro a
                responsabilità dirette.
              </p>
              <div className="mt-10">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Richiedi una verifica documentale
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Il quadro normativo ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-14">
              Il quadro normativo
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {normative.map((n) => (
                <div
                  key={n.sigla}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4"
                >
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                      {n.sigla}
                    </p>
                    <h3 className="font-semibold text-base">{n.titolo}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {n.testo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cosa accade nella pratica ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Quello che troviamo più spesso
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Attrezzature installate e messe in funzione senza la denuncia a
                  INAIL: è la situazione più comune, spesso non per negligenza ma
                  perché chi ha acquistato e installato il compressore non era a
                  conoscenza dell&apos;obbligo. Il costruttore consegna la macchina con la
                  dichiarazione CE, mentre la denuncia di messa in servizio è a carico
                  del datore di lavoro.
                </p>
                <p>
                  Verifiche periodiche scadute: una volta avviato il percorso di
                  conformità, la verifica periodica è un appuntamento ricorrente con
                  scadenza definita dalla normativa. In assenza di uno scadenzario
                  gestito, è facile perdere la data e ritrovarsi fuori termine.
                </p>
                <p>
                  Documentazione incompleta o dispersa: dichiarazioni CE non
                  rintracciabili, libretti di impianto mai aggiornati dopo modifiche alla
                  centrale, verbali di verifica archiviati senza un sistema consultabile.
                  In caso di ispezione o incidente, la responsabilità del datore di
                  lavoro si valuta anche sulla disponibilità di questa documentazione.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── La metodologia ── */}
        <section className="py-20 sm:py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-14">
              La metodologia
            </h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
              {steps.map((step) => (
                <div key={step.n}>
                  <div className="text-5xl font-bold text-primary/15 mb-4 tabular-nums">
                    {step.n}
                  </div>
                  <h3 className="font-semibold text-base mb-3">{step.titolo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.testo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── A chi serve ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8">
                Una responsabilità che ricade sul datore di lavoro
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Il D.Lgs. 81/2008 identifica nel datore di lavoro il soggetto
                  responsabile della conformità delle attrezzature di lavoro. Non è
                  una responsabilità delegabile al fornitore o all&apos;installatore: è
                  un obbligo che rimane in capo a chi detiene l&apos;attrezzatura e la mette
                  a disposizione dei lavoratori.
                </p>
                <p>
                  L&apos;RSPP e il responsabile tecnico di stabilimento hanno in genere il
                  mandato di garantire questa conformità, ma spesso non dispongono di
                  un quadro aggiornato della situazione: quali attrezzature sono
                  soggette agli obblighi, qual è lo stato documentale di ciascuna,
                  quando scadono le verifiche successive.
                </p>
                <p>
                  Il nostro intervento parte da una fotografia completa dell&apos;impianto
                  e si conclude con un piano d&apos;azione che il responsabile interno può
                  seguire e aggiornare nel tempo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA finale ── */}
        <section className="py-20 sm:py-28 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Verificare lo stato documentale richiede mezza giornata
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Un sopralluogo di censimento e una revisione della documentazione
                esistente sono sufficienti per avere un quadro completo: quali
                attrezzature sono in regola, quali no, cosa va fatto e in quale ordine.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  Richiedi una verifica documentale
                  <ArrowRight size={16} />
                </Link>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Interveniamo in Piemonte, Lombardia, Liguria, Emilia Romagna e Toscana.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
