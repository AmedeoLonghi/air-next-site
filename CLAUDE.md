# CLAUDE.md — Air-next

## Identità aziendale
**Air-next** — azienda tecnica specializzata in aria compressa, gas tecnici e refrigerazione industriale.
Titolare: Amedeo Longhi
Sede: Casale Monferrato (AL)
Mercato: Nord Italia, Toscana, Emilia Romagna
Email: info@air-next.it | Tel: +39 0142 578069
P.IVA: 01765720055

## Posizionamento
Air-next non è un rivenditore di marchio. È un partner tecnico indipendente che seleziona tecnologie in base ai parametri operativi reali, non ai cataloghi. L'approccio è analitico: si parte da misure oggettive (pressioni, portate, profilo orario, dispersioni) e si costruisce una soluzione giustificata da dati tecnici.

## Struttura del sito — MULTIPAGINA
Il sito è multipagina con App Router Next.js. NON è una single page application.

### Menu principale
- Home
- Aria Compressa (dropdown)
- Refrigerazione Industriale
- Gas Tecnici
- Ottimizza il tuo impianto (dropdown) — entry point strategici

### Pagine e route

**Home** — `/`
Comunica autorevolezza tecnica. Sezioni: hero con headline problema/soluzione, tre macro-aree di business, sezione "Ottimizza il tuo impianto" con CTA verso audit e ricerca perdite, case study in evidenza, form contatto.

**Aria Compressa** — `/aria-compressa`
Pagina hub con link alle sottopagine. Introduce la competenza core.

Sottopagine aria compressa:
- `/aria-compressa/produzione` — compressori, fornitura, manutenzione, ricambi
- `/aria-compressa/trattamento` — filtrazione, essiccazione, qualità aria
- `/aria-compressa/distribuzione` — reti, perdite di pressione, ottimizzazione
- `/aria-compressa/analisi-qualita` — analisi qualità aria compressa (servizio a pagamento)

**Refrigerazione Industriale** — `/refrigerazione-industriale`
Sistemi di raffreddamento, chiller, noleggio sistemi di raffreddamento.

**Gas Tecnici** — `/gas-tecnici`
Generatori di azoto e ossigeno, purezza controllata, costi operativi.

**Ottimizza il tuo impianto** — `/ottimizza`
Pagina hub che introduce i quattro servizi di ingresso. Tono: "se il tuo impianto consuma più del necessario, partiamo da qui."

Sottopagine Trojan horse:
- `/ottimizza/audit-energetico` — PRIORITÀ SEO MASSIMA. Audit compressori, risparmio energetico, ROI misurabile.
- `/ottimizza/ricerca-perdite` — PRIORITÀ SEO ALTA. Ricerca perdite aria compressa, quantificazione sprechi.
- `/ottimizza/conformita-normativa` — Conformità attrezzature in pressione, adempimenti, tutela operativa.
- `/ottimizza/analisi-qualita-aria` — Analisi qualità aria compressa ISO 8573.

**Case Study** — `/case-study`
Prove sociali con dati reali. Ogni case study ha la sua sottopagina. Nessuna metrica inventata.

**Contatti** — `/contatti`
Form con integrazione CRM. Campi: nome, azienda, email, telefono, servizio di interesse, descrizione problema.

## Design system

**Font:** Plus Jakarta Sans — usato su tutto il sito, titoli e body.
Importare da Google Fonts con i pesi: 400, 500, 600, 700.

**Palette:**
- Blu principale: #007AFF
- Blu scuro: #0025FF  
- Navy: #1A1D36
- Nero: #000000
- Bianco: #FFFFFF
- Bianco freddo: #F9FBFF

**Registro visivo:** istituzionale, senza decorazioni superflue. Ispirazione Wärtsilä e Linear.app. Zero immagini AI generiche, zero stock photo sorridenti.

## Tono e copywriting
- Benefit prima delle feature: si parte sempre dal problema del cliente, non dalla descrizione del servizio
- Dati reali: nessuna metrica inventata. Se non c'è un dato verificato, non si scrive
- Zero cliché commerciali: vietato "leader del settore", "qualità garantita", "soluzioni innovative"
- Linguaggio tecnico preciso ma comprensibile anche a chi non è specialista
- CTA sempre orientate all'azione concreta: "Prenota un audit", "Richiedi un sopralluogo", non "Contattaci"

## SEO
Ogni pagina ha title, meta description, og:title, og:description specifici.
Le pagine Trojan horse hanno priorità SEO massima — audit energetico e ricerca perdite intercettano traffico a intenzione commerciale alta.
Sitemap.xml generata automatic ogni build.
Slug URL in italiano, puliti, senza stop words inutili.

## Competitor
Rebecchi, TDA, Tecnacompress, Air Bonaita, CRC, Airtec.
Air-next si differenzia per indipendenza di marchio e approccio analitico.

## Flussi di traffico
- Traffico organico Google: intercettato dalle pagine servizio e Trojan horse tramite keyword specifiche
- Traffico LinkedIn Ads: landing page dedicate per ruolo (responsabile acquisti, responsabile tecnico, imprenditore)
- Traffico diretto: homepage come pagina di posizionamento generale

## Stack tecnico
- Next.js 16 con App Router
- Tailwind CSS v4
- Shadcn/ui (base-nova, buttonVariants + cn() per link stilizzati)
- Plus Jakarta Sans da Google Fonts
- Sitemap.xml autogenerata

## Regole critiche per Claude Code
1. Button non supporta asChild — usare buttonVariants + cn() direttamente sul componente Link
2. Tailwind v4 non usa tailwind.config.js — configurazione via CSS in globals.css
3. Distinguere Server Components e Client Components — usare "use client" solo dove necessario
4. Ogni nuova funzionalità: creare prima documento di progetto in /docs, attendere conferma, poi implementare
5. Aggiornare CLAUDE.md quando cambiano struttura o decisioni di progetto
6. Nessuna metrica o statistica inventata nei contenuti
7. CRM integration nel form contatti — da definire il provider
