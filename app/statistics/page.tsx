"use client"

import { useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { Card, CardContent } from "@/components/ui/card"
import type * as THREE from "three"

// Sand ripple animation for hero section
function SandRipples() {
  const ref = useRef<THREE.Points>(null!)
  const [positions] = useState(() => {
    const positions = new Float32Array(800 * 3)
    for (let i = 0; i < 800; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  })

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      const positions = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] = Math.sin(state.clock.elapsedTime + positions[i] * 0.1) * 0.5
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#d4af37" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
    </Points>
  )
}

// Pyramid icon component
function PyramidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 20h-13L12 6.5z" />
    </svg>
  )
}

// Scarab icon component
function ScarabIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z" />
    </svg>
  )
}

// Obelisk icon component
function ObeliskIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 2l2 4 2-4v20h-4V2zm-2 4h8l-1 2H9l-1-2zm0 4h8v2H8v-2zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" />
    </svg>
  )
}

// Campaign statistics data
const campaignStats = [
  { session: 1, location: "Некрополь Вати", outcome: "Победа - Найден Серебряный Скарабей" },
  { session: 2, location: "Гробница Ахентепи", outcome: "Победа - Побежден Страж-мумия" },
  { session: 3, location: "Дом Пентеру", outcome: "Победа - Обнаружены Древние Свитки" },
  { session: 4, location: "Святилище Ученого Глаза", outcome: "Победа - Разгадана Загадка Тота" },
  { session: 5, location: "Рабские Траншеи", outcome: "Победа - Спасены Запертые Шахтеры" },
  { session: 6, location: "Гробница Забытого Фараона", outcome: "Частично - Отступили от Лича" },
  { session: 7, location: "Безсолнечная Крепость", outcome: "Победа - Освобождены Политические Заключенные" },
  { session: 8, location: "Пирамида Хети III", outcome: "Победа - Захвачена Золотая Маска" },
  { session: 9, location: "Сдвигающиеся Пески", outcome: "Победа - Пережили Песчаную Засаду" },
  { session: 10, location: "Храм Четырех Фараонов", outcome: "Победа - Пробужден Древний Страж" },
  { session: 11, location: "Ворота Некрополя", outcome: "Победа - Защитились от Орды Нежити" },
  { session: 12, location: "Гробница Аспида", outcome: "Победа - Побежден Змеиный Культ" },
  { session: 13, location: "Шепчущие Пески", outcome: "Победа - Разрушено Древнее Проклятие" },
  { session: 14, location: "Камера Обновления", outcome: "Победа - Восстановлены Священные Воды" },
  { session: 15, location: "Затонувшая Пирамида", outcome: "В процессе - Сражаемся с Собек-Ра" },
]

export default function StatisticsPage() {
  return (
    <div className="min-h-screen marble-bg">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Canvas camera={{ position: [0, 2, 8] }}>
            <ambientLight intensity={0.4} />
            <SandRipples />
          </Canvas>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <ScarabIcon className="w-20 h-20 mx-auto text-primary mb-6" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-4 tracking-wide">Статистика кампании</h1>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto font-sans">
            Хроники нашего путешествия по древним землям Осириона
          </p>
        </div>
      </section>

      {/* Metrics Cards Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-card/95 backdrop-blur-sm border-primary/30 text-center shadow-xl">
              <CardContent className="p-6">
                <PyramidIcon className="w-8 h-8 mx-auto text-primary mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className="text-sm text-foreground/80 font-sans">Сыгранных сессий</div>
              </CardContent>
            </Card>

            <Card className="bg-card/95 backdrop-blur-sm border-primary/30 text-center shadow-xl">
              <CardContent className="p-6">
                <ScarabIcon className="w-8 h-8 mx-auto text-primary mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">47</div>
                <div className="text-sm text-foreground/80 font-sans">Побежденных врагов</div>
              </CardContent>
            </Card>

            <Card className="bg-card/95 backdrop-blur-sm border-primary/30 text-center shadow-xl">
              <CardContent className="p-6">
                <div className="text-primary text-2xl mb-3">💎</div>
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-foreground/80 font-sans">Найденных сокровищ</div>
              </CardContent>
            </Card>

            <Card className="bg-card/95 backdrop-blur-sm border-primary/30 text-center shadow-xl">
              <CardContent className="p-6">
                <div className="text-primary text-2xl mb-3">🏺</div>
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-foreground/80 font-sans">Исследованных гробниц</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campaign Statistics Table */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Хроники сессий
          </h2>

          <Card className="bg-card/95 backdrop-blur-sm border-primary/30 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="text-primary/30 text-6xl absolute top-4 left-4">𓂀</div>
                  <div className="text-primary/30 text-6xl absolute top-4 right-4">𓃭</div>
                  <div className="text-primary/30 text-6xl absolute bottom-4 left-4">𓊖</div>
                  <div className="text-primary/30 text-6xl absolute bottom-4 right-4">𓋹</div>
                </div>

                <div className="relative overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary/10 border-b-2 border-primary/30">
                      <tr>
                        <th className="px-6 py-4 text-left font-serif font-bold text-primary text-base">Сессия</th>
                        <th className="px-6 py-4 text-left font-serif font-bold text-primary text-base">Местоположение</th>
                        <th className="px-6 py-4 text-left font-serif font-bold text-primary text-base">Результат</th>
                      </tr>
                    </thead>
                    <tbody>
                      {campaignStats.map((stat, index) => (
                        <tr
                          key={stat.session}
                          className={`border-b border-primary/20 hover:bg-primary/5 transition-colors duration-200 ${
                            index % 2 === 0 ? "bg-background/50" : "bg-card/30"
                          }`}
                        >
                          <td className="px-6 py-4 font-sans text-foreground font-semibold text-sm">{stat.session}</td>
                          <td className="px-6 py-4 font-sans text-foreground/90 text-sm">{stat.location}</td>
                          <td className="px-6 py-4 font-sans text-foreground/90 text-sm">
                            <span
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                stat.outcome.startsWith("Победа")
                                  ? "bg-green-500/20 text-green-300"
                                  : stat.outcome.startsWith("Частично")
                                    ? "bg-yellow-500/20 text-yellow-300"
                                    : "bg-blue-500/20 text-blue-300"
                              }`}
                            >
                              {stat.outcome}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
