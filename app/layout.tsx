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
  metadataBase: new URL("https://portafolio-olive-two-16.vercel.app"),
  title: "Fernando Pantoja | Software Developer",
  description: "Portafolio profesional de Fernando Pantoja. Software Developer especializado en desarrollo full stack, apps móviles y arquitecturas escalables.",
  openGraph: {
    title: "Fernando Pantoja | Software Developer",
    description: "Software Developer especializado en desarrollo full stack, apps móviles y arquitecturas eficientes.",
    url: "https://portafolio-olive-two-16.vercel.app",
    siteName: "Fernando Pantoja Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fernando Pantoja - Software Developer",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernando Pantoja | Software Developer",
    description: "Software Developer especializado en desarrollo full stack, apps móviles y arquitecturas eficientes.",
    images: ["/og-image.jpg"],
  },
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
