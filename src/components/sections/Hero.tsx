import Image from "next/image";

export function Hero() {
  return (
    <section id="inicio" className="relative w-full pt-[76px] bg-ivory">
      {/* Banner Mobile */}
      <div className="block md:hidden w-full">
        <Image
          src="/banner-hero-mobile.png"
          alt="Start Molde F1 — Carol Olmena"
          width={941}
          height={1672}
          priority
          quality={90}
          sizes="100vw"
          className="w-full h-auto block"
        />
      </div>

      {/* Banner Desktop */}
      <div className="hidden md:block w-full">
        <Image
          src="/banner-hero-desktop.png"
          alt="Start Molde F1 — Carol Olmena"
          width={1672}
          height={941}
          priority
          quality={90}
          sizes="100vw"
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}
