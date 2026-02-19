\
# Service Desk — учебный проект (Cursor, Windows, .NET 8)

Шаблон репозитория для курса из 8 лабораторных работ (по 3 часа).

## Требования (Windows)
- **.NET SDK 8.0.x (LTS)**  
- **Visual Studio 2022 (v17.8+)** или Cursor (VS Code-based) + C# Dev Kit
- Node.js 20+ (Vite/React)
- PostgreSQL 16+ (или Docker)

Проверка:
```powershell
dotnet --version
node -v
```

## Быстрый старт (client)
```powershell
cd client
npm i
npm run dev
```

- Линт: `npm run lint`
- Формат: `npm run format`

## Быстрый старт (server)
```powershell
cd server
dotnet restore
dotnet build
dotnet run --project .\src\ServiceDesk.Api\ServiceDesk.Api.csproj
```

Swagger UI: `http://localhost:5000/swagger`

## Лабораторные
Требования: `docs/labs/`


## PostgreSQL через Docker (рекомендуется для ЛР3+)
```powershell
docker compose up -d db
```

Параметры по умолчанию (см. `docker-compose.yml`):
- host: `localhost`
- port: `5432`
- db: `servicedesk`
- user/password: `postgres/postgres`

> В `server/src/ServiceDesk.Api/appsettings.Development.json` уже добавлена строка подключения `Default`.
