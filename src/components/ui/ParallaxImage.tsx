"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
};

export function ParallaxImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  sizes = "100vw",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;
      if (typeof window !== "undefined" && window.innerWidth < 768) return;
      const tween = gsap.fromTo(
        ref.current,
        { yPercent: -7 },
        {
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: ref }
  );

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        ref={ref}
        className="relative h-[114%] w-full will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover ${imgClassName}`}
        />
      </div>
    </div>
  );
}