import { DOUBTS_TITLE, DOUBTS_CTA, WHATSAPP_URL } from "@/data/content";
import { NailF1 } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function Doubts() {
  return (
    <section
      id="duvidas"
      className="relative scroll-mt-16 overflow-hidden border-t border-[#e4d7c0] bg-ivory py-24 lg:py-36"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bronze/15 lg:h-[620px] lg:w-[620px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bronze/12 lg:h-[440px] lg:w-[440px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bronze/10 lg:h-[280px] lg:w-[280px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[660px] w-[660px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(231,216,190,0.55),transparent_62%)] blur-2xl lg:h-[760px] lg:w-[760px]"
      />

      <div className="container-x relative flex flex-col items-center text-center">
        <Reveal>
          <span aria-hidden="true" className="flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-bronze/60" />
            <NailF1 className="h-[16px] w-[16px] text-bronze" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-bronze/60" />
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.2rem,9.5vw,4.6rem)] font-medium leading-[1.04] tracking-[-0.02em] text-ink text-balance">
            {DOUBTS_TITLE}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink btn-lg group mt-10 w-full max-w-[420px] sm:w-auto"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#23b158] text-white shadow-[0_8px_18px_-8px_rgba(29,138,69,0.9)]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
                  <path d="M12 2a9.6 9.6 0 0 0-8.3 14.6L2 22l5.5-1.6A9.6 9.6 0 1 0 12 2Zm4.6 13.4c-.2.6-1.2 1.1-1.7 1.2-.4 0-1 .2-3.2-.7-2.7-1.1-4.4-4-4.5-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.3 1.3Z" />
                </svg>
              </span>
              {DOUBTS_CTA}
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              className="btn-arrow h-[18px] w-[18px] shrink-0"
            >
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex items-center gap-3" aria-hidden="true">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-bronze/50" />
            <NailF1 className="h-[13px] w-[13px] text-bronze" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-bronze/50" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}