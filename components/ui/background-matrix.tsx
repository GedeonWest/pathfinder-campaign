'use client'

import React, { useEffect, useState, useRef } from 'react'

interface BackgroundMatrixProps {
  className?: string
  intensity?: 'light' | 'medium' | 'heavy'
}

interface FallingHieroglyph {
  id: number
  symbol: string
  x: number
  y: number
  speed: number
  opacity: number
  glow: number
  size: number
  isGlowing: boolean
  glowColor: 'amber' | 'primary'
}

// Готовые иероглифы для фоновой матрицы
const BACKGROUND_SYMBOLS = [
  '𓌢', '𓂀', '𓇳', '𓇾', '𓈖', '𓈋', '𓉐', '𓀀', '𓁐', '𓀔',
  '𓃭', '𓅓', '𓆛', '𓆏', '𓆣', '𓏏', '𓊪', '𓋴', '𓂻', '𓂋'
]

export function BackgroundMatrix({
  className = '',
  intensity = 'medium'
}: BackgroundMatrixProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [fallingHieroglyphs, setFallingHieroglyphs] = useState<FallingHieroglyph[]>([])
  const animationRef = useRef<number>()

  // Настройки интенсивности
  const intensityConfig = {
    light: { count: 15, speed: 0.8, opacity: 0.3, glow: 0.4 },
    medium: { count: 25, speed: 1.2, opacity: 0.4, glow: 0.6 },
    heavy: { count: 35, speed: 1.6, opacity: 0.5, glow: 0.8 }
  }

  const config = intensityConfig[intensity]

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()

    // Создаем начальные падающие иероглифы
    const createFallingHieroglyph = (): FallingHieroglyph => ({
      id: Math.random() * 1000000,
      symbol: BACKGROUND_SYMBOLS[Math.floor(Math.random() * BACKGROUND_SYMBOLS.length)],
      x: Math.random() * containerRect.width,
      y: -50 - Math.random() * 200,
      speed: 0.3 + Math.random() * config.speed,
      opacity: 0.1 + Math.random() * config.opacity,
      glow: 0.2 + Math.random() * config.glow,
      size: 1.5 + Math.random() * 2.5, // Рандомный размер от 1.5rem до 4rem
      isGlowing: Math.random() > 0.7, // 30% шанс что иероглиф будет светиться
      glowColor: Math.random() > 0.5 ? 'amber' : 'primary' // 50/50 шанс цвета свечения
    })

    const initialHieroglyphs = Array.from(
      { length: config.count },
      () => createFallingHieroglyph()
    )

    setFallingHieroglyphs(initialHieroglyphs)

    // Анимация падения
    const animate = () => {
      setFallingHieroglyphs(prev => {
        return prev.map(hieroglyph => {
          let newY = hieroglyph.y + hieroglyph.speed

          // Если иероглиф вышел за пределы экрана, создаем новый
          if (newY > containerRect.height + 100) {
            return createFallingHieroglyph()
          }

          return { ...hieroglyph, y: newY }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Запускаем анимацию с задержкой
    const startAnimation = setTimeout(() => {
      animate()
    }, 1000)

    return () => {
      clearTimeout(startAnimation)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [config.count, config.speed, config.opacity, config.glow])

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-[10] overflow-hidden ${className}`}
    >
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/1 to-amber-500/3" />

      {/* Падающие иероглифы */}
      {fallingHieroglyphs.map((hieroglyph) => (
        <div
          key={hieroglyph.id}
          className={`absolute font-['Hieroglyphic'] select-none ${
            hieroglyph.isGlowing
              ? hieroglyph.glowColor === 'primary'
                ? 'text-primary'
                : 'text-amber-400'
              : 'text-amber-400/40'
          }`}
          style={{
            left: hieroglyph.x,
            top: hieroglyph.y,
            opacity: hieroglyph.opacity,
            fontSize: `${hieroglyph.size}rem`,
            textShadow: hieroglyph.isGlowing
              ? hieroglyph.glowColor === 'primary'
                ? `
                  0 0 12px var(--primary),
                  0 0 24px var(--primary),
                  0 0 36px var(--primary)
                `
                : `
                  0 0 12px rgba(251, 191, 36, ${hieroglyph.glow}),
                  0 0 24px rgba(251, 191, 36, ${hieroglyph.glow}),
                  0 0 36px rgba(251, 191, 36, ${hieroglyph.glow * 0.7})
                `
              : `
                0 0 8px rgba(251, 191, 36, ${hieroglyph.glow}),
                0 0 16px rgba(251, 191, 36, ${hieroglyph.glow * 0.5})
              `,
            transition: `opacity 0.3s ease-in-out, text-shadow 0.5s ease-in-out`
          }}
        >
          {hieroglyph.symbol}
        </div>
      ))}

      {/* Дополнительный эффект свечения снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-500/5 to-transparent" />
    </div>
  )
}

// Компонент с автоматическим определением интенсивности
export function AdaptiveBackgroundMatrix({ className = '' }: { className?: string }) {
  const [intensity, setIntensity] = useState<'light' | 'medium' | 'heavy'>('medium')

  useEffect(() => {
    // Определяем интенсивность на основе времени суток
    const hour = new Date().getHours()

    if (hour >= 22 || hour <= 6) {
      setIntensity('heavy') // Ночью - интенсивная анимация
    } else if (hour >= 18 || hour <= 8) {
      setIntensity('medium') // Утром и вечером - средняя
    } else {
      setIntensity('light') // Днем - легкая
    }
  }, [])

  return <BackgroundMatrix className={className} intensity={intensity} />
}

export default BackgroundMatrix
