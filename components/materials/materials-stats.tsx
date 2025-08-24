interface MaterialsStatsProps {
  materials: any[]
  stats: {
    total: number
    collected: number
    uncollected: number
  }
}

export function MaterialsStats({ materials, stats }: MaterialsStatsProps) {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">{stats.collected}</div>
          <div className="text-foreground/70">Найдено</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{materials.length}</div>
          <div className="text-foreground/70">Известно</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {materials.filter(m => m.isCollected).length}
          </div>
          <div className="text-foreground/70">В коллекции</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
            {materials.filter(m => !m.isCollected).length}
          </div>
          <div className="text-foreground/70">Осталось найти</div>
        </div>
      </div>
    </section>
  )
}
