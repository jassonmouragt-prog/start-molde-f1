import { NailF1 } from "@/components/ui/primitives";

const MARQUEE_ITEMS = [
  "START MOLDE F1",
  "SIGNATURE METHOD",
  "ESTRUTURA & TÉCNICA",
  "RESULTADOS REAIS",
  "ALONGAMENTO EM GEL",
  "DOMÍNIO DO MOLDE",
];

export function Marquee() {
  return (
    <aside
      aria-label="Destaques Start Molde F1"
      className="relative overflow-hidden border-y border-espresso-line bg-espresso py-3.5 sm:py-4 text-bone select-none"
    >
      {/* Top & bottom subtle gold hairlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent"
      />

      {/* Side gradient fade masks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-32 bg-gradient-to-r from-espresso to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-32 bg-gradient-to-l from-espresso to-transparent"
      />

      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center">
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex shrink-0 items-center">
              {MARQUEE_ITEMS.map((item, i) => (
                <div key={i} className="flex items-center gap-5 px-3.5 sm:gap-9 sm:px-5">
                  <span className="font-display text-[11.5px] sm:text-[13px] font-semibold uppercase tracking-[0.24em] text-bone/90 whitespace-nowrap">
                    {item}
                  </span>
                  <NailF1 className="h-3.5 w-3.5 shrink-0 text-gold/85" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
