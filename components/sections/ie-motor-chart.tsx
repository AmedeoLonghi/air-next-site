"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { carico: 0,   IE3: 42, IE4: 53, IE5: 62 },
  { carico: 10,  IE3: 55, IE4: 65, IE5: 74 },
  { carico: 20,  IE3: 67, IE4: 76, IE5: 83 },
  { carico: 30,  IE3: 76, IE4: 83, IE5: 88 },
  { carico: 40,  IE3: 82, IE4: 88, IE5: 92 },
  { carico: 50,  IE3: 86, IE4: 91, IE5: 94 },
  { carico: 60,  IE3: 88, IE4: 92, IE5: 95 },
  { carico: 70,  IE3: 90, IE4: 93, IE5: 95.5 },
  { carico: 80,  IE3: 91, IE4: 94, IE5: 96 },
  { carico: 90,  IE3: 91.5, IE4: 94.5, IE5: 96.2 },
  { carico: 100, IE3: 92, IE4: 95, IE5: 96.5 },
];

export function IeMotorChart() {
  return (
    <div className="rounded-xl border border-border bg-background p-6">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
        Rendimento motore (%) vs. carico del compressore (%)
      </p>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 4, right: 16, left: 0, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="carico"
            tickFormatter={(v) => `${v}%`}
            tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
            label={{
              value: "Carico del compressore (%)",
              position: "insideBottom",
              offset: -2,
              fontSize: 11,
              fill: "hsl(var(--muted-foreground))",
            }}
            height={40}
          />
          <YAxis
            domain={[40, 100]}
            tickFormatter={(v) => `${v}%`}
            tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
            width={42}
          />
          <Tooltip
            formatter={(value, name) => [typeof value === "number" ? `${value.toFixed(1)}%` : value, name]}
            labelFormatter={(label) => `Carico: ${label}%`}
            contentStyle={{
              fontSize: 12,
              borderRadius: 8,
              border: "1px solid hsl(var(--border))",
              background: "hsl(var(--background))",
            }}
          />
          <Legend
            wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
          />
          <Line
            type="monotone"
            dataKey="IE3"
            stroke="#b0bec5"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="IE4"
            stroke="#5b9bd5"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="IE5"
            stroke="#007AFF"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="mt-4 text-xs text-muted-foreground italic leading-relaxed">
        Andamento qualitativo. Lo standard IEC 60034-30-1, che definisce le classi di efficienza
        dei motori elettrici, fissa per la classe IE5 l&apos;obiettivo di ridurre le perdite del 20%
        rispetto a IE4. Le curve illustrano il principio: il vantaggio dei motori IE5 cresce ai
        carichi parziali, condizione operativa prevalente in un impianto aria compressa reale.
      </p>
    </div>
  );
}
