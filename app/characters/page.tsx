"use client"

import { Crown } from "lucide-react"
import Masonry from "react-masonry-css"
import { CharacterCard, CharacterCardBW } from "@/components/characters"
import { getAllCharacters, getCharactersBW } from "@/lib/characters"
import type { CharacterWithIcon, CharacterBWWithIcon } from "@/types/characters"

const characters: CharacterWithIcon[] = getAllCharacters()
const charactersBW: CharacterBWWithIcon[] = getCharactersBW()

// Breakpoints для masonry
const breakpointColumns = {
  default: 2,
  1100: 2,
  700: 2,
  500: 1
}

export default function CharactersPage() {
  return (
    <div className="min-h-screen marble-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4 tracking-wider">ПЕРСОНАЖИ</h1>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-serif">
            Герои кампании "Маски Мумии" - отважные искатели приключений, исследующие древние тайны
          </p>
        </div>



        {/* Второй блок - черно-белые карточки в шахматном порядке */}
        <section className="z-30 relative">
          <div className="chessboard-grid">
            {charactersBW.map((character, index) => (
              <div key={character.id} className="character-card">
                <CharacterCardBW character={character} index={index} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
