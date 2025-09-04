import { JournalEntry } from '@/types/journal'
import { fetchSheet } from './google-sheets'

export async function fetchAllJournalEntries(): Promise<JournalEntry[]> {
  const rows = await fetchSheet('Journal!A1:Z')
  return rows.map((row) => ({
    id: Number(row.id) || 0,
    title: row.title,
    date: row.date,
    location: row.location,
    session: Number(row.session) || 0,
    type: row.type,
    summary: row.summary,
    content: row.content,
  }))
}

export async function fetchJournalEntryById(id: number): Promise<JournalEntry | undefined> {
  const all = await fetchAllJournalEntries()
  return all.find((e) => e.id === id)
}

export async function fetchJournalEntriesByType(type: string): Promise<JournalEntry[]> {
  const all = await fetchAllJournalEntries()
  return all.filter((e) => e.type === type)
}
