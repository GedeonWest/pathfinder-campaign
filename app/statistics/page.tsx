"use client"

import { fetchGeneralStats, fetchSessionStats } from "@/lib/statistics"
import { GeneralStatsComponent, SessionStatsComponent } from "@/components/statistics"
import { useEffect, useState } from "react"

export default function StatisticsPage() {
  const [generalStats, setGeneralStats] = useState<any>(null)
  const [sessionStats, setSessionStats] = useState<any[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const [g, s] = await Promise.all([
          fetchGeneralStats(),
          fetchSessionStats(),
        ])
        setGeneralStats(g)
        setSessionStats(s)
      } catch (e) {
        // no-op
      }
    })()
  }, [])

  return (
    <div className="min-h-screen marble-bg">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-4 tracking-wide">Статистика кампании</h1>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto font-serif">
            Хроники нашего путешествия по древним землям Осириона
          </p>
        </div>
      </section>

      {/* General Statistics Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Общая статистика
          </h2>
          {generalStats && <GeneralStatsComponent stats={generalStats} />}
        </div>
      </section>

      {/* Session Statistics Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Хроники сессий
          </h2>
          <SessionStatsComponent stats={sessionStats} />
        </div>
      </section>
    </div>
  )
}
