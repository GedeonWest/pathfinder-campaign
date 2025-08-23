"use client"

import { JournalEntry } from "@/types/journal"
import { JournalEntryComponent } from "./journal-entry"

interface JournalListProps {
  entries: JournalEntry[]
  expandedEntry: number | null
  onToggleEntry: (id: number) => void
}

export function JournalList({ entries, expandedEntry, onToggleEntry }: JournalListProps) {
  return (
    <div className="space-y-6">
      {entries.map((entry, index) => (
        <JournalEntryComponent
          key={entry.id}
          entry={entry}
          index={index}
          isExpanded={expandedEntry === entry.id}
          onToggle={onToggleEntry}
        />
      ))}
    </div>
  )
}
