import { OFFER_ITEMS, PRICE, CHECKOUT_URL } from "@/data/content";
import { CheckIcon, NailF1 } from "@/components/ui/primitives";
import { CTA, ArrowIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const PAYMENT_DOTS = ["Pix", "Boleto", "Cartão"];

export function Offer() {
  return (
    <section
      id="oferta"
      className="relative scroll-mt-16 overflow-hidden border-t border-espresso-line bg-noir py-20 text-bone lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-[-18%] h-[640px] w-[640px] bg-[radial-gradient(circle,rgba(168,127,84,0.3),transparent_60%)] blur-3xl lg:h-[720px] lg:w-[720px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-26%] left-[-14%] h-[620px] w-[620px] bg-[radial-gradient(circle,rgba(110,42,38,0.34),transparent_62%)] blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 hidden -translate-x-1/3 select-none font-display text-[16rem] font-medium italic leading-none tracking-tight text-bone/[0.03] lg:block"
      >
        247
      </span>

      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <Reveal>
            <span aria-hidden="true" className="flex items-center gap-3">
              <NailF1 className="h-[13px] w-[13px] text-gold" />
              <span className="h-px w-10 bg-gradient-to-r from-gold/70 to-transparent" />
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,8.6vw,3.9rem)] font-medium leading-[1.05] tracking-[-0.02em] text-bone text-balance">
              Quanto <em className="italic text-gold">vale</em> estar aqui?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 lg:mt-10">
              {OFFER_ITEMS.map((item) => (
                <li
                  key={item}
                  className="group flex items-center gap-4 border-t border-bone/10 py-3.5 first:border-t-0 sm:border-espresso-line sm:py-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-noir sm:h-8 sm:w-8">
                    <CheckIcon className="h-[14px] w-[14px] sm:h-[15px] sm:w-[15px]" />
                  </span>
                  <span className="text-[14.5px] font-medium leading-snug text-bone/90 sm:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-28">
              <div className="group relative rounded-[2rem] bg-gradient-to-br from-gold/45 via-bone/12 to-wine/40 p-[1.5px] shadow-[0_60px_140px_-60px_rgba(0,0,0,0.9)] lg:rounded-[2.2rem]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-5 lg:-inset-6 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(216,188,144,0.3),transparent)] opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-cocoa to-noir p-6 sm:p-8 lg:rounded-[2.2rem] lg:p-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(closest-side,rgba(216,188,144,0.28),transparent)] blur-xl"
                  />

                  <p className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-bone-muted sm:text-[11px] sm:tracking-[0.24em]">
                    Start Molde F1 · curso completo
<NailF1 className="h-[16px] w-[16px] text-gold" />
                  </p>

                  <div className="mt-7 flex items-center gap-3 sm:mt-8">
                    <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-bone-dim">
                      de {PRICE.from}
                    </span>
                    <span className="h-px w-5 bg-bone/15 sm:w-6" aria-hidden="true" />
                    <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <path d="m13 3-8 13h7l-1 5 8-13h-7l1-5Z" strokeLinejoin="round" />
                      </svg>
                      por apenas
                    </span>
                  </div>

                  <p className="mt-2 font-display text-[clamp(3.1rem,16vw,4.9rem)] font-medium leading-none tracking-[-0.02em] text-bone tabular-nums-local text-balance">
                    {PRICE.to}
                  </p>

                  <p className="mt-3 flex items-center gap-2.5 text-[14px] italic text-gold sm:text-[15px] sm:gap-3">
                    <CheckIcon className="h-4 w-4 text-gold" />
                    {PRICE.priceNote}
                  </p>

                  <div className="mt-7 border-t border-bone/10 pt-6 sm:mt-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-bone-muted sm:text-[12px] sm:tracking-[0.18em]">
                      Formas de pagamento
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                      {PAYMENT_DOTS.map((method, i) => (
                        <span
                          key={method}
                          className="inline-flex items-center gap-2 rounded-full border border-bone/15 bg-bone/[0.04] px-3.5 py-1.5 text-[12px] font-medium text-bone/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-4 sm:py-2"
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              i === 0 ? "bg-gold" : "bg-bone/40"
                            }`}
                            aria-hidden="true"
                          />
                          {method}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-[12px] leading-relaxed text-bone/50">
                      {PRICE.payment}
                    </p>
                  </div>

                  <CTA
                    href={CHECKOUT_URL}
                    variant="offer"
                    size="lg"
                    className="mt-7 w-full sm:mt-8"
                  >
                    {PRICE.cta}
                  </CTA>

                  <p className="mt-4 flex items-start justify-center gap-2 text-center text-[11.5px] leading-relaxed text-bone/45 sm:mt-5 sm:text-[12px]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/80"
                      aria-hidden="true"
                    >
                      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" strokeLinejoin="round" />
                      <path d="m9.5 12 2 2 3.5-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Compra 100% segura · Acesso imediato · Certificado incluso
                  </p>
                </div>
              </div>

              <p className="mt-5 hidden items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-bone/40 lg:flex">
                <ArrowIcon className="h-4 w-4 rotate-90 text-bone/40" />
                Garantia incondicional de 7 dias
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
