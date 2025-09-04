"use client"

import { LucideIcon } from "lucide-react"
import { getImagePath } from "@/lib/utils"

export interface CharacterBW {
  id: string
  name: string
  class: string
  image: string
  classIcon: LucideIcon
}

interface CharacterCardBWProps {
  character: CharacterBW
  index: number
  onOpen?: (character: CharacterBW) => void
}

export function CharacterCardBW({ character, index, onOpen }: CharacterCardBWProps) {
  const IconComponent = character.classIcon

  return (
    <div
    className="character-card animate-fade-in-up group"
    style={{ animationDelay: `${index * 0.2}s` }}
  onClick={() => onOpen?.(character)}
  >
      <div className="relative overflow-hidden rounded-lg cursor-pointer">
        {/* Изображение персонажа */}
        <div className="w-full h-[450px] relative">
          <img
            src={character.image ? getImagePath(character.image) : getImagePath("./placeholder.svg")}
            alt={character.name}
            className="w-full h-full object-cover"
          />
          {/* Затемнение для лучшей читаемости текста */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Информация о персонаже */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-serif text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
            {character.name}
          </h3>
          <div className="flex items-center space-x-2 text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            <IconComponent className="w-4 h-4" />
            <span>{character.class}</span>
          </div>
        </div>
      </div>

  </div>
  )
}


