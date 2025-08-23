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

// Иконки для страницы материалов
export const SearchIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <Icon
      ref={ref}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </Icon>
  )
)

export const MapIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <Icon
      ref={ref}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
    </Icon>
  )
)

export const ScrollIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <Icon
      ref={ref}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </Icon>
  )
)

export const GemIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <Icon
      ref={ref}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </Icon>
  )
)

export const EyeIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <Icon
      ref={ref}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </Icon>
  )
)

export const FilterIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <Icon
      ref={ref}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
    </Icon>
  )
)

export const SortIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <Icon
      ref={ref}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 5h12v-2H3v2z" />
    </Icon>
  )
)

export { Icon }
