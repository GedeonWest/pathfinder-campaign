import { MaterialCard } from './material-card'
import type { Material } from '@/types/materials'

interface MaterialsListProps {
  materials: Material[]
  onMaterialClick: (material: Material) => void
}

export function MaterialsList({ materials, onMaterialClick }: MaterialsListProps) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material) => (
          <MaterialCard
            key={material.id}
            material={material}
            onClick={onMaterialClick}
          />
        ))}
      </div>
    </section>
  )
}
