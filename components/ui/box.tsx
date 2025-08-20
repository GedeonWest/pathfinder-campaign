import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  as?: "div" | "section" | "article" | "aside" | "header" | "footer" | "main"
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  margin?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  background?: "none" | "default" | "muted" | "primary" | "accent" | "card"
  border?: "none" | "default" | "primary" | "accent" | "muted"
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  shadow?: "none" | "sm" | "md" | "lg" | "xl" | "2xl"
  className?: string
}

const paddingClasses = {
  none: "",
  xs: "p-2",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-12",
  "2xl": "p-16",
}

const marginClasses = {
  none: "",
  xs: "m-2",
  sm: "m-4",
  md: "m-6",
  lg: "m-8",
  xl: "m-12",
  "2xl": "m-16",
}

const backgroundClasses = {
  none: "",
  default: "bg-background",
  muted: "bg-muted",
  primary: "bg-primary/5",
  accent: "bg-accent/5",
  card: "bg-card",
}

const borderClasses = {
  none: "",
  default: "border border-border",
  primary: "border border-primary/30",
  accent: "border border-accent/30",
  muted: "border border-muted",
}

const radiusClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
}

const shadowClasses = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({
    children,
    as: Component = "div",
    padding = "none",
    margin = "none",
    background = "none",
    border = "none",
    radius = "none",
    shadow = "none",
    className,
    ...props
  }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          paddingClasses[padding],
          marginClasses[margin],
          backgroundClasses[background],
          borderClasses[border],
          radiusClasses[radius],
          shadowClasses[shadow],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Box.displayName = "Box"

export { Box }
