// AI Generated Code by Deloitte + Cursor (BEGIN)
import React from "react";
import { Countdown } from "@/components/Countdown";
import { CouplePhotoCarousel } from "@/components/CouplePhotoCarousel";
import { weddingContent as c } from "@/content/weddingContent";

function ParentsLines({ text }: { text: string }) {
  return (
    <p className="mt-3 whitespace-pre-line text-center text-base leading-relaxed text-ink/70">{text}</p>
  );
}

export default function Home() {
  const coupleTitle = `${c.couple.bride} ${c.couple.conjunction} ${c.couple.groom}`;

  return (
    <main className="mesh-modern pattern-soft min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-24 text-center">
        <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold/20 blur-3xl sm:h-96 sm:w-96" aria-hidden />
        <div className="pointer-events-none absolute -right-16 bottom-1/3 h-80 w-80 rounded-full bg-wine/15 blur-3xl sm:h-[28rem] sm:w-[28rem]" aria-hidden />

        <div className="relative z-[1] flex max-w-sm flex-col items-center sm:max-w-xl">

          {/* OM medallion */}
          <div className="relative flex items-center justify-center">
            {/* Outer ring */}
            <svg viewBox="0 0 130 130" fill="none" className="absolute h-[130px] w-[130px]" aria-hidden>
              <circle cx="65" cy="65" r="60" stroke="url(#omr1)" strokeWidth="1" strokeDasharray="4 6" opacity="0.45"/>
              <circle cx="65" cy="65" r="52" stroke="url(#omr1)" strokeWidth="0.6" opacity="0.25"/>
              <defs>
                <linearGradient id="omr1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7a5200"/><stop offset="100%" stopColor="#c9960a"/>
                </linearGradient>
              </defs>
            </svg>
            <p className="gold-gradient-text font-display text-[5.5rem] leading-none sm:text-[6.5rem]"
               style={{ filter: 'drop-shadow(0 2px 18px rgba(184,134,11,0.5))' }}>
              {c.mantra.symbol}
            </p>
          </div>

          <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.55em] text-gold/60">{c.mantra.line}</p>

          {/* Ornamental separator */}
          <div className="mt-8 flex w-48 items-center gap-3">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/35" />
            <svg viewBox="0 0 32 12" fill="none" className="h-3 w-8 shrink-0" aria-hidden>
              <path d="M16 6 C13 2 8 1 6 3.5 C4 6 6 10 9 9 C12 8 13 6 16 6 C19 6 20 8 23 9 C26 10 28 6 26 3.5 C24 1 19 2 16 6Z" fill="url(#sep1)" opacity="0.6"/>
              <defs><linearGradient id="sep1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7a5200"/><stop offset="50%" stopColor="#c9960a"/><stop offset="100%" stopColor="#a87200"/></linearGradient></defs>
            </svg>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/35" />
          </div>

          {/* Together line */}
          <p className="mt-7 text-[9px] font-medium uppercase tracking-[0.42em] text-wine/35">{c.familiesLine}</p>

          {/* Names — stacked for impact */}
          <h1 className="mt-3 font-display font-bold tracking-tight text-wine leading-[1.1]">
            <span className="gold-gradient-text block" style={{ fontSize: 'clamp(2rem, 8.5vw, 3.75rem)', filter: 'drop-shadow(0 1px 8px rgba(184,134,11,0.2))' }}>
              {c.couple.bride}
            </span>
            <span className="block font-display text-xl font-light text-wine/35 my-1 tracking-widest sm:text-2xl">&</span>
            <span className="gold-gradient-text block" style={{ fontSize: 'clamp(2rem, 8.5vw, 3.75rem)', filter: 'drop-shadow(0 1px 8px rgba(184,134,11,0.2))' }}>
              {c.couple.groom}
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xs font-display text-sm italic leading-relaxed text-ink/45 sm:text-base">{c.inviteLine}</p>

          {/* Date + venue card */}
          <div className="relative mx-auto mt-9 w-full max-w-[280px] overflow-hidden rounded-[1.75rem] border border-gold/25 bg-white/60 shadow-xl shadow-wine/[0.07] backdrop-blur-md">
            <div className="h-[2.5px] w-full bg-gradient-to-r from-transparent via-gold-light to-transparent" />
            <div className="pointer-events-none absolute inset-0 m-3 rounded-[1.3rem] border border-gold/[0.10]" aria-hidden />
            <div className="flex flex-col items-center px-7 py-7 text-center">
              <p className="text-[8px] font-bold uppercase tracking-[0.6em] text-gold/45">Wedding Day</p>
              <p className="mt-2 gold-gradient-text font-display text-[2.4rem] font-bold leading-none"
                 style={{ filter: 'drop-shadow(0 1px 8px rgba(184,134,11,0.22))' }}>
                {c.mainEvent.dateShort}
              </p>
              <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.38em] text-ink/38">{c.mainEvent.weekdayTimeLine}</p>
              <div className="mt-4 flex w-full items-center gap-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/25" />
                <span className="text-[10px] text-gold/40">✦</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/25" />
              </div>
              <p className="mt-4 font-display text-lg font-semibold text-wine">{c.mainEvent.venueName}</p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.42em] text-ink/38">{c.mainEvent.venueArea}</p>
            </div>
            <div className="h-[2.5px] w-full bg-gradient-to-r from-transparent via-gold-light to-transparent" />
          </div>

        </div>

        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-ink/30">
          <span className="text-[9px] font-semibold uppercase tracking-[0.4em]">{c.footer.scrollHint}</span>
          <span className="block h-10 w-px rounded-full bg-gradient-to-b from-gold/50 to-transparent" aria-hidden />
        </div>
      </section>
      {/* Tagline — hidden */}

      <CouplePhotoCarousel
        heading={c.coupleGallery.heading}
        subheading={c.coupleGallery.subheading}
        images={c.coupleGallery.images}
        autoplayIntervalMs={c.coupleGallery.autoplayIntervalMs}
      />

      {/* Countdown */}
      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-xl">
          <div className="glass-card overflow-hidden">
            <div className="h-[4px] w-full bg-gradient-to-r from-gold/30 via-gold-light via-50% to-gold/30" />
            <div className="px-8 pb-10 pt-8 text-center sm:px-12">
              <p className="text-[9px] font-bold uppercase tracking-[0.55em] text-gold/60">Save the date</p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-wine sm:text-3xl">{c.countdown.heading}</h2>
              <div className="mx-auto mt-3 flex w-40 items-center gap-3">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/30" />
                <span className="text-[10px] text-gold/40">✦</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/30" />
              </div>
              <p className="mx-auto mt-2 font-display text-sm italic text-ink/40">{c.countdown.subheading}</p>
              <div className="mt-8">
                <Countdown targetIso={c.mainEvent.countdownIso} labels={c.countdown.labels} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold">Our families</p>
          <h2 className="mt-2 text-center font-display text-3xl font-semibold tracking-tight text-wine sm:text-4xl">{c.about.heading}</h2>
          <div className="mx-auto mt-4 flex items-center gap-4 max-w-xs">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-wine/15" aria-hidden />
            <span className="text-gold/50 text-xs">✦</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-wine/15" aria-hidden />
          </div>

          {/* Single unified card — two halves */}
          <div className="glass-card mx-auto mt-14 max-w-3xl overflow-hidden">
            <div className="h-[4px] w-full bg-gradient-to-r from-gold/30 via-gold-light via-50% to-gold/30" />
            <div className="flex flex-col sm:flex-row">

              {/* Bride */}
              <div className="relative flex flex-1 flex-col items-center px-10 py-12 text-center">
                <div className="pointer-events-none absolute inset-0"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(184,134,11,0.08) 0%, transparent 60%)" }}
                  aria-hidden />
                {/* Ornament */}
                <svg viewBox="0 0 56 32" fill="none" className="h-7 w-14 opacity-60" aria-hidden>
                  <path d="M28 30 C22 22 10 20 10 12 C10 6 16 4 20 8 C22 4 25 2 28 4 C31 2 34 4 36 8 C40 4 46 6 46 12 C46 20 34 22 28 30Z"
                    stroke="url(#ob1)" strokeWidth="1.4" fill="rgba(184,134,11,0.06)" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="ob1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#7a5200"/><stop offset="100%" stopColor="#c9960a"/>
                    </linearGradient>
                  </defs>
                </svg>
                <h3 className="mt-5 font-display text-3xl font-semibold gold-gradient-text">{c.about.people[0].name}</h3>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.4em] text-wine/40">{c.about.people[0].relationLabel}</p>
                <div className="mt-5 h-px w-10 bg-gradient-to-r from-transparent via-gold/35 to-transparent" aria-hidden />
                <p className="mt-5 text-sm leading-[1.85] text-ink/60 whitespace-pre-line">{c.about.people[0].parents}</p>
              </div>

              {/* Centre divider */}
              <div className="flex items-center sm:flex-col sm:justify-center">
                {/* Mobile: horizontal */}
                <div className="mx-8 flex flex-1 items-center gap-3 sm:hidden">
                  <span className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/25" />
                  <span className="font-display text-xl text-gold/40">✦</span>
                  <span className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/25" />
                </div>
                {/* Desktop: vertical */}
                <div className="hidden sm:flex flex-col items-center gap-3 py-12">
                  <div className="w-px flex-1 bg-gradient-to-b from-transparent to-gold/25" />
                  <span className="font-display text-lg text-gold/40">✦</span>
                  <div className="w-px flex-1 bg-gradient-to-t from-transparent to-gold/25" />
                </div>
              </div>

              {/* Groom */}
              <div className="relative flex flex-1 flex-col items-center px-10 py-12 text-center">
                <div className="pointer-events-none absolute inset-0"
                  style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(184,134,11,0.08) 0%, transparent 60%)" }}
                  aria-hidden />
                {/* Ornament */}
                <svg viewBox="0 0 56 32" fill="none" className="h-7 w-14 opacity-60" aria-hidden>
                  <circle cx="21" cy="20" r="9" stroke="url(#ob2)" strokeWidth="1.5"/>
                  <circle cx="35" cy="20" r="9" stroke="url(#ob3)" strokeWidth="1.5"/>
                  <path d="M17 10 Q21 5 25 10" stroke="url(#ob2)" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                  <path d="M31 10 Q35 5 39 10" stroke="url(#ob3)" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                  <defs>
                    <linearGradient id="ob2" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#7a5200"/><stop offset="100%" stopColor="#c9960a"/>
                    </linearGradient>
                    <linearGradient id="ob3" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#c9960a"/><stop offset="100%" stopColor="#a87200"/>
                    </linearGradient>
                  </defs>
                </svg>
                <h3 className="mt-5 font-display text-3xl font-semibold gold-gradient-text">{c.about.people[1].name}</h3>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.4em] text-wine/40">{c.about.people[1].relationLabel}</p>
                <div className="mt-5 h-px w-10 bg-gradient-to-r from-transparent via-gold/35 to-transparent" aria-hidden />
                <p className="mt-5 text-sm leading-[1.85] text-ink/60 whitespace-pre-line">{c.about.people[1].parents}</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Ceremonies */}
      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold">Schedule</p>
          <h2 className="mt-2 text-center font-display text-3xl font-semibold tracking-tight text-wine sm:text-4xl">
            {c.ceremonies.heading}
          </h2>
          <div className="mx-auto mt-4 flex items-center gap-4 max-w-xs">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-wine/15" aria-hidden />
            <span className="text-gold/50 text-xs">✦</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-wine/15" aria-hidden />
          </div>

          <div className="mx-auto mt-14 flex flex-col gap-8 max-w-4xl">
            {c.ceremonies.items.map((ev) => {
              const isWedding = ev.id === "vivah";
              return (
              <article key={ev.id} className="glass-card overflow-hidden">
                {/* Gold accent strip — stronger */}
                <div className="h-[4px] w-full bg-gradient-to-r from-gold/30 via-gold-light via-50% to-gold/30" />

                <div className="flex flex-col sm:flex-row">
                  {/* Left identity panel */}
                  <div className="relative flex shrink-0 flex-col items-center justify-center gap-3 border-b border-wine/[0.07] px-8 py-10 text-center sm:w-56 sm:border-b-0 sm:border-r sm:py-12">
                    <div className="pointer-events-none absolute inset-0"
                      style={{ background: "radial-gradient(ellipse at 50% 35%, rgba(184,134,11,0.13) 0%, transparent 70%)" }}
                      aria-hidden />

                    {/* Icon badge — larger with double ring */}
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/20 bg-gradient-to-br from-gold/10 to-gold/[0.02] shadow-md shadow-gold/10">
                      <div className="absolute inset-[5px] rounded-full border border-gold/10" aria-hidden />
                      {isWedding ? (
                        <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden>
                          <circle cx="17" cy="28" r="10" stroke="url(#gr1)" strokeWidth="3"/>
                          <circle cx="31" cy="28" r="10" stroke="url(#gr2)" strokeWidth="3"/>
                          <path d="M13 16 Q17 10 21 16" stroke="url(#gr1)" strokeWidth="2.6" strokeLinecap="round" fill="none"/>
                          <path d="M27 16 Q31 10 35 16" stroke="url(#gr2)" strokeWidth="2.6" strokeLinecap="round" fill="none"/>
                          <defs>
                            <linearGradient id="gr1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7a5200"/><stop offset="100%" stopColor="#c9960a"/></linearGradient>
                            <linearGradient id="gr2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c9960a"/><stop offset="100%" stopColor="#a87200"/></linearGradient>
                          </defs>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden>
                          <path d="M24 8 L26.5 16H35L28.5 21L31 29L24 24L17 29L19.5 21L13 16H21.5Z" stroke="url(#gr3)" strokeWidth="2" strokeLinejoin="round" fill="rgba(184,134,11,0.10)"/>
                          <circle cx="10" cy="12" r="2" fill="#c9960a" opacity="0.7"/>
                          <circle cx="38" cy="14" r="1.5" fill="#c9960a" opacity="0.6"/>
                          <circle cx="36" cy="36" r="2" fill="#c9960a" opacity="0.5"/>
                          <circle cx="12" cy="34" r="1.5" fill="#c9960a" opacity="0.5"/>
                          <defs>
                            <linearGradient id="gr3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7a5200"/><stop offset="100%" stopColor="#c9960a"/></linearGradient>
                          </defs>
                        </svg>
                      )}
                    </div>

                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden />
                    <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-gold/60">{ev.title}</p>
                    <h3 className="font-display text-xl font-semibold leading-snug text-wine">{ev.subtitle ?? ev.title}</h3>
                    {/* Date pill in left panel */}
                    <div className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/[0.07] px-3 py-1">
                      <svg className="h-3 w-3 text-gold/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                      <span className="text-[10px] font-semibold text-gold/80">{ev.dateLine.replace(/Sunday, /i, "").replace(/th,|st,|nd,|rd,/, ",")}</span>
                    </div>
                  </div>

                  {/* Middle: details */}
                  <div className="flex flex-1 flex-col justify-center divide-y divide-wine/[0.06] px-8 sm:px-10">
                    {/* Date row */}
                    <div className="flex items-center gap-4 py-5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/[0.07]">
                        <svg className="h-4 w-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-gold/55">Date</p>
                        <p className="mt-0.5 text-sm font-semibold text-ink/80">{ev.dateLine}</p>
                      </div>
                    </div>
                    {/* Time row */}
                    <div className="flex items-center gap-4 py-5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/[0.07]">
                        <svg className="h-4 w-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-gold/55">Time</p>
                        <p className="mt-0.5 text-sm font-semibold text-ink/80">{ev.timeLine}</p>
                      </div>
                    </div>
                    {/* Venue row */}
                    <div className="flex items-center gap-4 py-5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-wine/15 bg-wine/[0.05]">
                        <svg className="h-4 w-4 text-wine/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-wine/40">Venue</p>
                        <p className="mt-0.5 text-sm font-semibold text-ink/80">{ev.venueLine}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: QR */}
                  {ev.mapsQueryOrUrl ? (
                    <div className="flex flex-col items-center justify-center gap-3 border-t border-wine/[0.07] bg-gradient-to-b from-gold/[0.05] to-transparent px-8 py-8 sm:w-48 sm:border-l sm:border-t-0 sm:px-6">
                      <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-ink/35">Scan / Tap</p>
                      <a
                        href={ev.mapsQueryOrUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-3"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${encodeURIComponent(ev.mapsQueryOrUrl)}&color=7a5200&bgcolor=faf7f2`}
                          alt={`Directions to ${ev.venueLine}`}
                          width={130}
                          height={130}
                          className="rounded-2xl border-2 border-gold/25 shadow-md shadow-gold/10 transition group-hover:border-gold/55 group-hover:shadow-glow"
                        />
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-wine/20 bg-wine/[0.06] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-wine/65 transition group-hover:border-wine/40 group-hover:text-wine">
                          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                          Directions
                        </span>
                      </a>
                    </div>
                  ) : null}
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-y border-gold/15 bg-gradient-to-b from-cream/80 to-white/40 px-6 py-20 text-center sm:px-8">
        <div className="flex flex-col items-center">
          <p className="gold-gradient-text font-display text-5xl" style={{filter:'drop-shadow(0 1px 8px rgba(184,134,11,0.3))'}}>{c.quote.symbol}</p>
          <div className="mt-3 flex items-center gap-4 max-w-xs mx-auto">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/30" aria-hidden />
            <span className="text-gold/40 text-xs">✦</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/30" aria-hidden />
          </div>
        </div>
        <blockquote className="mx-auto mt-8 max-w-2xl font-display text-xl font-medium italic leading-relaxed text-wine/85 sm:text-2xl">
          {c.quote.text}
        </blockquote>
        <div className="mt-8 flex items-center gap-4 max-w-xs mx-auto">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/25" aria-hidden />
          <span className="text-gold/40 text-xs">✦</span>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/25" aria-hidden />
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-ink/40">{c.quote.closingLine}</p>
      </section>

      {/* Join */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">{c.join.sectionLabel}</p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-wine sm:text-4xl">{c.join.heading}</h2>
        <div className="mx-auto mt-3 flex items-center gap-4 max-w-xs">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-wine/15" aria-hidden />
          <span className="text-gold/50 text-xs">✦</span>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-wine/15" aria-hidden />
        </div>
        <p className="mx-auto mt-3 max-w-lg font-display italic text-ink/55">{c.join.subheading}</p>
        <div className="mx-auto mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
          {/* RSVP Form */}
          <a
            href={c.join.rsvp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group flex flex-col items-center justify-center px-6 py-8 transition hover:border-gold/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-wine/10 bg-wine/[0.04] transition group-hover:bg-wine/[0.08]">
              <svg className="h-5 w-5 text-wine" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
                <rect x="9" y="3" width="6" height="4" rx="1"/>
                <path d="M9 12h6M9 16h4"/>
              </svg>
            </span>
            <span className="mt-4 font-display text-base font-semibold gold-gradient-text">{c.join.rsvp.label}</span>
            <span className="mt-1 text-xs font-medium tracking-wide text-ink/50">{c.join.rsvp.sublabel}</span>
          </a>
          {/* WhatsApp RSVP */}
          <a
            href={`https://wa.me/${c.join.whatsapp.phoneE164}?text=${encodeURIComponent(c.join.whatsapp.prefillText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group flex flex-col items-center justify-center px-6 py-8 transition hover:border-gold/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-wine/10 bg-wine/[0.04] transition group-hover:bg-wine/[0.08]">
              <svg className="h-5 w-5 text-wine" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M21 11.5A8.38 8.38 0 0 1 12.5 20a8.5 8.5 0 0 1-4.36-1.19L3 20l1.19-5.14A8.5 8.5 0 1 1 21 11.5z"/>
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0c0 2.21 1.79 4 4 4m4-4a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm0 0c0-2.21-1.79-4-4-4"/>
              </svg>
            </span>
            <span className="mt-4 font-display text-base font-semibold gold-gradient-text">{c.join.whatsapp.label}</span>
            <span className="mt-1 text-xs font-medium tracking-wide text-ink/50">{c.join.whatsapp.sublabel}</span>
          </a>
        </div>
        <p className="mx-auto mt-8 max-w-sm text-xs font-medium italic text-ink/45">{c.join.note}</p>
      </section>

      <footer className="border-t border-wine/10 bg-wine/[0.03] py-12 text-center">
        <p className="font-display text-2xl font-semibold tracking-tight">
          <span className="gold-gradient-text">{c.couple.bride}</span>
          <span className="mx-2 text-gold-muted">{c.couple.conjunction}</span>
          <span className="gold-gradient-text">{c.couple.groom}</span>
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-wine/50">Forever begins here</p>
      </footer>
    </main>
  );
}
// AI Generated Code by Deloitte + Cursor (END)
