"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

// Ankh icon component
function AnkhIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C10.34 2 9 3.34 9 5s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 8c-1.1 0-2-.9-2-2V7c-2.21 0-4 1.79-4 4v11h12V11c0-2.21-1.79-4-4-4v1c0 1.1-.9 2-2 2z" />
    </svg>
  )
}

// Menu icon component
function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  )
}

// Close icon component
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-primary/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <AnkhIcon className="w-8 h-8 text-primary" />
            <a href="/" className="font-serif text-xl font-bold text-primary hover:text-primary/80 transition-colors">
              Maxi Mummies
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-foreground/90 hover:text-primary transition-colors duration-200 font-medium font-sans"
            >
              Home
            </a>
            <a
              href="/characters"
              className="text-foreground/90 hover:text-primary transition-colors duration-200 font-medium font-sans"
            >
              Characters
            </a>
            <a
              href="/statistics"
              className="text-foreground/90 hover:text-primary transition-colors duration-200 font-medium font-sans"
            >
              Statistics
            </a>
            <a
              href="/adventure-log"
              className="text-foreground/90 hover:text-primary transition-colors duration-200 font-medium font-sans"
            >
              Adventure Log
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary hover:bg-primary/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-foreground/90 hover:text-primary transition-colors duration-200 font-medium font-sans px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/characters"
                className="text-foreground/90 hover:text-primary transition-colors duration-200 font-medium font-sans px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Characters
              </a>
              <a
                href="/statistics"
                className="text-foreground/90 hover:text-primary transition-colors duration-200 font-medium font-sans px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Statistics
              </a>
              <a
                href="/adventure-log"
                className="text-foreground/90 hover:text-primary transition-colors duration-200 font-medium font-sans px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Adventure Log
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
