\
# Server (ASP.NET Core, .NET 8)

Шаблон уже содержит структуру решения и минимальные контроллеры-заглушки.
Реальную БД/EF Core подключаете в ЛР3.

## Запуск
```powershell
cd server
dotnet restore
dotnet run --project .\src\ServiceDesk.Api\ServiceDesk.Api.csproj
```

Swagger UI: http://localhost:5000/swagger
