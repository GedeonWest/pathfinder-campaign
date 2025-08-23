"use client"

import { Card, CardContent } from "@/components/ui/card"

export function CampaignDescription() {
  return (
    <div className="space-y-6">
      <Card className="bg-card/95 backdrop-blur-sm border-primary/30">
        <CardContent className="p-6">
          <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4">Маска мумии</h3>
          <p className="text-foreground/90 leading-relaxed font-sans text-base">
            В древней земле Осириона Рубиновый Принц открыл потерянный город Вати для исследователей и
            искателей удачи. Но под песчаными руинами лежат тайны, которые спали тысячелетиями.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card/95 backdrop-blur-sm border-primary/30">
        <CardContent className="p-6">
          <h3 className="font-serif text-lg md:text-xl font-bold text-primary mb-3">Ваше приключение ждет</h3>
          <p className="text-foreground/90 leading-relaxed font-sans text-base">
            Погрузитесь в забытые гробницы, раскройте древние тайны и сразитесь с неживыми стражами, которые защищают
            сокровища давно умерших фараонов. Сможете ли вы завладеть легендарной Маской мумии или станете еще одной
            жертвой проклятия?
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
