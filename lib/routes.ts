// Маршруты для всего сайта
export const ROUTES = {
  // Основные страницы
  HOME: '/',
  CHARACTERS: '/characters/',
  STATISTICS: '/statistics/',
  ADVENTURE_LOG: '/adventure-log/',
  MATERIALS: '/materials/',
  TEST_HIEROJAX: '/test-hierojax/',

  // Динамические маршруты
  CHARACTER_DETAIL: (id: string) => `/characters/${id}/`,

  // API маршруты (если понадобятся в будущем)
  API_CHARACTERS: '/api/characters',
  API_STATISTICS: '/api/statistics',
  API_MATERIALS: '/api/materials',
  API_JOURNAL: '/api/journal',
} as const

// Типы для маршрутов
export type RouteKey = keyof typeof ROUTES
export type RouteValue = string | ((id: string) => string)

// Функция для получения маршрута с учетом basePath
export function getRoute(route: string | (() => string)): string {
  const path = typeof route === 'function' ? route('') : route
  return path
}

// Функция для получения маршрута персонажа
export function getCharacterRoute(id: string): string {
  return ROUTES.CHARACTER_DETAIL(id)
}

// Функция для получения маршрута с параметрами
export function getRouteWithParams(route: string, params: Record<string, string>): string {
  let path = route
  Object.entries(params).forEach(([key, value]) => {
    path = path.replace(`:${key}`, value)
  })
  return path
}
