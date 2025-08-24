interface MaterialsCounterProps {
  count: number
}

export function MaterialsCounter({ count }: MaterialsCounterProps) {
  return (
    <div className="text-center mb-8">
      <p className="text-foreground/70">
        Найдено материалов: {count}
      </p>
    </div>
  )
}
