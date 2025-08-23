"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Ankh icon component
function AnkhIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C10.34 2 9 3.34 9 5s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 8c-1.1 0-2-.9-2-2V7c-2.21 0-4 1.79-4 4v11h12V11c0-2.21-1.79-4-4-4v1c0 1.1-.9 2-2 2z" />
    </svg>
  )
}

export function CampaignHeroes() {
  return (
    <div>
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Герои</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-card/95 backdrop-blur-sm border-primary/30 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">⚔️</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-primary mb-2">Meldreth</h4>
            <p className="text-sm text-foreground/80 font-sans mb-1">Боец • Уровень 5</p>
            <p className="text-xs text-foreground/60 font-sans">Пустынный воин</p>
          </CardContent>
        </Card>

        <Card className="bg-card/95 backdrop-blur-sm border-primary/30 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">✨</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-primary mb-2">Khenti-Ka</h4>
            <p className="text-sm text-foreground/80 font-sans mb-1">Жрец • Уровень 5</p>
            <p className="text-xs text-foreground/60 font-sans">Жрец Ра</p>
          </CardContent>
        </Card>

        <Card className="bg-card/95 backdrop-blur-sm border-primary/30 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🗡️</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-primary mb-2">Nefertiti</h4>
            <p className="text-sm text-foreground/80 font-sans mb-1">Плут • Уровень 4</p>
            <p className="text-xs text-foreground/60 font-sans">Расхититель гробниц</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 bg-transparent">
          <a href="/characters" className="flex items-center">
            Посмотреть всех персонажей
            <AnkhIcon className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  )
}
