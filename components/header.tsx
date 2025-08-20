"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Link } from "@/components/ui/link"
import { Flex } from "@/components/ui/flex"
import { Container } from "@/components/ui/container"
import { Stack } from "@/components/ui/stack"
import { AnkhIcon, MenuIcon, CloseIcon } from "@/components/ui/icon"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-primary/30">
      <Container maxWidth="6xl" padding="none">
        <Flex justify="between" align="center" className="h-16">
          {/* Logo */}
          <Flex align="center" gap="sm">
            <AnkhIcon size="lg" className="text-primary" />
            <Link href="/" variant="primary" size="lg" className="font-serif font-bold">
              Маски Мумии
            </Link>
          </Flex>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <Flex gap="xl">
              <Link href="/" variant="default">
                Home
              </Link>
              <Link href="/characters" variant="default">
                Characters
              </Link>
              <Link href="/statistics" variant="default">
                Statistics
              </Link>
              <Link href="/adventure-log" variant="default">
                Adventure Log
              </Link>
            </Flex>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
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
                  href="/"
                  variant="default"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-2 py-1"
                >
                  Home
                </Link>
                <Link
                  href="/characters"
                  variant="default"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-2 py-1"
                >
                  Characters
                </Link>
                <Link
                  href="/statistics"
                  variant="default"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-2 py-1"
                >
                  Statistics
                </Link>
                <Link
                  href="/adventure-log"
                  variant="default"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-2 py-1"
                >
                  Adventure Log
                </Link>
              </Stack>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
