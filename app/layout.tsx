import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import Header from "@/components/header"
import { AdaptiveBackgroundMatrix } from "@/components/ui"
import "./globals.css"
import { getImagePath } from "@/lib/utils"

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "Mummy's Mask - Приключение Pathfinder",
  description: "Войдите в древний мир египетских тайн в нашей кампании Pathfinder Маска мумии",
  generator: "v0.app",
  icons: {
    icon: [
      { url: getImagePath('/favicon-16x16.png'), sizes: '16x16', type: 'image/png' },
      { url: getImagePath('/favicon-32x32.png'), sizes: '32x32', type: 'image/png' },
    ],
    shortcut: getImagePath('/favicon.ico'),
    apple: getImagePath('/apple-touch-icon.png'),
    other: [
      {
        rel: 'android-chrome-192x192',
        url: getImagePath('/android-chrome-192x192.png'),
      },
      {
        rel: 'android-chrome-512x512',
        url: getImagePath('/android-chrome-512x512.png'),
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <head>
                <link rel="stylesheet" type="text/css" href={getImagePath("./hierojax/hierojax.css")} />
        <script type="text/javascript" src={getImagePath("./hierojax/hierojax.js")} defer></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Функция для инициализации HieroJax
              function initHieroJax() {
                if (window.hierojax) {
                  try {
                    window.hierojax.processFragments();
                  } catch (error) {
                    // Silent error handling
                  }
                } else {
                  // Повторяем попытку через 100ms
                  setTimeout(initHieroJax, 100);
                }
              }

              // Запускаем инициализацию после загрузки DOM
              window.addEventListener("DOMContentLoaded", initHieroJax);

              // Дополнительная проверка после полной загрузки страницы
              window.addEventListener("load", () => {
                if (window.hierojax) {
                  window.hierojax.processFragments();
                }
              });
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased relative">
        {/* Фоновая матричная анимация */}
        <AdaptiveBackgroundMatrix />

        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
