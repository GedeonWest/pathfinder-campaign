import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  direction?: "row" | "row-reverse" | "col" | "col-reverse"
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly"
  align?: "start" | "end" | "center" | "baseline" | "stretch"
  wrap?: "nowrap" | "wrap" | "wrap-reverse"
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  className?: string
}

const flexDirections = {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  col: "flex-col",
  "col-reverse": "flex-col-reverse",
}

const flexJustify = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
}

const flexAlign = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
}

const flexWrap = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
}

const flexGap = {
  none: "gap-0",
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
  "2xl": "gap-16",
}

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({
    children,
    direction = "row",
    justify = "start",
    align = "start",
    wrap = "nowrap",
    gap = "none",
    className,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          flexDirections[direction],
          flexJustify[justify],
          flexAlign[align],
          flexWrap[wrap],
          flexGap[gap],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Flex.displayName = "Flex"

export { Flex }
