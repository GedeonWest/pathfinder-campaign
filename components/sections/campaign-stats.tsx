"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { fetchGeneralStats, fetchSessionStats } from "@/lib/statistics"
import { HieroglyphCycler } from "@/components/ui"

export function CampaignStats() {
  const [sessionsCount, setSessionsCount] = useState<number | null>(null)
  const [enemiesKilled, setEnemiesKilled] = useState<number | null>(null)
  const [artifactsFound, setArtifactsFound] = useState<number | null>(null)
  const [gold, setGold] = useState<number | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const [general, sessions] = await Promise.all([
          fetchGeneralStats(),
          fetchSessionStats(),
        ])
        setSessionsCount(sessions.length)
        setEnemiesKilled(general.totalEnemiesKilled ?? 0)
        // Заменим «исследованных гробниц» на «найдено артефактов», если гробниц нет
        setArtifactsFound(general.artifactsFound ?? 0)
        // Золото: если нет в данных — показываем 0
        setGold(0)
      } catch (e) {
        // no-op
      }
    })()
  }, [])

  const skeleton = (
    <div className="h-8 w-16 mx-auto bg-primary/20 rounded animate-pulse" />
  )

  const statCard = (value: number | null, label: string) => (
    <Card className="bg-card/95 backdrop-blur-sm border-primary/30 text-center">
      <CardContent className="p-6">
        <div className="text-3xl font-bold text-primary mb-2">
          {value === null ? skeleton : value.toLocaleString()}
        </div>
        <div className="text-sm text-foreground/80 font-sans">{label}</div>
      </CardContent>
    </Card>
  )

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {statCard(sessionsCount, "Сыгранных сессий")}
      {statCard(artifactsFound, "Найдено артефактов")}
      {statCard(enemiesKilled, "Побежденных врагов")}
      {statCard(gold, "Заработано золота")}
    </div>
  )
}
