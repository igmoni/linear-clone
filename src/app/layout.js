import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import ThemeProvider from "@/providers/ThemeProvider"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Agenforce Marketing Template - Mohan",
  description:
    "Agenforce is a multipurpose marketing template built with Next.js and Tailwind CSS.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"   // ✅ FIXED TYPO
          enableSystem
          disableTransitionOnChange
        >
          <main className="bg-background text-foreground">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
