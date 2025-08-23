export interface JournalEntry {
  id: number
  title: string
  date: string
  location: string
  session: number
  type: string
  summary: string
  content: string
}

export interface JournalData {
  journalEntries: JournalEntry[]
}
