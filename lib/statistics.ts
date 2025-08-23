import statisticsData from '@/data/statistics.json'
import { GeneralStats, SessionStat, StatisticsData } from '@/types/statistics'

export function getGeneralStats(): GeneralStats {
  return statisticsData.generalStats
}

export function getSessionStats(): SessionStat[] {
  return statisticsData.sessionStats
}

export function getStatisticsData(): StatisticsData {
  return statisticsData
}
