"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Modalita = "on-off" | "vsd";
type ModeDetail = "semplice" | "avanzato";
type RiskLevel = "verde" | "giallo" | "arancio" | "rosso";

interface RiskInfo {
  level: RiskLevel;
  label: string;
  text: string;
}

const TURNI = [
  { label: "1 turno", sub: "2.000 h/anno", ore: 2000 },
  { label: "2 turni", sub: "4.000 h/anno", ore: 4000 },
  { label: "3 turni", sub: "6.000 h/anno", ore: 6000 },
  { label: "Continuo", sub: "8.760 h/anno", ore: 8760 },
];

const AVV_SEMPLICE = [
  { label: "1-3 avviamenti/ora", value: 3 },
  { label: "3-6 avviamenti/ora", value: 6 },
  { label: "6-9 avviamenti/ora", value: 9 },
  { label: "10 o più avviamenti/ora", value: 12 },
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

function getRisk(modalita: Modalita, avviamenti: number, caricoMedio: number): RiskInfo {
  if (modalita === "on-off") {
    if (avviamenti <= 3) {
      return {
        level: "verde",
        label: "Profilo nella norma per questa tecnologia",
        text: "Con questo numero di avviamenti, il ciclo di funzionamento è nella norma per la tecnologia ON/OFF. Il confronto con un VSD dipende dal profilo di portata reale.",
      };
    }
    if (avviamenti <= 6) {
      return {
        level: "giallo",
        label: "Margine di ottimizzazione presente",
        text: "Avviamenti frequenti generano cicli di carico/scarico ripetuti. Un profilo di consumo strumentale permetterebbe di quantificare l'impatto reale.",
      };
    }
    if (avviamenti <= 9) {
      return {
        level: "arancio",
        label: "Consumo da valutare con attenzione",
        text: "Con questa frequenza di avviamento, il compressore accumula stress meccanico ed elettrico oltre al consumo energetico aggiuntivo. Vale la pena misurare.",
      };
    }
    return {
      level: "rosso",
      label: "Configurazione ad alto consumo e usura meccanica",
      text: "Oltre 10 avviamenti all'ora il consumo energetico da cicli improduttivi diventa significativo e l'usura meccanica accelera. Un'analisi strumentale è raccomandata.",
    };
  }

  // VSD
  if (caricoMedio >= 65) {
    return {
      level: "verde",
      label: "Profilo energetico efficiente",
      text: "Il compressore lavora in un range di carico efficiente. Il margine di ottimizzazione è contenuto: i guadagni si trovano principalmente nella regolazione della pressione di rete.",
    };
  }
  if (caricoMedio >= 40) {
    return {
      level: "giallo",
      label: "Margine di ottimizzazione presente",
      text: "Il carico medio indica un compressore che lavora spesso sotto il suo punto di efficienza ottimale. Le cause possono essere diverse: sovradimensionamento, perdite in rete, o profilo di consumo variabile.",
    };
  }
  return {
    level: "arancio",
    label: "Il compressore lavora prevalentemente a basso carico",
    text: "Un carico medio così basso suggerisce un compressore sovradimensionato rispetto alla domanda reale, o perdite significative nella rete che tengono attivo il compressore anche in assenza di consumo produttivo.",
  };
}

function ModeToggle({
  value,
  onChange,
}: {
  value: ModeDetail;
  onChange: (v: ModeDetail) => void;
}) {
  return (
    <div className="flex items-center gap-0.5 rounded-md border border-border p-0.5 bg-background">
      {(["semplice", "avanzato"] as ModeDetail[]).map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => onChange(m)}
          className={cn(
            "px-2.5 py-1 text-xs font-medium rounded capitalize transition-colors",
            value === m ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {m.charAt(0).toUpperCase() + m.slice(1)}
        </button>
      ))}
    </div>
  );
}

interface Props {
  ctaContext?: "produzione" | "audit";
}

export function CompressorCalculator({ ctaContext = "audit" }: Props) {
  const [potenza, setPotenza] = useState(45);
  const [pressione, setPressione] = useState(8);
  const [ore, setOre] = useState(4000);
  const [costoKwh, setCostoKwh] = useState(0.26);
  const [modalita, setModalita] = useState<Modalita>("on-off");

  const [modeOnOff, setModeOnOff] = useState<ModeDetail>("semplice");
  const [avvSemplicIdx, setAvvSemplicIdx] = useState(1);
  const [avvAvanzato, setAvvAvanzato] = useState(6);

  const [modeVsd, setModeVsd] = useState<ModeDetail>("semplice");
  const [caricoMedio, setCaricoMedio] = useState(65);
  const [dist, setDist] = useState({
    p0_20: 5,
    p20_40: 15,
    p40_60: 30,
    p60_80: 35,
    p80_100: 15,
  });

  const effectiveAvviamenti =
    modeOnOff === "semplice" ? AVV_SEMPLICE[avvSemplicIdx].value : avvAvanzato;

  const distSum = dist.p0_20 + dist.p20_40 + dist.p40_60 + dist.p60_80 + dist.p80_100;
  const caricoMedioDistrib =
    (dist.p0_20 * 10 +
      dist.p20_40 * 30 +
      dist.p40_60 * 50 +
      dist.p60_80 * 70 +
      dist.p80_100 * 90) /
    100;
  const effectiveCaricoMedio = modeVsd === "semplice" ? caricoMedio : caricoMedioDistrib;

  const showOutput =
    modalita === "on-off" ||
    modeVsd === "semplice" ||
    (modeVsd === "avanzato" && distSum === 100);

  const costoBase = potenza * ore * costoKwh;

  let costoAttuale = 0;
  let risparmioMin = 0;
  let risparmioMax = 0;

  if (showOutput) {
    if (modalita === "on-off") {
      const fattore = 1 + (effectiveAvviamenti / 10) * 0.08;
      costoAttuale = costoBase * fattore;
      risparmioMin = costoAttuale * 0.18;
      risparmioMax = costoAttuale * 0.38;
    } else {
      const efficienzaVsd = Math.pow(effectiveCaricoMedio / 100, 0.75);
      costoAttuale = costoBase * efficienzaVsd;
      if (effectiveCaricoMedio < 40) {
        risparmioMin = costoAttuale * 0.08;
        risparmioMax = costoAttuale * 0.18;
      } else if (effectiveCaricoMedio < 65) {
        risparmioMin = costoAttuale * 0.04;
        risparmioMax = costoAttuale * 0.12;
      } else {
        risparmioMin = costoAttuale * 0.02;
        risparmioMax = costoAttuale * 0.08;
      }
    }
  }

  const costoOttimizzatoMax = costoAttuale - risparmioMin;
  const costoOttimizzatoMin = costoAttuale - risparmioMax;
  const risk = showOutput ? getRisk(modalita, effectiveAvviamenti, effectiveCaricoMedio) : null;

  return (
    <div className="rounded-xl border border-border bg-muted/40 p-6 sm:p-8">

      {/* Sezione 1: Dati base */}
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
        Step 1: Dati del compressore
      </p>

      <div className="space-y-6">

        {/* Potenza + Pressione */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
        </div>

        {/* Turni */}
        <div>
          <label className="text-sm font-medium block mb-3">Turni di lavoro</label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {TURNI.map((t) => (
              <button
                key={t.ore}
                type="button"
                onClick={() => setOre(t.ore)}
                className={cn(
                  "rounded-lg border p-3 text-left transition-colors",
                  ore === t.ore
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background hover:bg-muted/60"
                )}
              >
                <p className={cn("text-sm font-semibold", ore === t.ore && "text-primary")}>
                  {t.label}
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{t.sub}</p>
              </button>
            ))}
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
          <p className="text-[11px] text-muted-foreground mt-2">
            Usa il costo medio del tuo contratto.
          </p>
        </div>

        {/* Modalità */}
        <div>
          <label className="text-sm font-medium block mb-3">Modalità di funzionamento</label>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setModalita("on-off")}
              className={cn(
                "rounded-xl border p-4 text-left transition-colors",
                modalita === "on-off"
                  ? "border-primary bg-primary/5"
                  : "border-border bg-background hover:bg-muted/60"
              )}
            >
              <p className={cn("text-sm font-semibold", modalita === "on-off" && "text-primary")}>
                Si avvia e si ferma
              </p>
              <p className="text-xs text-muted-foreground mt-1 leading-snug">
                Regolazione ON/OFF: il compressore si avvia e si arresta in base alla pressione
              </p>
            </button>
            <button
              type="button"
              onClick={() => setModalita("vsd")}
              className={cn(
                "rounded-xl border p-4 text-left transition-colors",
                modalita === "vsd"
                  ? "border-primary bg-primary/5"
                  : "border-border bg-background hover:bg-muted/60"
              )}
            >
              <p className={cn("text-sm font-semibold", modalita === "vsd" && "text-primary")}>
                Resta sempre in funzione
              </p>
              <p className="text-xs text-muted-foreground mt-1 leading-snug">
                Regolazione VSD: velocità variabile tramite inverter, portata adattata in continuo
              </p>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-border my-8" />

      {/* Sezione 2: Parametri specifici */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Step 2: Parametri specifici
          </p>
          {modalita === "on-off" ? (
            <ModeToggle value={modeOnOff} onChange={setModeOnOff} />
          ) : (
            <ModeToggle value={modeVsd} onChange={setModeVsd} />
          )}
        </div>

        {/* ON/OFF semplice */}
        {modalita === "on-off" && modeOnOff === "semplice" && (
          <div className="space-y-4">
            <p className="text-sm font-medium">Frequenza di avviamento stimata</p>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {AVV_SEMPLICE.map((opt, idx) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setAvvSemplicIdx(idx)}
                  className={cn(
                    "rounded-lg border px-3 py-3 text-left transition-colors",
                    avvSemplicIdx === idx
                      ? "border-primary bg-primary/5"
                      : "border-border bg-background hover:bg-muted/60"
                  )}
                >
                  <p
                    className={cn(
                      "text-xs font-semibold leading-snug",
                      avvSemplicIdx === idx && "text-primary"
                    )}
                  >
                    {opt.label}
                  </p>
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed border-l-2 border-border pl-3">
              Se non sei sicuro, conta quante volte si avvia in un&apos;ora durante la produzione
              normale.
            </p>
          </div>
        )}

        {/* ON/OFF avanzato */}
        {modalita === "on-off" && modeOnOff === "avanzato" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Avviamenti per ora</label>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min={1}
                  max={20}
                  step={1}
                  value={avvAvanzato}
                  onChange={(e) => {
                    const v = parseInt(e.target.value);
                    if (!isNaN(v)) setAvvAvanzato(Math.min(20, Math.max(1, v)));
                  }}
                  className="w-14 text-right text-sm font-semibold border border-border rounded px-2 py-0.5 bg-background"
                />
                <span className="text-xs text-muted-foreground w-12">avv/ora</span>
              </div>
            </div>
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={avvAvanzato}
              onChange={(e) => setAvvAvanzato(parseInt(e.target.value))}
              className="w-full h-1.5 cursor-pointer"
              style={{ accentColor: "#007AFF" }}
            />
            <div className="flex justify-between text-[11px] text-muted-foreground">
              <span>1/ora</span>
              <span>20/ora</span>
            </div>
          </div>
        )}

        {/* VSD semplice */}
        {modalita === "vsd" && modeVsd === "semplice" && (
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
              Se non lo sai, lascia il valore di default. Il calcolo resta indicativo.
            </p>
          </div>
        )}

        {/* VSD avanzato */}
        {modalita === "vsd" && modeVsd === "avanzato" && (
          <div className="space-y-5">
            <p className="text-sm font-medium">
              Distribuzione del tempo per fascia di carico (somma = 100%)
            </p>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
              {(
                [
                  { key: "p0_20" as const, label: "0-20%" },
                  { key: "p20_40" as const, label: "20-40%" },
                  { key: "p40_60" as const, label: "40-60%" },
                  { key: "p60_80" as const, label: "60-80%" },
                  { key: "p80_100" as const, label: "80-100%" },
                ]
              ).map(({ key, label }) => (
                <div key={key} className="flex flex-col gap-1.5">
                  <label className="text-[11px] text-muted-foreground text-center">
                    {label}
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    step={1}
                    value={dist[key]}
                    onChange={(e) => {
                      const v = parseInt(e.target.value);
                      if (!isNaN(v))
                        setDist((prev) => ({ ...prev, [key]: Math.min(100, Math.max(0, v)) }));
                    }}
                    className="w-full text-center text-sm font-semibold border border-border rounded px-2 py-1.5 bg-background"
                  />
                  <p className="text-[10px] text-muted-foreground text-center">%</p>
                </div>
              ))}
            </div>

            <div
              className={cn(
                "flex items-center gap-2 text-xs font-medium",
                distSum === 100
                  ? "text-green-700"
                  : distSum < 100
                  ? "text-orange-600"
                  : "text-red-600"
              )}
            >
              {distSum === 100 ? (
                <>
                  <Check size={13} />
                  Totale 100%: ok
                </>
              ) : distSum < 100 ? (
                `Mancano ${100 - distSum} punti percentuali`
              ) : (
                `Superato di ${distSum - 100} punti percentuali`
              )}
            </div>

            {distSum === 100 && (
              <p className="text-xs text-muted-foreground">
                Carico medio equivalente:{" "}
                <span className="font-semibold text-foreground">
                  {Math.round(caricoMedioDistrib)}%
                </span>
              </p>
            )}
          </div>
        )}
      </div>

      <div className="border-t border-border my-8" />

      {/* Sezione 3: Output */}
      {showOutput ? (
        <div className="rounded-xl border border-border bg-background p-6 sm:p-8 space-y-8">

          {/* Blocco A */}
          <div>
            <div className="rounded-lg border border-border bg-muted/30 p-5 mb-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                Costo annuale stimato
              </p>
              <p
                className="font-medium leading-none"
                style={{ fontSize: "28px", color: "#007AFF" }}
              >
                € {fmt(costoAttuale)}
                <span className="text-base font-normal text-muted-foreground ml-1.5">
                  /anno
                </span>
              </p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Basato su potenza di targa e parametri dichiarati. Incertezza stimata: ±25-35%
              senza profilo di carico strumentale.
            </p>
          </div>

          {/* Blocco B */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Potenziale di ottimizzazione
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mb-4">
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 leading-tight">
                  Scenario ottimizzato (stima minima)
                </p>
                <p className="text-2xl font-medium leading-none">
                  € {fmt(costoOttimizzatoMax)}
                  <span className="text-sm font-normal text-muted-foreground ml-1">/anno</span>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 leading-tight">
                  Scenario ottimizzato (stima massima)
                </p>
                <p className="text-2xl font-medium leading-none">
                  € {fmt(costoOttimizzatoMin)}
                  <span className="text-sm font-normal text-muted-foreground ml-1">/anno</span>
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-5">
              Potenziale di risparmio: tra{" "}
              <span className="font-semibold text-foreground">€ {fmt(risparmioMin)}</span> e{" "}
              <span className="font-semibold text-foreground">€ {fmt(risparmioMax)}</span>{" "}
              all&apos;anno
            </p>
            {risk && (
              <>
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border",
                    RISK_STYLE[risk.level]
                  )}
                >
                  {risk.label}
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed mt-3">{risk.text}</p>
              </>
            )}
          </div>

          {/* Blocco C */}
          <div className="border-t border-border pt-6">
            <p className="text-sm font-semibold mb-3">Perché questa stima non basta</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Questi valori descrivono il comportamento atteso sulla carta, basato sui dati di
              targa. Il profilo di carico reale, quanto il compressore eroga effettivamente
              minuto per minuto durante le ore di funzionamento, può differire del 30-40%
              rispetto a questa stima. Un monitoraggio strumentale di 7 giorni restituisce
              quei dati con una precisione misurabile, trasformando questa stima in un calcolo
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
      ) : (
        <div className="rounded-xl border border-border bg-background p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Completa la distribuzione del carico per visualizzare il calcolo. Somma
            attuale:{" "}
            <span className="font-semibold text-foreground">{distSum}%</span>
          </p>
        </div>
      )}
    </div>
  );
}
