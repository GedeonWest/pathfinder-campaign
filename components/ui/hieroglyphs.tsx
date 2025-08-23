'use client'

import { useEffect, useRef } from 'react'

interface HieroglyphsProps {
  text: string
  className?: string
}

declare global {
  interface Window {
    hierojax: {
      processFragments: () => void
    }
  }
}

export function Hieroglyphs({ text, className = '' }: HieroglyphsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const processHieroglyphs = () => {
      if (typeof window !== 'undefined' && window.hierojax) {
        console.log('Processing hieroglyphs for:', text)
        try {
          // Очищаем предыдущие результаты
          if (containerRef.current) {
            const existingHierojax = containerRef.current.querySelector('.hierojax')
            if (existingHierojax) {
              existingHierojax.remove()
            }
          }

          window.hierojax.processFragments()
          console.log('HieroJax processing completed for component')
        } catch (error) {
          console.error('HieroJax processing error in component:', error)
        }
      } else {
        console.log('HieroJax not available yet, retrying...')
        // Retry after a short delay
        setTimeout(processHieroglyphs, 500)
      }
    }

    // Process immediately if available
    processHieroglyphs()

    // Also process after a delay to ensure everything is loaded
    const timeoutId = setTimeout(processHieroglyphs, 1000)

    return () => clearTimeout(timeoutId)
  }, [text])

  return (
    <div
      ref={containerRef}
      className={`hieroglyphs-container ${className}`}
    >
      {/* Используем правильный класс из демо */}
      <span className="hierojax-source" data-hierojax="true">
        {text}
      </span>
    </div>
  )
}

export default Hieroglyphs
