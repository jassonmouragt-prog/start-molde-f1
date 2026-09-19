import { FOR_WHOM_ITEMS } from "@/data/content";
import { NailF1 } from "@/components/ui/primitives";
import { ArrowIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ForWhom() {
  return (
    <section
      id="para-quem"
      className="relative scroll-mt-16 overflow-hidden border-y border-[#e4d7c0] bg-cream py-20 lg:py-32"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-6 hidden select-none font-display text-[9rem] italic leading-none text-bronze/10 md:block lg:right-16 lg:text-[14rem]"
      >
        “
      </span>

      <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <span aria-hidden="true" className="flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-bronze/70 to-transparent" />
              <NailF1 className="h-[16px] w-[16px] text-bronze" />
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,8.4vw,3.7rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance">
              Pra quem é o <em className="italic text-bronze-deep">curso</em>?
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-4 lg:col-span-7 lg:col-start-6 lg:gap-5">
          {FOR_WHOM_ITEMS.map((item, i) => (
            <Reveal key={item} delay={i * 0.08}>
              <div className="group relative flex items-start gap-4 overflow-hidden rounded-2xl bg-white/45 px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(36,24,17,0.04),0_18px_38px_-26px_rgba(36,24,17,0.4)] transition-all duration-500 hover:-translate-y-1 hover:bg-white/70 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_26px_52px_-30px_rgba(36,24,17,0.5)] sm:gap-6 sm:px-7 lg:px-8 lg:py-8">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-bronze via-bronze-soft to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
                <span
                  aria-hidden="true"
                  className="font-display text-[2.4rem] italic leading-[0.6] text-bronze/45 transition-colors duration-500 group-hover:text-bronze sm:text-[3rem]"
                >
                  “
                </span>
                <p className="text-[16px] leading-relaxed text-ink/85 sm:text-lg lg:text-xl">
                  {item}
                </p>
                <span className="ml-auto hidden self-center sm:flex">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze/30 text-bronze-deep opacity-60 transition-all duration-500 group-hover:bg-espresso group-hover:text-bone group-hover:opacity-100">
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}