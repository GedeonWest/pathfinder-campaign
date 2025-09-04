import { Character, CharacterWithIcon, CharacterBWWithIcon } from '@/types/characters'
import { Sword, Shield, Sparkles, Eye } from 'lucide-react'
import { fetchSheet, toNumber } from './google-sheets'

const iconMap = {
  'Sword': Sword,
  'Shield': Shield,
  'Sparkles': Sparkles,
  'Eye': Eye
}

export async function fetchAllCharacters(): Promise<CharacterWithIcon[]> {
  const rows = await fetchSheet('Characters!A1:Z')
  return rows.map((row) => {
    const base: Character = {
      id: row.id,
      name: row.name,
      fullName: row.fullName,
      class: row.class,
      level: toNumber(row.level),
      race: row.race,
      description: row.description,
      image: row.image,
      classIcon: row.classIcon,
      color: row.color,
      gold: toNumber(row.gold),
      backstory: row.backstory,
      pdf: row.pdf,
    }
    return {
      ...base,
      classIcon: iconMap[base.classIcon as keyof typeof iconMap] || Sword,
    }
  })
}

export async function fetchCharacterById(id: string): Promise<CharacterWithIcon | undefined> {
  const all = await fetchAllCharacters()
  return all.find((c) => c.id === id)
}

export async function fetchCharactersBW(): Promise<CharacterBWWithIcon[]> {
  const all = await fetchAllCharacters()
  return all.map((char) => ({
    id: char.id,
    name: char.name,
    class: char.class,
    image: char.image,
    classIcon: (char as any).classIcon,
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
