import { KEY_APOIO, KEY_BODY, KEY_ITEMS } from "@/data/content";
import Image from "next/image";
import { CheckIcon, NailF1 } from "@/components/ui/primitives";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/ui/Reveal";

export function KeySection() {
  return (
    <section
      id="profissao"
      className="relative scroll-mt-16 overflow-hidden bg-ivory py-20 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-15%] top-1/4 h-[620px] w-[620px] bg-[radial-gradient(circle,rgba(231,216,190,0.45),transparent_60%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-[540px] w-[540px] bg-[radial-gradient(circle,rgba(224,206,176,0.4),transparent_62%)] blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 right-2 select-none font-display text-[clamp(4.2rem,15vw,12.5rem)] italic leading-none tracking-[-0.03em] text-ink/[0.035] lg:right-auto lg:top-[55%] lg:-translate-y-1/2 lg:whitespace-nowrap lg:text-ink/[0.045] lg:left-16"
      >
        PRECISÃO
      </span>

      <div className="container-x relative">
        {/* faixa editorial do título */}
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <span
                aria-hidden="true"
                className="flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-bronze-deep/70"
              >
                <span className="h-px w-10 bg-bronze/60" />
                02
                <span className="h-px flex-1 bg-gradient-to-r from-bronze/40 to-transparent" />
              </span>
              <h2 className="mt-6 font-display text-[clamp(2.3rem,8.5vw,4.1rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink text-balance">
                E é isso que vai virar a{" "}
                <em className="italic text-bronze-deep">chave</em> da sua
                profissão
              </h2>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:pb-2">
              <span
                aria-hidden="true"
                className="mb-4 block h-px w-12 bg-bronze/40"
              />
              <p className="font-display text-[17px] italic leading-snug text-ink/60 sm:text-lg">
                {KEY_APOIO}
              </p>
            </div>
          </div>
        </Reveal>

        {/* corpo assimétrico: imagem + painel */}
        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:items-start lg:gap-10">
          <figure className="relative lg:col-span-7">
            <Reveal delay={0.06}>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-5 lg:-inset-8 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(216,188,144,0.35),transparent)] blur-2xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-5 -translate-y-5 rounded-[2.2rem] border border-bronze/30 bg-cream/50 lg:-translate-x-6 lg:-translate-y-6 lg:rounded-[2.6rem]"
              />
              <div className="relative overflow-hidden rounded-[2rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_10px_20px_rgba(36,24,17,0.12),0_60px_110px_-60px_rgba(36,24,17,0.6)] lg:rounded-[2.6rem]">
<Image
              src="/imagem-secao-02.png"
              alt="Estrutura em molde F1 limpa e natural, com acabamento sem lixamento"
              width={1122}
              height={1402}
              className="aspect-[4/3] lg:aspect-[5/4]"
              sizes="(max-width: 768px) 92vw, 56vw"
              priority
            />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/[0.18] via-transparent to-white/[0.06]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-bronze/60 to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/25 ring-inset lg:rounded-[2.6rem]" />
              </div>

              <figcaption className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full border border-white/10 bg-espresso/85 px-4 py-2.5 text-[12px] font-semibold text-bone shadow-[0_18px_36px_-18px_rgba(20,12,6,0.7)] backdrop-blur-sm lg:bottom-6 lg:left-6 lg:px-5 lg:py-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-bronze text-ivory">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {KEY_ITEMS[2]}
              </figcaption>
            </Reveal>
          </figure>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.12}>
              <div className="relative overflow-hidden rounded-[2rem] border border-[#e4d7c0]/70 bg-gradient-to-b from-white/70 to-linen/60 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_1px_2px_rgba(36,24,17,0.05),0_34px_60px_-40px_rgba(36,24,17,0.45)] sm:p-8 lg:rounded-[2.4rem] lg:p-9">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-bronze via-bronze-soft to-transparent"
                />

                <p className="text-[16px] leading-relaxed text-ink/85 sm:text-[17px] lg:text-lg">
                  {KEY_BODY}
                </p>

                <div
                  aria-hidden="true"
                  className="mt-6 h-px bg-gradient-to-r from-bronze/50 via-[#e6d9c2] to-transparent"
                />

                <ul className="mt-4">
                  {KEY_ITEMS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 border-b border-[#e8ddc8]/80 py-3.5 last:border-0"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bronze/30 bg-ivory/90 text-bronze-deep shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <span className="pt-1 text-[15px] font-medium leading-snug text-ink/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3" aria-hidden="true">
                  <span className="h-px flex-1 bg-gradient-to-r from-bronze/40 via-[#e6d9c2] to-transparent" />
                  <NailF1 className="h-[15px] w-[15px] shrink-0 text-bronze" />
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}