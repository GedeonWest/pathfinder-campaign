"use client"

import { Typography } from "@/components/ui/typography"
import { Container } from "@/components/ui/container"
import { Grid } from "@/components/ui/grid"
import { StatCard } from "@/components/ui/stat-card"

const stats = [
  { value: "15", label: "Sessions Played" },
  { value: "7", label: "Tombs Explored" },
  { value: "23", label: "Enemies Defeated" },
  { value: "5,420", label: "Gold Earned" },
]

export function StatsSection() {
  return (
    <Container maxWidth="6xl" className="mb-16">
      <Grid cols={2} colsMd={4} gap="md">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            label={stat.label}
            variant="default"
          />
        ))}
      </Grid>
    </Container>
  )
}
