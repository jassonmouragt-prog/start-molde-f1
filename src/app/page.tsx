import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/Marquee";
import { Learn } from "@/components/sections/Learn";
import { KeySection } from "@/components/sections/KeySection";
import { ForWhom } from "@/components/sections/ForWhom";
import { Instructor } from "@/components/sections/Instructor";
import { Offer } from "@/components/sections/Offer";
import { Doubts } from "@/components/sections/Doubts";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <Learn />
        <KeySection />
        <ForWhom />
        <Instructor />
        <Offer />
        <Doubts />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}