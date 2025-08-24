export interface Material {
  id: string
  name: string
  type: 'armor' | 'weapon' | 'clothing' | 'tool' | 'map' | 'scroll' | 'note' | 'image' | 'misc'
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
  selectedLocation?: string
  selectedSession?: string
  showCollectedOnly?: boolean
  sortBy?: 'name' | 'date' | 'type'
}
