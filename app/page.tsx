"use client"

import { useState } from "react"
import { Preloader, MainHero, CampaignOverview } from "@/components/sections"
import { EgyptianHieroglyphs, AnkhSymbol, EyeSymbol, LongText } from "@/components/ui"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div
        className={`min-h-screen marble-bg transition-all duration-2000 ${isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
      >
        <MainHero
          onExploreClick={() => {
            document.getElementById("campaign-overview")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }}
        />

        {/* Демонстрация египетских иероглифов */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-8">
              Древние Египетские Иероглифы
            </h2>

            {/* Отдельные символы */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              <AnkhSymbol size="xl" className="text-amber-700" />
              <EyeSymbol size="xl" className="text-amber-600" />
              <AnkhSymbol size="xl" className="text-amber-500" />
            </div>

            <p className="text-lg text-amber-700 mb-8">
              Символы древнего Египта оживают на вашем экране
            </p>

            {/* Длинный текст */}
            <div className="max-w-4xl mx-auto">
              <LongText size="md" className="text-center" />
            </div>

            {/* Все доступные иероглифы */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-amber-800 mb-6">
                Все Доступные Символы
              </h3>
              <EgyptianHieroglyphs size="md" />
            </div>
          </div>
        </section>

        <CampaignOverview />
      </div>
    </>
  )
}
