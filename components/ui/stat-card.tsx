import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { forwardRef } from "react"

export interface StatCardProps {
  value: string | number
  label: string
  description?: string
  icon?: React.ReactNode
  className?: string
  variant?: "default" | "primary" | "accent" | "muted"
}

const statCardVariants = {
  default: "bg-card/95 backdrop-blur-sm border-primary/30",
  primary: "bg-primary/10 backdrop-blur-sm border-primary/50",
  accent: "bg-accent/10 backdrop-blur-sm border-accent/50",
  muted: "bg-muted/10 backdrop-blur-sm border-muted/50",
}

const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  ({ value, label, description, icon, className, variant = "default" }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          statCardVariants[variant],
          "text-center transition-all duration-300 hover:shadow-lg",
          className
        )}
      >
        <CardContent className="p-6">
          {icon && (
            <div className="flex justify-center mb-3">
              {icon}
            </div>
          )}
          <Typography
            variant="h3"
            className="mb-2 text-3xl font-bold"
            as="div"
          >
            {value}
          </Typography>
          <Typography
            variant="bodySmall"
            className="text-foreground/80"
            as="div"
          >
            {label}
          </Typography>
          {description && (
            <Typography
              variant="caption"
              className="mt-2 text-foreground/60"
              as="div"
            >
              {description}
            </Typography>
          )}
        </CardContent>
      </Card>
    )
  }
)

StatCard.displayName = "StatCard"

export { StatCard }
