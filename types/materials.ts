export interface Material {
  id: string
  name: string
  type: 'map' | 'scroll' | 'artifact' | 'note' | 'image'
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary'
  description: string
  imageUrl?: string
  location?: string
  dateFound?: string
  tags: string[]
  isCollected?: boolean
  collectedBy?: string
  sessionFound?: string
}

export interface MaterialCategory {
  id: string
  name: string
  description: string
  icon: string
  count: number
}

export interface MaterialFilter {
  searchQuery: string
  selectedType: string
  selectedRarity: string
  selectedLocation?: string
  selectedSession?: string
  showCollectedOnly?: boolean
}
