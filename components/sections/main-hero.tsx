"use client"

import { Hieroglyphs } from "@/components/ui"

interface MainHeroProps {
  onExploreClick: () => void
}

export function MainHero({ onExploreClick }: MainHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sand particles background */}
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
        <div className="mb-3">
          <img src='/logo.png' className="w-64 h-64 mx-auto text-primary mb-0" style={{ filter: 'drop-shadow(0 0 10px oklch(85.2% 0.199 91.936)) !important' }} />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-4 tracking-wide">Mummy's Mask</h1>
        <h2 className="font-serif text-xl md:text-3xl text-primary/90 mb-8">Здесь будет имя пачки</h2>

        {/* Анимированные иероглифы */}
        <div className="mb-8">
          <Hieroglyphs
            className="mb-6"
            speed={1500}
            glowIntensity={0.9}
          />
        </div>

        {/* Интерактивная подсказка */}
        <div
          className="text-primary/70 text-lg font-serif cursor-pointer hover:text-primary transition-colors duration-300"
          onClick={onExploreClick}
        >
          Нажмите, чтобы исследовать...
        </div>
      </div>
    </section>
  )
}
