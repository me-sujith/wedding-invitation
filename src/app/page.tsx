// AI Generated Code by Deloitte + Cursor (BEGIN)
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
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-28 text-center">
        <div
          className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold/25 blur-3xl sm:h-96 sm:w-96"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-wine/20 blur-3xl sm:h-[28rem] sm:w-[28rem]"
          aria-hidden
        />
        <div className="relative z-[1] max-w-4xl">
          {/* OM Logo */}
          <div className="flex flex-col items-center">
            <p className="gold-gradient-text font-display text-7xl sm:text-8xl" style={{filter:'drop-shadow(0 2px 16px rgba(184,134,11,0.45))' }}>{c.mantra.symbol}</p>
            <span className="mt-1 block h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" aria-hidden />
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.5em] text-gold/70 sm:text-[11px]">
              {c.mantra.line}
            </p>
          </div>

          {/* Divider */}
          <div className="mx-auto mt-10 flex items-center gap-4 max-w-xs">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-wine/20" aria-hidden />
            <span className="text-wine/30 text-xs">✦</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-wine/20" aria-hidden />
          </div>

          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.28em] text-wine/80 sm:text-[11px] sm:tracking-[0.38em]">{c.familiesLine}</p>
          <h1 className="mt-4 font-display font-bold leading-[1.15] tracking-tight text-wine" style={{ fontSize: 'clamp(1rem, 5.5vw, 3.5rem)' }}>
            <span className="gold-gradient-text">{c.couple.bride}</span>
            <span className="mx-1 inline-block font-semibold text-wine/70 sm:mx-3">{c.couple.conjunction}</span>
            <span className="gold-gradient-text">{c.couple.groom}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-display text-sm italic leading-relaxed text-ink/60 sm:mt-6 sm:text-lg">{c.inviteLine}</p>

          {/* Date card */}
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-gold/20 bg-white/55 px-8 py-7 shadow-glow backdrop-blur-md">
            <p className="gold-gradient-text font-display text-2xl font-semibold sm:text-3xl">{c.mainEvent.dateShort}</p>
            <p className="mt-1 text-sm font-medium tracking-wide text-ink/50 sm:text-base">{c.mainEvent.weekdayTimeLine}</p>
            <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden />
            <div className="mt-4">
              <p className="font-display text-xl font-semibold text-wine">{c.mainEvent.venueName}</p>
              <p className="mt-1 text-sm tracking-wide text-ink/45">{c.mainEvent.venueArea}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-ink/35">
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em]">{c.footer.scrollHint}</span>
          <span className="block h-10 w-px rounded-full bg-gradient-to-b from-gold/60 to-transparent" aria-hidden />
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
      <section className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Save the date</p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-wine sm:text-4xl md:text-[2.5rem]">
          {c.countdown.heading}
        </h2>
        <div className="mx-auto mt-4 flex items-center gap-4 max-w-xs">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-wine/15" aria-hidden />
          <span className="text-gold/50 text-xs">✦</span>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-wine/15" aria-hidden />
        </div>
        <p className="mx-auto mt-3 max-w-lg font-display italic text-ink/55">{c.countdown.subheading}</p>
        <div className="mt-12">
          <Countdown targetIso={c.mainEvent.countdownIso} labels={c.countdown.labels} />
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
          <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
            {c.about.people.map((p) => (
              <article key={p.name} className="glass-card flex flex-col items-center p-9 sm:p-10">
                <span className="text-4xl" aria-hidden>
                  {p.emoji}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold gold-gradient-text">{p.name}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-wine/50">{p.relationLabel}</p>
                <ParentsLines text={p.parents} />
              </article>
            ))}
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
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">RSVP & directions</p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-wine sm:text-4xl">{c.join.heading}</h2>
        <div className="mx-auto mt-3 flex items-center gap-4 max-w-xs">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-wine/15" aria-hidden />
          <span className="text-gold/50 text-xs">✦</span>
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-wine/15" aria-hidden />
        </div>
        <p className="mx-auto mt-3 max-w-lg font-display italic text-ink/55">{c.join.subheading}</p>
        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={c.join.directions.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group inline-flex flex-1 flex-col items-center justify-center px-8 py-8 transition hover:border-gold/40 hover:shadow-glow"
          >
            <svg className="h-7 w-7 text-wine transition group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            <span className="mt-3 font-display text-base font-semibold gold-gradient-text">{c.join.directions.label}</span>
            <span className="mt-1 text-xs font-medium tracking-wide text-ink/50">{c.join.directions.venueShort}</span>
          </a>
          <a
            href={`https://wa.me/${c.join.whatsapp.phoneE164}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group inline-flex flex-1 flex-col items-center justify-center px-8 py-8 transition hover:border-gold/40 hover:shadow-glow"
          >
            <svg className="h-7 w-7 text-wine transition group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M21 11.5A8.38 8.38 0 0 1 12.5 20a8.5 8.5 0 0 1-4.36-1.19L3 20l1.19-5.14A8.5 8.5 0 1 1 21 11.5z"/></svg>
            <span className="mt-3 font-display text-base font-semibold gold-gradient-text">{c.join.whatsapp.label}</span>
            <span className="mt-1 text-xs font-medium tracking-wide text-ink/50">{c.join.whatsapp.sublabel}</span>
          </a>
        </div>
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
