import Image from "next/image";
import { WHATSAPP_URL, DOUBTS_CTA, FOOTER_COPYRIGHT, FOOTER_RIGHTS } from "@/data/content";
import { NailF1 } from "@/components/ui/primitives";
import { ArrowIcon } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="relative border-t border-[#e4d7c0] bg-ivory">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bronze/50 to-transparent"
      />
      <div className="container-x">
        <div className="flex flex-col items-center gap-8 py-12 text-center lg:grid lg:grid-cols-3 lg:items-end lg:gap-8 lg:py-16 lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <a href="#inicio" aria-label="Start Molde F1" className="group">
              <Image
                src="/logo-start.png"
                alt="Start Molde F1"
                width={177}
                height={89}
                className="h-11 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85 sm:h-13"
              />
            </a>
            <p className="mt-2.5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
              <NailF1 className="h-[13px] w-[13px] text-bronze" />
              com Carol Olmena
            </p>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <span
              aria-hidden="true"
              className="h-20 w-px bg-gradient-to-b from-bronze/0 via-bronze/40 to-bronze/0"
            />
          </div>

          <div className="flex flex-col items-center gap-5 lg:items-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#d9c7a6]/70 bg-linen/60 px-5 py-3 text-[13px] font-semibold text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_10px_22px_-16px_rgba(36,24,17,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-bronze/50 hover:bg-linen lg:px-5"
            >
              {DOUBTS_CTA}
              <ArrowIcon className="h-3.5 w-3.5 text-bronze-deep transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="text-xs leading-relaxed text-muted">
              © {new Date().getFullYear()} {FOOTER_COPYRIGHT}
              <span className="mx-1.5" aria-hidden="true">·</span>
              {FOOTER_RIGHTS}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}