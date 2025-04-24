import type { Metadata } from "next";
import { Syne, Ropa_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ReactLenis } from "@/utils/lenis";

const ropaSans = Ropa_Sans({
  variable: "--font-ropa-sans",
  subsets: ["latin"],
  weight: "400",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Alfi",
  description: "Alfian's portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ropaSans.variable} ${syne.variable} antialiased`}>
        <ReactLenis root>
          <ThemeProvider>{children}</ThemeProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
