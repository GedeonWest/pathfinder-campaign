export interface SheetRowObject {
  [key: string]: string
}

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SPREADSHEET_ID as string
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY as string

function getSheetsApiUrl(range: string): string {
  if (!SPREADSHEET_ID || !API_KEY) {
    throw new Error('Google Sheets API: missing NEXT_PUBLIC_GOOGLE_SHEETS_SPREADSHEET_ID or NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY')
  }
  const base = 'https://sheets.googleapis.com/v4/spreadsheets'
  return `${base}/${encodeURIComponent(SPREADSHEET_ID)}/values/${encodeURIComponent(range)}?key=${encodeURIComponent(API_KEY)}`
}

export async function fetchSheet(range: string): Promise<SheetRowObject[]> {
  const url = getSheetsApiUrl(range)
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error(`Google Sheets API error for range ${range}: ${res.status} ${res.statusText}`)
  }
  const data: { values?: string[][] } = await res.json()
  const values = data.values || []
  if (values.length === 0) return []
  const headers = values[0]
  const rows = values.slice(1)
  return rows.map((row) => {
    const obj: SheetRowObject = {}
    headers.forEach((header, idx) => {
      obj[header] = (row[idx] ?? '').trim()
    })
    return obj
  })
}

export function toNumber(value: string): number {
  if (!value) return 0
  const n = Number(value)
  return Number.isFinite(n) ? n : 0
}

export function toBoolean(value: string): boolean {
  return String(value).toLowerCase() === 'true' || String(value).toLowerCase() === 'yes'
}

export function toArray(value: string): string[] {
  if (!value) return []
  return value.split(',').map((v) => v.trim()).filter(Boolean)
}



