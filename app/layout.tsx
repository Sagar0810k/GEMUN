import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "GEMUN 2025: Graphic Era Hill University Model United Nations Conference",
  description: "Join us for GRAMUN 2025, the Graphic Era Hill University Model United Nations Conference. Engage in diplomacy, debate global issues with 500+ delegates, and participate in 8 specialized committees. Get insights from distinguished chief guests.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-sans: ${montserrat.variable};
  --font-serif: ${openSans.variable};
}
        `}</style>
        <link rel="icon" href="/MUN Logo 1.ico" />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}