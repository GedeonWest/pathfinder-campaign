import journalData from '@/data/journal.json'
import { JournalEntry } from '@/types/journal'

export function getAllJournalEntries(): JournalEntry[] {
  return journalData.journalEntries
}

export function getJournalEntryById(id: number): JournalEntry | undefined {
  return journalData.journalEntries.find(entry => entry.id === id)
}

export function getJournalEntriesByType(type: string): JournalEntry[] {
  return journalData.journalEntries.filter(entry => entry.type === type)
}
