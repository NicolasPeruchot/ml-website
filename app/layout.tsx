import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon.ico" }],
  },
  title: "M Lestoquoy - Expert RH",
  description: "Expert RH Fusions-Acquisitions & Restructuration, j'accompagne groupes internationaux, PME/ETI et fonds d'investissement dans leurs transformations complexes pour sécuriser le capital humain et la performance, en environnements multiculturels.",
  keywords: ["RH", "M&A", "Restructuration", "Management de transition", "DRH", "Fusions-Acquisitions", "Private Equity", "CHRO", "International"],
  authors: [{ name: "Martine Lestoquoy" }],
  openGraph: {
    title: "Martine Lestoquoy | Expert RH Fusions-Acquisitions & Restructuration",
    description: "Accompagner vos transformations complexes pour sécuriser le capital humain et accélérer la performance en France et à l'international.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
