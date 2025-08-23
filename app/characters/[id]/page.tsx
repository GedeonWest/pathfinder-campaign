"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Coins, Crown } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const charactersData = {
  meldreth: {
    name: "Мелдрет Песчаная Буря",
    class: "Воин",
    level: 8,
    race: "Человек",
    gold: 2450,
    image: "/egyptian-bronze-warrior.png",
    backstory: `Мелдрет родился в небольшом оазисе на краю великой пустыни. С детства он был окружен историями о древних воинах-фараонах и их легендарных подвигах. Когда его родная деревня подверглась нападению банды мародеров, Мелдрет взял в руки меч своего деда и дал отпор захватчикам.

После этого события он поклялся защищать невинных и раскрыть тайны древних воинских искусств. Годы тренировок в пустыне закалили его тело и дух, а встреча с группой искателей приключений открыла ему путь к величайшим тайнам прошлого.

Сейчас Мелдрет ищет легендарные Маски Мумии, веря, что они помогут ему стать достойным наследником древних героев пустыни.`,
  },
  naeris: {
    name: "Наэрис Лунный Охотник",
    class: "Следопыт",
    level: 8,
    race: "Эльф",
    gold: 1890,
    image: "/elven-desert-ranger.png",
    backstory: `Наэрис происходит из древнего эльфийского рода, который веками служил хранителями границ между мирами живых и мертвых. Её предки были свидетелями расцвета и падения великих египетских династий, записывая их историю в священных хрониках.

Обученная искусству выслеживания и стрельбы из лука с раннего детства, Наэрис обладает сверхъестественной способностью чувствовать присутствие нежити и находить скрытые проходы в древних гробницах.

Когда древние печати начали ослабевать, а мертвые стали пробуждаться, Наэрис покинула свой лесной дом, чтобы найти источник этого зла и восстановить баланс между мирами.`,
  },
  kalia: {
    name: "Калия Темная Мудрость",
    class: "Некромант",
    level: 7,
    race: "Человек",
    gold: 1650,
    image: "/egyptian-mystic-glowing-eyes.png",
    backstory: `Калия была дочерью придворного мага одного из последних фараонов. С детства она проявляла необычные способности - могла видеть духов умерших и понимать их речь. Вместо того чтобы бояться этого дара, она решила изучить его природу.

Годы изучения древних текстов и запретных ритуалов открыли ей глаза на истинную природу смерти и нежити. Калия поняла, что некромантия - это не только разрушение, но и способ защиты живых от угроз из мира мертвых.

Теперь она путешествует с группой, используя свои знания для борьбы с древним злом, которое пробуждается в гробницах фараонов.`,
  },
  gavina: {
    name: "Гавина Солнечный Луч",
    class: "Жрица",
    level: 8,
    race: "Человек",
    gold: 2100,
    image: "/egyptian-priestess.png",
    backstory: `Гавина служила в великом храме Ра в столице древнего царства. Она была одной из самых молодых жриц, когда-либо достигших высокого ранга, благодаря своей непоколебимой вере и способности исцелять даже самые тяжелые раны.

Когда древние проклятия начали пробуждаться, а тьма стала распространяться по земле, Гавина получила видение от своего божества. Ей было показано, что только объединив силы с избранными героями, она сможет предотвратить возвращение древнего зла.

Покинув безопасность храма, Гавина присоединилась к группе искателей приключений, неся с собой благословление солнечного бога и решимость защитить мир от надвигающейся тьмы.`,
  },
  wind: {
    name: "Винд Быстрые Пальцы",
    class: "Плут",
    level: 8,
    race: "Полурослик",
    gold: 3200,
    image: "/egyptian-assassin.png",
    backstory: `Винд вырос на улицах большого торгового города, где научился выживать благодаря ловкости рук и острому уму. Будучи полуросликом в мире людей, он часто сталкивался с предрассудками, но это только закалило его характер.

Его жизнь изменилась, когда он случайно наткнулся на древнюю карту, ведущую к забытой гробнице. Попытка ограбить её едва не стоила ему жизни, но также открыла глаза на опасности, которые таятся в древних руинах.

Теперь Винд использует свои навыки не только для личной выгоды, но и для помощи группе в исследовании опасных гробниц. Его способность обнаруживать и обезвреживать ловушки спасла жизни его товарищей не один раз.`,
  },
}

export default function CharacterDetailPage({ params }: { params: { id: string } }) {
  const character = charactersData[params.id as keyof typeof charactersData]

  if (!character) {
    notFound()
  }

  return (
    <div className="min-h-screen marble-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button
            asChild
            variant="outline"
            className="mb-6 border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
          >
            <Link href="/characters" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Назад к персонажам</span>
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="bg-card/98 backdrop-blur-sm border-primary/30 shadow-2xl sticky top-8">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="character-arch w-48 h-60 p-3">
                    <img
                      src={character.image || "/placeholder.svg"}
                      alt={character.name}
                      className="w-full h-full object-cover rounded-t-full"
                    />
                  </div>
                </div>

                <CardTitle className="font-serif text-2xl text-primary">{character.name}</CardTitle>

                <div className="space-y-2">
                  <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                    {character.class} • Уровень {character.level}
                  </Badge>
                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                    {character.race}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-primary/30 rounded bg-primary/10">
                  <span className="flex items-center space-x-2 text-primary">
                    <Coins className="w-5 h-5" />
                    <span className="font-serif">Золото</span>
                  </span>
                  <span className="font-bold text-primary text-lg">{character.gold.toLocaleString()}</span>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать лист персонажа (PDF)
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-card/98 backdrop-blur-sm border-primary/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary flex items-center space-x-2">
                  <Crown className="w-6 h-6" />
                  <span>Предыстория</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  {character.backstory.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-foreground/90 leading-relaxed mb-4 font-serif">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
