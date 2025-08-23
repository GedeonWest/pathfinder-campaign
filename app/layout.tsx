import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import Header from "@/components/header"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "Маски Мумии - Приключение Pathfinder",
  description: "Войдите в древний мир египетских тайн в нашей кампании Pathfinder Маска мумии",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
