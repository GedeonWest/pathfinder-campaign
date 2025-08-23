"use client"

import { useState, useEffect } from "react"
import { Typography } from "@/components/ui/typography"
import { Stack } from "@/components/ui/stack"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SearchIcon, MapIcon, ScrollIcon, GemIcon, EyeIcon, FilterIcon, SortIcon, ShieldIcon, SwordIcon, ShirtIcon, WrenchIcon } from "@/components/ui/icon"
import { getMaterials, filterMaterials, getUniqueLocations, getUniqueSessions, getCollectionStats, sortMaterials } from "@/lib/materials"
import type { Material, MaterialFilter } from "@/types/materials"

const typeIcons = {
  armor: ShieldIcon,
  weapon: SwordIcon,
  clothing: ShirtIcon,
  tool: WrenchIcon,
  map: MapIcon,
  scroll: ScrollIcon,
  note: ScrollIcon,
  image: EyeIcon,
  misc: GemIcon
}

const typeLabels = {
  armor: 'Доспехи',
  weapon: 'Оружие',
  clothing: 'Одежда',
  tool: 'Инструменты',
  map: 'Карты',
  scroll: 'Свитки',
  note: 'Записки',
  image: 'Изображения',
  misc: 'Разное'
}

export default function MaterialsPage() {
  const [materials, setMaterials] = useState<Material[]>([])
  const [filteredMaterials, setFilteredMaterials] = useState<Material[]>([])
  const [filters, setFilters] = useState<MaterialFilter>({
    searchQuery: '',
    selectedType: 'all',
    selectedLocation: 'all',
    selectedSession: 'all',
    showCollectedOnly: false
  })
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'type'>('name')
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null)
  const [locations, setLocations] = useState<string[]>([])
  const [sessions, setSessions] = useState<string[]>([])
  const [stats, setStats] = useState({ total: 0, collected: 0, uncollected: 0, collectionRate: 0 })

  useEffect(() => {
    const allMaterials = getMaterials()
    setMaterials(allMaterials)
    setFilteredMaterials(allMaterials)
    setLocations(getUniqueLocations(allMaterials))
    setSessions(getUniqueSessions(allMaterials))
    setStats(getCollectionStats(allMaterials))
  }, [])

  useEffect(() => {
    let filtered = filterMaterials(materials, filters)
    filtered = sortMaterials(filtered, sortBy)
    setFilteredMaterials(filtered)
  }, [materials, filters, sortBy])

  const handleFilterChange = (key: keyof MaterialFilter, value: string | boolean) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      searchQuery: '',
      selectedType: 'all',
      selectedLocation: 'all',
      selectedSession: 'all',
      showCollectedOnly: false
    })
    setSortBy('name')
  }

  return (
    <div className="min-h-screen marble-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Заголовок */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4 tracking-wider">МАТЕРИАЛЫ</h1>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-serif">
            Собранные артефакты, карты и записки, которые помогут героям раскрыть тайны древнего Египта
          </p>
        </div>

        {/* Статистика коллекции */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stats.total}</div>
              <div className="text-foreground/70">Всего</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{stats.collected}</div>
              <div className="text-foreground/70">Собрано</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">{stats.uncollected}</div>
              <div className="text-foreground/70">Не собрано</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stats.collectionRate}%</div>
              <div className="text-foreground/70">Прогресс</div>
            </div>
          </div>
        </section>

        {/* Фильтры и поиск */}
        <section className="mb-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <Stack spacing="lg">
                {/* Поиск */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Поиск
                  </label>
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size="sm" />
                    <Input
                      placeholder="Поиск по названию, описанию или тегам..."
                      value={filters.searchQuery}
                      onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Основные фильтры */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Тип
                    </label>
                    <Select value={filters.selectedType} onValueChange={(value) => handleFilterChange('selectedType', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все</SelectItem>
                        <SelectItem value="armor">Доспехи</SelectItem>
                        <SelectItem value="weapon">Оружие</SelectItem>
                        <SelectItem value="clothing">Одежда</SelectItem>
                        <SelectItem value="tool">Инструменты</SelectItem>
                        <SelectItem value="map">Карты</SelectItem>
                        <SelectItem value="scroll">Свитки</SelectItem>
                        <SelectItem value="note">Записки</SelectItem>
                        <SelectItem value="image">Изображения</SelectItem>
                        <SelectItem value="misc">Разное</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Локация
                    </label>
                    <Select value={filters.selectedLocation} onValueChange={(value) => handleFilterChange('selectedLocation', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все</SelectItem>
                        {locations.map(location => (
                          <SelectItem key={location} value={location}>{location}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Сессия
                    </label>
                    <Select value={filters.selectedSession} onValueChange={(value) => handleFilterChange('selectedSession', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все</SelectItem>
                        {sessions.map(session => (
                          <SelectItem key={session} value={session}>{session}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Сортировка
                    </label>
                    <Select value={sortBy} onValueChange={(value: 'name' | 'date' | 'type') => setSortBy(value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">По названию</SelectItem>
                        <SelectItem value="date">По дате</SelectItem>
                        <SelectItem value="type">По типу</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Дополнительные фильтры */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters.showCollectedOnly}
                        onChange={(e) => handleFilterChange('showCollectedOnly', e.target.checked)}
                        className="rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">Только собранные</span>
                    </label>
                  </div>

                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="border-border text-foreground hover:bg-muted"
                  >
                    Сбросить фильтры
                  </Button>
                </div>
              </Stack>
            </CardContent>
          </Card>
        </section>

        {/* Счетчик результатов */}
        <div className="text-center mb-8">
          <p className="text-foreground/70">
            Найдено материалов: {filteredMaterials.length}
          </p>
        </div>

        {/* Список материалов */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material) => {
              const TypeIcon = typeIcons[material.type]
              return (
                <Card
                  key={material.id}
                  className="bg-card/50 backdrop-blur-sm border-border hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer material-card"
                  onClick={() => setSelectedMaterial(material)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <TypeIcon className="text-primary" size="md" />
                        <CardTitle className="text-lg text-foreground">
                          {material.name}
                        </CardTitle>
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        <Badge variant="outline" className="text-xs">
                          {typeLabels[material.type]}
                        </Badge>
                        {material.isCollected && (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                            Собрано
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    {material.imageUrl && (
                      <div className="mb-4">
                        <img
                          src={material.imageUrl}
                          alt={material.name}
                          className="w-full h-32 object-cover rounded-lg border border-border material-image"
                        />
                      </div>
                    )}

                    <Typography variant="body" className="text-foreground/80 mb-4 line-clamp-3">
                      {material.description}
                    </Typography>

                    <div className="space-y-2">
                      {material.location && (
                        <div className="flex items-center gap-2 text-sm text-foreground/70">
                          <span className="font-medium">Место:</span>
                          <span>{material.location}</span>
                        </div>
                      )}

                      {material.dateFound && (
                        <div className="flex items-center gap-2 text-sm text-foreground/70">
                          <span className="font-medium">Найдено:</span>
                          <span>{new Date(material.dateFound).toLocaleDateString('ru-RU')}</span>
                        </div>
                      )}

                      {material.isCollected && material.collectedBy && (
                        <div className="flex items-center gap-2 text-sm text-foreground/70">
                          <span className="font-medium">Собрал:</span>
                          <span>{material.collectedBy}</span>
                        </div>
                      )}

                      {material.sessionFound && (
                        <div className="flex items-center gap-2 text-sm text-foreground/70">
                          <span className="font-medium">Сессия:</span>
                          <span>{material.sessionFound}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {material.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Модальное окно для детального просмотра */}
        <Dialog open={!!selectedMaterial} onOpenChange={() => setSelectedMaterial(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
            {selectedMaterial && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3">
                    {(() => {
                      const TypeIcon = typeIcons[selectedMaterial.type]
                      return <TypeIcon className="text-primary" size="lg" />
                    })()}
                    <div>
                      <DialogTitle className="text-2xl text-foreground">
                        {selectedMaterial.name}
                      </DialogTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline">
                          {typeLabels[selectedMaterial.type]}
                        </Badge>
                        {selectedMaterial.isCollected && (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            Собрано
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </DialogHeader>

                <ScrollArea className="max-h-[60vh] pr-4">
                  <div className="space-y-6">
                    {selectedMaterial.imageUrl && (
                      <div className="text-center">
                        <img
                          src={selectedMaterial.imageUrl}
                          alt={selectedMaterial.name}
                          className="max-w-full max-h-96 object-contain rounded-lg border border-border"
                        />
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Описание</h4>
                      <Typography variant="body" className="text-foreground/80">
                        {selectedMaterial.description}
                      </Typography>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedMaterial.location && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Место обнаружения</h4>
                          <p className="text-foreground/70">{selectedMaterial.location}</p>
                        </div>
                      )}

                      {selectedMaterial.dateFound && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Дата обнаружения</h4>
                          <p className="text-foreground/70">
                            {new Date(selectedMaterial.dateFound).toLocaleDateString('ru-RU', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                      )}

                      {selectedMaterial.isCollected && selectedMaterial.collectedBy && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Собрал</h4>
                          <p className="text-foreground/70">{selectedMaterial.collectedBy}</p>
                        </div>
                      )}

                      {selectedMaterial.sessionFound && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Сессия</h4>
                          <p className="text-foreground/70">{selectedMaterial.sessionFound}</p>
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Теги</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMaterial.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
