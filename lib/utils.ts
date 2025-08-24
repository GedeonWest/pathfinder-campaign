import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Функция для правильных путей на GitHub Pages
export function getBasePath() {
  if (typeof window !== 'undefined') {
    // В браузере определяем по текущему URL
    const pathname = window.location.pathname
    if (pathname.startsWith('/pathfinder-campaign')) {
      return '/pathfinder-campaign'
    }
  }
  // По умолчанию для production
  return process.env.NODE_ENV === 'production' ? '/pathfinder-campaign' : ''
}

// Функция для создания правильных ссылок
export function getLink(href: string) {
  const basePath = getBasePath()
  if (href.startsWith('/')) {
    return basePath + href
  }
  return href
}
