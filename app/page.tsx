"use client"

import { useState } from "react"
import { Preloader, MainHero, CampaignOverview } from "@/components/sections"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div
        className={`min-h-screen marble-bg transition-all duration-2000 ${isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
      >
        <MainHero
          onExploreClick={() => {
            document.getElementById("campaign-overview")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }}
        />

        <CampaignOverview />
      </div>
    </>
  )
}
