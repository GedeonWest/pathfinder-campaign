import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Typography } from "@/components/ui/typography"
import { MapIcon, ScrollIcon, GemIcon, EyeIcon, ShieldIcon, SwordIcon, ShirtIcon, WrenchIcon } from "@/components/ui/icon"
import type { Material } from "@/types/materials"

interface MaterialModalProps {
  material: Material | null
  isOpen: boolean
  onClose: () => void
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

export function MaterialModal({ material, isOpen, onClose }: MaterialModalProps) {
  if (!material) return null

  const TypeIcon = typeIcons[material.type]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <TypeIcon className="text-primary" size="lg" />
            <div>
              <DialogTitle className="text-2xl text-foreground">
                {material.name}
              </DialogTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline">
                  {typeLabels[material.type]}
                </Badge>
                {material.isCollected && (
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
            {material.imageUrl && (
              <div className="text-center">
                <img
                  src={material.imageUrl}
                  alt={material.name}
                  className="max-w-full max-h-96 object-contain rounded-lg border border-border"
                />
              </div>
            )}

            <div>
              <h4 className="font-semibold text-foreground mb-2">Описание</h4>
              <Typography variant="body" className="text-foreground/80">
                {material.description}
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {material.location && (
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Место обнаружения</h4>
                  <p className="text-foreground/70">{material.location}</p>
                </div>
              )}

              {material.dateFound && (
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Дата обнаружения</h4>
                  <p className="text-foreground/70">
                    {new Date(material.dateFound).toLocaleDateString('ru-RU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              )}

              {material.isCollected && material.collectedBy && (
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Собрал</h4>
                  <p className="text-foreground/70">{material.collectedBy}</p>
                </div>
              )}

              {material.sessionFound && (
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Сессия</h4>
                  <p className="text-foreground/70">{material.sessionFound}</p>
                </div>
              )}
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Теги</h4>
              <div className="flex flex-wrap gap-2">
                {material.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
