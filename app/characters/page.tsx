"use client"

import { Crown, Sword, Shield, Sparkles, Eye } from "lucide-react"
import Masonry from "react-masonry-css"
import { CharacterCard, type Character } from "@/components/characters"

const characters: Character[] = [
  {
    id: "meldreth",
    name: "Мелдрет",
    class: "Воин",
    level: 8,
    race: "Человек",
    description: "Опытный воин пустыни, мастер клинка и защитник группы.",
    image: "/egyptian-bronze-warrior.png",
    classIcon: Sword,
    color: "from-red-600 to-red-800",
  },
  {
    id: "naeris",
    name: "Наэрис",
    class: "Следопыт",
    level: 8,
    race: "Эльф",
    description: "Мастер выслеживания и стрельбы, знающий тайны пустыни.",
    image: "/elven-desert-ranger.png",
    classIcon: Eye,
    color: "from-green-600 to-green-800",
  },
  {
    id: "kalia",
    name: "Калия",
    class: "Некромант",
    level: 7,
    race: "Человек",
    description: "Изучающая древние тайны смерти и нежити.",
    image: "/egyptian-mystic-glowing-eyes.png",
    classIcon: Sparkles,
    color: "from-purple-600 to-purple-800",
  },
  {
    id: "gavina",
    name: "Гавина",
    class: "Жрица",
    level: 8,
    race: "Человек",
    description: "Служительница древних богов, несущая свет и исцеление.",
    image: "/egyptian-priestess.png",
    classIcon: Shield,
    color: "from-yellow-600 to-yellow-800",
  },
  {
    id: "wind",
    name: "Винд",
    class: "Плут",
    level: 8,
    race: "Полурослик",
    description: "Мастер скрытности и ловушек, незаменимый при исследовании гробниц.",
    image: "/egyptian-assassin.png",
    classIcon: Eye,
    color: "from-blue-600 to-blue-800",
  },
]

// Breakpoints для masonry
const breakpointColumns = {
  default: 2,
  1100: 2,
  700: 2,
  500: 1
}

export default function CharactersPage() {
  return (
    <div className="min-h-screen marble-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 animate-fade-in-up">
          {/* <div className="flex justify-center mb-6">
            <Crown className="w-16 h-16 text-primary animate-glow-pulse" />
          </div> */}
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4 tracking-wider">ПЕРСОНАЖИ</h1>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto font-serif">
            Герои кампании "Маски Мумии" - отважные искатели приключений, исследующие древние тайны
          </p>
        </div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {characters.map((character, index) => (
            <CharacterCard key={character.id} character={character} index={index} />
          ))}
        </Masonry>
      </div>
    </div>
  )
}
