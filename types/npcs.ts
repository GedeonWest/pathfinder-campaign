export interface NPC {
  id: string
  name: string
  fullName?: string
  role: string
  faction?: string
  location?: string
  description: string
  image: string
  hostility?: 'friendly' | 'neutral' | 'hostile'
  importance?: 'primary' | 'secondary' | 'minor'
  lastSeen?: string
  status?: 'alive' | 'dead' | 'unknown'
  tags: string[]
  notes?: string
}


