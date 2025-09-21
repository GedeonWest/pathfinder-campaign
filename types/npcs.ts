export interface NPC {
  id: string
  fullName: string
  role: string
  faction?: string
  location?: string
  description: string
  image: string
  hostility?: 'friendly' | 'neutral' | 'hostile'
  status?: 'alive' | 'dead' | 'unknown'
  tags: string[]
}


