import { Stack } from "@/components/ui/stack"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SearchIcon } from "@/components/ui/icon"
import type { MaterialFilter } from "@/types/materials"

interface MaterialsFiltersProps {
  filters: MaterialFilter
  locations: string[]
  sessions: string[]
  onFilterChange: (key: keyof MaterialFilter, value: string | boolean) => void
  onClearFilters: () => void
}

export function MaterialsFilters({
  filters,
  locations,
  sessions,
  onFilterChange,
  onClearFilters
}: MaterialsFiltersProps) {
  return (
    <section className="mb-16">
      <Card className="bg-card/50 backdrop-blur-sm border-border">
        <CardContent className="p-6">
          <Stack spacing="lg">
            {/* Поиск */}
            <div className="w-full">
              <label className="text-sm font-medium text-foreground mb-2 block">
                Поиск
              </label>
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size="sm" />
                <Input
                  placeholder="Поиск по названию, описанию или тегам..."
                  value={filters.searchQuery}
                  onChange={(e) => onFilterChange('searchQuery', e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
            </div>

            {/* Основные фильтры */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Тип
                </label>
                <Select value={filters.selectedType} onValueChange={(value) => onFilterChange('selectedType', value)}>
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
                <Select value={filters.selectedLocation} onValueChange={(value) => onFilterChange('selectedLocation', value)}>
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
                <Select value={filters.selectedSession} onValueChange={(value) => onFilterChange('selectedSession', value)}>
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
                <Select value={filters.sortBy || 'name'} onValueChange={(value) => onFilterChange('sortBy', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">По названию</SelectItem>
                    <SelectItem value="date">По дате</SelectItem>
                    <SelectItem value="type">По типу</SelectItem>
                    <SelectItem value="id">По ID</SelectItem>
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
                    onChange={(e) => onFilterChange('showCollectedOnly', e.target.checked)}
                    className="rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-foreground">Только собранные</span>
                </label>
              </div>

              <Button
                variant="outline"
                onClick={onClearFilters}
                className="border-border text-foreground hover:bg-muted"
              >
                Сбросить фильтры
              </Button>
            </div>
          </Stack>
        </CardContent>
      </Card>
    </section>
  )
}
