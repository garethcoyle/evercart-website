import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.evercart.io"),
  title: {
    default: "Evercart — Premium e-commerce, simply done",
    template: "%s — Evercart",
  },
  description:
    "Evercart is the e-commerce platform for online stores that take design seriously. Currently in beta. Launching summer 2026.",
  openGraph: {
    type: "website",
    siteName: "Evercart",
    title: "Evercart — Premium e-commerce, simply done",
    description:
      "The e-commerce platform for online stores that take design seriously.",
    images: ["/og-image.png"],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evercart — Premium e-commerce, simply done",
    description:
      "The e-commerce platform for online stores that take design seriously.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={manrope.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
