import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { forwardRef } from "react"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-serif text-5xl md:text-7xl font-bold text-primary tracking-wide",
      h2: "font-serif text-3xl md:text-4xl font-bold text-primary",
      h3: "font-serif text-2xl md:text-3xl font-bold text-primary",
      h4: "font-serif text-xl font-bold text-primary",
      h5: "font-serif text-lg font-bold text-primary",
      h6: "font-serif text-base font-bold text-primary",
      body: "font-sans text-base text-foreground/90 leading-relaxed",
      bodyLarge: "font-sans text-lg md:text-xl text-foreground",
      bodySmall: "font-sans text-sm text-foreground/80",
      caption: "font-sans text-xs text-foreground/60",
      lead: "font-sans text-xl text-foreground/90 leading-relaxed",
      muted: "font-sans text-sm text-muted-foreground",
      primary: "font-sans text-base text-primary font-medium",
      accent: "font-sans text-base text-accent-foreground font-medium",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    textColor: {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary-foreground",
      muted: "text-muted-foreground",
      accent: "text-accent-foreground",
      destructive: "text-destructive",
    },
  },
  defaultVariants: {
    variant: "body",
    size: "base",
    weight: "normal",
    align: "left",
    textColor: "default",
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, size, weight, align, textColor, as, ...props }, ref) => {
    const Component = as || "p"

    return (
      <Component
        className={cn(typographyVariants({ variant, size, weight, align, textColor }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Typography.displayName = "Typography"

export { Typography, typographyVariants }
