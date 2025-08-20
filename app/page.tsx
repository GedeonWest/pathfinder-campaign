"use client"

import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TestComponents } from "@/components/test-components"
import type * as THREE from "three"

// Sand particle system for preloader with reveal effect
function SandParticles({ isRevealing }: { isRevealing: boolean }) {
  const ref = useRef<THREE.Points>(null!)
  const [positions] = useState(() => {
    const positions = new Float32Array(2000 * 3) // Increased particle count for reveal effect
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  })

  useFrame((state) => {
    if (ref.current) {
      if (isRevealing) {
        ref.current.rotation.x = state.clock.elapsedTime * 0.1
        ref.current.rotation.y = state.clock.elapsedTime * 0.15
        ref.current.position.y += 0.02 // Drift upward
        ref.current.position.x += Math.sin(state.clock.elapsedTime) * 0.01
      } else {
        ref.current.rotation.x = state.clock.elapsedTime * 0.05
        ref.current.rotation.y = state.clock.elapsedTime * 0.03
      }
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#d4af37"
        size={isRevealing ? 0.02 : 0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={isRevealing ? 0.3 : 0.7}
      />
    </Points>
  )
}

function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isRevealing, setIsRevealing] = useState(false)

  useEffect(() => {
    const revealTimer = setTimeout(() => {
      setIsRevealing(true)
    }, 1500)

    const completeTimer = setTimeout(() => {
      onComplete()
    }, 3500) // Extended time for reveal effect

    return () => {
      clearTimeout(revealTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center marble-bg transition-opacity duration-1000 ${isRevealing ? "opacity-0" : "opacity-100"}`}
    >
      <div className="w-full h-full opacity-80">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.4} />
          <SandParticles isRevealing={isRevealing} />
        </Canvas>
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${isRevealing ? "opacity-0" : "opacity-100"}`}
      >
        <div className="text-center">
          <div className="text-6xl mb-4 text-primary">⧫</div>
          <div className="text-primary text-xl font-serif">Ancient Sands Shifting...</div>
        </div>
      </div>
    </div>
  )
}

// Pyramid icon component
function PyramidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 20h-13L12 6.5z" />
    </svg>
  )
}

// Ankh icon component
function AnkhIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C10.34 2 9 3.34 9 5s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 8c-1.1 0-2-.9-2-2V7c-2.21 0-4 1.79-4 4v11h12V11c0-2.21-1.79-4-4-4v1c0 1.1-.9 2-2 2z" />
    </svg>
  )
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div
        className={`min-h-screen marble-bg transition-all duration-2000 ${isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
      >
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-40">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full sand-particle"
                style={{
                  left: "-10px",
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${4 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="mb-8">
              <svg className="w-24 h-24 mx-auto text-primary mb-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 20h-13L12 6.5z" />
              </svg>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-4 tracking-wide">Маски Мумии</h1>
            <h2 className="font-serif text-xl md:text-3xl text-primary/90 mb-8">Campaign</h2>
            <p className="text-lg md:text-xl text-foreground mb-12 max-w-2xl mx-auto font-sans">Pathfinder Adventure</p>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                document.getElementById("campaign-overview")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 20h-13L12 6.5z" />
              </svg>
              Explore the Campaign
            </Button>
          </div>
        </section>

        {/* Egyptian Map Section */}
        <section id="campaign-overview" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">The Ancient Lands</h2>
              <p className="text-base md:text-lg text-foreground/90 max-w-3xl mx-auto font-sans leading-relaxed">
                Explore the mystical realm of Osirion, where ancient pyramids hide forgotten secrets and mummy lords
                guard treasures beyond imagination.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <Card className="bg-card/95 backdrop-blur-sm border-primary/30 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-foreground/80 font-sans">Sessions Played</div>
                </CardContent>
              </Card>
              <Card className="bg-card/95 backdrop-blur-sm border-primary/30 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <div className="text-sm text-foreground/80 font-sans">Tombs Explored</div>
                </CardContent>
              </Card>
              <Card className="bg-card/95 backdrop-blur-sm border-primary/30 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">23</div>
                  <div className="text-sm text-foreground/80 font-sans">Enemies Defeated</div>
                </CardContent>
              </Card>
              <Card className="bg-card/95 backdrop-blur-sm border-primary/30 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">5,420</div>
                  <div className="text-sm text-foreground/80 font-sans">Gold Earned</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <Card className="bg-card/95 backdrop-blur-sm border-primary/30 shadow-2xl">
                <CardContent className="p-8">
                  <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg overflow-hidden">
                    <div className="absolute inset-4">
                      {/* Pyramids - key thematic elements */}
                      <div className="absolute top-1/4 left-1/3 text-primary">
                        <PyramidIcon className="w-8 h-8" />
                        <span className="text-xs font-semibold mt-1 block font-sans">Giza</span>
                      </div>
                      <div className="absolute top-1/2 right-1/4 text-primary">
                        <PyramidIcon className="w-6 h-6" />
                        <span className="text-xs font-semibold mt-1 block font-sans">Saqqara</span>
                      </div>

                      {/* River Nile */}
                      <div className="absolute top-0 left-1/2 w-2 h-full bg-blue-400/60 rounded-full transform -translate-x-1/2"></div>

                      {/* Desert dunes */}
                      <div className="absolute bottom-1/4 left-1/4 w-16 h-8 bg-amber-300/40 rounded-full"></div>
                      <div className="absolute top-1/3 right-1/3 w-12 h-6 bg-amber-300/40 rounded-full"></div>

                      {/* Egyptian hieroglyphs - thematic elements only */}
                      <div className="absolute top-1/6 left-1/6 text-primary/60 text-2xl">𓂀</div>
                      <div className="absolute bottom-1/6 right-1/6 text-primary/60 text-2xl">𓃭</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Campaign Overview */}
              <div className="space-y-6">
                <Card className="bg-card/95 backdrop-blur-sm border-primary/30">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4">The Mummy's Mask</h3>
                    <p className="text-foreground/90 leading-relaxed font-sans text-base">
                      In the ancient land of Osirion, the Ruby Prince has opened the lost city of Wati to explorers and
                      fortune-seekers. But beneath the sand-covered ruins lie secrets that have slumbered for millennia.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/95 backdrop-blur-sm border-primary/30">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg md:text-xl font-bold text-primary mb-3">Your Quest Awaits</h3>
                    <p className="text-foreground/90 leading-relaxed font-sans text-base">
                      Delve into forgotten tombs, uncover ancient mysteries, and face the undead guardians that protect
                      the treasures of pharaohs long dead. Will you claim the legendary Mummy's Mask, or become another
                      victim of the curse?
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                Latest Chronicle
              </h3>
              <Card className="bg-card/95 backdrop-blur-sm border-primary/30 max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-primary text-2xl">📜</div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-primary mb-2">Session 15: The Sunken Pyramid</h4>
                      <p className="text-sm text-foreground/70 font-sans mb-4">3 days ago</p>
                    </div>
                  </div>
                  <p className="text-foreground/90 leading-relaxed font-sans">
                    Our heroes descended into the flooded chambers beneath the Pyramid of Kheti III, where they
                    encountered the ancient guardian Sobek-Ra. After a fierce battle with crocodilian undead, they
                    discovered the Chamber of Golden Masks, but not without triggering a deadly trap that nearly claimed
                    Meldreth's life. The session ended with the party standing before a sealed door bearing the
                    cartouche of the forgotten pharaoh Ankh-ef-en-Sekhmet...
                  </p>
                  <div className="mt-4 pt-4 border-t border-primary/20">
                    <span className="text-sm text-primary font-semibold font-sans">
                      Next Session: The Pharaoh's Curse
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8 text-center">The Heroes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-card/95 backdrop-blur-sm border-primary/30 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl">⚔️</span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-primary mb-2">Meldreth</h4>
                    <p className="text-sm text-foreground/80 font-sans mb-1">Fighter • Level 5</p>
                    <p className="text-xs text-foreground/60 font-sans">Desert Warrior</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/95 backdrop-blur-sm border-primary/30 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl">✨</span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-primary mb-2">Khenti-Ka</h4>
                    <p className="text-sm text-foreground/80 font-sans mb-1">Cleric • Level 5</p>
                    <p className="text-xs text-foreground/60 font-sans">Priest of Ra</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/95 backdrop-blur-sm border-primary/30 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl">🗡️</span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-primary mb-2">Nefertiti</h4>
                    <p className="text-sm text-foreground/80 font-sans mb-1">Rogue • Level 4</p>
                    <p className="text-xs text-foreground/60 font-sans">Tomb Raider</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 bg-transparent">
                  <a href="/characters" className="flex items-center">
                    View All Characters
                    <AnkhIcon className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
