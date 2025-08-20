import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  className?: string
}

const stackSpacing = {
  none: "space-y-0",
  xs: "space-y-2",
  sm: "space-y-4",
  md: "space-y-6",
  lg: "space-y-8",
  xl: "space-y-12",
  "2xl": "space-y-16",
}

const stackAlign = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
}

const stackJustify = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
}

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({
    children,
    spacing = "md",
    align = "start",
    justify = "start",
    className,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col",
          stackSpacing[spacing],
          stackAlign[align],
          stackJustify[justify],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Stack.displayName = "Stack"

export { Stack }
