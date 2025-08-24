import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Функция для правильных путей на GitHub Pages
export function getBasePath() {
  // На GitHub Pages всегда используем относительные пути
  return ''
}

// Функция для создания правильных ссылок
export function getLink(href: string) {
  // Убираем ведущий слэш для относительных путей
  if (href.startsWith('/')) {
    return href.slice(1)
  }
  return href
}
