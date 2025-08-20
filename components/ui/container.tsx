import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
  padding?: "none" | "sm" | "md" | "lg" | "xl" | "2xl"
  center?: boolean
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
  sm: "px-4 py-8",
  md: "px-4 py-12",
  lg: "px-4 py-16",
  xl: "px-4 py-20",
  "2xl": "px-4 py-24",
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({
    children,
    className,
    maxWidth = "6xl",
    padding = "lg",
    center = true,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full",
          maxWidthClasses[maxWidth],
          paddingClasses[padding],
          center && "mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = "Container"

export { Container }
