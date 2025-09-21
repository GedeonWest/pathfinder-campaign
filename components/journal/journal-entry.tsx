"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import { JournalEntry } from "@/types/journal"
import { formatDateRu } from "@/lib/utils"

interface JournalEntryProps {
  entry: JournalEntry
  index: number
  isExpanded: boolean
  onToggle: (id: number) => void
}

export function JournalEntryComponent({ entry, index, isExpanded, onToggle }: JournalEntryProps) {
  return (
    <Card
      className="animate-fade-in-up hover:shadow-lg transition-all duration-300 bg-card/95 backdrop-blur-sm border-primary/30"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="cursor-pointer" onClick={() => onToggle(entry.id)}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                Сессия {entry.session}
              </Badge>
              <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
                {entry.type}
              </Badge>
            </div>

            <CardTitle className="font-serif text-xl mb-2 text-primary">{entry.title}</CardTitle>

            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70 mb-2">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{formatDateRu(entry.date)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{entry.location}</span>
              </div>
            </div>

            <CardDescription className="text-sm text-foreground/80">{entry.summary}</CardDescription>
          </div>

          <Button variant="ghost" size="sm" className="ml-4 text-primary hover:text-primary/80 hover:bg-primary/10">
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0 animate-fade-in-up">
          <div className="border-t border-primary/20 pt-4">
            <div className="prose prose-sm max-w-none text-foreground/90">
              {entry.content.split("\n\n").map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4 leading-relaxed font-serif">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
