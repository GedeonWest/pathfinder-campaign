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
import { ROUTES } from "@/lib/routes"

export function TestComponents() {
  return (
    <Container maxWidth="4xl" padding="lg">
      <Stack spacing="xl" align="center">
        <Typography variant="h1" align="center">
          Тестовые компоненты
        </Typography>

        <Typography variant="body" align="center">
          Тестирование всех новых переиспользуемых компонентов
        </Typography>

        <Grid cols={1} colsMd={2} gap="lg">
          <Box padding="lg" background="card" border="primary" radius="lg">
            <Typography variant="h3" className="mb-4">
              Компонент Box
            </Typography>
            <Typography variant="body">
              Это тест компонента Box с различными пропсами.
            </Typography>
          </Box>

          <Box padding="lg" background="muted" border="accent" radius="xl">
            <Typography variant="h3" className="mb-4">
              Другой Box
            </Typography>
            <Typography variant="body">
              Различные стили для сравнения.
            </Typography>
          </Box>
        </Grid>

        <Flex direction="col" align="center" gap="md">
          <Typography variant="h3">Кнопки</Typography>
          <Flex gap="md" wrap="wrap" justify="center">
            <Button variant="default">Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </Flex>
        </Flex>

        <Grid cols={2} colsMd={4} gap="md">
          <StatCard value="15" label="Сессии" />
          <StatCard value="7" label="Гробницы" />
          <StatCard value="23" label="Враги" />
          <StatCard value="5,420" label="Золото" />
        </Grid>

        <Grid cols={1} colsMd={3} gap="md">
          <HeroCard
            name="Meldreth"
            class="Боец"
            level={5}
            description="Пустынный воин"
            icon="⚔️"
            iconBgColor="from-red-500 to-red-700"
          />
          <HeroCard
            name="Khenti-Ka"
            class="Жрец"
            level={5}
            description="Жрец Ра"
            icon="✨"
            iconBgColor="from-blue-500 to-blue-700"
          />
          <HeroCard
            name="Nefertiti"
            class="Плут"
            level={4}
            description="Расхититель гробниц"
            icon="🗡️"
            iconBgColor="from-purple-500 to-purple-700"
          />
        </Grid>

        <Flex gap="md" wrap="wrap" justify="center">
          <Link href={ROUTES.HOME} variant="primary">
            Главная
          </Link>
          <Link href={ROUTES.CHARACTERS} variant="default">
            Персонажи
          </Link>
          <Link href={ROUTES.STATISTICS} variant="accent">
            Статистика
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
