"use client"

import { Button } from "@/components/ui/button"
import { Crown } from "lucide-react"
import Link from "next/link"
import { getLink, getImagePath } from "@/lib/utils"
import Masonry from "react-masonry-css"
import { fetchAllCharacters } from "@/lib/characters"
import { HeroesIcon } from "../ui/icons/heroes"
import { ROUTES } from "@/lib/routes"
import { useEffect, useState } from "react"
import type { CharacterWithIcon } from "@/types/characters"

const initialCharacters: CharacterWithIcon[] = []

// Breakpoints для masonry
const breakpointColumns = {
  default: 5,
  1100: 4,
  700: 3,
  500: 3
}

export function CampaignHeroes() {
  const [characters, setCharacters] = useState<CharacterWithIcon[]>(initialCharacters)

  useEffect(() => {
    ;(async () => {
      try {
        const all = await fetchAllCharacters()
        setCharacters(all)
      } catch (e) {
        // no-op for GH Pages
      }
    })()
  }, [])

  return (
    <div>
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <HeroesIcon classNames="w-16 h-16 text-primary animate-glow-pulse" />
        </div>
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4 tracking-wider">ГЕРОИ КАМПАНИИ</h3>
        <div className="flex justify-center mb-6">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
        <p className="text-lg text-foreground/90 max-w-3xl mx-auto font-serif">
          Отважные искатели приключений, исследующие древние тайны Осириона
        </p>
      </div>

      <Masonry
        breakpointCols={breakpointColumns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character, index) => (
          <Link
            key={character.id}
            href={getLink(ROUTES.CHARACTER_DETAIL(character.id))}
            className="block mb-6 animate-fade-in-up group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-center hover:scale-105 transition-transform duration-300">
              {/* Изображение в арке */}
              <div className="flex justify-center mb-3">
                <div className="character-arch w-32 h-40 p-2">
                  <img
                    src={character.image ? getImagePath(character.image) : getImagePath("./placeholder.svg")}
                    alt={character.name}
                    className="w-full h-full object-cover rounded-t-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Информация о персонаже */}
              <div className="space-y-1">
                <h4 className="font-serif text-lg font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                  {character.name}
                </h4>

                <div className="text-sm text-foreground/90">
                  {character.class}
                </div>

                <div className="text-sm text-foreground/70">
                  Уровень {character.level}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Masonry>

      <div className="text-center mt-12">
        <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 bg-transparent px-8 py-3">
          <Link href={getLink(ROUTES.CHARACTERS)} className="flex items-center">
            Посмотреть всех персонажей
            <HeroesIcon classNames="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
