"use client"

import { CampaignStats } from "./campaign-stats"
import { CampaignMap } from "./campaign-map"
import { CampaignDescription } from "./campaign-description"
import { LatestChronicle } from "./latest-chronicle"
import { CampaignHeroes } from "./campaign-heroes"

export function CampaignOverview() {
  return (
    <section id="campaign-overview" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Древние земли</h2>
          <p className="text-base md:text-lg text-foreground/90 max-w-3xl mx-auto font-sans leading-relaxed">
            Исследуйте мистическое царство Осириона, где древние пирамиды скрывают забытые тайны, а лорды мумий
            охраняют сокровища, превосходящие воображение.
          </p>
        </div>

        <CampaignStats />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <CampaignMap />
          <CampaignDescription />
        </div>

        <LatestChronicle />
        <CampaignHeroes />
      </div>
    </section>
  )
}
