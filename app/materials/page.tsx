"use client"

import { useState, useEffect } from "react"
import {
  MaterialsHeader,
  MaterialsStats,
  MaterialsFilters,
  MaterialsList,
  MaterialModal,
  MaterialsCounter
} from "@/components/materials"
import { getMaterials, filterMaterials, getUniqueLocations, getUniqueSessions, getCollectionStats, sortMaterials } from "@/lib/materials"
import type { Material, MaterialFilter } from "@/types/materials"

export default function MaterialsPage() {
  const [materials, setMaterials] = useState<Material[]>([])
  const [filteredMaterials, setFilteredMaterials] = useState<Material[]>([])
  const [filters, setFilters] = useState<MaterialFilter>({
    searchQuery: '',
    selectedType: 'all',
    selectedLocation: 'all',
    selectedSession: 'all',
    showCollectedOnly: false,
    sortBy: 'name'
  })
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null)
  const [locations, setLocations] = useState<string[]>([])
  const [sessions, setSessions] = useState<string[]>([])
  const [stats, setStats] = useState({ total: 0, collected: 0, uncollected: 0 })

  useEffect(() => {
    const allMaterials = getMaterials()
    setMaterials(allMaterials)
    setFilteredMaterials(allMaterials)
    setLocations(getUniqueLocations(allMaterials))
    setSessions(getUniqueSessions(allMaterials))
    setStats(getCollectionStats(allMaterials))
  }, [])

  useEffect(() => {
    let filtered = filterMaterials(materials, filters)
    if (filters.sortBy) {
      filtered = sortMaterials(filtered, filters.sortBy)
    }
    setFilteredMaterials(filtered)
  }, [materials, filters])

  const handleFilterChange = (key: keyof MaterialFilter, value: string | boolean) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      searchQuery: '',
      selectedType: 'all',
      selectedLocation: 'all',
      selectedSession: 'all',
      showCollectedOnly: false,
      sortBy: 'name'
    })
  }

  const handleMaterialClick = (material: Material) => {
    setSelectedMaterial(material)
  }

  const handleModalClose = () => {
    setSelectedMaterial(null)
  }

  return (
    <div className="min-h-screen marble-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MaterialsHeader />

        <MaterialsStats materials={materials} stats={stats} />

        <MaterialsFilters
          filters={filters}
          locations={locations}
          sessions={sessions}
          onFilterChange={handleFilterChange}
          onClearFilters={clearFilters}
        />

        <MaterialsCounter count={filteredMaterials.length} />

        <MaterialsList
          materials={filteredMaterials}
          onMaterialClick={handleMaterialClick}
        />

        <MaterialModal
          material={selectedMaterial}
          isOpen={!!selectedMaterial}
          onClose={handleModalClose}
        />
      </div>
    </div>
  )
}
