export interface Death {
  character: string
  session: number
  cause: string
  resurrected: boolean
  resurrectionMethod: string
}

export interface BossKill {
  name: string
  killedBy: string
  session: number
  location: string
}

export interface SessionStat {
  session: number
  location: string
  outcome: string
  enemiesKilled: number
  treasuresFound: number
  deaths: number
}

export interface GeneralStats {
  deaths: Death[]
  totalEnemiesKilled: number
  undeadKilled: number
  bossesKilled: BossKill[]
  arcsCompleted: number
  totalArcs: number
  importantLocationsDiscovered: number
  artifactsFound: number
  mapsDrawn: number
  masterCritsTotal: number
  masterCritsByDash: number
  // Дополнительные поля (могут отсутствовать в таблице)
  ourCritsByMaster?: number
  masterCritsNotConfirmed?: number
  ourCritsNotConfirmed?: number
  dashConfirmedParry?: number
}

export interface StatisticsData {
  generalStats: GeneralStats
  sessionStats: SessionStat[]
}
