"use client"

import { Card, CardContent } from "@/components/ui/card"

export function LatestChronicle() {
  return (
    <div className="mb-16">
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
        Последняя хроника
      </h3>
      <Card className="bg-card/95 backdrop-blur-sm border-primary/30 max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div className="flex items-start space-x-4 mb-4">
            <div className="text-primary text-2xl">📜</div>
            <div>
              <h4 className="font-serif text-xl font-bold text-primary mb-2">Сессия 15: Затонувшая пирамида</h4>
              <p className="text-sm text-foreground/70 font-sans mb-4">3 дня назад</p>
            </div>
          </div>
          <p className="text-foreground/90 leading-relaxed font-sans">
            Наши герои спустились в затопленные камеры под Пирамидой Хети III, где они
            встретили древнего стража Собека-Ра. После ожесточенной битвы с крокодильими нежитью они
            обнаружили Камеру Золотых Масок, но не без того, чтобы не сработала смертельная ловушка, которая чуть не забрала
            жизнь Мелдрета. Сессия закончилась тем, что группа стояла перед запечатанной дверью с
            картушем забытого фараона Анх-эф-ен-Секхмет...
          </p>
          <div className="mt-4 pt-4 border-t border-primary/20">
            <span className="text-sm text-primary font-semibold font-sans">
              Следующая сессия: Проклятие фараона
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
