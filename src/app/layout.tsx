import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import {Montserrat} from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
const mainFontFamily = Montserrat({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: "--font-family-main",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mainFontFamily.variable}>
      <body >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
