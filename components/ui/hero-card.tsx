import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { forwardRef } from "react"

export interface HeroCardProps {
  name: string
  class: string
  level: number
  description: string
  icon: string
  iconBgColor?: string
  className?: string
  onClick?: () => void
}

const HeroCard = forwardRef<HTMLDivElement, HeroCardProps>(
  ({ name, class: characterClass, level, description, icon, iconBgColor = "from-blue-500 to-blue-700", className, onClick }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "bg-card/95 backdrop-blur-sm border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer",
          className
        )}
        onClick={onClick}
      >
        <CardContent className="p-6 text-center">
          <div
            className={cn(
              "w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center",
              `bg-gradient-to-br ${iconBgColor}`
            )}
          >
            <span className="text-white text-2xl">{icon}</span>
          </div>

          <Typography
            variant="h4"
            className="mb-2"
            as="h4"
          >
            {name}
          </Typography>

          <Typography
            variant="bodySmall"
            className="mb-1"
            as="p"
          >
            {characterClass} • Уровень {level}
          </Typography>

          <Typography
            variant="caption"
            className="text-foreground/60"
            as="p"
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    )
  }
)

HeroCard.displayName = "HeroCard"

export { HeroCard }
