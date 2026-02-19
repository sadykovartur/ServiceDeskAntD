# Setup (Windows) — .NET 8

## Что ставим
1) .NET SDK 8.0.x (LTS)
2) Node.js 20+
3) PostgreSQL 16+ или Docker Desktop
4) Cursor (или VS Code) + C# Dev Kit / либо Visual Studio 2022 (v17.8+)

## Проверка
```powershell
dotnet --version
node -v
```

## Частые проблемы
- `The required library hostfxr.dll could not be found` → установите .NET SDK.
- `SDK not found` → проверьте `global.json` в корне репо.
- Порт занят: Vite (5173), API (5000/5001) — поменяйте при необходимости.
