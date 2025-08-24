import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import Header from "@/components/header"
import { AdaptiveBackgroundMatrix } from "@/components/ui"
import "./globals.css"

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
      { url: 'favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: 'favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: 'favicon.ico',
    apple: 'apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: 'android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: 'android-chrome-512x512.png',
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
                <link rel="stylesheet" type="text/css" href="hierojax/hierojax.css" />
        <script type="text/javascript" src="hierojax/hierojax.js" defer></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Функция для инициализации HieroJax
              function initHieroJax() {
                console.log('Initializing HieroJax...');
                if (window.hierojax) {
                  console.log('HieroJax found, processing fragments...');
                  try {
                    window.hierojax.processFragments();
                    console.log('HieroJax processing completed');
                  } catch (error) {
                    console.error('HieroJax processing error:', error);
                  }
                } else {
                  console.log('HieroJax not found yet, retrying...');
                  // Повторяем попытку через 100ms
                  setTimeout(initHieroJax, 100);
                }
              }

              // Запускаем инициализацию после загрузки DOM
              window.addEventListener("DOMContentLoaded", initHieroJax);

              // Дополнительная проверка после полной загрузки страницы
              window.addEventListener("load", () => {
                console.log('Page fully loaded, final HieroJax check...');
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
