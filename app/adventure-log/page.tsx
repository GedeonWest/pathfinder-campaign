"use client"

import { useEffect, useState } from "react"
import { fetchAllJournalEntries } from "@/lib/journal"
import { HieroglyphCycler } from "@/components/ui"
import { JournalList, Timeline } from "@/components/journal"

export default function AdventureLogPage() {
  const [expandedEntry, setExpandedEntry] = useState<number | null>(null)
  const [journalEntries, setJournalEntries] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const data = await fetchAllJournalEntries()
        setJournalEntries(data as any)
      } catch (e) {
        // no-op
      }
    })()
  }, [])

  const toggleEntry = (id: number) => {
    setExpandedEntry(expandedEntry === id ? null : id)
  }

  return (
    <div className="min-h-screen marble-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {journalEntries.length === 0 && (
          <div className="flex items-center justify-center py-6">
            <HieroglyphCycler />
          </div>
        )}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Дневник приключений</h1>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto font-serif">
            Хронология эпических событий кампании "Mummy's Mask"
          </p>
        </div>

        <JournalList
          entries={journalEntries}
          expandedEntry={expandedEntry}
          onToggleEntry={toggleEntry}
        />

        <Timeline entries={journalEntries} />
      </div>
    </div>
  )
}
