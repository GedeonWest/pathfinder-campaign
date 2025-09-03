"use client"

import { Typography } from "@/components/ui/typography"
import { Container } from "@/components/ui/container"
import { Grid } from "@/components/ui/grid"
import { HeroCard } from "@/components/ui/hero-card"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { AnkhIcon } from "@/components/ui/icon"
import { ROUTES } from "@/lib/routes"

const heroes = [
  {
    name: "Meldreth",
    class: "Боец",
    level: 5,
    description: "Пустынный воин",
    icon: "⚔️",
    iconBgColor: "from-red-500 to-red-700",
  },
  {
    name: "Khenti-Ka",
    class: "Жрец",
    level: 5,
    description: "Жрец Ра",
    icon: "✨",
    iconBgColor: "from-blue-500 to-blue-700",
  },
  {
    name: "Nefertiti",
    class: "Плут",
    level: 4,
    description: "Расхититель гробниц",
    icon: "🗡️",
    iconBgColor: "from-purple-500 to-purple-700",
  },
]

export function HeroesSection() {
  return (
    <Container maxWidth="6xl">
      <Typography variant="h3" as="h3" align="center" className="mb-8">
        Герои
      </Typography>

      <Grid cols={1} colsMd={2} colsLg={3} gap="md" className="mb-8">
        {heroes.map((hero, index) => (
          <HeroCard
            key={index}
            {...hero}
          />
        ))}
      </Grid>

      <div className="text-center">
        <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 bg-transparent">
          <Link href={ROUTES.CHARACTERS} className="flex items-center">
            Посмотреть всех персонажей
            <AnkhIcon size="sm" className="ml-2" />
          </Link>
        </Button>
      </div>
    </Container>
  )
}
