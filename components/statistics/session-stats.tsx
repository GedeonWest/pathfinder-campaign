"use client"

import { Card, CardContent } from "@/components/ui/card"
import { SessionStat } from "@/types/statistics"
import { Calendar, MapPin, Sword, Skull } from "lucide-react"

interface SessionStatsProps {
  stats: SessionStat[]
}

export function SessionStatsComponent({ stats }: SessionStatsProps) {
  return (
    <Card className="bg-card/95 backdrop-blur-sm border-primary/30 shadow-2xl overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div className="absolute inset-0 opacity-10">
            <div className="text-primary/30 text-6xl absolute top-4 left-4">𓂀</div>
            <div className="text-primary/30 text-6xl absolute top-4 right-4">𓃭</div>
            <div className="text-primary/30 text-6xl absolute bottom-4 left-4">𓊖</div>
            <div className="text-primary/30 text-6xl absolute bottom-4 right-4">𓋹</div>
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary/10 border-b-2 border-primary/30">
                <tr>
                  <th className="px-6 py-4 text-left font-serif font-bold text-primary text-base">Сессия</th>
                  <th className="px-6 py-4 text-left font-serif font-bold text-primary text-base">Местоположение</th>
                  <th className="px-6 py-4 text-left font-serif font-bold text-primary text-base">Результат</th>
                  <th className="px-6 py-4 text-left font-serif font-bold text-primary text-base">Статистика</th>
                </tr>
              </thead>
              <tbody>
                {stats.map((stat, index) => (
                  <tr
                    key={stat.session}
                    className={`border-b border-primary/20 hover:bg-primary/5 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-background/50" : "bg-card/30"
                    }`}
                  >
                    <td className="px-6 py-4 font-sans text-foreground font-semibold text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{stat.session}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-sans text-foreground/90 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{stat.location}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-sans text-foreground/90 text-sm">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          stat.outcome.startsWith("Победа")
                            ? "bg-green-500/20 text-green-300"
                            : stat.outcome.startsWith("Частично")
                              ? "bg-yellow-500/20 text-yellow-300"
                              : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {stat.outcome}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-sans text-foreground/90 text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Sword className="w-3 h-3 text-primary" />
                          <span className="text-xs">{stat.enemiesKilled}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-primary text-xs">💎</span>
                          <span className="text-xs">{stat.treasuresFound}</span>
                        </div>
                        {stat.deaths > 0 && (
                          <div className="flex items-center space-x-1">
                            <Skull className="w-3 h-3 text-red-400" />
                            <span className="text-xs text-red-400">{stat.deaths}</span>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
