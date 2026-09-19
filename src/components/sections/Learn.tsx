import { LEARN_TITLE, LEARN_ITEMS } from "@/data/content";
import { ArrowIcon } from "@/components/ui/Button";
import { NailF1 } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function Learn() {
  return (
    <section
      id="aprender"
      className="relative scroll-mt-16 overflow-hidden border-y border-[#e4d7c0] bg-linen py-20 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(232,215,190,0.55),transparent)] blur-2xl lg:h-[420px] lg:w-[820px]"
      />

      <div className="container-x relative">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span aria-hidden="true" className="flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-bronze/60" />
              <NailF1 className="h-[16px] w-[16px] text-bronze" />
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-bronze/60" />
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,8.4vw,3.8rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance">
              {LEARN_TITLE}
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-3 lg:mt-16 lg:gap-7">
          {LEARN_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-[1.5rem] bg-white/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_1px_2px_rgba(36,24,17,0.04),0_18px_36px_-24px_rgba(36,24,17,0.35)] transition-all duration-500 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_1px_2px_rgba(36,24,17,0.04),0_30px_54px_-28px_rgba(36,24,17,0.45)] sm:p-7 lg:rounded-[1.75rem] lg:p-10">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-bronze via-bronze-soft to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(closest-side,rgba(216,188,144,0.35),transparent)] opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"
                />

                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze-deep sm:text-[12px]">
                  <NailF1 className="h-[15px] w-[15px] shrink-0 text-bronze-deep transition-colors duration-500 group-hover:text-bronze" />
                  <span className="h-px flex-1 bg-[#e2d7c2] transition-colors duration-500 group-hover:bg-bronze/40" />
                </p>

                <h3 className="mt-6 font-display text-[22px] font-medium leading-tight tracking-[-0.01em] text-ink sm:text-[24px] lg:mt-8 lg:text-[27px]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-body/95 lg:mt-3.5">
                  {item.text}
                </p>

                <p className="mt-6 flex items-center justify-between border-t border-[#e8ddc8] pt-4 lg:mt-8 lg:pt-5">
                  <NailF1 className="h-[15px] w-[15px] text-bronze/60 transition-colors duration-500 group-hover:text-bronze" />
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze/30 text-bronze-deep transition-all duration-500 group-hover:border-espresso group-hover:bg-espresso group-hover:text-bone">
                    <ArrowIcon className="h-3.5 w-3.5 rotate-90" />
                  </span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}