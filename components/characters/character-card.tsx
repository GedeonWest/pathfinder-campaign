"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { getLink, getImagePath } from "@/lib/utils"
import { ROUTES } from "@/lib/routes"

export interface Character {
  id: string
  name: string
  class: string
  level: number
  race: string
  description: string
  image: string
  classIcon: LucideIcon
  color: string
}

interface CharacterCardProps {
  character: Character
  index: number
}

export function CharacterCard({ character, index }: CharacterCardProps) {
  const IconComponent = character.classIcon

  return (
    <div className="mb-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
      <Card className="group bg-card/98 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-primary/20">
        <CardHeader className="pb-4">
          <div className="flex justify-center mb-4">
            <div className="character-arch w-32 h-40 p-2">
              <img
                src={character.image ? getImagePath(character.image) : getImagePath("./placeholder.svg")}
                alt={character.name}
                className="w-full h-full object-cover rounded-t-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center space-y-2">
            <CardTitle className="font-serif text-xl text-primary">{character.name}</CardTitle>

            <div className="flex justify-center">
              <Badge
                variant="outline"
                className={`bg-gradient-to-r ${character.color} border-primary/50 text-white font-semibold`}
              >
                <IconComponent className="w-3 h-3 mr-1" />
                {character.class}
              </Badge>
            </div>

            <div className="flex justify-center space-x-2">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                Уровень {character.level}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <CardDescription className="text-sm leading-relaxed text-foreground/90 text-center">
            {character.description}
          </CardDescription>

          <Button
            asChild
            variant="outline"
            className="w-full border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
          >
            <Link href={getLink(ROUTES.CHARACTER_DETAIL(character.id))}>Подробнее</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
