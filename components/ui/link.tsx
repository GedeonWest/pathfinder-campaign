import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import NextLink from "next/link"

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  href: string
  variant?: "default" | "primary" | "secondary" | "muted" | "accent"
  size?: "sm" | "md" | "lg"
  underline?: boolean
  external?: boolean
  className?: string
}

const linkVariants = {
  default: "text-foreground/90 hover:text-foreground transition-colors duration-200",
  primary: "text-primary hover:text-primary/80 transition-colors duration-200 font-medium",
  secondary: "text-secondary-foreground hover:text-secondary-foreground/80 transition-colors duration-200",
  muted: "text-muted-foreground hover:text-muted-foreground/80 transition-colors duration-200",
  accent: "text-accent-foreground hover:text-accent-foreground/80 transition-colors duration-200",
}

const linkSizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({
    children,
    href,
    variant = "default",
    size = "md",
    underline = false,
    external = false,
    className,
    ...props
  }, ref) => {
    const isExternal = external || href.startsWith('http') || href.startsWith('mailto:')

    const classes = cn(
      linkVariants[variant],
      linkSizes[size],
      underline && "underline underline-offset-4",
      "font-medium font-sans",
      className
    )

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
          <svg
            className="inline-block w-3 h-3 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )
    }

    return (
      <NextLink
        href={href}
        ref={ref as any}
        className={classes}
        {...props}
      >
        {children}
      </NextLink>
    )
  }
)

Link.displayName = "Link"

export { Link }
