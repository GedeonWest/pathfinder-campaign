'use client'

import React, { useEffect, useState, useRef } from 'react'

interface MatrixHieroglyphsProps {
  className?: string
  speed?: number
  density?: number
  glowIntensity?: number
}

interface FallingHieroglyph {
  id: number
  symbol: string
  x: number
  y: number
  speed: number
  opacity: number
  glow: number
}

// Готовые иероглифы для матрицы (обычный текст, не SVG)
const MATRIX_SYMBOLS = [
  '𓌢', '𓂀', '𓇳', '𓇾', '𓈖', '𓈋', '𓉐', '𓀀', '𓁐', '𓀔',
  '𓃭', '𓅓', '𓆛', '𓆏', '𓆣', '𓏏', '𓊪', '𓋴', '𓂻', '𓂋'
]

export function MatrixHieroglyphs({
  className = '',
  speed = 2,
  density = 0.8,
  glowIntensity = 0.8
}: MatrixHieroglyphsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [fallingHieroglyphs, setFallingHieroglyphs] = useState<FallingHieroglyph[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()

    // Создаем начальные падающие иероглифы
    const createFallingHieroglyph = (): FallingHieroglyph => ({
      id: Math.random() * 1000000,
      symbol: MATRIX_SYMBOLS[Math.floor(Math.random() * MATRIX_SYMBOLS.length)],
      x: Math.random() * containerRect.width,
      y: -50 - Math.random() * 200,
      speed: 0.5 + Math.random() * speed,
      opacity: 0.3 + Math.random() * 0.7,
      glow: Math.random() * glowIntensity
    })

    const initialHieroglyphs = Array.from(
      { length: Math.floor(20 * density) },
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
  }, []) // Пустой массив зависимостей

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-black/20 rounded-lg border border-amber-500/30 ${className}`}
      style={{ minHeight: '400px' }}
    >
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-amber-500/10" />

      {/* Падающие иероглифы (обычный текст с шрифтом) */}
      {fallingHieroglyphs.map((hieroglyph) => (
        <div
          key={hieroglyph.id}
          className="absolute font-['Hieroglyphic'] text-amber-400 select-none pointer-events-none"
          style={{
            left: hieroglyph.x,
            top: hieroglyph.y,
            opacity: hieroglyph.opacity,
            fontSize: '1.5rem',
            textShadow: `
              0 0 10px rgba(251, 191, 36, ${hieroglyph.glow}),
              0 0 20px rgba(251, 191, 36, ${hieroglyph.glow * 0.6}),
              0 0 30px rgba(251, 191, 36, ${hieroglyph.glow * 0.3})
            `,
            transition: `opacity 0.3s ease-in-out`
          }}
        >
          {hieroglyph.symbol}
        </div>
      ))}

      {/* Эффект свечения снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-amber-500/20 to-transparent" />

      {/* Интерактивные элементы */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-amber-400/80 z-10">
          <div className="font-['Hieroglyphic'] text-4xl mb-2 animate-pulse">
            {MATRIX_SYMBOLS[Math.floor(Math.random() * MATRIX_SYMBOLS.length)]}
          </div>
          <p className="text-sm font-mono">Matrix Mode Active</p>
        </div>
      </div>
    </div>
  )
}

// Компонент с эффектом дождя из иероглифов
export function HieroglyphRain({
  className = '',
  intensity = 'medium'
}: {
  className?: string
  intensity?: 'light' | 'medium' | 'heavy'
}) {
  const intensityMap = {
    light: { speed: 1, density: 0.5, glow: 0.6 },
    medium: { speed: 2, density: 0.8, glow: 0.8 },
    heavy: { speed: 3, density: 1.2, glow: 1.0 }
  }

  const config = intensityMap[intensity]

  return (
    <MatrixHieroglyphs
      className={className}
      speed={config.speed}
      density={config.density}
      glowIntensity={config.glow}
    />
  )
}

// Компонент с пульсирующими иероглифами
export function PulsingHieroglyphs({
  className = '',
  symbols = ['𓌢', '𓂀', '𓇳', '𓇾']
}: {
  className?: string
  symbols?: string[]
}) {
  const [pulseIndex, setPulseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex(prev => (prev + 1) % symbols.length)
    }, 800)

    return () => clearInterval(interval)
  }, [symbols.length])

  return (
    <div className={`flex justify-center items-center space-x-4 ${className}`}>
      {symbols.map((symbol, index) => (
        <div
          key={index}
          className={`font-['Hieroglyphic'] text-4xl transition-all duration-500 ${
            index === pulseIndex
              ? 'text-amber-400 scale-125 animate-pulse'
              : 'text-amber-600 scale-100'
          }`}
          style={{
            textShadow: index === pulseIndex
              ? '0 0 20px rgba(251, 191, 36, 0.8), 0 0 40px rgba(251, 191, 36, 0.4)'
              : 'none'
          }}
        >
          {symbol}
        </div>
      ))}
    </div>
  )
}

export default MatrixHieroglyphs
