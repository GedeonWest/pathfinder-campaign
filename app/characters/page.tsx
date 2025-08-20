"use client"

import { useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import type * as THREE from "three"

function SandstormParticles() {
  const ref = useRef<THREE.Points>(null!)
  const [positions] = useState(() => {
    const positions = new Float32Array(800 * 3) // Reduced particle count
    for (let i = 0; i < 800; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return positions
  })

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.01
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
      ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 1
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#d4af37" size={0.012} sizeAttenuation={true} depthWrite={false} opacity={0.5} />
    </Points>
  )
}

// Egyptian-themed icons
function ScarabIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z" />
      <circle cx="10" cy="8" r="1" />
      <circle cx="14" cy="8" r="1" />
    </svg>
  )
}

function AnkhIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C10.34 2 9 3.34 9 5s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 8c-1.1 0-2-.9-2-2V7c-2.21 0-4 1.79-4 4v11h12V11c0-2.21-1.79-4-4-4v1c0 1.1-.9 2-2 2z" />
    </svg>
  )
}

function ScepterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6z" />
      <rect x="11" y="8" width="2" height="14" rx="1" />
    </svg>
  )
}

// Character data
const characters = [
  {
    id: 1,
    name: "Meldreth",
    class: "Fighter",
    level: 5,
    image: "/egyptian-bronze-warrior.png",
    icon: "scarab",
    gold: 1200,
    backstory:
      "Born in the shadow of the great pyramids, Meldreth learned the art of combat from the temple guards of Ra. His bronze armor bears the sacred scarab, symbol of rebirth and protection. Having witnessed the awakening of ancient evils, he now stands as a bulwark against the darkness that threatens to consume the living world.",
  },
  {
    id: 2,
    name: "Khaemwaset",
    class: "Cleric",
    level: 4,
    image: "/placeholder-sr55w.png",
    icon: "ankh",
    gold: 850,
    backstory:
      "A devoted servant of Pharasma, Khaemwaset was raised in the temple of the Lady of Graves. His divine magic flows through the sacred ankh he carries, channeling the power to heal the living and put the restless dead to eternal rest. The ancient prophecies speak of his role in the coming trials.",
  },
  {
    id: 3,
    name: "Nefertiti",
    class: "Rogue",
    level: 5,
    image: "/egyptian-assassin.png",
    icon: "scarab",
    gold: 1450,
    backstory:
      "Once a tomb robber who learned her craft in the winding passages beneath Wati, Nefertiti now uses her skills for a greater purpose. Her twin curved daggers have tasted the ichor of undead horrors, and her knowledge of ancient traps has saved her companions countless times.",
  },
  {
    id: 4,
    name: "Amenhotep",
    class: "Wizard",
    level: 4,
    image: "/egyptian-scholar-scrolls.png",
    icon: "ankh",
    gold: 920,
    backstory:
      "A scholar of the ancient arts, Amenhotep has spent years studying the hieroglyphic texts that line the walls of forgotten tombs. His spellbook contains secrets that predate the current age, and his understanding of necromantic magic makes him invaluable in the fight against the undead.",
  },
  {
    id: 5,
    name: "Sekhmet",
    class: "Barbarian",
    level: 5,
    image: "/egyptian-lion-warrior.png",
    icon: "scarab",
    gold: 1100,
    backstory:
      "Named after the lioness goddess of war, Sekhmet channels primal fury in battle. Her rage burns like the desert sun, and her strength rivals that of the great sphinxes. Tribal scars mark her arms, each one representing a victory over the forces of darkness.",
  },
  {
    id: 6,
    name: "Imhotep",
    class: "Oracle",
    level: 4,
    image: "/egyptian-mystic-glowing-eyes.png",
    icon: "ankh",
    gold: 780,
    backstory:
      "Blessed and cursed with visions of the future, Imhotep serves as the party's guide through the treacherous paths of fate. His oracle's curse manifests as golden eyes that see beyond the veil of time, revealing glimpses of what was, what is, and what may yet come to pass.",
  },
]

export default function CharactersPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<(typeof characters)[0] | null>(null)

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "scarab":
        return <ScarabIcon className="w-6 h-6 text-primary" />
      case "ankh":
        return <AnkhIcon className="w-6 h-6 text-primary" />
      default:
        return <ScarabIcon className="w-6 h-6 text-primary" />
    }
  }

  if (selectedCharacter) {
    // Internal detailed view
    return (
      <div className="min-h-screen marble-bg">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => setSelectedCharacter(null)}
            className="mb-8 text-primary hover:text-primary/80 hover:bg-primary/10 font-sans"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
            Back to Heroes
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card/98 backdrop-blur-sm border-primary/30 shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img
                    src={
                      selectedCharacter.image ||
                      "/placeholder.svg?height=400&width=400&query=Egyptian warrior portrait" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg"
                    }
                    alt={selectedCharacter.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">{getIcon(selectedCharacter.icon)}</div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="border-b border-primary/20 pb-4">
                    <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                      {selectedCharacter.name}
                    </h1>
                    <div className="flex items-center space-x-4 text-lg font-sans">
                      <span className="text-foreground/90">{selectedCharacter.class}</span>
                      <span className="text-primary">•</span>
                      <span className="text-foreground/90">Level {selectedCharacter.level}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                      <span className="font-semibold text-foreground/90 font-sans">Gold</span>
                      <span className="text-primary font-bold text-xl font-sans">{selectedCharacter.gold} GP</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-primary mb-3">Backstory</h3>
                    <p className="text-foreground/90 leading-relaxed font-sans text-base">
                      {selectedCharacter.backstory}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // External grid view
  return (
    <div className="min-h-screen marble-bg">
      {/* Hero Section with Sandstorm */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight intensity={0.2} />
            <SandstormParticles />
          </Canvas>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-4 tracking-wide">Meet the Heroes</h1>
          <p className="text-lg md:text-xl text-foreground/90 font-sans">
            Brave souls who dare to face the ancient mysteries
          </p>
        </div>
      </section>

      {/* Character Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full">
              {characters.map((character) => (
                <div
                  key={character.id}
                  className="hover:bg-primary/5 transition-all duration-300 cursor-pointer transform hover:scale-102 rounded-lg p-2"
                  onClick={() => setSelectedCharacter(character)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-20 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center egyptian-arch flex-shrink-0 rounded">
                      <img
                        src={character.image || "/placeholder.svg?height=80&width=64&query=Egyptian character portrait"}
                        alt={character.name}
                        className="w-full h-full object-cover rounded"
                      />
                      <div className="absolute top-1 right-1 z-10">{getIcon(character.icon)}</div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-bold text-primary mb-1">{character.name}</h3>
                      <div className="flex items-center space-x-3 text-sm mb-1">
                        <span
                          className={`font-medium px-2 py-1 rounded text-xs ${
                            character.class === "Fighter"
                              ? "bg-red-500/20 text-red-300"
                              : character.class === "Cleric"
                                ? "bg-blue-500/20 text-blue-300"
                                : character.class === "Rogue"
                                  ? "bg-purple-500/20 text-purple-300"
                                  : character.class === "Wizard"
                                    ? "bg-indigo-500/20 text-indigo-300"
                                    : character.class === "Barbarian"
                                      ? "bg-orange-500/20 text-orange-300"
                                      : character.class === "Oracle"
                                        ? "bg-yellow-500/20 text-yellow-300"
                                        : "bg-gray-500/20 text-gray-300"
                          }`}
                        >
                          {character.class}
                        </span>
                        <span className="text-primary font-semibold">Level {character.level}</span>
                        <span className="text-yellow-400 font-medium">{character.gold} GP</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
