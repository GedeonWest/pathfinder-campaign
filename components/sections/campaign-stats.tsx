"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { fetchGeneralStats, fetchSessionStats } from "@/lib/statistics"
import { HieroglyphCycler } from "@/components/ui"
import { Sword, Shield, Crosshair, Check, X, Zap, ArrowRight } from "lucide-react"

export function CampaignStats() {
  const [sessionsCount, setSessionsCount] = useState<number | null>(null)
  const [enemiesKilled, setEnemiesKilled] = useState<number | null>(null)
  const [artifactsFound, setArtifactsFound] = useState<number | null>(null)
  const [gold, setGold] = useState<number | null>(null)
  const [ourCritsByMaster, setOurCritsByMaster] = useState<number | null>(null)
  const [masterCritsNotConfirmed, setMasterCritsNotConfirmed] = useState<number | null>(null)
  const [ourCritsNotConfirmed, setOurCritsNotConfirmed] = useState<number | null>(null)
  const [dashConfirmedParry, setDashConfirmedParry] = useState<number | null>(null)

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
        // Новые поля — если отсутствуют в таблице, считаем 0
        setOurCritsByMaster(general.masterCritsByDash ?? 0)
        setMasterCritsNotConfirmed((general as any).masterCritsNotConfirmed ?? 0)
        setOurCritsNotConfirmed((general as any).ourCritsNotConfirmed ?? 0)
        setDashConfirmedParry((general as any).dashConfirmedParry ?? 0)
      } catch (e) {
        // no-op
      }
    })()
  }, [])

  const skeleton = (
    <div className="h-8 w-16 mx-auto bg-primary/20 rounded animate-pulse" />
  )

  const statCard = (value: number | null, label: string, icon?: React.ReactNode) => (
    <Card className="bg-card/95 backdrop-blur-sm border-primary/30 text-center">
      <CardContent className="p-6">
        <div className="flex items-center justify-center gap-2 text-3xl font-bold text-primary mb-2">
          {icon}
          {value === null ? skeleton : value.toLocaleString()}
        </div>
        <div className="text-sm text-foreground/80 font-sans">{label}</div>
      </CardContent>
    </Card>
  )

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {statCard(sessionsCount, "Сыгранных сессий", <ArrowRight className="w-6 h-6" />)}
      {statCard(artifactsFound, "Найдено артефактов", <Zap className="w-6 h-6" />)}
      {statCard(enemiesKilled, "Побежденных врагов", <Crosshair className="w-6 h-6" />)}
      {statCard(gold, "Заработано золота", <Shield className="w-6 h-6" />)}

      {statCard(ourCritsByMaster, "Наши криты по мастеру", <Sword className="w-6 h-6" />)}
      {statCard(masterCritsNotConfirmed, "Неподтв. криты мастера", <X className="w-6 h-6" />)}
      {statCard(ourCritsNotConfirmed, "Наши неподтв. криты", <X className="w-6 h-6" />)}
      {statCard(dashConfirmedParry, "Паррирование Даши (успеш.)", <Check className="w-6 h-6" />)}
    </div>
  )
}
