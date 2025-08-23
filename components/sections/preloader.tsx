"use client"

import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
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

// Компонент быстрой смены иероглифов
function HieroglyphCycler() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

  // Готовые иероглифы для прелоадера
  const PRELOADER_SYMBOLS = [
    '𓌢', '𓂀', '𓇳', '𓇾', '𓈖', '𓈋', '𓉐', '𓀀', '𓁐', '𓀔',
    '𓃭', '𓅓', '𓆛', '𓆏', '𓆣', '𓏏', '𓊪', '𓋴', '𓂻', '𓂋'
  ]

  // Рандомные египетские фразы
  const EGYPTIAN_PHRASES = [
    'Древние пески сдвигаются...',
    'Приоткрываем тайну фараонов...',
    'Пробуждаем дух пирамид...',
    'Раскрываем секреты мумий...',
    'Погружаемся в глубины Нила...',
    'Разгадываем загадки сфинкса...',
    'Входим в священные гробницы...',
    'Читаем древние папирусы...',
    'Следуем по следам жрецов...',
    'Открываем врата вечности...',
    'Пробуждаем древнюю магию...',
    'Ищем сокровища Тутанхамона...',
    'Расшифровываем иероглифы...',
    'Погружаемся в мир Осириса...',
    'Раскрываем тайны Изиды...'
  ]

  useEffect(() => {
    // Интервал для смены иероглифов
    const hieroglyphInterval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % PRELOADER_SYMBOLS.length)
    }, 200) // Быстрая смена каждые 200мс

    // Интервал для смены фраз (рандомно)
    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex(prev => {
        // Генерируем рандомный индекс, отличный от текущего
        let newIndex
        do {
          newIndex = Math.floor(Math.random() * EGYPTIAN_PHRASES.length)
        } while (newIndex === prev && EGYPTIAN_PHRASES.length > 1)
        return newIndex
      })
    }, 2500) // Смена фраз каждые 2.5 секунды

    return () => {
      clearInterval(hieroglyphInterval)
      clearInterval(phraseInterval)
    }
  }, [])

  return (
    <div className="text-center text-amber-400/80 z-10 preloader-hieroglyphs">
      {/* Только один иероглиф с быстрой сменой */}
      <div
        className="font-['Hieroglyphic'] text-6xl mb-4 animate-pulse"
        style={{
          textShadow: '0 0 20px rgba(251, 191, 36, 0.8), 0 0 40px rgba(251, 191, 36, 0.4)',
          transition: 'all 0.2s ease-in-out'
        }}
      >
        {PRELOADER_SYMBOLS[currentIndex]}
      </div>

      {/* Фраза с рандомной сменой */}
      <p
        key={currentPhraseIndex} // Для анимации смены фраз
        className="text-sm font-mono transition-all duration-700"
        style={{
          textShadow: '0 0 10px rgba(251, 191, 36, 0.4)',
          animation: 'phraseFadeInOut 2.5s ease-in-out infinite'
        }}
      >
        {EGYPTIAN_PHRASES[currentPhraseIndex]}
      </p>
    </div>
  )
}

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
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
        <HieroglyphCycler />
      </div>
    </div>
  )
}
