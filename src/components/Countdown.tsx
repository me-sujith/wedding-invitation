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

  const invalid = !Number.isFinite(target) || Number.isNaN(target);

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4" aria-hidden>
        {[labels.days, labels.hours, labels.minutes, labels.seconds].map((label) => (
          <div
            key={label}
            className="rounded-2xl border border-gold/30 bg-white/70 px-4 py-7 text-center shadow-md shadow-wine/5 backdrop-blur"
          >
            <div className="font-display text-4xl font-bold text-wine/20 sm:text-5xl">--</div>
            <div className="mt-3 h-px w-8 mx-auto bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden />
            <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.28em] text-wine/40">{label}</div>
          </div>
        ))}
      </div>
    );
  }

  if (invalid) {
    return (
      <p className="text-center text-sm text-ink/60" role="status">
        Countdown unavailable — check <code className="rounded bg-white/80 px-1">mainEvent.countdownIso</code> in
        content.
      </p>
    );
  }

  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const cells = [
    { value: pad(days), label: labels.days },
    { value: pad(hours), label: labels.hours },
    { value: pad(minutes), label: labels.minutes },
    { value: pad(seconds), label: labels.seconds },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {cells.map((cell) => (
        <div
          key={cell.label}
          className="rounded-2xl border border-gold/30 bg-white/70 px-4 py-7 text-center shadow-md shadow-wine/5 backdrop-blur"
        >
          <div className="gold-gradient-text font-display text-4xl font-bold sm:text-5xl">{cell.value}</div>
          <div className="mt-3 h-px w-8 mx-auto bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden />
          <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.28em] text-wine/60">{cell.label}</div>
        </div>
      ))}
    </div>
  );
}
// AI Generated Code by Deloitte + Cursor (END)
