import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  colsSm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  colsMd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  colsLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  colsXl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  gapX?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  gapY?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  center?: boolean
}

const gapClasses = {
  none: "gap-0",
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
  "2xl": "gap-16",
}

const gapXClasses = {
  none: "gap-x-0",
  xs: "gap-x-2",
  sm: "gap-x-4",
  md: "gap-x-6",
  lg: "gap-x-8",
  xl: "gap-x-12",
  "2xl": "gap-x-16",
}

const gapYClasses = {
  none: "gap-y-0",
  xs: "gap-y-2",
  sm: "gap-y-4",
  md: "gap-y-6",
  lg: "gap-y-8",
  xl: "gap-y-12",
  "2xl": "gap-y-16",
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({
    children,
    className,
    cols = 1,
    colsSm,
    colsMd,
    colsLg,
    colsXl,
    gap = "md",
    gapX,
    gapY,
    center = false,
    ...props
  }, ref) => {
    const gridCols = `grid-cols-${cols}`
    const gridColsSm = colsSm ? `sm:grid-cols-${colsSm}` : ""
    const gridColsMd = colsMd ? `md:grid-cols-${colsMd}` : ""
    const gridColsLg = colsLg ? `lg:grid-cols-${colsLg}` : ""
    const gridColsXl = colsXl ? `xl:grid-cols-${colsXl}` : ""

    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          gridCols,
          gridColsSm,
          gridColsMd,
          gridColsLg,
          gridColsXl,
          gapClasses[gap],
          gapX && gapXClasses[gapX],
          gapY && gapYClasses[gapY],
          center && "place-items-center",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Grid.displayName = "Grid"

export { Grid }
