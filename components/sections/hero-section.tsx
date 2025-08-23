"use client"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Container } from "@/components/ui/container"
import { Flex } from "@/components/ui/flex"
import { Stack } from "@/components/ui/stack"
import { Box } from "@/components/ui/box"
import { PyramidIcon } from "@/components/ui/icon"

interface HeroSectionProps {
  onExploreClick?: () => void
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sand particles background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full sand-particle"
            style={{
              left: "-10px",
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <Container maxWidth="4xl" className="relative z-10 text-center">
        <Stack spacing="xl" align="center">
          <Box padding="lg">
            <PyramidIcon size="6xl" className="text-primary mb-6" />
          </Box>

          <Stack spacing="lg" align="center">
            <Typography variant="h1" as="h1">
              Маски Мумии
            </Typography>
            <Typography variant="h2" as="h2" size="2xl">
              Кампания
            </Typography>
            <Typography variant="bodyLarge" as="p">
              Приключение Pathfinder
            </Typography>
          </Stack>

          <Button
            size="lg"
            variant="accent"
            className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={onExploreClick}
          >
            <PyramidIcon size="md" className="mr-2" />
            Исследовать кампанию
          </Button>
        </Stack>
      </Container>
    </section>
  )
}
