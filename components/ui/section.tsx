import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
  padding?: "none" | "sm" | "md" | "lg" | "xl" | "2xl"
  background?: "none" | "default" | "muted" | "primary" | "accent"
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
}

const paddingClasses = {
  none: "",
  sm: "py-8",
  md: "py-12",
  lg: "py-16",
  xl: "py-20",
  "2xl": "py-24",
}

const backgroundClasses = {
  none: "",
  default: "bg-background",
  muted: "bg-muted",
  primary: "bg-primary/5",
  accent: "bg-accent/5",
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({
    children,
    className,
    containerClassName,
    maxWidth = "6xl",
    padding = "lg",
    background = "none",
    ...props
  }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          paddingClasses[padding],
          backgroundClasses[background],
          className
        )}
        {...props}
      >
        <div className={cn(
          "mx-auto px-4",
          maxWidthClasses[maxWidth],
          containerClassName
        )}>
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = "Section"

export { Section }
