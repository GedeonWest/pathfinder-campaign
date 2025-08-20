# UI Components Documentation

## Overview
This document describes the reusable UI components created for the Pathfinder Campaign project. All components follow BEM methodology, use TypeScript for type safety, and are built with mobile-first responsive design.

## Layout Components

### Box
A versatile container component with configurable padding, margin, background, border, radius, and shadow.

```tsx
import { Box } from "@/components/ui/box"

<Box 
  padding="lg" 
  background="card" 
  border="primary" 
  radius="lg"
>
  Content here
</Box>
```

**Props:**
- `padding`: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
- `margin`: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
- `background`: "none" | "default" | "muted" | "primary" | "accent" | "card"
- `border`: "none" | "default" | "primary" | "accent" | "muted"
- `radius`: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"
- `shadow`: "none" | "sm" | "md" | "lg" | "xl" | "2xl"

### Container
A responsive container with configurable max-width and padding.

```tsx
import { Container } from "@/components/ui/container"

<Container maxWidth="6xl" padding="lg">
  Content here
</Container>
```

**Props:**
- `maxWidth`: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
- `padding`: "none" | "sm" | "md" | "lg" | "xl" | "2xl"
- `center`: boolean (default: true)

### Flex
A flexbox container with configurable direction, justify, align, wrap, and gap.

```tsx
import { Flex } from "@/components/ui/flex"

<Flex 
  direction="row" 
  justify="center" 
  align="center" 
  gap="md"
>
  Content here
</Flex>
```

**Props:**
- `direction`: "row" | "row-reverse" | "col" | "col-reverse"
- `justify`: "start" | "end" | "center" | "between" | "around" | "evenly"
- `align`: "start" | "end" | "center" | "baseline" | "stretch"
- `wrap`: "nowrap" | "wrap" | "wrap-reverse"
- `gap`: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

### Grid
A CSS Grid container with responsive column configurations.

```tsx
import { Grid } from "@/components/ui/grid"

<Grid 
  cols={1} 
  colsMd={2} 
  colsLg={3} 
  gap="md"
>
  Grid items here
</Grid>
```

**Props:**
- `cols`: 1-12 (default columns)
- `colsSm`, `colsMd`, `colsLg`, `colsXl`: Responsive breakpoint columns
- `gap`: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
- `gapX`, `gapY`: Separate horizontal/vertical gaps
- `center`: boolean for centering grid items

### Section
A semantic section component with configurable padding and background.

```tsx
import { Section } from "@/components/ui/section"

<Section padding="xl" background="muted">
  Section content here
</Section>
```

**Props:**
- `padding`: "none" | "sm" | "md" | "lg" | "xl" | "2xl"
- `background`: "none" | "default" | "muted" | "primary" | "accent"
- `maxWidth`: Container max-width
- `containerClassName`: Additional container classes

### Stack
A vertical stack component with configurable spacing and alignment.

```tsx
import { Stack } from "@/components/ui/stack"

<Stack spacing="lg" align="center" justify="center">
  Stacked items here
</Stack>
```

**Props:**
- `spacing`: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
- `align`: "start" | "center" | "end" | "stretch"
- `justify`: "start" | "center" | "end" | "between" | "around" | "evenly"

### Spacer
A utility component for creating consistent spacing.

```tsx
import { Spacer } from "@/components/ui/spacer"

<Spacer size="lg" axis="vertical" />
<Spacer size="md" axis="horizontal" />
```

**Props:**
- `size`: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"
- `axis`: "horizontal" | "vertical" | "both"

## Typography Components

### Typography
A comprehensive typography component with multiple variants and configurations.

```tsx
import { Typography } from "@/components/ui/typography"

<Typography 
  variant="h1" 
  size="5xl" 
  weight="bold" 
  align="center" 
  color="primary"
>
  Heading text
</Typography>

<Typography variant="body" as="p">
  Body text
</Typography>
```

**Props:**
- `variant`: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "bodyLarge" | "bodySmall" | "caption" | "lead" | "muted" | "primary" | "accent"
- `size`: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
- `weight`: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold"
- `align`: "left" | "center" | "right" | "justify"
- `color`: "default" | "primary" | "secondary" | "muted" | "accent" | "destructive"
- `as`: HTML element to render as

## Icon Components

### Icon
Base icon component with configurable sizes.

```tsx
import { Icon } from "@/components/ui/icon"

<Icon size="lg" className="text-primary" />
```

**Props:**
- `size`: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"

### Predefined Icons
- `PyramidIcon` - Pyramid shape icon
- `AnkhIcon` - Ankh symbol icon
- `MenuIcon` - Hamburger menu icon
- `CloseIcon` - Close/X icon
- `ChevronRightIcon` - Right chevron
- `ChevronDownIcon` - Down chevron

## Interactive Components

### Link
Enhanced link component with variants and external link detection.

```tsx
import { Link } from "@/components/ui/link"

<Link 
  href="/characters" 
  variant="primary" 
  size="lg" 
  underline 
  external
>
  External Link
</Link>
```

**Props:**
- `href`: Link URL
- `variant`: "default" | "primary" | "secondary" | "muted" | "accent"
- `size`: "sm" | "md" | "lg"
- `underline`: boolean
- `external`: boolean (auto-detected for http/mailto links)

## Data Display Components

### StatCard
Card component for displaying statistics.

```tsx
import { StatCard } from "@/components/ui/stat-card"

<StatCard
  value="15"
  label="Sessions Played"
  description="Total campaign sessions"
  icon={<PyramidIcon />}
  variant="primary"
/>
```

**Props:**
- `value`: string | number
- `label`: string
- `description`: optional string
- `icon`: optional ReactNode
- `variant`: "default" | "primary" | "accent" | "muted"

### HeroCard
Card component for displaying character information.

```tsx
import { HeroCard } from "@/components/ui/hero-card"

<HeroCard
  name="Meldreth"
  class="Fighter"
  level={5}
  description="Desert Warrior"
  icon="⚔️"
  iconBgColor="from-red-500 to-red-700"
  onClick={() => console.log('Hero clicked')}
/>
```

**Props:**
- `name`: string
- `class`: string
- `level`: number
- `description`: string
- `icon`: string (emoji or icon)
- `iconBgColor`: string (Tailwind gradient classes)
- `onClick`: optional function

## Usage Examples

### Creating a Layout
```tsx
import { Container, Section, Grid, Typography } from "@/components/ui"

function MyPage() {
  return (
    <Container maxWidth="6xl">
      <Section padding="xl">
        <Typography variant="h1" align="center" className="mb-8">
          Page Title
        </Typography>
        
        <Grid cols={1} colsMd={2} gap="lg">
          <div>Left content</div>
          <div>Right content</div>
        </Grid>
      </Section>
    </Container>
  )
}
```

### Responsive Design
```tsx
<Grid 
  cols={1}        // Mobile: 1 column
  colsSm={2}      // Small: 2 columns
  colsMd={3}      // Medium: 3 columns
  colsLg={4}      // Large: 4 columns
  gap="md"
>
  {/* Grid items */}
</Grid>
```

### Component Composition
```tsx
<Stack spacing="lg" align="center">
  <Typography variant="h2">Section Title</Typography>
  <Typography variant="body" color="muted">
    Section description
  </Typography>
  <Flex gap="md">
    <Button variant="primary">Action 1</Button>
    <Button variant="outline">Action 2</Button>
  </Flex>
</Stack>
```

## Best Practices

1. **Mobile-First**: Always start with mobile styles and use responsive variants
2. **BEM Methodology**: Follow BEM naming conventions for custom classes
3. **TypeScript**: Use proper typing for all component props
4. **Composition**: Compose complex layouts using multiple simple components
5. **Consistency**: Use predefined spacing, colors, and typography variants
6. **Accessibility**: Ensure proper semantic HTML and ARIA attributes

## File Structure

```
components/
├── ui/                    # Base UI components
│   ├── index.ts         # Main export file
│   ├── typography.tsx   # Typography component
│   ├── icon.tsx         # Icon components
│   ├── button.tsx       # Button component
│   ├── link.tsx         # Link component
│   ├── grid.tsx         # Grid component
│   ├── flex.tsx         # Flex component
│   ├── stack.tsx        # Stack component
│   ├── box.tsx          # Box component
│   ├── container.tsx    # Container component
│   ├── section.tsx      # Section component
│   ├── spacer.tsx       # Spacer component
│   ├── stat-card.tsx    # StatCard component
│   ├── hero-card.tsx    # HeroCard component
│   ├── divider.tsx      # Divider component
│   └── ...              # Other existing components
├── sections/             # Page sections
│   ├── index.ts         # Sections export
│   ├── hero-section.tsx # Hero section
│   ├── stats-section.tsx # Stats section
│   └── heroes-section.tsx # Heroes section
└── header.tsx            # Header component
```

## Contributing

When adding new components:

1. Follow the existing component structure
2. Use TypeScript interfaces for props
3. Implement forwardRef for ref forwarding
4. Add proper displayName
5. Use existing utility functions (cn, cva)
6. Follow the established naming conventions
7. Add to the appropriate index.ts file
8. Update this documentation 
