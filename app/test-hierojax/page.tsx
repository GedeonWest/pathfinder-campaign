'use client'

import { useEffect, useState } from 'react'
import {
  EgyptianHieroglyphs,
  AnkhSymbol,
  EyeSymbol,
  LongText,
  EGYPTIAN_HIEROGLYPHS,
  MatrixHieroglyphs,
  HieroglyphRain,
  PulsingHieroglyphs
} from '@/components/ui'

export default function TestHieroJaxPage() {
  const [hierojaxStatus, setHierojaxStatus] = useState<string>('Checking...')
  const [fontStatus, setFontStatus] = useState<string>('Checking...')

  useEffect(() => {
    // Check HieroJax availability
    const checkHieroJax = () => {
      if (typeof window !== 'undefined') {
        if (window.hierojax) {
          setHierojaxStatus('✅ HieroJax loaded successfully')
          console.log('HieroJax object:', window.hierojax)
        } else {
          setHierojaxStatus('❌ HieroJax not found')
        }
      }
    }

    // Check font availability
    const checkFont = () => {
      if (typeof window !== 'undefined') {
        const testElement = document.createElement('div')
        testElement.style.fontFamily = 'Hieroglyphic, serif'
        testElement.style.position = 'absolute'
        testElement.style.visibility = 'hidden'
        testElement.textContent = 'Test'
        document.body.appendChild(testElement)

        const computedStyle = window.getComputedStyle(testElement)
        const fontFamily = computedStyle.fontFamily

        if (fontFamily.includes('Hieroglyphic')) {
          setFontStatus('✅ Hieroglyphic font loaded')
        } else {
          setFontStatus('❌ Hieroglyphic font not loaded')
        }

        document.body.removeChild(testElement)
      }
    }

    checkHieroJax()
    checkFont()

    // Retry after delay
    setTimeout(() => {
      checkHieroJax()
      checkFont()
    }, 2000)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Тест Египетских Иероглифов
        </h1>

        {/* Status */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Статус системы:</h2>
          <div className="space-y-2">
            <p className="font-mono">{hierojaxStatus}</p>
            <p className="font-mono">{fontStatus}</p>
          </div>
        </div>

        {/* Matrix Animation Block */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-amber-700">
            🌟 Матричный Режим - Падающие Иероглифы
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Анимация падения иероглифов в стиле "Матрицы" с подсветкой и свечением
          </p>
          <MatrixHieroglyphs
            className="w-full"
            speed={2}
            density={0.8}
            glowIntensity={0.8}
          />
        </div>

        {/* Hieroglyph Rain with different intensities */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            🌧️ Дождь из Иероглифов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-blue-600">Легкий дождь</h3>
              <HieroglyphRain intensity="light" className="h-32" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-blue-600">Средний дождь</h3>
              <HieroglyphRain intensity="medium" className="h-32" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-blue-600">Сильный дождь</h3>
              <HieroglyphRain intensity="heavy" className="h-32" />
            </div>
          </div>
        </div>

        {/* Pulsing Hieroglyphs */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">
            💫 Пульсирующие Иероглифы
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Анимация пульсации и подсветки отдельных символов
          </p>
          <PulsingHieroglyphs
            symbols={['𓌢', '𓂀', '𓇳', '𓇾', '𓃭', '𓅓']}
            className="py-8"
          />
        </div>

        {/* Test individual symbols */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Отдельные символы:</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <AnkhSymbol size="lg" className="text-blue-600" />
            <EyeSymbol size="lg" className="text-green-600" />
            <AnkhSymbol size="lg" className="text-red-600" />
            <EyeSymbol size="lg" className="text-purple-600" />
          </div>
        </div>

        {/* Test long text */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Длинный текст:</h2>
          <LongText size="md" className="text-center text-gray-700" />
        </div>

        {/* All available hieroglyphs */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Все доступные иероглифы:</h2>
          <EgyptianHieroglyphs size="md" />
        </div>

        {/* Manual test */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Ручной тест:</h2>
          <p className="text-sm text-gray-600 mb-4">
            Попробуйте вставить иероглифы вручную:
          </p>
          <div className="font-['Hieroglyphic'] text-4xl text-center p-4 bg-gray-50 rounded border">
            {EGYPTIAN_HIEROGLYPHS.ANKH} {EGYPTIAN_HIEROGLYPHS.EYE} {EGYPTIAN_HIEROGLYPHS.SUN}
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Если выше отображаются квадраты, значит шрифт не загружен
          </p>
        </div>
      </div>
    </div>
  )
}
