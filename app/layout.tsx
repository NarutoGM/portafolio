import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins, Anton, Gochi_Hand } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-poppins",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const gochi = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gochi",
});

export const metadata: Metadata = {
  title: "Fernando Pantoja | Desarrollador Web",
  description: "Portafolio profesional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`
          ${inter.variable}
          ${poppins.variable}
          ${anton.variable}
          ${gochi.variable}
          antialiased
        `}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
