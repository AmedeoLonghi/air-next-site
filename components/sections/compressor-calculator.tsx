"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TipoRegolazione = "on-off" | "carico-vuoto" | "vsd";
type RiskLevel = "verde" | "giallo" | "arancio" | "rosso";

interface RiskInfo {
  level: RiskLevel;
  label: string;
  text: string;
}

const TIPI: { value: TipoRegolazione; label: string; desc: string }[] = [
  {
    value: "on-off",
    label: "ON/OFF",
    desc: "Il compressore si avvia e si ferma in base alla pressione",
  },
  {
    value: "carico-vuoto",
    label: "Carico/vuoto",
    desc: "Il motore resta acceso, la valvola di aspirazione apre e chiude",
  },
  {
    value: "vsd",
    label: "VSD",
    desc: "Velocità variabile tramite inverter",
  },
];

const TURNI = [
  { label: "1 turno (8 ore/giorno)", ore: 2000 },
  { label: "2 turni (16 ore/giorno)", ore: 4000 },
  { label: "3 turni (24 ore/giorno, lun-sab)", ore: 6000 },
  { label: "Continuo (24h, 7 giorni)", ore: 8760 },
];

const RISK_STYLE: Record<RiskLevel, string> = {
  verde: "bg-green-50 text-green-700 border-green-200",
  giallo: "bg-yellow-50 text-yellow-700 border-yellow-200",
  arancio: "bg-orange-50 text-orange-700 border-orange-200",
  rosso: "bg-red-50 text-red-700 border-red-200",
};

function fmt(n: number): string {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function getRisk(
  tipo: TipoRegolazione,
  avviamenti: number,
  percentualeVuoto: number,
  caricoMedio: number
): RiskInfo {
  if (tipo === "vsd") {
    if (caricoMedio > 60) {
      return {
        level: "verde",
        label: "Profilo energetico equilibrato",
        text: `Con un carico medio del ${caricoMedio}%, il VSD opera nel range di efficienza ottimale. La variazione di velocità assorbe le fluttuazioni di domanda senza perdite significative ai carichi parziali.`,
      };
    }
    if (caricoMedio >= 40) {
      return {
        level: "giallo",
        label: "Margine di ottimizzazione moderato",
        text: `Con un carico medio del ${caricoMedio}%, il VSD lavora in condizione di parzializzazione moderata. Un'analisi del profilo di carico reale verificherebbe se la taglia installata è corretta per questo utilizzo.`,
      };
    }
    return {
      level: "arancio",
      label: "Margine di ottimizzazione significativo",
      text: `Con un carico medio del ${caricoMedio}%, la macchina opera significativamente al di sotto della capacità nominale. Il dimensionamento potrebbe non essere ottimale per questo profilo operativo.`,
    };
  }

  if (tipo === "carico-vuoto") {
    if (percentualeVuoto < 30) {
      return {
        level: "giallo",
        label: "Margine di ottimizzazione moderato",
        text: `Con il ${percentualeVuoto}% del tempo a vuoto, il costo del ciclo improduttivo è contenuto ma misurabile. Un monitoraggio strumentale quantificherebbe il risparmio ottenibile con una regolazione a velocità variabile.`,
      };
    }
    return {
      level: "arancio",
      label: "Margine di ottimizzazione significativo",
      text: `Con il ${percentualeVuoto}% del tempo in modalità a vuoto, il compressore assorbe circa il 27% della potenza nominale senza produrre aria utile. Questo costo fisso è eliminabile con una regolazione a velocità variabile.`,
    };
  }

  // ON/OFF
  if (avviamenti > 8) {
    return {
      level: "rosso",
      label: "Profilo ad alto rischio energetico e meccanico",
      text: `Con ${avviamenti} avviamenti per ora, il motore è sottoposto a picchi di corrente ripetuti che accelerano il degrado dell'isolamento e l'usura meccanica. L'intervento più urgente riguarda la logica di regolazione, non solo l'efficienza energetica.`,
    };
  }
  return {
    level: "arancio",
    label: "Margine di ottimizzazione significativo",
    text: `Con ${avviamenti} avviamenti per ora, i picchi di corrente contribuiscono al profilo di consumo. La frequenza degli avviamenti incide sulla vita operativa del motore e dei componenti meccanici, indipendentemente dall'efficienza energetica.`,
  };
}

interface Props {
  ctaContext?: "produzione" | "audit";
}

export function CompressorCalculator({ ctaContext = "audit" }: Props) {
  const [tipo, setTipo] = useState<TipoRegolazione>("carico-vuoto");
  const [potenza, setPotenza] = useState(45);
  const [pressione, setPressione] = useState(8);
  const [ore, setOre] = useState(4000);
  const [costoKwh, setCostoKwh] = useState(0.26);
  const [avviamenti, setAvviamenti] = useState(6);
  const [percentualeVuoto, setPercentualeVuoto] = useState(30);
  const [caricoMedio, setCaricoMedio] = useState(65);

  const costoBase = potenza * ore * costoKwh;

  let costoStimato: number;
  let risparmioMin: number;
  let risparmioMax: number;

  if (tipo === "on-off") {
    const fattore = 1 + (avviamenti / 10) * 0.08;
    costoStimato = costoBase * fattore;
    risparmioMin = costoStimato * 0.15;
    risparmioMax = costoStimato * 0.35;
  } else if (tipo === "carico-vuoto") {
    const consumoVuoto = potenza * 0.27 * (percentualeVuoto / 100) * ore * costoKwh;
    costoStimato = costoBase;
    risparmioMin = consumoVuoto * 0.6;
    risparmioMax = consumoVuoto * 0.8;
  } else {
    const consumoReale = potenza * Math.pow(caricoMedio / 100, 0.8) * ore * costoKwh;
    costoStimato = consumoReale;
    risparmioMin = costoStimato * 0.05;
    risparmioMax = costoStimato * 0.2;
  }

  const risk = getRisk(tipo, avviamenti, percentualeVuoto, caricoMedio);

  return (
    <div className="rounded-xl border border-border bg-muted/40 p-6 sm:p-8">

      {/* Step 1 */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
          Step 1: Dati del compressore
        </p>

        <div className="mb-6">
          <p className="text-sm font-medium mb-3">Tipo di regolazione</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {TIPI.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => setTipo(t.value)}
                className={cn(
                  "rounded-lg border p-3 text-left transition-colors",
                  tipo === t.value
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background hover:bg-muted/60"
                )}
              >
                <p className={cn("text-sm font-semibold", tipo === t.value && "text-primary")}>
                  {t.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{t.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

          {/* Potenza */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium">Potenza di targa</label>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min={5}
                  max={500}
                  step={1}
                  value={potenza}
                  onChange={(e) => {
                    const v = parseInt(e.target.value);
                    if (!isNaN(v)) setPotenza(Math.min(500, Math.max(5, v)));
                  }}
                  className="w-16 text-right text-sm font-semibold border border-border rounded px-2 py-0.5 bg-background"
                />
                <span className="text-xs text-muted-foreground w-6">kW</span>
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground">5-500 kW</p>
          </div>

          {/* Turni */}
          <div>
            <label className="text-sm font-medium block mb-1">Turni di lavoro</label>
            <select
              value={ore}
              onChange={(e) => setOre(parseInt(e.target.value))}
              className="w-full text-sm border border-border rounded-md px-3 py-1.5 bg-background"
            >
              {TURNI.map((t) => (
                <option key={t.ore} value={t.ore}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          {/* Pressione */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">Pressione di esercizio</label>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min={6}
                  max={13}
                  step={0.5}
                  value={pressione}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    if (!isNaN(v)) setPressione(Math.min(13, Math.max(6, v)));
                  }}
                  className="w-14 text-right text-sm font-semibold border border-border rounded px-2 py-0.5 bg-background"
                />
                <span className="text-xs text-muted-foreground w-7">bar</span>
              </div>
            </div>
            <input
              type="range"
              min={6}
              max={13}
              step={0.5}
              value={pressione}
              onChange={(e) => setPressione(parseFloat(e.target.value))}
              className="w-full h-1.5 cursor-pointer"
              style={{ accentColor: "#007AFF" }}
            />
            <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
              <span>6 bar</span>
              <span>13 bar</span>
            </div>
          </div>

          {/* Costo energia */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">Costo energia elettrica</label>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min={0.1}
                  max={0.5}
                  step={0.01}
                  value={costoKwh}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    if (!isNaN(v)) setCostoKwh(Math.min(0.5, Math.max(0.1, v)));
                  }}
                  className="w-16 text-right text-sm font-semibold border border-border rounded px-2 py-0.5 bg-background"
                />
                <span className="text-xs text-muted-foreground w-10">€/kWh</span>
              </div>
            </div>
            <input
              type="range"
              min={0.1}
              max={0.5}
              step={0.01}
              value={costoKwh}
              onChange={(e) => setCostoKwh(parseFloat(e.target.value))}
              className="w-full h-1.5 cursor-pointer"
              style={{ accentColor: "#007AFF" }}
            />
            <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
              <span>0,10 €</span>
              <span>0,50 €</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border my-8" />

      {/* Step 2 */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
          Step 2: Parametri di regolazione
        </p>

        {tipo === "on-off" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Avviamenti stimati per ora</label>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min={2}
                  max={20}
                  step={1}
                  value={avviamenti}
                  onChange={(e) => {
                    const v = parseInt(e.target.value);
                    if (!isNaN(v)) setAvviamenti(Math.min(20, Math.max(2, v)));
                  }}
                  className="w-14 text-right text-sm font-semibold border border-border rounded px-2 py-0.5 bg-background"
                />
                <span className="text-xs text-muted-foreground w-12">avv/ora</span>
              </div>
            </div>
            <input
              type="range"
              min={2}
              max={20}
              step={1}
              value={avviamenti}
              onChange={(e) => setAvviamenti(parseInt(e.target.value))}
              className="w-full h-1.5 cursor-pointer"
              style={{ accentColor: "#007AFF" }}
            />
            <div className="flex justify-between text-[11px] text-muted-foreground">
              <span>2/ora</span>
              <span>20/ora</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed border-l-2 border-border pl-3">
              Ogni avviamento genera un picco di corrente 4-6 volte la corrente nominale e un
              breve periodo di funzionamento a vuoto prima dell&apos;arresto. Oltre 6-8
              avviamenti/ora il contributo energetico di questi cicli diventa significativo.
            </p>
          </div>
        )}

        {tipo === "carico-vuoto" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">
                Percentuale di tempo stimata a vuoto
              </label>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min={10}
                  max={70}
                  step={5}
                  value={percentualeVuoto}
                  onChange={(e) => {
                    const v = parseInt(e.target.value);
                    if (!isNaN(v)) setPercentualeVuoto(Math.min(70, Math.max(10, v)));
                  }}
                  className="w-14 text-right text-sm font-semibold border border-border rounded px-2 py-0.5 bg-background"
                />
                <span className="text-xs text-muted-foreground w-4">%</span>
              </div>
            </div>
            <input
              type="range"
              min={10}
              max={70}
              step={5}
              value={percentualeVuoto}
              onChange={(e) => setPercentualeVuoto(parseInt(e.target.value))}
              className="w-full h-1.5 cursor-pointer"
              style={{ accentColor: "#007AFF" }}
            />
            <div className="flex justify-between text-[11px] text-muted-foreground">
              <span>10%</span>
              <span>70%</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed border-l-2 border-border pl-3">
              A vuoto, un compressore a vite assorbe tipicamente tra il 20% e il 35% della
              potenza nominale. Se l&apos;impianto trascorre molto tempo a vuoto, questo costo è
              reale ma invisibile nella bolletta.
            </p>
          </div>
        )}

        {tipo === "vsd" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Carico medio stimato</label>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min={20}
                  max={100}
                  step={5}
                  value={caricoMedio}
                  onChange={(e) => {
                    const v = parseInt(e.target.value);
                    if (!isNaN(v)) setCaricoMedio(Math.min(100, Math.max(20, v)));
                  }}
                  className="w-14 text-right text-sm font-semibold border border-border rounded px-2 py-0.5 bg-background"
                />
                <span className="text-xs text-muted-foreground w-4">%</span>
              </div>
            </div>
            <input
              type="range"
              min={20}
              max={100}
              step={5}
              value={caricoMedio}
              onChange={(e) => setCaricoMedio(parseInt(e.target.value))}
              className="w-full h-1.5 cursor-pointer"
              style={{ accentColor: "#007AFF" }}
            />
            <div className="flex justify-between text-[11px] text-muted-foreground">
              <span>20%</span>
              <span>100%</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed border-l-2 border-border pl-3">
              Il carico medio è la percentuale della portata nominale effettivamente erogata
              in media durante le ore di funzionamento. Un VSD ben dimensionato lavora
              tipicamente tra il 50% e l&apos;80% del carico nominale.
            </p>
          </div>
        )}
      </div>

      <div className="border-t border-border my-8" />

      {/* Output */}
      <div className="rounded-xl border border-border bg-background p-6 sm:p-8 space-y-8">

        {/* Sezione A: costo stimato */}
        <div>
          <div className="rounded-lg border border-border bg-muted/30 p-5 mb-4">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
              Costo annuale stimato
            </p>
            <p
              className="font-medium leading-none"
              style={{ fontSize: "28px", color: "#007AFF" }}
            >
              € {fmt(costoStimato)}
              <span className="text-base font-normal text-muted-foreground ml-1.5">/anno</span>
            </p>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Basato su potenza di targa e parametri dichiarati. Margine di incertezza: ±25-35%
            senza profilo di carico reale.
          </p>
        </div>

        {/* Sezione B: potenziale di ottimizzazione */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Potenziale di ottimizzazione
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mb-5">
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                Risparmio minimo stimato
              </p>
              <p className="text-2xl font-medium leading-none">
                € {fmt(risparmioMin)}
                <span className="text-sm font-normal text-muted-foreground ml-1">/anno</span>
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                Risparmio massimo stimato
              </p>
              <p className="text-2xl font-medium leading-none">
                € {fmt(risparmioMax)}
                <span className="text-sm font-normal text-muted-foreground ml-1">/anno</span>
              </p>
            </div>
          </div>
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border",
              RISK_STYLE[risk.level]
            )}
          >
            {risk.label}
          </span>
          <p className="text-xs text-muted-foreground leading-relaxed mt-3">{risk.text}</p>
        </div>

        {/* Sezione C: perché questa stima non basta */}
        <div className="border-t border-border pt-6">
          <p className="text-sm font-semibold mb-3">Perché questa stima non basta</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Questi valori descrivono il comportamento atteso sulla carta, basato sui dati di
            targa. Il profilo di carico reale, quanto il compressore eroga effettivamente
            minuto per minuto durante le ore di funzionamento, può differire del 30-40%
            rispetto a questa stima. Un monitoraggio strumentale di 7 giorni restituisce quei
            dati con una precisione misurabile, trasformando questa stima in un calcolo
            verificabile.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            {ctaContext === "produzione" ? (
              <>
                <Link
                  href="/ottimizza/audit-energetico"
                  className={cn(buttonVariants({ size: "sm" }), "gap-1")}
                >
                  Come funziona il monitoraggio strumentale
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1")}
                >
                  Richiedi una valutazione
                  <ArrowRight size={14} />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/contatti"
                  className={cn(buttonVariants({ size: "sm" }), "gap-1")}
                >
                  Richiedi un audit energetico
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/case-study"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1")}
                >
                  Vedi i risultati di audit reali
                  <ArrowRight size={14} />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
