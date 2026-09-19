"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PRICE, CHECKOUT_URL } from "@/data/content";
import { ArrowIcon } from "@/components/ui/Button";

const NAV = [
  { href: "#aprender", label: "Você vai aprender" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#carol", label: "Carol" },
  { href: "#oferta", label: "Oferta" },
];

export function Wordmark() {
  return (
    <a
      href="#inicio"
      className="group flex items-center gap-2.5 leading-none"
      aria-label="Start Molde F1"
    >
      <Image
        src="/logo-start.png"
        alt="Start Molde F1"
        width={177}
        height={89}
        priority
        className="h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85 sm:h-11"
      />
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#e4d7c0]/80 bg-[#faf6ed]/85 shadow-[0_18px_40px_-30px_rgba(36,24,17,0.4)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[76px] items-center justify-between gap-6">
        <Wordmark />
        <nav
          aria-label="Navegação"
          className="hidden items-center gap-8 text-[13px] font-medium tracking-wide text-body md:flex"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-move transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
<a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ink group btn-lg-refined sm:btn-md-refined"
        >
          <span className="hidden sm:inline">{PRICE.cta}</span>
          <span className="sm:hidden">Garantir</span>
          <span className="sm:hidden">
            <ArrowIcon className="h-[14px] w-[14px] shrink-0" />
          </span>
          <ArrowIcon className="btn-arrow hidden h-[14px] w-[14px] shrink-0 sm:block" />
        </a>
      </div>
    </header>
  );
}