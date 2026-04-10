import "../css/globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comitiva 100 Limites",
  description: "Página de links e pedidos da Comitiva 100 Limites",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen items-center bg-[hsl(240_10%_3.9%)]">
          {/* Background Effects */}
          <div className="fixed inset-0 bg-[linear-gradient(135deg,hsl(142_76%_36%)_0%,hsl(295_85%_60%)_100%)] opacity-10"></div>
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(120_69%_47%)_0%,transparent_50%)] opacity-20"></div>
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(295_85%_60%)_0%,transparent_50%)] opacity-20"></div>

          <div className="container mx-auto min-h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
