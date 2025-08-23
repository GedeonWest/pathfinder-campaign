"use client"

import { Badge } from "@/components/ui/badge"
import { JournalEntry } from "@/types/journal"

interface TimelineProps {
  entries: JournalEntry[]
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
      <h2 className="font-serif text-2xl font-bold text-center mb-8 text-primary">Временная линия приключений</h2>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/30"></div>

        {entries.map((entry, index) => (
          <div
            key={entry.id}
            className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
              <div className="bg-card/95 backdrop-blur-sm border border-primary/30 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-serif font-semibold text-sm mb-1 text-primary">{entry.title}</h3>
                <p className="text-xs text-foreground/70 mb-2">{entry.date}</p>
                <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                  Сессия {entry.session}
                </Badge>
              </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
