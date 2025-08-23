import materialsData from '@/data/materials.json'
import type { Material, MaterialFilter } from '@/types/materials'

export function getMaterials(): Material[] {
  return materialsData.materials
}

export function getMaterialById(id: string): Material | undefined {
  return materialsData.materials.find(material => material.id === id)
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
    if (grouped[material.type]) {
      grouped[material.type].push(material)
    }
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
    uncollected,
    collectionRate: total > 0 ? Math.round((collected / total) * 100) : 0
  }
}

export function getMaterialsByCharacter(materials: Material[], characterName: string): Material[] {
  return materials.filter(material => material.collectedBy === characterName)
}

export function sortMaterials(materials: Material[], sortBy: 'name' | 'date' | 'type'): Material[] {
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
    default:
      return sorted
  }
}
