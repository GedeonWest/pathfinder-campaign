"use client"

import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Grid } from "@/components/ui/grid"
import { Flex } from "@/components/ui/flex"
import { Stack } from "@/components/ui/stack"
import { Box } from "@/components/ui/box"
import { StatCard } from "@/components/ui/stat-card"
import { HeroCard } from "@/components/ui/hero-card"
import { Link } from "@/components/ui/link"
import { PyramidIcon, AnkhIcon } from "@/components/ui/icon"

export function TestComponents() {
  return (
    <Container maxWidth="4xl" padding="lg">
      <Stack spacing="xl" align="center">
        <Typography variant="h1" align="center">
          Test Components
        </Typography>

        <Typography variant="body" align="center">
          Testing all the new reusable components
        </Typography>

        <Grid cols={1} colsMd={2} gap="lg">
          <Box padding="lg" background="card" border="primary" radius="lg">
            <Typography variant="h3" className="mb-4">
              Box Component
            </Typography>
            <Typography variant="body">
              This is a test of the Box component with various props.
            </Typography>
          </Box>

          <Box padding="lg" background="muted" border="accent" radius="xl">
            <Typography variant="h3" className="mb-4">
              Another Box
            </Typography>
            <Typography variant="body">
              Different styling for comparison.
            </Typography>
          </Box>
        </Grid>

        <Flex direction="col" align="center" gap="md">
          <Typography variant="h3">Buttons</Typography>
          <Flex gap="md" wrap="wrap" justify="center">
            <Button variant="default">Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </Flex>
        </Flex>

        <Grid cols={2} colsMd={4} gap="md">
          <StatCard value="15" label="Sessions" />
          <StatCard value="7" label="Tombs" />
          <StatCard value="23" label="Enemies" />
          <StatCard value="5,420" label="Gold" />
        </Grid>

        <Grid cols={1} colsMd={3} gap="md">
          <HeroCard
            name="Meldreth"
            class="Fighter"
            level={5}
            description="Desert Warrior"
            icon="⚔️"
            iconBgColor="from-red-500 to-red-700"
          />
          <HeroCard
            name="Khenti-Ka"
            class="Cleric"
            level={5}
            description="Priest of Ra"
            icon="✨"
            iconBgColor="from-blue-500 to-blue-700"
          />
          <HeroCard
            name="Nefertiti"
            class="Rogue"
            level={4}
            description="Tomb Raider"
            icon="🗡️"
            iconBgColor="from-purple-500 to-purple-700"
          />
        </Grid>

        <Flex gap="md" wrap="wrap" justify="center">
          <Link href="/" variant="primary">
            Home
          </Link>
          <Link href="/characters" variant="default">
            Characters
          </Link>
          <Link href="/statistics" variant="accent">
            Statistics
          </Link>
        </Flex>

        <Flex align="center" gap="md">
          <PyramidIcon size="lg" className="text-primary" />
          <AnkhIcon size="lg" className="text-accent" />
        </Flex>
      </Stack>
    </Container>
  )
}
