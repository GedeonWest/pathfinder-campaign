export interface Character {
  id: string
  name: string
  fullName: string
  class: string
  level: number
  race: string
  description: string
  image: string
  classIcon: string
  color: string
  gold: number
  backstory: string
}

export interface CharacterBW {
  id: string
  name: string
  class: string
  image: string
  classIcon: string
}

// Типы для совместимости с компонентами
export interface CharacterWithIcon {
  id: string
  name: string
  fullName: string
  class: string
  level: number
  race: string
  description: string
  image: string
  classIcon: any // LucideIcon
  color: string
  gold: number
  backstory: string
}

export interface CharacterBWWithIcon {
  id: string
  name: string
  class: string
  image: string
  classIcon: any // LucideIcon
}

export interface CharactersData {
  characters: Character[]
}
