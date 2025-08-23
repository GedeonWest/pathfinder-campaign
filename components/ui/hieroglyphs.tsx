"use client"

import { useEffect, useState } from "react"

// Египетские символы для анимации (используем более совместимые символы)
const hieroglyphs = [
  "☥", "☤", "☣", "☢", "☡", "☠", "☟", "☞", "☝", "☜",
  "☛", "☚", "☙", "☘", "☗", "☖", "☕", "☔", "☓", "☒",
  "☑", "☐", "☏", "☎", "☍", "☌", "☋", "☊", "☉", "☈"
]

interface HieroglyphsProps {
  className?: string
  speed?: number
  glowIntensity?: number
}

export function Hieroglyphs({
  className = "",
  speed = 2000,
  glowIntensity = 0.8
}: HieroglyphsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [clickedIndex, setClickedIndex] = useState<number | null>(null)

  useEffect(() => {
    // Задержка перед началом анимации
    const startTimer = setTimeout(() => setIsVisible(true), 500)

    // Анимация появления иероглифов
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hieroglyphs.length)
    }, speed)

    return () => {
      clearTimeout(startTimer)
      clearInterval(interval)
    }
  }, [speed])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex space-x-2">
        {hieroglyphs.map((hieroglyph, index) => {
          const isActive = index === currentIndex
          const isNext = index === (currentIndex + 1) % hieroglyphs.length
          const isPrev = index === (currentIndex - 1 + hieroglyphs.length) % hieroglyphs.length

          return (
            <span
              key={index}
              className={`
                text-4xl md:text-6xl transition-all duration-1000 ease-out cursor-pointer
                ${isActive
                  ? 'text-yellow-400 scale-125 opacity-100 hieroglyph-active'
                  : isNext || isPrev
                    ? 'text-yellow-300 scale-110 opacity-70'
                    : 'text-yellow-200 scale-100 opacity-30'
                }
                ${isVisible ? 'translate-x-0' : '-translate-x-full'}
                ${clickedIndex === index ? 'animate-pulse' : ''}
              `}
              onClick={() => {
                setClickedIndex(index)
                // Добавляем звуковой эффект (опционально)
                try {
                  const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT')
                  audio.volume = 0.1
                  audio.play()
                } catch (e) {
                  // Игнорируем ошибки воспроизведения звука
                }
                setTimeout(() => setClickedIndex(null), 1000)
              }}
              style={{
                textShadow: isActive
                  ? `0 0 20px rgba(251, 191, 36, ${glowIntensity}), 0 0 40px rgba(251, 191, 36, ${glowIntensity * 0.6})`
                  : isNext || isPrev
                    ? `0 0 10px rgba(251, 191, 36, ${glowIntensity * 0.5})`
                    : 'none',
                animationDelay: `${index * 100}ms`,
                transitionDelay: `${index * 50}ms`
              }}
            >
              {hieroglyph}
            </span>
          )
        })}
      </div>

      {/* Дополнительный эффект свечения */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${(currentIndex / hieroglyphs.length) * 100}% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)`,
          transition: 'all 1s ease-out'
        }}
      />
    </div>
  )
}

// Компонент для бегущей строки с иероглифами
interface RunningHieroglyphsProps {
  className?: string
  text?: string
  speed?: number
}

export function RunningHieroglyphs({
  className = "",
  text = "Древние тайны ждут...",
  speed = 20
}: RunningHieroglyphsProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => prev + 1)
    }, speed)

    return () => clearInterval(interval)
  }, [speed])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="whitespace-nowrap text-yellow-400 text-2xl md:text-3xl font-bold"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          textShadow: '0 0 15px rgba(251, 191, 36, 0.8), 0 0 30px rgba(251, 191, 36, 0.6)',
          transition: 'transform 0.1s linear'
        }}
      >
        {text} • {text} • {text} • {text}
      </div>

      {/* Градиент для плавного исчезновения */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-transparent to-background pointer-events-none" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-transparent to-background pointer-events-none" />
    </div>
  )
}
