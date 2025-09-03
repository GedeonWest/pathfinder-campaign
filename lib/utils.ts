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
  // Если href уже содержит basePath, возвращаем как есть
  if (href.startsWith('/pathfinder-campaign')) {
    return href
  }
  // Для внутренних ссылок Next.js автоматически добавляет basePath
  // Поэтому просто возвращаем href как есть
  return href
}

// Функция для получения правильного пути к картинкам
export function getImagePath(src: string) {
  // Если src уже содержит basePath, возвращаем как есть
  if (src.startsWith('/pathfinder-campaign')) {
    return src
  }
  // Если src начинается с /, убираем / и добавляем basePath
  if (src.startsWith('/')) {
    return '/pathfinder-campaign' + src
  }
  // Если src не начинается с /, это относительный путь, возвращаем как есть
  return src
}

// Функция для получения полного URL с basePath
export function getFullUrl(route: string): string {
  return getBasePath() + route
}
