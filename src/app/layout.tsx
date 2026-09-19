import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const title = "Start Molde F1 · Curso Online · Carol Olmena";
const description =
  "Domine o molde F1 do zero ao aperfeiçoamento com Carol Olmena. Estrutura limpa, acoplagem sem lixamento e acabamento natural em todos os tipos de unha. Acesso imediato, certificado incluso e garantia de 7 dias.";

export const metadata: Metadata = {
  metadataBase: new URL("https://carolmenanails.my.canva.site/startmoldef1"),
  title: {
    default: title,
    template: `%s · ${title}`,
  },
  description,
  keywords: [
    "molde f1",
    "curso molde f1",
    "alongamento em gel",
    "nail designer",
    "curso de unhas",
    "acoplagem sem lixamento",
    "alongamento de unhas",
    "Carol Olmena",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Start Molde F1",
    title,
    description,
    url: "/",
    images: [
      {
        url: "/images/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "Start Molde F1 — curso online de molde F1 com Carol Olmena",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fraunces.variable} ${manrope.variable} bg-ivory`}>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-espresso focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-bone"
        >
          Pular para o conteúdo
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}