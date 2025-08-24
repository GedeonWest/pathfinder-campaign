import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Coins, Crown } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getCharacterById, getAllCharacters } from "@/lib/characters"
import { getLink } from "@/lib/utils"
import { ROUTES } from "@/lib/routes"

// Генерируем статические параметры для всех персонажей
export async function generateStaticParams() {
  const characters = getAllCharacters()
  return characters.map((character) => ({
    id: character.id,
  }))
}

export default function CharacterDetailPage({ params }: { params: { id: string } }) {
  const character = getCharacterById(params.id)

  if (!character) {
    notFound()
  }

  return (
    <div className="min-h-screen marble-bg">
      {/* Header с кнопкой назад */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            asChild
            variant="ghost"
            className="text-primary hover:bg-primary/10"
          >
            <Link href={getLink(ROUTES.CHARACTERS)} className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Назад к персонажам</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero секция с большим изображением */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={character.image || "./placeholder.svg"}
            alt={character.fullName}
            className="w-full h-full object-cover"
          />
          {/* Затемнение для читаемости текста */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Информация о персонаже поверх изображения */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
              {character.fullName}
            </h1>

            <div className="flex flex-wrap gap-4 mb-6">
              <Badge variant="outline" className="bg-primary/20 text-primary border-primary/50 text-lg px-4 py-2">
                {character.class}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/50 text-lg px-4 py-2">
                Уровень {character.level}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/50 text-lg px-4 py-2">
                {character.race}
              </Badge>
            </div>

            <div className="flex items-center space-x-2 text-white/90 text-xl">
              <Coins className="w-6 h-6 text-primary" />
              <span className="font-bold">{character.gold.toLocaleString()} золота</span>
            </div>
          </div>
        </div>
      </div>

      {/* Контент */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card/95 backdrop-blur-sm rounded-lg border border-primary/20 p-8 shadow-2xl">
          <div className="flex items-center space-x-3 mb-8">
            <Crown className="w-8 h-8 text-primary" />
            <h2 className="font-serif text-3xl font-bold text-primary">Предыстория</h2>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            {character.backstory.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-foreground/90 leading-relaxed mb-6 font-serif text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-primary/20">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Скачать лист персонажа (PDF)
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
