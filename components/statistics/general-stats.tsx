"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GeneralStats } from "@/types/statistics"
import { Skull, Sword, Crown, Map, Target } from "lucide-react"

interface GeneralStatsProps {
  stats: GeneralStats
}

export function GeneralStatsComponent({ stats }: GeneralStatsProps) {
  return (
    <div className="space-y-8">
      {/* Смерти */}
      <Card className="bg-card/95 backdrop-blur-sm border-primary/30 shadow-xl">
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-primary flex items-center space-x-2">
            <Skull className="w-6 h-6" />
            <span>Смерти</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {stats.deaths.length > 0 ? (
            <div className="space-y-3">
              {stats.deaths.map((death, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-primary/20">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-serif font-semibold text-foreground">{death.character}</span>
                      <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                        Сессия {death.session}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground/80 mb-1">{death.cause}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-foreground/70">{death.resurrectionMethod}</span>
                      <Badge
                        variant={death.resurrected ? "secondary" : "outline"}
                        className={`text-xs ${!death.resurrected ? "text-red-400 border-red-400/50" : ""}`}
                      >
                        {death.resurrected ? "Воскрешен" : "Погиб окончательно"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-foreground/70 text-center py-4">Пока смертей не было =(</p>
          )}
        </CardContent>
      </Card>

      {/* Основные метрики */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card/95 backdrop-blur-sm border-primary/30 shadow-xl">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-primary flex items-center space-x-2">
              <Sword className="w-5 h-5" />
              <span>Боевая статистика</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-foreground/80">Всего убито противников:</span>
              <span className="font-serif font-bold text-primary text-xl">{stats.totalEnemiesKilled}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground/80">Убито особой нежити:</span>
              <span className="font-serif font-bold text-primary text-xl">{stats.undeadKilled}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground/80">Убито боссов:</span>
              <span className="font-serif font-bold text-primary text-xl">{stats.bossesKilled.length}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/95 backdrop-blur-sm border-primary/30 shadow-xl">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-primary flex items-center space-x-2">
              <Crown className="w-5 h-5" />
              <span>Прогресс кампании</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-foreground/80">Пройдено арок:</span>
              <span className="font-serif font-bold text-primary text-xl">
                {stats.arcsCompleted} / {stats.totalArcs}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground/80">Открыто важных мест:</span>
              <span className="font-serif font-bold text-primary text-xl">{stats.importantLocationsDiscovered}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground/80">Найдены артефакты:</span>
              <span className="font-serif font-bold text-primary text-xl">{stats.artifactsFound}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Дополнительные метрики */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card/95 backdrop-blur-sm border-primary/30 shadow-xl text-center">
          <CardContent className="p-6">
            <Map className="w-8 h-8 mx-auto text-primary mb-3" />
            <div className="text-3xl font-bold text-primary mb-2">{stats.mapsDrawn}</div>
            <div className="text-sm text-foreground/80 font-sans">Зарисовано карт</div>
          </CardContent>
        </Card>

        <Card className="bg-card/95 backdrop-blur-sm border-primary/30 shadow-xl text-center">
          <CardContent className="p-6">
            <Target className="w-8 h-8 mx-auto text-primary mb-3" />
            <div className="text-3xl font-bold text-primary mb-2">{stats.masterCritsTotal}</div>
            <div className="text-sm text-foreground/80 font-sans">Критов мастера всего</div>
          </CardContent>
        </Card>

        <Card className="bg-card/95 backdrop-blur-sm border-primary/30 shadow-xl text-center">
          <CardContent className="p-6">
            <div className="text-primary text-2xl mb-3">🎯</div>
            <div className="text-3xl font-bold text-primary mb-2">{stats.masterCritsByDash}</div>
            <div className="text-sm text-foreground/80 font-sans">Критов мастера по Даше</div>
          </CardContent>
        </Card>
      </div>

      {/* Список убитых боссов */}
      {stats.bossesKilled.length > 0 && (
        <Card className="bg-card/95 backdrop-blur-sm border-primary/30 shadow-xl">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-primary flex items-center space-x-2">
              <Crown className="w-6 h-6" />
              <span>Побежденные боссы</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stats.bossesKilled.map((boss, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-primary/20">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-serif font-semibold text-foreground">{boss.name}</span>
                      <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                        Сессия {boss.session}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground/80 mb-1">{boss.location}</p>
                    <p className="text-xs text-foreground/70">Убит: {boss.killedBy}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
