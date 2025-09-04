"use client"

import { Crown } from "lucide-react"
import Masonry from "react-masonry-css"
import { CharacterCard, CharacterCardBW } from "@/components/characters"
import { fetchAllCharacters, fetchCharactersBW } from "@/lib/characters"
import type { CharacterWithIcon, CharacterBWWithIcon } from "@/types/characters"
import { useEffect, useState } from "react"
import { HieroglyphCycler } from "@/components/ui"
import { Modal, ModalBody, ModalContent, ModalHeader, Button, Badge } from "@/components/ui"
import { getImagePath } from "@/lib/utils"
import { Coins, ArrowLeft } from "lucide-react"

export default function CharactersPage() {
  const [characters, setCharacters] = useState<CharacterWithIcon[]>([])
  const [charactersBW, setCharactersBW] = useState<CharacterBWWithIcon[]>([])
  const [active, setActive] = useState<CharacterWithIcon | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const [all, bw] = await Promise.all([
          fetchAllCharacters(),
          fetchCharactersBW(),
        ])
        setCharacters(all)
        setCharactersBW(bw)
      } catch (e) {
        // no-op on client for GH Pages
      }
    }
    load()
  }, [])

// Breakpoints для masonry
const breakpointColumns = {
  default: 2,
  1100: 2,
  700: 2,
  500: 1
}

  return (
    <div className="min-h-screen marble-bg">
      {characters.length === 0 && (
        <div className="flex items-center justify-center py-16">
          <HieroglyphCycler size="lg" />
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4 tracking-wider">ПЕРСОНАЖИ</h1>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-serif">
            Герои кампании "Mummy's Mask" - отважные искатели приключений, исследующие древние тайны
          </p>
        </div>



        {/* Второй блок - черно-белые карточки в шахматном порядке */}
        <section className="z-30 relative">
          <div className="chessboard-grid">
            {charactersBW.map((character, index) => (
              <div key={character.id} className="character-card">
                <CharacterCardBW character={character} index={index} onOpen={(c) => {
                  const full = characters.find(ch => ch.id === c.id) || null
                  setActive(full)
                }} />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Details Modal */}
      <Modal isOpen={!!active} onClose={() => setActive(null)}>
        <ModalContent className="w-full max-w-5xl md:rounded-xl md:overflow-hidden">
          <ModalHeader onClose={() => setActive(null)}>
            {active?.name}
          </ModalHeader>
          <ModalBody className="p-0">
            {active && (
              <div className="w-full">
                <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                  <img
                    src={active.image ? getImagePath(active.image) : getImagePath('./placeholder.svg')}
                    alt={active.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">{active.fullName}</h2>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <Badge variant="outline" className="bg-primary/20 text-primary border-primary/50 text-base px-3 py-1">
                        {active.class}
                      </Badge>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/50 text-base px-3 py-1">
                        Уровень {active.level}
                      </Badge>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/50 text-base px-3 py-1">
                        {active.race}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-white/90 text-lg">
                      <Coins className="w-5 h-5 text-primary" />
                      <span className="font-bold">{active.gold.toLocaleString()} золота</span>
                    </div>
                  </div>
                </div>

                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="bg-card/95 backdrop-blur-sm rounded-lg border border-primary/20 p-6 shadow-xl">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-4">Предыстория</h3>
                    <div className="prose prose-lg prose-invert max-w-none">
                      {active.backstory.split('\n\n').map((p, i) => (
                        <p key={i} className="text-foreground/90 leading-relaxed mb-4 font-serif text-base md:text-lg">{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}
