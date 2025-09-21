"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useMemo, useState } from "react"
import { fetchAllJournalEntries } from "@/lib/journal"
import { HieroglyphCycler } from "@/components/ui"
import { formatDateRu } from "@/lib/utils"

export function LatestChronicle() {
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [summary, setSummary] = useState("")

  useEffect(() => {
    ;(async () => {
      try {
        const entries = await fetchAllJournalEntries()
        const latest = entries && entries.length > 0 ? entries[entries.length - 1] : null
        if (latest) {
          setTitle(`Сессия ${latest.session}: ${latest.title}`)
          setDate(latest.date)
          setSummary(latest.summary || latest.content || "")
        }
      } catch {}
      setLoading(false)
    })()
  }, [])

  return (
    <div className="mb-16">
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
        Последняя хроника
      </h3>
      <Card className="bg-card/95 backdrop-blur-sm border-primary/30 max-w-4xl mx-auto">
        <CardContent className="p-8">
          {loading ? (
            <div className="flex items-center justify-center py-8"><HieroglyphCycler /></div>
          ) : (
            <>
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-primary text-2xl">📜</div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-primary mb-2">{title || "—"}</h4>
                  <p className="text-sm text-foreground/70 font-sans mb-4">{formatDateRu(date) || "—"}</p>
                </div>
              </div>
              <p className="text-foreground/90 leading-relaxed font-sans">
                {summary || "Ожидается первая запись журнала..."}
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
