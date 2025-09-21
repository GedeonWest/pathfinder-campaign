import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, parse, isValid, parseISO } from "date-fns"

// Try to parse a date string with multiple common formats and output as DD.MM.YYYY
export function formatDateRu(input: string | Date | undefined | null): string {
  if (!input) return ""
  const tryDate = (d: Date) => (isValid(d) ? format(d, "dd.MM.yyyy") : "")
  if (input instanceof Date) return tryDate(input)
  const s = String(input).trim()
  if (!s) return ""
  // 1) DD.MM.YYYY
  let d = parse(s, "dd.MM.yyyy", new Date())
  if (isValid(d)) return format(d, "dd.MM.yyyy")
  // 2) D.M.YYYY
  d = parse(s, "d.M.yyyy", new Date())
  if (isValid(d)) return format(d, "dd.MM.yyyy")
  // 3) DD.MM.YY
  d = parse(s, "dd.MM.yy", new Date())
  if (isValid(d)) return format(d, "dd.MM.yyyy")
  // 4) Natural language RU like "15 марта 2024" — leave as is (date-fns ru parse requires locale pkg; skipping for now)
  if (/\d{1,2}\s+\D+\s+\d{4}/.test(s)) return s
  // 5) ISO or US
  d = parseISO(s)
  if (isValid(d)) return format(d, "dd.MM.yyyy")
  // 6) Fallback Date constructor
  d = new Date(s)
  if (isValid(d)) return format(d, "dd.MM.yyyy")
  return s
}

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
  // Абсолютные URL (http, https, protocol-relative, data, blob) не префиксим
  if (/^(https?:\/\/|data:|blob:|\/\/)/i.test(src)) {
    return src
  }
  // Если src начинается с /, убираем / и добавляем basePath
  if (src.startsWith('/')) {
    return '/pathfinder-campaign' + src
  }
  // В остальных случаях (относительный путь/имя файла),
  // считаем, что ресурс лежит в корне public и добавляем basePath
  // чтобы путь был стабильным на вложенных страницах
  return '/pathfinder-campaign/' + src.replace(/^\.\//, '')
}

// Функция для получения полного URL с basePath
export function getFullUrl(route: string): string {
  return getBasePath() + route
}
