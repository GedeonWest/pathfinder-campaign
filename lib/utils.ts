import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Функция для правильных путей на GitHub Pages
export function getBasePath() {
  // На GitHub Pages используем basePath из next.config.mjs
  return '/pathfinder-campaign'
}

// Функция для создания правильных ссылок
export function getLink(href: string) {
  // Добавляем basePath для внутренних ссылок
  if (href.startsWith('/')) {
    return '/pathfinder-campaign' + href
  }
  return href
}
