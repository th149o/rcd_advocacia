import type { Metadata, Viewport } from "next";
import { EB_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RCD Advocacia | Advocacia e Assessoria Jurídica",
    template: "%s | RCD Advocacia",
  },
  description:
    "Advocacia e assessoria jurídica para pessoas e empresas em Miguel Pereira, com atendimento responsável, claro e estratégico.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "RCD Advocacia | Advocacia e Assessoria Jurídica",
    description:
      "Orientação e assessoria jurídica para pessoas e empresas em Miguel Pereira e região.",
    type: "website",
    locale: "pt_BR",
    siteName: "RCD Advocacia",
  },
  twitter: {
    card: "summary_large_image",
    title: "RCD Advocacia | Advocacia e Assessoria Jurídica",
    description: "Atendimento jurídico responsável, claro e estratégico.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0e0e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
