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
    class: "Боец",
    level: 5,
    image: "/egyptian-bronze-warrior.png",
    icon: "scarab",
    gold: 1200,
    backstory:
      "Родившийся в тени великих пирамид, Мелдрет изучил искусство боя у храмовых стражей Ра. Его бронзовые доспехи несут священный скарабей, символ возрождения и защиты. Став свидетелем пробуждения древних зол, он теперь стоит как оплот против тьмы, которая угрожает поглотить мир живых.",
  },
  {
    id: 2,
    name: "Khaemwaset",
    class: "Жрец",
    level: 4,
    image: "/placeholder-sr55w.png",
    icon: "ankh",
    gold: 850,
    backstory:
      "Преданный слуга Фарасмы, Хаэмвасет был воспитан в храме Леди Могил. Его божественная магия течет через священный анх, который он несет, направляя силу исцелять живых и приводить беспокойных мертвецов к вечному покою. Древние пророчества говорят о его роли в грядущих испытаниях.",
  },
  {
    id: 3,
    name: "Nefertiti",
    class: "Плут",
    level: 5,
    image: "/egyptian-assassin.png",
    icon: "scarab",
    gold: 1450,
    backstory:
      "Когда-то расхитительница гробниц, изучившая свое ремесло в извилистых проходах под Вати, Нефертити теперь использует свои навыки для более высокой цели. Ее парные изогнутые кинжалы вкусили икру неживых ужасов, а знание древних ловушек бесчисленное количество раз спасало ее спутников.",
  },
  {
    id: 4,
    name: "Amenhotep",
    class: "Волшебник",
    level: 4,
    image: "/egyptian-scholar-scrolls.png",
    icon: "ankh",
    gold: 920,
    backstory:
      "Ученый древних искусств, Аменхотеп провел годы, изучая иероглифические тексты, которые покрывают стены забытых гробниц. Его книга заклинаний содержит секреты, которые предшествуют нынешней эпохе, а понимание некромантической магии делает его бесценным в борьбе против нежити.",
  },
  {
    id: 5,
    name: "Sekhmet",
    class: "Варвар",
    level: 5,
    image: "/egyptian-lion-warrior.png",
    icon: "scarab",
    gold: 1100,
    backstory:
      "Названная в честь богини войны-львицы, Секхмет направляет первобытную ярость в бою. Ее гнев горит как пустынное солнце, а сила соперничает с силой великих сфинксов. Племенные шрамы отмечают ее руки, каждый из которых представляет победу над силами тьмы.",
  },
  {
    id: 6,
    name: "Imhotep",
    class: "Оракул",
    level: 4,
    image: "/egyptian-mystic-glowing-eyes.png",
    icon: "ankh",
    gold: 780,
    backstory:
      "Благословленный и проклятый видениями будущего, Имхотеп служит проводником группы через коварные пути судьбы. Его проклятие оракула проявляется как золотые глаза, которые видят за завесой времени, раскрывая проблески того, что было, что есть и что может еще произойти.",
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
            Назад к героям
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
                      <span className="text-foreground/90">Уровень {selectedCharacter.level}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                      <span className="font-semibold text-foreground/90 font-sans">Золото</span>
                      <span className="text-primary font-bold text-xl font-sans">{selectedCharacter.gold} ЗМ</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-primary mb-3">История</h3>
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
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-4 tracking-wide">Познакомьтесь с героями</h1>
          <p className="text-lg md:text-xl text-foreground/90 font-sans">
            Храбрые души, которые осмеливаются столкнуться с древними тайнами
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
                            character.class === "Боец"
                              ? "bg-red-500/20 text-red-300"
                              : character.class === "Жрец"
                                ? "bg-blue-500/20 text-blue-300"
                                : character.class === "Плут"
                                  ? "bg-purple-500/20 text-purple-300"
                                  : character.class === "Волшебник"
                                    ? "bg-indigo-500/20 text-indigo-300"
                                    : character.class === "Варвар"
                                      ? "bg-orange-500/20 text-orange-300"
                                      : character.class === "Оракул"
                                        ? "bg-yellow-500/20 text-yellow-300"
                                        : "bg-gray-500/20 text-gray-300"
                          }`}
                        >
                          {character.class}
                        </span>
                        <span className="text-primary font-semibold">Уровень {character.level}</span>
                        <span className="text-yellow-400 font-medium">{character.gold} ЗМ</span>
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
