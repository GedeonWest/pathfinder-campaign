"use client"

import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { Card, CardContent } from "@/components/ui/card"
import type * as THREE from "three"

// Sand drift animation for hero section
function SandDrift() {
  const ref = useRef<THREE.Points>(null!)
  const [positions] = useState(() => {
    const positions = new Float32Array(800 * 3)
    for (let i = 0; i < 800; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  })

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      ref.current.rotation.y = state.clock.elapsedTime * 0.02

      // Drift effect
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(state.clock.elapsedTime + i) * 0.001
        positions[i + 1] += Math.cos(state.clock.elapsedTime + i) * 0.0005
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#d4af37" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
    </Points>
  )
}

// Sphinx head icon component
function SphinxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.69 2 6 4.69 6 8v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8c0-3.31-2.69-6-6-6zm-2 8V8c0-1.1.9-2 2-2s2 .9 2 2v2h-4zm-2 4v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-6H8z" />
    </svg>
  )
}

// Egyptian artifact icons
function MummyHandIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 11H7l1.5-7.5c.83-.83 2.17-.83 3 0L13 11h-2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h2l-1.5 7.5c-.83.83-2.17.83-3 0L9 14h2c.83 0 1.5-.67 1.5-1.5S11.83 11 11 11H9z" />
    </svg>
  )
}

function PapyrusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
    </svg>
  )
}

function ScarabIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
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

function CandleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.5 1C8.67 1 8 1.67 8 2.5S8.67 4 9.5 4 11 3.33 11 2.5 10.33 1 9.5 1zm2.5 6v14c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V7h-6zm-1 0H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6V7z" />
    </svg>
  )
}

export default function AdventureLogPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const timelineEntries = [
    {
      id: 1,
      date: "3 days ago",
      title: "Session 15: The Sunken Pyramid",
      description:
        "Our heroes descended into the flooded chambers beneath the Pyramid of Kheti III, where they encountered the ancient guardian Sobek-Ra. After a fierce battle with crocodilian undead, they discovered the Chamber of Golden Masks, but not without triggering a deadly trap that nearly claimed Meldreth's life.",
      icon: <MummyHandIcon className="w-6 h-6" />,
    },
    {
      id: 2,
      date: "1 week ago",
      title: "Session 14: The Whispering Sands",
      description:
        "The party ventured into the Desert of Forgotten Names, following ancient star charts to locate the entrance to Kheti III's tomb. They battled sand elementals and solved the riddle of the Sphinx's Gate, earning passage to the pyramid's hidden entrance.",
      icon: <PapyrusIcon className="w-6 h-6" />,
    },
    {
      id: 3,
      date: "2 weeks ago",
      title: "Session 13: Secrets of the Ruby Prince",
      description:
        "In the grand library of Wati, the heroes uncovered disturbing evidence that the Ruby Prince may not be who he claims to be. Ancient texts speak of a curse that binds the royal bloodline to the undead pharaohs of old.",
      icon: <ScarabIcon className="w-6 h-6" />,
    },
    {
      id: 4,
      date: "3 weeks ago",
      title: "Session 12: The Necropolis Awakens",
      description:
        "Strange tremors shook the city of Wati as the party delved deeper into the Necropolis. They discovered that their actions have begun to awaken something ancient and terrible that slumbers beneath the city.",
      icon: <AnkhIcon className="w-6 h-6" />,
    },
    {
      id: 5,
      date: "1 month ago",
      title: "Session 11: The Cult of the Forgotten Pharaoh",
      description:
        "The heroes infiltrated a secret cult meeting in the abandoned quarter of Wati, learning of a plot to resurrect Ankh-ef-en-Sekhmet, the Pharaoh of Forgotten Names. They barely escaped with their lives and crucial intelligence.",
      icon: <CandleIcon className="w-6 h-6" />,
    },
    {
      id: 6,
      date: "1 month ago",
      title: "Session 10: The Merchant's Gambit",
      description:
        "A seemingly simple escort mission for a wealthy merchant turned deadly when the caravan was attacked by mummy-wrapped assassins. The party discovered the merchant was smuggling cursed artifacts from forbidden tombs.",
      icon: <PapyrusIcon className="w-6 h-6" />,
    },
    {
      id: 7,
      date: "5 weeks ago",
      title: "Session 9: The First Seal",
      description:
        "Deep within the Tomb of Akhentepi, the heroes broke the first of seven seals that bind the ancient evil. As the seal shattered, they felt a malevolent presence stir in the depths below, and the very walls began to bleed sand.",
      icon: <MummyHandIcon className="w-6 h-6" />,
    },
  ]

  return (
    <div
      className={`min-h-screen marble-bg transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}
    >
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.3} />
            <SandDrift />
          </Canvas>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6 tracking-wide">
            Chronicle of Маски Мумии
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto font-sans leading-relaxed">
            The recorded adventures of brave souls who dare to disturb the eternal rest of ancient pharaohs
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            <div className="space-y-12">
              {timelineEntries.map((entry, index) => (
                <div key={entry.id} className="relative flex items-start space-x-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-card/95 backdrop-blur-sm border-2 border-primary/40 rounded-full flex items-center justify-center shadow-lg">
                      <div className="text-primary">{entry.icon}</div>
                    </div>
                  </div>

                  <Card className="flex-1 bg-card/95 backdrop-blur-sm border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">{entry.title}</h3>
                          <p className="text-sm text-foreground/70 font-sans">{entry.date}</p>
                        </div>
                      </div>

                      <p className="text-foreground/90 leading-relaxed font-sans text-base">{entry.description}</p>

                      <div className="mt-4 pt-4 border-t border-primary/20">
                        <div className="flex items-center space-x-2 text-primary/60">
                          <div className="text-xs">𓂀</div>
                          <div className="flex-1 h-px bg-primary/20"></div>
                          <div className="text-xs">𓃭</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
