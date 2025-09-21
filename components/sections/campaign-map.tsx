"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Modal, ModalContent, ModalHeader, ModalBody } from "@/components/ui"
import { getImagePath } from "@/lib/utils"

// Pyramid icon component
function PyramidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 20h-13L12 6.5z" />
    </svg>
  )
}

export function CampaignMap() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)

  return (
    <>
      <Card className="bg-card/95 backdrop-blur-sm border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
        <CardContent className="p-8">
          <h3 className="font-serif text-lg md:text-xl font-bold text-primary mb-4 text-center">
            Карта древних земель
          </h3>
          <button onClick={() => setIsMapModalOpen(true)} className="relative aspect-square bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg overflow-hidden cursor-pointer">
            <img
              src={getImagePath("/map.png")}
              alt="Карта кампании"
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"

            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center cursor-pointer">
              <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 text-white font-semibold">
                Нажмите для увеличения
              </div>
            </div>
          </button>
        </CardContent>
      </Card>

      {/* Map Modal */}
      <Modal isOpen={isMapModalOpen} onClose={() => setIsMapModalOpen(false)}>
        <ModalContent className="w-full max-w-6xl">
          <ModalHeader onClose={() => setIsMapModalOpen(false)}>
            Карта земель Вати
          </ModalHeader>
          <ModalBody className="p-0">
            <div className="w-full rounded-lg overflow-hidden border border-primary/30 shadow-2xl">
              <div className="relative">
                <div className="absolute inset-0 bg-background/50" style={{ display: 'none' }}></div>
                <div className="mx-auto" style={{ maxWidth: '1148px' }}>
                  {/* Используем соотношение 574:249 ~ 2.305 */}
                  <div className="relative" style={{ paddingTop: `${(249/574)*100}%` }}>
                    <img
                      src={getImagePath("/map.png")}
                      alt="Карта кампании"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
