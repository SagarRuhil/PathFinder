import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PathFinder",
  description: "Find your dream tech job and learn new skills",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-gradient-to-r from-purple-100 to-blue-100 py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="text-gray-700">© {new Date().getFullYear()} PathFinder. All rights reserved.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <Link href="/about" className="text-purple-600 hover:text-purple-800 transition-colors">
                  About
                </Link>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
