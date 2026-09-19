import {
  INSTRUCTOR_TITLE,
  INSTRUCTOR_NAME,
  INSTRUCTOR_ROLE,
  INSTRUCTOR_BIO,
} from "@/data/content";
import Image from "next/image";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { value: "+6", label: "anos no mercado" },
  { value: "+7.000", label: "atendimentos em mesa" },
  { value: "3", label: "formações certificadas" },
];

export function Instructor() {
  return (
    <section
      id="carol"
      className="grain grain-dark relative scroll-mt-16 overflow-hidden border-t border-espresso-line bg-espresso py-20 text-bone lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-14%] top-[-16%] h-[640px] w-[640px] bg-[radial-gradient(circle,rgba(168,127,84,0.28),transparent_62%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-24%] right-[-12%] h-[560px] w-[560px] bg-[radial-gradient(circle,rgba(110,42,38,0.3),transparent_62%)] blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-10 hidden select-none font-display text-[9rem] font-medium italic leading-none tracking-tight text-bone/[0.045] lg:block lg:text-[13rem]"
      >
        {INSTRUCTOR_NAME}
      </span>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        {/* portrait */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-[300px] sm:max-w-[380px] lg:max-w-[420px]">
            <Reveal>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[8%] h-[82%] w-[86%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(216,188,144,0.4),transparent_70%)] blur-2xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-gold/50 to-transparent"
              />

              <div className="relative rounded-t-full bg-gradient-to-b from-gold/50 via-bone/10 to-bone/5 p-[1.5px] shadow-[0_50px_120px_-60px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[1.25rem]">
                  <Image
                  src="/imagem-sobre-a-profissional.png"
                  alt="Ana Carolina, nail designer e instrutora do curso Start Molde F1"
                  width={1122}
                  height={1402}
                  className="aspect-[3/4] lg:aspect-[16/19]"
                  sizes="(max-width: 768px) 92vw, 40vw"
                  priority
                />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-bone/[0.07]" />
                  <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/15" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="animate-float-soft absolute -bottom-5 left-1/2 w-max max-w-[92%] -translate-x-1/2 sm:w-auto">
                <div className="surface-card-dark rounded-2xl px-3 py-3 text-center sm:rounded-full sm:px-5 sm:py-2.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-bone sm:text-[12px] sm:tracking-[0.18em]">
                    {INSTRUCTOR_NAME} · {INSTRUCTOR_ROLE}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* copy */}
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <h2 className="font-display text-[clamp(2.1rem,8.6vw,3.8rem)] font-medium leading-[1.05] tracking-[-0.02em] text-bone text-balance">
              {INSTRUCTOR_TITLE}
            </h2>
            <p className="mt-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-bone-muted sm:text-[12px]">
              <span className="h-5 w-px bg-gold/60" aria-hidden="true" />
              {INSTRUCTOR_ROLE}
            </p>
          </Reveal>

          <div className="mt-8 space-y-4 lg:mt-9 lg:space-y-5">
            {INSTRUCTOR_BIO.map((block, i) => (
              <Reveal key={block} delay={0.08 + i * 0.06}>
                <p
                  className={`max-w-[56ch] text-[15px] leading-relaxed text-bone/85 lg:text-base ${
                    i === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[2.8rem] first-letter:font-medium first-letter:leading-[0.75] first-letter:text-gold"
                      : ""
                  }`}
                >
                  {block}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <dl className="mt-10 grid grid-cols-3 gap-x-4 rounded-[1.5rem] border border-bone/10 bg-bone/[0.04] px-2 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-6 lg:mt-12 lg:py-7">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`group relative px-1 text-center transition-transform duration-500 hover:-translate-y-1 sm:px-4 ${
                    i > 0 ? "border-l border-bone/10" : ""
                  }`}
                >
                  <dd className="font-display text-[clamp(1.8rem,7.4vw,2.6rem)] font-medium italic leading-none tracking-tight text-bone tabular-nums-local">
                    {stat.value}
                    <span className="text-gold">.</span>
                  </dd>
                  <dt className="mt-2.5 text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-bone-muted lg:text-[11px] lg:mt-3">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}