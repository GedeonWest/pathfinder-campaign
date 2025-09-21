import { GeneralStats, SessionStat, StatisticsData } from '@/types/statistics'
import { fetchSheet, toNumber, toBoolean } from './google-sheets'

export async function fetchGeneralStats(): Promise<GeneralStats> {
  // General numbers
  const gen = await fetchSheet('Statistics_General!A1:Z')
  const first = gen[0] || ({} as any)
  // Deaths
  const deathsRows = await fetchSheet('Statistics_Deaths!A1:Z')
  const deaths = deathsRows.map((row) => ({
    character: row.character,
    session: toNumber(row.session),
    cause: row.cause,
    resurrected: toBoolean(row.resurrected),
    resurrectionMethod: row.resurrectionMethod,
  }))
  // Bosses
  const bossesRows = await fetchSheet('Statistics_Bosses!A1:Z')
  const bosses = bossesRows.map((row) => ({
    name: row.name,
    killedBy: row.killedBy,
    session: toNumber(row.session),
    location: row.location,
  }))
  return {
    deaths,
    totalEnemiesKilled: toNumber(first.totalEnemiesKilled),
    undeadKilled: toNumber(first.undeadKilled),
    bossesKilled: bosses,
    arcsCompleted: toNumber(first.arcsCompleted),
    totalArcs: toNumber(first.totalArcs),
    importantLocationsDiscovered: toNumber(first.importantLocationsDiscovered),
    artifactsFound: toNumber(first.artifactsFound),
    mapsDrawn: toNumber(first.mapsDrawn),
    masterCritsTotal: toNumber(first.masterCritsTotal),
    masterCritsByDash: toNumber(first.masterCritsByDash),
    ourCritsByMaster: toNumber((first as any).ourCritsByMaster),
    masterCritsNotConfirmed: toNumber((first as any).masterCritsNotConfirmed),
    ourCritsNotConfirmed: toNumber((first as any).ourCritsNotConfirmed),
    dashConfirmedParry: toNumber((first as any).dashConfirmedParry),
  }
}

export async function fetchSessionStats(): Promise<SessionStat[]> {
  const rows = await fetchSheet('Statistics_Session!A1:Z')
  return rows.map((row) => ({
    session: toNumber(row.session),
    location: row.location,
    outcome: row.outcome,
    enemiesKilled: toNumber(row.enemiesKilled),
    treasuresFound: toNumber(row.treasuresFound),
    deaths: toNumber(row.deaths),
  }))
}

export async function fetchStatisticsData(): Promise<StatisticsData> {
  const [generalStats, sessionStats] = await Promise.all([
    fetchGeneralStats(),
    fetchSessionStats(),
  ])
  return { generalStats, sessionStats }
}
