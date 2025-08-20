import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  variant?: "solid" | "dashed" | "dotted"
  color?: "default" | "primary" | "secondary" | "muted" | "accent"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
}

const dividerVariants = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
}

const dividerColors = {
  default: "border-border",
  primary: "border-primary/30",
  secondary: "border-secondary",
  muted: "border-muted",
  accent: "border-accent",
}

const dividerSizes = {
  xs: "border-t",
  sm: "border-t-2",
  md: "border-t-4",
  lg: "border-t-8",
  xl: "border-t-16",
}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({
    orientation = "horizontal",
    variant = "solid",
    color = "default",
    size = "xs",
    className,
    ...props
  }, ref) => {
    const isHorizontal = orientation === "horizontal"

    return (
      <div
        ref={ref}
        className={cn(
          "shrink-0",
          isHorizontal ? "w-full" : "h-full",
          isHorizontal ? dividerSizes[size] : "border-l",
          dividerVariants[variant],
          dividerColors[color],
          className
        )}
        {...props}
      />
    )
  }
)

Divider.displayName = "Divider"

export { Divider }
