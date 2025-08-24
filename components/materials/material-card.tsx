import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Typography } from "@/components/ui/typography"
import { MapIcon, ScrollIcon, GemIcon, EyeIcon, ShieldIcon, SwordIcon, ShirtIcon, WrenchIcon } from "@/components/ui/icon"
import type { Material } from "@/types/materials"
import { getImagePath } from "@/lib/utils"

interface MaterialCardProps {
  material: Material
  onClick: (material: Material) => void
}

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

export function MaterialCard({ material, onClick }: MaterialCardProps) {
  const TypeIcon = typeIcons[material.type]

  return (
    <Card
      className="bg-card/50 backdrop-blur-sm border-border hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer material-card"
      onClick={() => onClick(material)}
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
          <div className="w-full h-48 overflow-hidden rounded-t-lg">
            <img
              src={getImagePath(material.imageUrl)}
              alt={material.name}
              className="w-full h-full object-cover"
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
}
