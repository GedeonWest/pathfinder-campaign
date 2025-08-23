'use client'

import React from 'react'

interface EgyptianHieroglyphsProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

// Готовые SVG иероглифы
const EGYPTIAN_HIEROGLYPHS = {
  // Простые символы
  ANKH: "𓌢",
  EYE: "𓂀",
  SUN: "𓇳",
  MOON: "𓇾",
  WATER: "𓈖",
  MOUNTAIN: "𓈋",
  HOUSE: "𓉐",
  MAN: "𓀀",
  WOMAN: "𓁐",
  CHILD: "𓀔",

  // Сложные композиции
  PHARAOH: "𓀀𓏤",
  GOD: "𓀭",
  PRIEST: "𓀀𓏤𓊪",
  SCRIBE: "𓀀𓏤𓊪𓏏",

  // Животные
  LION: "𓃭",
  BIRD: "𓅓",
  FISH: "𓆛",
  SNAKE: "𓆏",
  SCORPION: "𓆣",

  // Предметы
  SCROLL: "𓏏",
  STAFF: "𓊪",
  CROWN: "𓋴",
  SCEPTRE: "𓊪",
  ANKH_CROSS: "𓌢",

  // Действия
  WALK: "𓂻",
  SPEAK: "𓂋",
  SEE: "𓂀",
  HEAR: "𓂋",

  // Цвета и материалы
  GOLD: "𓋴",
  SILVER: "𓋴",
  BRONZE: "𓋴",
  STONE: "𓈋",

  // Длинный текст из демо
  LONG_TEXT: "𓍯𓄿𓎛𓎝𓁶𓐱𓏤𓐰𓇾𓏏𓐰𓍃𓅓𓈎𓐰𓈎𓀁𓎛𓐱𓋴𓃉𓅓𓊻𓈊𓇾𓐰𓇾𓏏𓐰𓍃𓅓𓅓𓏏𓐰𓏱𓈖𓎛𓆑𓄿𓅱𓆙𓍑𓅱𓏝𓁶𓐱𓏤𓇾𓐰𓈇𓅧𓂻𓉐𓐰𓂋𓐰𓏏𓂻𓅓𓋴𓐱𓃀𓇼𓉐𓐰𓏧𓋁𓐱𓃀𓅂𓏌𓐱𓏤𓊪𓐰𓏏𓐰𓇯𓂋𓐰𓐍𓅢𓋀𓅂𓀭𓐰𓏥𓋰𓂋𓐰𓐍𓎡𓇋𓐱𓀀𓈋𓐱𓏤𓐰𓈊𓊪𓐰𓅱𓈖𓃀𓅡𓄡𓐰𓅱𓁺𓐰𓈊𓈖𓐰𓏏𓊪"
}

// Компонент для отображения готовых иероглифов
export function EgyptianHieroglyphs({
  className = '',
  size = 'md'
}: EgyptianHieroglyphsProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  }

  return (
    <div className={`egyptian-hieroglyphs ${sizeClasses[size]} ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(EGYPTIAN_HIEROGLYPHS).map(([name, symbol]) => (
          <div key={name} className="text-center p-2 border rounded bg-amber-50">
            <div className="font-['Hieroglyphic'] text-amber-700 mb-1">
              {symbol}
            </div>
            <div className="text-xs text-amber-600 font-mono">
              {name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Экспорт всех иероглифов для использования в других компонентах
export { EGYPTIAN_HIEROGLYPHS }

// Отдельные компоненты для часто используемых иероглифов
export function AnkhSymbol({ className = '', size = 'md' }: EgyptianHieroglyphsProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  }

  return (
    <span className={`font-['Hieroglyphic'] text-amber-700 ${sizeClasses[size]} ${className}`}>
      {EGYPTIAN_HIEROGLYPHS.ANKH}
    </span>
  )
}

export function EyeSymbol({ className = '', size = 'md' }: EgyptianHieroglyphsProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  }

  return (
    <span className={`font-['Hieroglyphic'] text-amber-700 ${sizeClasses[size]} ${className}`}>
      {EGYPTIAN_HIEROGLYPHS.EYE}
    </span>
  )
}

export function LongText({ className = '', size = 'md' }: EgyptianHieroglyphsProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  return (
    <div className={`font-['Hieroglyphic'] text-amber-700 ${sizeClasses[size]} ${className} leading-relaxed`}>
      {EGYPTIAN_HIEROGLYPHS.LONG_TEXT}
    </div>
  )
}

export default EgyptianHieroglyphs
