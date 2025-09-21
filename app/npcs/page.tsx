"use client"

import { useEffect, useState } from "react"
import { fetchNPCs } from "@/lib/npcs"
import type { NPC } from "@/types/npcs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Modal, ModalContent, ModalHeader, ModalBody } from "@/components/ui"
import { HieroglyphCycler } from "@/components/ui"
import { getImagePath, formatDateRu } from "@/lib/utils"

export default function NPCsPage() {
  const [npcs, setNpcs] = useState<NPC[]>([])
  const [active, setActive] = useState<NPC | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const data = await fetchNPCs()
        setNpcs(data)
      } catch {}
    })()
  }, [])

  return (
    <div className="min-h-screen marble-bg overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 tracking-wider">НПС</h1>
          <div className="flex justify-center mb-4">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto font-serif">Персонажи мастера: союзники, нейтралы и противники</p>
        </div>

        <section className="relative min-h-[200px]">
          {npcs.length === 0 ? (
            <div className="flex items-center justify-center py-16">
              <HieroglyphCycler size="lg" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {npcs.map((npc, idx) => (
                <Card key={npc.id} className="group bg-card/95 border-primary/30 hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-primary/20 animate-fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <CardContent className="p-0 cursor-pointer" onClick={() => setActive(npc)}>
                    <div className="h-56 w-full overflow-hidden flex items-center justify-center bg-background/40">
                      <img src={getImagePath(npc.image)} alt={npc.fullName} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-xl text-primary mb-1">{npc.fullName}</h3>
                      <div className="text-sm text-foreground/80 mb-2">{npc.role}</div>
                      <div className="flex flex-wrap gap-2">
                        {npc.faction && (<Badge variant="outline" className="text-xs border-primary/40">{npc.faction}</Badge>)}
                        {npc.location && (<Badge variant="secondary" className="text-xs bg-primary/15 text-primary">{npc.location}</Badge>)}
                        {npc.hostility && (
                          <Badge
                            variant="outline"
                            className={`text-xs border-primary/40 ${
                              npc.hostility === 'friendly' ? 'bg-emerald-900/30 text-emerald-300 border-emerald-500/40' :
                              npc.hostility === 'neutral' ? 'bg-amber-900/30 text-amber-300 border-amber-500/40' :
                              'bg-red-900/30 text-red-300 border-red-500/40'
                            }`}
                          >
                            {npc.hostility === 'friendly' ? 'Дружественный' : npc.hostility === 'neutral' ? 'Нейтральный' : 'Враждебный'}
                          </Badge>
                        )}
                        {npc.status && (
                          <Badge
                            variant="outline"
                            className={`text-xs border-primary/40 ${
                              npc.status === 'alive' ? 'bg-emerald-900/30 text-emerald-300 border-emerald-500/40' :
                              npc.status === 'dead' ? 'bg-red-900/30 text-red-300 border-red-500/40' :
                              'bg-slate-800/50 text-slate-300 border-slate-500/40'
                            }`}
                          >
                            {npc.status === 'alive' ? 'Жив' : npc.status === 'dead' ? 'Погиб' : 'Неизвестно'}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>

      <Modal isOpen={!!active} onClose={() => setActive(null)}>
        <ModalContent className="w-full max-w-5xl md:rounded-xl md:overflow-hidden">
          <ModalHeader onClose={() => setActive(null)}>{active?.fullName}</ModalHeader>
          <ModalBody className="p-0">
            {active && (
              <div className="w-full">
                <div className="relative h-[40vh] md:h-[55vh] overflow-hidden">
                  <img src={getImagePath(active.image)} alt={active.fullName} className="w-full h-full object-contain md:object-cover md:object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2">
                      {active.role && (<Badge variant="outline" className="bg-primary/20 text-primary border-primary/40">{active.role}</Badge>)}
                      {active.faction && (<Badge variant="secondary" className="bg-white/20 text-white border-white/30">{active.faction}</Badge>)}
                      {active.location && (<Badge variant="secondary" className="bg-white/20 text-white border-white/30">{active.location}</Badge>)}
                      {active.hostility && (
                        <Badge
                          variant="outline"
                          className={`${
                            active.hostility === 'friendly' ? 'bg-emerald-900/30 text-emerald-300 border-emerald-500/40' :
                            active.hostility === 'neutral' ? 'bg-amber-900/30 text-amber-300 border-amber-500/40' :
                            'bg-red-900/30 text-red-300 border-red-500/40'
                          }`}
                        >
                          {active.hostility === 'friendly' ? 'Дружественный' : active.hostility === 'neutral' ? 'Нейтральный' : 'Враждебный'}
                        </Badge>
                      )}
                      {active.status && (
                        <Badge
                          variant="outline"
                          className={`${
                            active.status === 'alive' ? 'bg-emerald-900/30 text-emerald-300 border-emerald-500/40' :
                            active.status === 'dead' ? 'bg-red-900/30 text-red-300 border-red-500/40' :
                            'bg-slate-800/50 text-slate-300 border-slate-500/40'
                          }`}
                        >
                          {active.status === 'alive' ? 'Жив' : active.status === 'dead' ? 'Погиб' : 'Неизвестно'}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="bg-card/95 backdrop-blur-sm rounded-lg border border-primary/20 p-6 shadow-xl">
                    <div className="prose prose-invert max-w-none text-foreground/90 font-serif leading-relaxed">
                      {active.description.split('\n\n').map((p, i) => (
                        <p key={i} className="mb-4">{p}</p>
                      ))}
                    </div>
                    {active.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {active.tags.map((t, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-primary/30">{t}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}


