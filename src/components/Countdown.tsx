"use client";

// AI Generated Code by Deloitte + Cursor (BEGIN)
import { useEffect, useMemo, useState } from "react";

type Props = {
  targetIso: string;
  labels: { days: string; hours: string; minutes: string; seconds: string };
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function Unit({ value, label, muted }: { value: string; label: string; muted?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span
        className="font-display font-bold leading-none"
        style={
          muted
            ? { fontSize: "clamp(2rem, 8vw, 3.25rem)", color: "rgba(74,28,44,0.15)" }
            : {
                fontSize: "clamp(2rem, 8vw, 3.25rem)",
                background: "linear-gradient(135deg, #7a5200, #c9960a, #a87200)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 1px 8px rgba(184,134,11,0.20))",
              }
        }
      >
        {value}
      </span>
      <span className="text-[7.5px] font-bold uppercase tracking-[0.42em] text-ink/35 sm:text-[8.5px]">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span
      className="mb-4 self-end font-display font-light leading-none"
      style={{ fontSize: "clamp(1.25rem, 4vw, 2rem)", color: "rgba(184,134,11,0.28)" }}
      aria-hidden
    >
      :
    </span>
  );
}

export function Countdown({ targetIso, labels }: Props) {
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(0);

  useEffect(() => {
    setMounted(true);
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const labelList = [labels.days, labels.hours, labels.minutes, labels.seconds];

  if (!mounted) {
    return (
      <div className="flex items-end justify-center gap-3 sm:gap-5" aria-hidden>
        {labelList.map((label, i) => (
          <div key={label} className="flex items-end gap-3 sm:gap-5">
            <Unit value="--" label={label} muted />
            {i < labelList.length - 1 && <Colon />}
          </div>
        ))}
      </div>
    );
  }

  if (!Number.isFinite(target) || Number.isNaN(target)) {
    return (
      <p className="text-center text-sm text-ink/60" role="status">
        Countdown unavailable —{" "}
        <code className="rounded bg-white/80 px-1">mainEvent.countdownIso</code>
      </p>
    );
  }

  const diff = Math.max(0, target - now);
  const cells = [
    { value: pad(Math.floor(diff / (1000 * 60 * 60 * 24))), label: labels.days },
    { value: pad(Math.floor((diff / (1000 * 60 * 60)) % 24)), label: labels.hours },
    { value: pad(Math.floor((diff / (1000 * 60)) % 60)), label: labels.minutes },
    { value: pad(Math.floor((diff / 1000) % 60)), label: labels.seconds },
  ];

  return (
    <div className="flex items-end justify-center gap-3 sm:gap-5">
      {cells.map((cell, i) => (
        <div key={cell.label} className="flex items-end gap-3 sm:gap-5">
          <Unit value={cell.value} label={cell.label} />
          {i < cells.length - 1 && <Colon />}
        </div>
      ))}
    </div>
  );
}
// AI Generated Code by Deloitte + Cursor (END)
