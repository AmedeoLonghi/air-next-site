"use client";

import { useState } from "react";

const DIAMETERS = [1, 2, 3, 5, 8, 10] as const;
type Diameter = (typeof DIAMETERS)[number];

const COEFFICIENTS: Record<Diameter, number> = {
  1: 1.2,
  2: 5.0,
  3: 11.1,
  5: 30.9,
  8: 79.0,
  10: 123.8,
};

function nearestDiameter(val: number): Diameter {
  return DIAMETERS.reduce((prev, curr) =>
    Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
  ) as Diameter;
}

function fmt(n: number, decimals = 0): string {
  if (decimals === 0) {
    return Math.round(n)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const [int, dec] = n.toFixed(decimals).split(".");
  return `${int.replace(/\B(?=(\d{3})+(?!\d))/g, ".")},${dec}`;
}

export function LeakCalculator() {
  const [diameterIdx, setDiameterIdx] = useState(2); // 3 mm default
  const [pressure, setPressure] = useState(8);
  const [hours, setHours] = useState(4000);
  const [costKwh, setCostKwh] = useState(0.26);

  const diameter = DIAMETERS[diameterIdx];
  const flowRate = COEFFICIENTS[diameter] * Math.sqrt(pressure / 7);
  const energy = flowRate * 0.0075 * hours;
  const annualCost = energy * costKwh;

  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

        {/* Colonna sinistra: input */}
        <div className="space-y-7">

          {/* Diametro */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <label className="text-sm font-medium leading-tight">
                Diametro stimato della perdita
              </label>
              <div className="flex items-center gap-1.5 shrink-0">
                <input
                  type="number"
                  value={diameter}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    if (!isNaN(val)) {
                      const nearest = nearestDiameter(val);
                      const idx = DIAMETERS.findIndex((d) => d === nearest);
                      if (idx !== -1) setDiameterIdx(idx);
                    }
                  }}
                  className="w-14 text-right text-sm font-semibold border border-border rounded px-2 py-0.5 bg-background"
                />
                <span className="text-xs text-muted-foreground w-7">mm</span>
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={5}
              step={1}
              value={diameterIdx}
              onChange={(e) => setDiameterIdx(parseInt(e.target.value))}
              className="w-full cursor-pointer h-1.5"
              style={{ accentColor: "#007AFF" }}
            />
            <div className="flex justify-between text-[11px] text-muted-foreground px-0.5">
              {DIAMETERS.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>

          {/* Pressione */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <label className="text-sm font-medium leading-tight">
                Pressione di esercizio
              </label>
              <div className="flex items-center gap-1.5 shrink-0">
                <input
                  type="number"
                  value={pressure}
                  min={6}
                  max={13}
                  step={0.5}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    if (!isNaN(v)) setPressure(Math.min(13, Math.max(6, v)));
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
              value={pressure}
              onChange={(e) => setPressure(parseFloat(e.target.value))}
              className="w-full cursor-pointer h-1.5"
              style={{ accentColor: "#007AFF" }}
            />
            <div className="flex justify-between text-[11px] text-muted-foreground px-0.5">
              <span>6 bar</span>
              <span>13 bar</span>
            </div>
          </div>

          {/* Ore annue */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <label className="text-sm font-medium leading-tight">
                Ore di funzionamento annue
              </label>
              <div className="flex items-center gap-1.5 shrink-0">
                <input
                  type="number"
                  value={hours}
                  min={1000}
                  max={8760}
                  step={100}
                  onChange={(e) => {
                    const v = parseInt(e.target.value);
                    if (!isNaN(v)) setHours(Math.min(8760, Math.max(1000, v)));
                  }}
                  className="w-16 text-right text-sm font-semibold border border-border rounded px-2 py-0.5 bg-background"
                />
                <span className="text-xs text-muted-foreground w-7">h</span>
              </div>
            </div>
            <input
              type="range"
              min={1000}
              max={8760}
              step={100}
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="w-full cursor-pointer h-1.5"
              style={{ accentColor: "#007AFF" }}
            />
            <div className="flex justify-between text-[11px] text-muted-foreground px-0.5">
              <span>1.000 h</span>
              <span>8.760 h</span>
            </div>
          </div>

          {/* Costo energia */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <label className="text-sm font-medium leading-tight">
                Costo energia elettrica
              </label>
              <div className="flex items-center gap-1.5 shrink-0">
                <input
                  type="number"
                  value={costKwh}
                  min={0.10}
                  max={0.40}
                  step={0.01}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    if (!isNaN(v)) setCostKwh(Math.min(0.40, Math.max(0.10, v)));
                  }}
                  className="w-16 text-right text-sm font-semibold border border-border rounded px-2 py-0.5 bg-background"
                />
                <span className="text-xs text-muted-foreground w-10">€/kWh</span>
              </div>
            </div>
            <input
              type="range"
              min={0.10}
              max={0.40}
              step={0.01}
              value={costKwh}
              onChange={(e) => setCostKwh(parseFloat(e.target.value))}
              className="w-full cursor-pointer h-1.5"
              style={{ accentColor: "#007AFF" }}
            />
            <div className="flex justify-between text-[11px] text-muted-foreground px-0.5">
              <span>0,10 €</span>
              <span>0,40 €</span>
            </div>
          </div>
        </div>

        {/* Colonna destra: metriche */}
        <div className="flex flex-col justify-center gap-4">
          <div className="rounded-lg border border-border bg-background p-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
              Portata dispersa
            </p>
            <p className="text-4xl font-medium leading-none">
              {fmt(flowRate, 1)}
              <span className="text-base font-normal text-muted-foreground ml-1.5">
                l/min
              </span>
            </p>
          </div>
          <div className="rounded-lg border border-border bg-background p-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
              Energia sprecata
            </p>
            <p className="text-4xl font-medium leading-none">
              {fmt(energy)}
              <span className="text-base font-normal text-muted-foreground ml-1.5">
                kWh/anno
              </span>
            </p>
          </div>
          <div className="rounded-lg border border-border bg-background p-5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
              Costo annuale
            </p>
            <p
              className="text-4xl font-medium leading-none"
              style={{ color: "#007AFF" }}
            >
              € {fmt(annualCost)}
              <span className="text-base font-normal text-muted-foreground ml-1.5">
                /anno
              </span>
            </p>
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs text-muted-foreground border-t border-border pt-5">
        Stima basata su consumo specifico medio di 0,0075 kW per l/min rilevato su impianti
        reali a pressione di esercizio 7,5-8,5 bar. I valori effettivi variano in base alle
        caratteristiche specifiche dell&apos;impianto e al tipo di compressore installato.
      </p>
    </div>
  );
}
