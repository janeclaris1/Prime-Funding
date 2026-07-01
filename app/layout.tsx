import { ThemeProvider } from "@/components/theme-provider"
import { CtaFormProvider } from "@/components/shared/CtaFormProvider"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Playfair_Display, Inter } from "next/font/google"
import type { Metadata, Viewport } from "next"
import "@/styles/globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: {
    default: "Prime Funding | Investments & Loans",
    template: "%s | Prime Funding",
  },
  description:
    "Expert investment management and flexible loan solutions. Grow your wealth with Prime Funding.",
  keywords: [
    "investments",
    "loans",
    "finance",
    "wealth management",
    "financial services",
  ],
  openGraph: { type: "website", siteName: "Prime Funding" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CtaFormProvider>
            <Navbar />
            <main className="min-h-screen pt-16">{children}</main>
            <Footer />
          </CtaFormProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
