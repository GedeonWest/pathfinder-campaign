import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
}

const sizeClasses = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
  "2xl": "w-16 h-16",
  "3xl": "w-20 h-20",
  "4xl": "w-24 h-24",
  "5xl": "w-32 h-32",
  "6xl": "w-40 h-40",
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size = "md", ...props }, ref) => {
    return (
      <svg
        className={cn(sizeClasses[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Icon.displayName = "Icon"

// Predefined icons
export const PyramidIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <Icon
      ref={ref}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 20h-13L12 6.5z" />
    </Icon>
  )
)

export const AnkhIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <Icon
      ref={ref}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2C10.34 2 9 3.34 9 5s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 8c-1.1 0-2-.9-2-2V7c-2.21 0-4 1.79-4 4v11h12V11c0-2.21-1.79-4-4-4v1c0 1.1-.9 2-2 2z" />
    </Icon>
  )
)

export const MenuIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <Icon
      ref={ref}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </Icon>
  )
)

export const CloseIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <Icon
      ref={ref}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </Icon>
  )
)

export const ChevronRightIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <Icon
      ref={ref}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </Icon>
  )
)

export const ChevronDownIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <Icon
      ref={ref}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
    </Icon>
  )
)

export { Icon }
