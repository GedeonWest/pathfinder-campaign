"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Link } from "@/components/ui/link"
import { Flex } from "@/components/ui/flex"
import { Container } from "@/components/ui/container"
import { Stack } from "@/components/ui/stack"
import { AnkhIcon, MenuIcon, CloseIcon } from "@/components/ui/icon"
import { getLink, getImagePath } from "@/lib/utils"
import { ROUTES } from "@/lib/routes"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-primary/30">
      <Container maxWidth="6xl" padding="none">
        <Flex justify="between" align="center" className="h-16">
          {/* Logo */}
          <Flex align="center" gap="none">
            <Link href={getLink(ROUTES.HOME)} className="flex items-center space-x-2">
              <img src={getImagePath('/logo.png')} className="w-12 h-12 mx-auto text-primary mb-0 mr-2" style={{ filter: 'drop-shadow(0 0 10px oklch(85.2% 0.199 91.936)) !important' }} />
              <Typography variant="h5" className="font-serif font-bold">
                Mummy's Mask
              </Typography>
            </Link>
          </Flex>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <Flex gap="xl">
              <Link href={getLink(ROUTES.HOME)} variant="default">
                Главная
              </Link>
              <Link href={getLink(ROUTES.CHARACTERS)} variant="default">
                Персонажи
              </Link>
              <Link href={getLink(ROUTES.STATISTICS)} variant="default">
                Статистика
              </Link>
              <Link href={getLink(ROUTES.ADVENTURE_LOG)} variant="default">
                Журнал
              </Link>
              <Link href={getLink(ROUTES.MATERIALS)} variant="default">
                Материалы
              </Link>
            </Flex>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="md"
            className="md:hidden text-primary hover:bg-primary/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon size="md" /> : <MenuIcon size="md" />}
          </Button>
        </Flex>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <nav>
              <Stack spacing="sm">
                <Link
                  href={getLink(ROUTES.HOME)}
                  variant="default"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-2 py-1"
                >
                  Главная
                </Link>
                <Link
                  href={getLink(ROUTES.CHARACTERS)}
                  variant="default"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-2 py-1"
                >
                  Персонажи
                </Link>
                <Link
                  href={getLink(ROUTES.STATISTICS)}
                  variant="default"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-2 py-1"
                >
                  Статистика
                </Link>
                <Link
                  href={getLink(ROUTES.ADVENTURE_LOG)}
                  variant="default"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-2 py-1"
                >
                  Журнал
                </Link>
                <Link
                  href={getLink(ROUTES.MATERIALS)}
                  variant="default"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-2 py-1"
                >
                  Материалы
                </Link>
              </Stack>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
