# React 19 + Vite + TypeScript + Tailwind CSS

Современное React приложение с использованием последних технологий.

## 🚀 Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm start
# или
npm run dev
```

### Сборка для продакшена

```bash
npm run build
```

### Предварительный просмотр сборки

```bash
npm run serve
# или
npm run preview
```

### Проверка кода

```bash
npm run lint
```

## 📚 Storybook

Для запуска Storybook:

```bash
npm run storybook
```

Интерфейс будет доступен на http://localhost:6006

Добавляйте свои истории в папку `src/stories/` или рядом с компонентами.

## 🛠 Технологии

-   **React 19** - последняя версия React с новыми хуками
-   **Vite** - быстрый сборщик
-   **TypeScript** - типизированный JavaScript
-   **Tailwind CSS** - Utility-First CSS фреймворк
-   **ESLint** - линтер для проверки кода
-   **Storybook** - инструмент для разработки и документирования компонентов

## 📁 Структура проекта

```
src/
├── components/       # React компоненты
│   ├── Button.tsx   # Компонент кнопки
│   └── Button.stories.tsx # Storybook истории
├── App.tsx          # Главный компонент
├── index.css        # Глобальные стили
└── main.tsx         # Точка входа
```

## 🎨 Стилизация

Проект использует **Utility-First подход** с Tailwind CSS:

-   Все стили находятся прямо в JSX компонентах
-   Используются Tailwind классы для быстрой разработки
-   Поддержка кастомных цветов и анимаций
-   Mobile-first подход

## 🔧 Компоненты

### Button

Универсальный компонент кнопки с поддержкой различных вариантов, размеров и состояний.

#### Варианты (variant)

-   `primary` - основная кнопка (по умолчанию)
-   `secondary` - вторичная кнопка
-   `outline` - контурная кнопка
-   `ghost` - прозрачная кнопка
-   `danger` - кнопка опасности
-   `success` - кнопка успеха

#### Размеры (size)

-   `sm` - маленький
-   `md` - средний (по умолчанию)
-   `lg` - большой

#### Состояния

-   `disabled` - отключенное состояние
-   `loading` - состояние загрузки с анимацией
-   `fullWidth` - полная ширина контейнера

#### Пример использования

```tsx
import Button from './components/Button';

// Основная кнопка
<Button onClick={handleClick}>Нажми меня</Button>

// Кнопка с вариантом и размером
<Button variant="success" size="lg" onClick={handleClick}>
    Сохранить
</Button>

// Кнопка с состоянием загрузки
<Button loading>Загрузка...</Button>

// Кнопка с иконкой
<Button variant="outline">
    <svg className="w-4 h-4 mr-2">...</svg>
    Загрузить файл
</Button>
```

## 🔧 Новые возможности React 19

-   **Хук `use()`** - для работы с промисами
-   **Хук `useActionState()`** - для управления состоянием форм
-   **Улучшенный `useTransition()`** - более плавные переходы
-   **Лучшая производительность** и типизация

## 🌐 Доступные команды

| Команда             | Описание                              |
| ------------------- | ------------------------------------- |
| `npm start`         | Запуск сервера разработки             |
| `npm run dev`       | Альтернативная команда для разработки |
| `npm run build`     | Сборка для продакшена                 |
| `npm run serve`     | Предварительный просмотр сборки       |
| `npm run lint`      | Проверка кода ESLint                  |
| `npm run storybook` | Запуск Storybook                      |

## 📝 Примеры использования

### Utility-First стилизация

```tsx
<div className="bg-primary-500 text-white p-4 rounded-lg hover:bg-primary-600 transition-colors">
    Кнопка с Tailwind классами
</div>
```

### Адаптивный дизайн

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="bg-white p-6 rounded-lg shadow-lg">Адаптивная карточка</div>
</div>
```

### Интерактивные эффекты

```tsx
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
    Интерактивная кнопка
</button>
```

## 🎯 Особенности

-   ✅ React 19 с новыми возможностями
-   ✅ TypeScript для типизации
-   ✅ Tailwind CSS для стилизации
-   ✅ Utility-First подход
-   ✅ ESLint для качества кода
-   ✅ Vite для быстрой разработки
-   ✅ Mobile-first дизайн
-   ✅ Кастомные цвета и анимации
-   ✅ Чистая структура проекта
-   ✅ Storybook для документирования компонентов
-   ✅ Готовый компонент Button с полной функциональностью

## 🚀 Готов к разработке

Проект полностью настроен и готов к разработке. Начните создавать свои компоненты, используя Utility-First подход с Tailwind CSS!

### Следующие шаги

1. Запустите Storybook для просмотра компонента Button
2. Создавайте новые компоненты по аналогии с Button
3. Добавляйте Storybook истории для каждого компонента
4. Используйте Utility-First подход для стилизации
