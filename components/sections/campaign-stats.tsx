"use client"

import { Card, CardContent } from "@/components/ui/card"

export function CampaignStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      <Card className="bg-card/95 backdrop-blur-sm border-primary/30 text-center">
        <CardContent className="p-6">
          <div className="text-3xl font-bold text-primary mb-2">15</div>
          <div className="text-sm text-foreground/80 font-sans">Сыгранных сессий</div>
        </CardContent>
      </Card>
      <Card className="bg-card/95 backdrop-blur-sm border-primary/30 text-center">
        <CardContent className="p-6">
          <div className="text-3xl font-bold text-primary mb-2">7</div>
          <div className="text-sm text-foreground/80 font-sans">Исследованных гробниц</div>
        </CardContent>
      </Card>
      <Card className="bg-card/95 backdrop-blur-sm border-primary/30 text-center">
        <CardContent className="p-6">
          <div className="text-3xl font-bold text-primary mb-2">23</div>
          <div className="text-sm text-foreground/80 font-sans">Побежденных врагов</div>
        </CardContent>
      </Card>
      <Card className="bg-card/95 backdrop-blur-sm border-primary/30 text-center">
        <CardContent className="p-6">
          <div className="text-3xl font-bold text-primary mb-2">5,420</div>
          <div className="text-sm text-foreground/80 font-sans">Заработано золота</div>
        </CardContent>
      </Card>
    </div>
  )
}
