'use client'

import { useEffect, useMemo, useState } from 'react'
import { EGYPTIAN_HIEROGLYPHS } from './egyptian-hieroglyphs'

interface HieroglyphCyclerProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  speedMs?: number // interval speed
}

const sizeClasses = {
  sm: 'text-2xl',
  md: 'text-4xl',
  lg: 'text-6xl',
  xl: 'text-8xl',
}

export function HieroglyphCycler({ className = '', size = 'md', speedMs = 100 }: HieroglyphCyclerProps) {
  const symbols = useMemo(() => {
    const keys = Object.keys(EGYPTIAN_HIEROGLYPHS) as Array<keyof typeof EGYPTIAN_HIEROGLYPHS>
    // Фильтруем длинный текст и дубликаты
    const ignore = new Set(['LONG_TEXT'])
    return keys
      .filter((k) => !ignore.has(k as any))
      .map((k) => EGYPTIAN_HIEROGLYPHS[k])
  }, [])

  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % symbols.length)
    }, Math.max(50, speedMs))
    return () => clearInterval(id)
  }, [symbols.length, speedMs])

  const symbol = symbols[idx] ?? '𓌢'

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span className={`font-['Hieroglyphic'] text-amber-700 drop-shadow ${sizeClasses[size]}`}>
        {symbol}
      </span>
    </div>
  )
}

export default HieroglyphCycler


