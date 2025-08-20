import React from 'react';
import './styles/main.scss';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-primary">
            Pathfinder Campaign
          </h1>
          <p className="mt-2 text-muted-foreground">
            Добро пожаловать в мир приключений!
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Карточка персонажей */}
          <div className="card">
            <div className="card__header">
              <h2 className="card__title">Персонажи</h2>
              <p className="card__description">
                Управляйте своими персонажами и их характеристиками
              </p>
            </div>
            <div className="card__content">
              <p>Создавайте, редактируйте и отслеживайте прогресс ваших героев.</p>
            </div>
            <div className="card__footer">
              <button className="btn btn--primary">
                Открыть персонажей
              </button>
            </div>
          </div>

          {/* Карточка приключений */}
          <div className="card">
            <div className="card__header">
              <h2 className="card__title">Приключения</h2>
              <p className="card__description">
                Ведите журнал приключений и квестов
              </p>
            </div>
            <div className="card__content">
              <p>Записывайте события, находки и достижения вашей группы.</p>
            </div>
            <div className="card__footer">
              <button className="btn btn--secondary">
                Открыть журнал
              </button>
            </div>
          </div>

          {/* Карточка статистики */}
          <div className="card">
            <div className="card__header">
              <h2 className="card__title">Статистика</h2>
              <p className="card__description">
                Анализируйте прогресс и достижения
              </p>
            </div>
            <div className="card__content">
              <p>Просматривайте детальную статистику вашей кампании.</p>
            </div>
            <div className="card__footer">
              <button className="btn btn--outline">
                Открыть статистику
              </button>
            </div>
          </div>
        </div>

        {/* Демонстрация кнопок */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Демонстрация компонентов</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn--primary btn--sm">Маленькая</button>
            <button className="btn btn--secondary btn--md">Средняя</button>
            <button className="btn btn--outline btn--lg">Большая</button>
            <button className="btn btn--ghost btn--xl">Очень большая</button>
            <button className="btn btn--destructive">Удалить</button>
            <button className="btn btn--success">Успех</button>
            <button className="btn btn--warning">Предупреждение</button>
            <button className="btn btn--gradient">Градиент</button>
          </div>
        </div>
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; 2024 Pathfinder Campaign. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
