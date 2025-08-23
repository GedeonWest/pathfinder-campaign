import charactersData from '@/data/characters.json'
import { Character, CharacterBW, CharacterWithIcon, CharacterBWWithIcon } from '@/types/characters'
import { Sword, Shield, Sparkles, Eye } from 'lucide-react'

const iconMap = {
  'Sword': Sword,
  'Shield': Shield,
  'Sparkles': Sparkles,
  'Eye': Eye
}

export function getAllCharacters(): CharacterWithIcon[] {
  return charactersData.characters.map(char => ({
    ...char,
    classIcon: iconMap[char.classIcon as keyof typeof iconMap] || Sword
  }))
}

export function getCharacterById(id: string): CharacterWithIcon | undefined {
  const char = charactersData.characters.find(char => char.id === id)
  if (!char) return undefined

  return {
    ...char,
    classIcon: iconMap[char.classIcon as keyof typeof iconMap] || Sword
  }
}

export function getCharactersBW(): CharacterBWWithIcon[] {
  return charactersData.characters.map(char => ({
    id: char.id,
    name: char.name,
    class: char.class,
    image: char.image,
    classIcon: iconMap[char.classIcon as keyof typeof iconMap] || Sword
  }))
}

export function getCharacterIcon(iconName: string) {
  const iconMap: Record<string, string> = {
    'Sword': '⚔️',
    'Shield': '🛡️',
    'Sparkles': '✨',
    'Eye': '👁️'
  }
  return iconMap[iconName] || '⚔️'
}
