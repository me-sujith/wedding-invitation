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

          <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.38em] text-wine/80">{c.familiesLine}</p>
          <h1 className="mt-4 font-display text-[2.35rem] font-bold leading-[1.15] tracking-tight text-wine sm:text-5xl md:text-6xl lg:text-[3.5rem]">
            <span className="gold-gradient-text">{c.couple.bride}</span>
            <span className="mx-3 inline-block font-semibold text-wine/70">{c.couple.conjunction}</span>
            <span className="gold-gradient-text">{c.couple.groom}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-display text-base italic leading-relaxed text-ink/60 sm:text-lg">{c.inviteLine}</p>

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
        <p className="mx-auto mt-3 max-w-lg text-ink/55">{c.countdown.subheading}</p>
        <div className="mt-12">
          <Countdown targetIso={c.mainEvent.countdownIso} labels={c.countdown.labels} />
        </div>
      </section>

      {/* About */}
      <section className="border-t border-white/40 bg-white/40 px-6 py-24 backdrop-blur-sm sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold">Our families</p>
          <h2 className="mt-2 text-center font-display text-3xl font-semibold tracking-tight text-wine sm:text-4xl">
            {c.about.heading}
          </h2>
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
      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold">Schedule</p>
        <h2 className="mt-2 text-center font-display text-3xl font-semibold tracking-tight text-wine sm:text-4xl">
          {c.ceremonies.heading}
        </h2>
        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-8">
          {c.ceremonies.items.map((ev) => (
            <article key={ev.id} className="glass-card p-9 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">{ev.title}</p>
              {ev.subtitle ? (
                <h3 className="mt-3 font-display text-2xl font-semibold text-wine">{ev.subtitle}</h3>
              ) : null}
              <ul className="mt-8 space-y-4 text-left text-ink/75">
                <li className="flex gap-3 text-[15px] leading-relaxed">
                  <span className="shrink-0 text-lg" aria-hidden>
                    📅
                  </span>
                  <span>{ev.dateLine}</span>
                </li>
                <li className="flex gap-3 text-[15px] leading-relaxed">
                  <span className="shrink-0 text-lg" aria-hidden>
                    ⏰
                  </span>
                  <span>{ev.timeLine}</span>
                </li>
                <li className="flex gap-3 text-[15px] leading-relaxed">
                  <span className="shrink-0 text-lg" aria-hidden>
                    📍
                  </span>
                  <span>{ev.venueLine}</span>
                </li>
              </ul>
              {ev.mapsQueryOrUrl ? (
                <div className="mt-8 flex flex-col items-center gap-2 border-t border-wine/10 pt-8">
                  <a
                    href={ev.mapsQueryOrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(ev.mapsQueryOrUrl)}&color=5b1a24&bgcolor=fffaf5`}
                      alt={`Scan to get directions to ${ev.venueLine}`}
                      width={160}
                      height={160}
                      className="rounded-xl border border-wine/10 shadow-md"
                    />
                    <span className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-wine/60 hover:text-wine transition">
                      Scan or tap for directions
                    </span>
                  </a>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="border-y border-white/50 bg-gradient-to-b from-cream to-white/60 px-6 py-20 text-center sm:px-8">
        <p className="font-display text-4xl text-gold">{c.quote.symbol}</p>
        <blockquote className="mx-auto mt-8 max-w-2xl font-display text-xl font-medium italic leading-relaxed text-wine/90 sm:text-2xl">
          {c.quote.text}
        </blockquote>
        <p className="mt-10 text-sm text-ink/50">{c.quote.closingLine}</p>
      </section>

      {/* Join */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">RSVP & directions</p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-wine sm:text-4xl">{c.join.heading}</h2>
        <p className="mx-auto mt-3 max-w-lg text-ink/55">{c.join.subheading}</p>
        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={c.join.directions.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group inline-flex flex-1 flex-col items-center justify-center px-8 py-7 text-wine transition hover:border-gold/40 hover:shadow-glow"
          >
            <span className="text-2xl transition group-hover:scale-105" aria-hidden>
              📍
            </span>
            <span className="mt-3 font-semibold">{c.join.directions.label}</span>
            <span className="mt-1 text-sm text-ink/50">{c.join.directions.venueShort}</span>
          </a>
          <a
            href={`https://wa.me/${c.join.whatsapp.phoneE164}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group inline-flex flex-1 flex-col items-center justify-center px-8 py-7 text-wine transition hover:border-gold/40 hover:shadow-glow"
          >
            <span className="text-2xl transition group-hover:scale-105" aria-hidden>
              💬
            </span>
            <span className="mt-3 font-semibold">{c.join.whatsapp.label}</span>
            <span className="mt-1 text-sm text-ink/50">{c.join.whatsapp.sublabel}</span>
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
