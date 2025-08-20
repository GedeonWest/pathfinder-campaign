import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
  axis?: "horizontal" | "vertical" | "both"
  className?: string
}

const spacerSizes = {
  xs: "4",
  sm: "8",
  md: "16",
  lg: "24",
  xl: "32",
  "2xl": "48",
  "3xl": "64",
  "4xl": "80",
  "5xl": "96",
  "6xl": "128",
}

const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  ({ size = "md", axis = "vertical", className, ...props }, ref) => {
    const width = axis === "horizontal" || axis === "both" ? `w-${spacerSizes[size]}` : "w-0"
    const height = axis === "vertical" || axis === "both" ? `h-${spacerSizes[size]}` : "h-0"

    return (
      <div
        ref={ref}
        className={cn(width, height, "flex-shrink-0", className)}
        {...props}
      />
    )
  }
)

Spacer.displayName = "Spacer"

export { Spacer }
