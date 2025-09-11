import type { Material, MaterialFilter } from '@/types/materials'
import { fetchSheet, toArray, toBoolean } from './google-sheets'

export async function fetchMaterials(): Promise<Material[]> {
  const rows = await fetchSheet('Materials!A1:Z')
  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    type: row.type,
    description: row.description,
    imageUrl: row.imageUrl,
    location: row.location,
    dateFound: row.dateFound,
    tags: toArray(row.tags),
    isCollected: toBoolean(row.isCollected),
    collectedBy: row.collectedBy,
    sessionFound: row.sessionFound,
  }))
}

export async function fetchMaterialById(id: string): Promise<Material | undefined> {
  const all = await fetchMaterials()
  return all.find((m) => m.id === id)
}

export function filterMaterials(materials: Material[], filters: MaterialFilter): Material[] {
  return materials.filter(material => {
    // Поиск по тексту
    const matchesSearch = filters.searchQuery === '' ||
      material.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      material.description.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      material.tags.some(tag => tag.toLowerCase().includes(filters.searchQuery.toLowerCase()))

    // Фильтр по типу
    const matchesType = filters.selectedType === 'all' || material.type === filters.selectedType

    // Фильтр по локации
    const matchesLocation = !filters.selectedLocation || filters.selectedLocation === 'all' ||
      material.location === filters.selectedLocation

    // Фильтр по сессии
    const matchesSession = !filters.selectedSession || filters.selectedSession === 'all' ||
      material.sessionFound === filters.selectedSession

    // Фильтр по статусу сбора
    const matchesCollection = !filters.showCollectedOnly || material.isCollected

    return matchesSearch && matchesType && matchesLocation && matchesSession && matchesCollection
  })
}

export function getUniqueLocations(materials: Material[]): string[] {
  const locations = materials
    .map(material => material.location)
    .filter((location): location is string => !!location)

  return [...new Set(locations)].sort()
}

export function getUniqueSessions(materials: Material[]): string[] {
  const sessions = materials
    .map(material => material.sessionFound)
    .filter((session): session is string => !!session)

  return [...new Set(sessions)].sort()
}

export function getMaterialsByType(materials: Material[]): Record<string, Material[]> {
  const grouped: Record<string, Material[]> = {
    armor: [],
    weapon: [],
    clothing: [],
    tool: [],
    map: [],
    scroll: [],
    note: [],
    image: [],
    misc: []
  }

  materials.forEach(material => {
    const key = (material.type as keyof typeof grouped) || 'misc'
    if (!grouped[key]) {
      grouped.misc.push(material)
      return
    }
    grouped[key].push(material)
  })

  return grouped
}

export function getCollectionStats(materials: Material[]) {
  const total = materials.length
  const collected = materials.filter(material => material.isCollected).length
  const uncollected = total - collected

  return {
    total,
    collected,
    uncollected
  }
}

export function getMaterialsByCharacter(materials: Material[], characterName: string): Material[] {
  return materials.filter(material => material.collectedBy === characterName)
}

export function sortMaterials(materials: Material[], sortBy: 'name' | 'date' | 'type' | 'id'): Material[] {
  const sorted = [...materials]

  switch (sortBy) {
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'date':
      return sorted.sort((a, b) => {
        if (!a.dateFound && !b.dateFound) return 0
        if (!a.dateFound) return 1
        if (!b.dateFound) return -1
        return new Date(a.dateFound).getTime() - new Date(b.dateFound).getTime()
      })
    case 'type':
      return sorted.sort((a, b) => a.type.localeCompare(b.type))
    case 'id':
      return sorted.sort((a, b) => String(a.id).localeCompare(String(b.id)))
    default:
      return sorted
  }
}
