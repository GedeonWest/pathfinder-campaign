import type { NPC } from '@/types/npcs'
import { fetchSheet, toBoolean } from './google-sheets'
import { toArray } from './google-sheets'

function normalizeHostility(value: string | undefined): NPC['hostility'] | undefined {
  const v = (value || '').toLowerCase()
  if (v === 'friendly') return 'friendly'
  if (v === 'neutral') return 'neutral'
  if (v === 'hostile') return 'hostile'
  return undefined
}

function normalizeStatus(value: string | undefined): NPC['status'] | undefined {
  const v = (value || '').toLowerCase()
  if (v === 'alive') return 'alive'
  if (v === 'dead') return 'dead'
  if (v === 'unknown') return 'unknown'
  return undefined
}

export async function fetchNPCs(): Promise<NPC[]> {
  const rows = await fetchSheet('NPCs!A1:Z')
  return rows.map((row) => ({
    id: row.id,
    fullName: row.fullName,
    role: row.role,
    faction: row.faction,
    location: row.location,
    description: row.description,
    image: row.image,
    hostility: normalizeHostility(row.hostility),
    status: normalizeStatus(row.status),
    tags: toArray(row.tags),
  }))
}


