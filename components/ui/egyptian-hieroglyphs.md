# Египетские Иероглифы - Документация

## Обзор

Компонент `EgyptianHieroglyphs` предоставляет готовые египетские иероглифы для использования в вашем приложении. Все иероглифы уже оптимизированы и готовы к использованию.

## Импорт

```tsx
import { 
  EgyptianHieroglyphs, 
  AnkhSymbol, 
  EyeSymbol, 
  LongText,
  EGYPTIAN_HIEROGLYPHS 
} from '@/components/ui'
```

## Доступные компоненты

### 1. EgyptianHieroglyphs

Основной компонент для отображения всех доступных иероглифов в виде сетки.

```tsx
<EgyptianHieroglyphs size="md" className="my-4" />
```

**Пропсы:**
- `size`: 'sm' | 'md' | 'lg' | 'xl' - размер иероглифов
- `className`: string - дополнительные CSS классы

### 2. AnkhSymbol

Компонент для отображения символа Анкх (ключ жизни).

```tsx
<AnkhSymbol size="xl" className="text-amber-700" />
```

### 3. EyeSymbol

Компонент для отображения символа Глаз Гора.

```tsx
<EyeSymbol size="lg" className="text-blue-600" />
```

### 4. LongText

Компонент для отображения длинного текста на иероглифах.

```tsx
<LongText size="md" className="text-center" />
```

## Доступные иероглифы

### Простые символы
- `ANKH` - Анкх (ключ жизни)
- `EYE` - Глаз Гора
- `SUN` - Солнце
- `MOON` - Луна
- `WATER` - Вода
- `MOUNTAIN` - Гора
- `HOUSE` - Дом
- `MAN` - Человек
- `WOMAN` - Женщина
- `CHILD` - Ребенок

### Сложные композиции
- `PHARAOH` - Фараон
- `GOD` - Бог
- `PRIEST` - Жрец
- `SCRIBE` - Писец

### Животные
- `LION` - Лев
- `BIRD` - Птица
- `FISH` - Рыба
- `SNAKE` - Змея
- `SCORPION` - Скорпион

### Предметы
- `SCROLL` - Свиток
- `STAFF` - Посох
- `CROWN` - Корона
- `SCEPTRE` - Скипетр

### Действия
- `WALK` - Ходить
- `SPEAK` - Говорить
- `SEE` - Видеть
- `HEAR` - Слышать

### Цвета и материалы
- `GOLD` - Золото
- `SILVER` - Серебро
- `BRONZE` - Бронза
- `STONE` - Камень

## Примеры использования

### Отображение всех иероглифов
```tsx
<div className="py-8">
  <h2>Египетские символы</h2>
  <EgyptianHieroglyphs size="lg" />
</div>
```

### Использование отдельных символов
```tsx
<div className="flex items-center space-x-4">
  <AnkhSymbol size="xl" className="text-amber-700" />
  <span>Ключ жизни</span>
  <EyeSymbol size="lg" className="text-blue-600" />
  <span>Глаз Гора</span>
</div>
```

### Длинный текст
```tsx
<div className="max-w-4xl mx-auto">
  <LongText size="md" className="text-center text-gray-700" />
</div>
```

### Прямой доступ к символам
```tsx
import { EGYPTIAN_HIEROGLYPHS } from '@/components/ui'

// Использование в обычном тексте
<span className="font-['Hieroglyphic']">
  {EGYPTIAN_HIEROGLYPHS.ANKH} {EGYPTIAN_HIEROGLYPHS.EYE}
</span>
```

## Размеры

Доступные размеры для всех компонентов:
- `sm`: text-lg (18px)
- `md`: text-2xl (24px) - по умолчанию
- `lg`: text-4xl (36px)
- `xl`: text-6xl (60px)

## Стилизация

Все компоненты используют шрифт `Hieroglyphic` и базовые цвета amber. Вы можете переопределить стили через `className`:

```tsx
<AnkhSymbol 
  size="xl" 
  className="text-red-600 hover:text-red-800 transition-colors" 
/>
```

## Примечания

- Все иероглифы оптимизированы для веб-использования
- Компоненты поддерживают адаптивность
- Используется mobile-first подход
- Следует принципам БЭМ для CSS классов
