"use client";

import { useEffect, useState } from "react";
import { CHECKOUT_URL, PRICE } from "@/data/content";
import { ArrowIcon } from "@/components/ui/Button";

export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(env(safe-area-inset-bottom),10px)] pt-0 md:hidden">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
        />
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ink flex w-full items-center justify-between gap-3 px-5 py-3.5 text-[13px] font-semibold text-bone shadow-[0_-6px_24px_rgba(20,12,6,0.25)]"
        >
          <span className="truncate">{PRICE.cta}</span>
          <span className="flex shrink-0 items-center gap-1.5">
            <span className="tabular-nums-local text-gold">{PRICE.to.replace(",00", "")}</span>
            <span className="text-[11px] text-bone/55">ou 12x</span>
            <ArrowIcon className="ml-1 h-3.5 w-3.5 text-gold" />
          </span>
        </a>
      </div>
    </div>
  );
}
