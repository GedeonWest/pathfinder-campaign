"use client"

import { Typography } from "@/components/ui/typography"
import { Container } from "@/components/ui/container"
import { Grid } from "@/components/ui/grid"
import { HeroCard } from "@/components/ui/hero-card"
import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import { AnkhIcon } from "@/components/ui/icon"

const heroes = [
  {
    name: "Meldreth",
    class: "Fighter",
    level: 5,
    description: "Desert Warrior",
    icon: "⚔️",
    iconBgColor: "from-red-500 to-red-700",
  },
  {
    name: "Khenti-Ka",
    class: "Cleric",
    level: 5,
    description: "Priest of Ra",
    icon: "✨",
    iconBgColor: "from-blue-500 to-blue-700",
  },
  {
    name: "Nefertiti",
    class: "Rogue",
    level: 4,
    description: "Tomb Raider",
    icon: "🗡️",
    iconBgColor: "from-purple-500 to-purple-700",
  },
]

export function HeroesSection() {
  return (
    <Container maxWidth="6xl">
      <Typography variant="h3" as="h3" align="center" className="mb-8">
        The Heroes
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
          <Link href="/characters" className="flex items-center">
            View All Characters
            <AnkhIcon size="sm" className="ml-2" />
          </Link>
        </Button>
      </div>
    </Container>
  )
}
